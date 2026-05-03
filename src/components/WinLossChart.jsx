import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function formatCurrency(value) {
  const prefix = value > 0 ? '+$' : value < 0 ? '-$' : '$'
  return `${prefix}${Math.abs(value).toLocaleString()}`
}

function formatDate(value) {
  if (!value) return 'Undated'
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sortEntries(entries) {
  return entries
    .map((entry, originalIndex) => ({ ...entry, originalIndex }))
    .sort((a, b) => {
      const aTime = a.date ? new Date(`${a.date}T00:00:00`).getTime() : Number.POSITIVE_INFINITY
      const bTime = b.date ? new Date(`${b.date}T00:00:00`).getTime() : Number.POSITIVE_INFINITY
      if (aTime !== bTime) return aTime - bTime
      return a.originalIndex - b.originalIndex
    })
}

export default function WinLossChart({ entries }) {
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const tooltipRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const svgNode = svgRef.current
    const tooltip = tooltipRef.current
    if (!wrap || !svgNode || !tooltip) return

    const render = () => {
      const width = Math.max(320, Math.floor(wrap.getBoundingClientRect().width))
      const height = width < 420 ? 300 : 340
      const margin = { top: 24, right: 18, bottom: 34, left: width < 420 ? 54 : 64 }
      const innerW = width - margin.left - margin.right
      const innerH = height - margin.top - margin.bottom

      const svg = d3.select(svgNode)
      svg.selectAll('*').remove()
      svg.attr('viewBox', `0 0 ${width} ${height}`).attr('role', 'img')
      tooltip.hidden = true

      const defs = svg.append('defs')

      const areaGradient = defs.append('linearGradient')
        .attr('id', 'wl-area-gradient')
        .attr('x1', '0%')
        .attr('x2', '0%')
        .attr('y1', '0%')
        .attr('y2', '100%')

      areaGradient.append('stop').attr('offset', '0%').attr('stop-color', '#c8a84b').attr('stop-opacity', 0.32)
      areaGradient.append('stop').attr('offset', '100%').attr('stop-color', '#c8a84b').attr('stop-opacity', 0.02)

      const glow = defs.append('filter')
        .attr('id', 'wl-glow')
        .attr('x', '-30%')
        .attr('y', '-30%')
        .attr('width', '160%')
        .attr('height', '160%')

      glow.append('feGaussianBlur').attr('stdDeviation', 2.5).attr('result', 'blur')
      const merge = glow.append('feMerge')
      merge.append('feMergeNode').attr('in', 'blur')
      merge.append('feMergeNode').attr('in', 'SourceGraphic')

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

      const orderedEntries = sortEntries(entries)
      const data = entries.length
        ? orderedEntries.map((entry, index) => ({
            ...entry,
            index,
            cumulative: orderedEntries.slice(0, index + 1).reduce((sum, item) => sum + item.value, 0),
          }))
        : [{ id: 'empty', index: 0, value: 0, cumulative: 0 }]

      const x = d3.scaleLinear()
        .domain([0, Math.max(1, data.length - 1)])
        .range([0, innerW])

      const extent = d3.extent(data, d => d.cumulative)
      const minY = Math.min(-1, extent[0] ?? -1)
      const maxY = Math.max(1, extent[1] ?? 1)
      const pad = Math.max(1, Math.ceil((maxY - minY) * 0.16))

      const y = d3.scaleLinear()
        .domain([minY - pad, maxY + pad])
        .nice()
        .range([innerH, 0])

      const yTicks = y.ticks(5)

      g.append('g')
        .selectAll('line')
        .data(yTicks)
        .join('line')
        .attr('x1', 0)
        .attr('x2', innerW)
        .attr('y1', d => y(d))
        .attr('y2', d => y(d))
        .attr('stroke', d => d === 0 ? 'rgba(200,168,75,0.28)' : 'rgba(255,255,255,0.06)')
        .attr('stroke-width', d => d === 0 ? 1.2 : 1)

      g.append('g')
        .selectAll('text')
        .data(yTicks)
        .join('text')
        .attr('x', -10)
        .attr('y', d => y(d))
        .attr('dy', '0.32em')
        .attr('text-anchor', 'end')
        .attr('fill', 'var(--muted)')
        .attr('font-family', 'var(--font-mono)')
        .attr('font-size', 10)
        .text(formatCurrency)

      const area = d3.area()
        .x(d => x(d.index))
        .y0(y(0))
        .y1(d => y(d.cumulative))
        .curve(d3.curveCatmullRom.alpha(0.45))

      const line = d3.line()
        .x(d => x(d.index))
        .y(d => y(d.cumulative))
        .curve(d3.curveCatmullRom.alpha(0.45))

      if (entries.length > 1) {
        const path = g.append('path')
          .datum(data)
          .attr('d', area)
          .attr('fill', 'url(#wl-area-gradient)')
          .attr('opacity', 0)

        path.transition().duration(350).ease(d3.easeCubicOut).attr('opacity', 1)

        const linePath = g.append('path')
          .datum(data)
          .attr('d', line)
          .attr('fill', 'none')
          .attr('stroke', '#c8a84b')
          .attr('stroke-width', 2.6)
          .attr('stroke-linecap', 'round')
          .attr('stroke-linejoin', 'round')
          .attr('filter', 'url(#wl-glow)')

        const length = linePath.node()?.getTotalLength() ?? 0
        linePath
          .attr('stroke-dasharray', length)
          .attr('stroke-dashoffset', length)
          .transition()
          .duration(520)
          .ease(d3.easeCubicOut)
          .attr('stroke-dashoffset', 0)
      }

      g.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', d => x(d.index))
        .attr('cy', d => y(d.cumulative))
        .attr('r', 0)
        .attr('fill', d => d.value >= 0 ? 'var(--correct)' : 'var(--wrong)')
        .attr('stroke', 'var(--bg)')
        .attr('stroke-width', 2)
        .attr('tabindex', entries.length ? 0 : -1)
        .attr('role', 'img')
        .attr('aria-label', d => `${formatDate(d.date)} session result ${formatCurrency(d.value)}, cumulative ${formatCurrency(d.cumulative)}`)
        .style('cursor', entries.length ? 'pointer' : 'default')
        .on('pointerenter focus', function (event, d) {
          if (!entries.length) return
          d3.select(this)
            .interrupt()
            .attr('r', 6)
            .attr('stroke', 'var(--cream)')

          tooltip.hidden = false
          tooltip.innerHTML = `
            <div class="mono" style="color: var(--gold); font-size: 0.56rem; margin-bottom: 4px;">${formatDate(d.date)}</div>
            <div style="color: ${d.value >= 0 ? 'var(--correct)' : 'var(--wrong)'}; font-family: var(--font-mono); font-size: 0.86rem;">${formatCurrency(d.value)}</div>
            <div style="color: var(--text); font-size: 0.76rem; margin-top: 2px;">Cumulative ${formatCurrency(d.cumulative)}</div>
            ${d.note ? `<div style="color: var(--muted); font-size: 0.72rem; margin-top: 6px; max-width: 22ch;">${escapeHtml(d.note)}</div>` : ''}
          `

          const cx = margin.left + x(d.index)
          const cy = margin.top + y(d.cumulative)
          const tooltipWidth = tooltip.offsetWidth || 168
          const left = Math.min(Math.max(8, cx - tooltipWidth / 2), width - tooltipWidth - 8)
          const top = cy > 110 ? cy - tooltip.offsetHeight - 14 : cy + 14
          tooltip.style.left = `${left}px`
          tooltip.style.top = `${Math.max(8, top)}px`
        })
        .on('pointerleave blur', function () {
          d3.select(this)
            .interrupt()
            .attr('r', entries.length ? 4 : 0)
            .attr('stroke', 'var(--bg)')
          tooltip.hidden = true
        })
        .transition()
        .delay((_, i) => 80 + i * 22)
        .duration(220)
        .ease(d3.easeCubicOut)
        .attr('r', entries.length ? 4 : 0)

      const xLabels = data.filter((_, i) => i === 0 || i === data.length - 1 || (data.length > 4 && i === Math.floor((data.length - 1) / 2)))

      g.append('g')
        .selectAll('text')
        .data(xLabels)
        .join('text')
        .attr('x', d => x(d.index))
        .attr('y', innerH + 24)
        .attr('text-anchor', (d, i) => i === 0 ? 'start' : i === xLabels.length - 1 ? 'end' : 'middle')
        .attr('fill', 'var(--muted)')
        .attr('font-family', 'var(--font-mono)')
        .attr('font-size', 10)
        .text(d => entries.length ? formatDate(d.date).replace(', ', ' ') : 'No sessions logged')
    }

    render()
    const observer = new ResizeObserver(render)
    observer.observe(wrap)

    return () => observer.disconnect()
  }, [entries])

  return (
    <div ref={wrapRef} style={{ width: '100%', position: 'relative' }}>
      <svg ref={svgRef} aria-label="Cumulative poker session profit and loss graph over time" style={{ display: 'block', width: '100%', overflow: 'visible' }} />
      <div
        ref={tooltipRef}
        hidden
        style={{
          position: 'absolute',
          zIndex: 2,
          minWidth: '148px',
          padding: '10px 12px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          pointerEvents: 'none',
          boxShadow: '0 14px 34px rgba(0, 0, 0, 0.35)',
        }}
      />
    </div>
  )
}
