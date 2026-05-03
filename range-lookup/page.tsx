"use client";

import { useState, useMemo } from "react";
import {
  Position, Situation, ActionResult,
  getRFIResult, getFORResult, getF3BResult,
  getMatrixCellColor, CellColor,
  VALID_FOR_MATCHUPS, VALID_F3B_MATCHUPS,
  RANKS, getCombo, getExplanation,
} from "./rangeData";

const POSITIONS: Position[] = ["UTG", "HJ", "CO", "BTN", "SB", "BB"];

const CELL_CLASSES: Record<CellColor, string> = {
  raise:       "bg-[#16a34a] text-white",
  call:        "bg-[#2563eb] text-white",
  "mixed-raise": "bg-[#86efac] text-[#14532d]",
  "mixed-call":  "bg-[#93c5fd] text-[#1e3a8a]",
  fold:        "bg-[#f3f4f6] text-[#6b7280]",
};

const ACTION_COLORS: Record<string, string> = {
  Open:  "bg-[#16a34a] text-white",
  "3-Bet": "bg-[#16a34a] text-white",
  "4-Bet": "bg-[#16a34a] text-white",
  Call:  "bg-[#2563eb] text-white",
  Fold:  "bg-[#f3f4f6] text-[#6b7280]",
  "N/A": "bg-[#f3f4f6] text-[#6b7280]",
};

function pct(f: number) {
  return `${Math.round(f * 100)}%`;
}

export default function RangeLookupPage() {
  const [situation, setSituation] = useState<Situation>("RFI");
  const [heroPos, setHeroPos] = useState<Position>("BTN");
  const [villainPos, setVillainPos] = useState<Position>("CO");
  const [selectedCombo, setSelectedCombo] = useState<string>("AKs");

  // Available villain positions for current situation/hero
  const availableVillains = useMemo<Position[]>(() => {
    if (situation === "FOR") return (VALID_FOR_MATCHUPS[heroPos] ?? []) as Position[];
    if (situation === "F3B") return (VALID_F3B_MATCHUPS[heroPos] ?? []) as Position[];
    return [];
  }, [situation, heroPos]);

  // Sanitize villainPos when hero/situation changes
  const effectiveVillain: Position | null =
    (situation !== "RFI" && availableVillains.includes(villainPos))
      ? villainPos
      : availableVillains[0] ?? null;

  const results: ActionResult = useMemo(() => {
    if (situation === "RFI") return getRFIResult(heroPos, selectedCombo);
    if (situation === "FOR" && effectiveVillain) return getFORResult(heroPos, effectiveVillain, selectedCombo);
    if (situation === "F3B" && effectiveVillain) return getF3BResult(heroPos, effectiveVillain, selectedCombo);
    return [];
  }, [situation, heroPos, effectiveVillain, selectedCombo]);

  const explanation = useMemo(() => getExplanation(selectedCombo, results), [selectedCombo, results]);

  const isPureFold = results.length === 1 && results[0].action === "Fold";
  const isNA = results.length === 1 && results[0].action === "N/A";
  const topAction = results[0];

  function handleHeroPosChange(pos: Position) {
    setHeroPos(pos);
    // reset villain if no longer valid
    const newVillains =
      situation === "FOR" ? (VALID_FOR_MATCHUPS[pos] ?? []) as Position[]
      : situation === "F3B" ? (VALID_F3B_MATCHUPS[pos] ?? []) as Position[]
      : [];
    if (newVillains.length > 0 && !newVillains.includes(villainPos)) {
      setVillainPos(newVillains[0]);
    }
  }

  function handleSituationChange(s: Situation) {
    setSituation(s);
    const newVillains =
      s === "FOR" ? (VALID_FOR_MATCHUPS[heroPos] ?? []) as Position[]
      : s === "F3B" ? (VALID_F3B_MATCHUPS[heroPos] ?? []) as Position[]
      : [];
    if (newVillains.length > 0 && !newVillains.includes(villainPos)) {
      setVillainPos(newVillains[0]);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* ── Header ── */}
      <div className="border-b border-[#e5e5e5] pb-6 mb-10">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">Preflop Range Lookup</h1>
        <p className="text-sm text-[#6b7280]">GTO 6-max 100BB cash game · Static ranges, no API</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">

        {/* ── Left: Controls ── */}
        <div className="flex flex-col gap-6">

          {/* Situation tabs */}
          <div>
            <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest block mb-2">
              Situation
            </label>
            <div className="flex border border-[#e5e5e5] rounded-lg overflow-hidden">
              {(["RFI", "FOR", "F3B"] as Situation[]).map((s) => (
                <button
                  key={s}
                  onClick={() => handleSituationChange(s)}
                  className={`flex-1 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    situation === s
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-white text-[#6b7280] hover:bg-[#f3f4f6]"
                  }`}
                >
                  {s === "RFI" ? "RFI" : s === "FOR" ? "Facing Open" : "Facing 3-Bet"}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#6b7280] mt-1.5">
              {situation === "RFI" && "No one has opened yet — what do you raise?"}
              {situation === "FOR" && "Someone opened before you — fold, call, or 3-bet?"}
              {situation === "F3B" && "You raised and faced a 3-bet — fold, call, or 4-bet?"}
            </p>
            {(situation === "FOR" || situation === "F3B") && (
              <p className="text-xs text-[#f97316] mt-1 font-mono">
                Not fully accurate, yet.
              </p>
            )}
          </div>

          {/* Hero position */}
          <div>
            <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest block mb-2">
              Your Position
            </label>
            <div className="grid grid-cols-6 gap-1">
              {POSITIONS.map((pos) => {
                const disabled =
                  (situation === "FOR" && !VALID_FOR_MATCHUPS[pos]) ||
                  (situation === "F3B" && !VALID_F3B_MATCHUPS[pos]) ||
                  (situation === "RFI" && pos === "BB");
                return (
                  <button
                    key={pos}
                    onClick={() => !disabled && handleHeroPosChange(pos)}
                    disabled={disabled}
                    className={`py-2 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                      heroPos === pos
                        ? "bg-[#f97316] text-white border-[#f97316]"
                        : disabled
                        ? "bg-[#f9f9f9] text-[#d1d5db] border-[#e5e5e5] cursor-not-allowed"
                        : "bg-white text-[#6b7280] border-[#e5e5e5] hover:border-[#f97316] hover:text-[#f97316]"
                    }`}
                  >
                    {pos}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Villain position */}
          {situation !== "RFI" && (
            <div>
              <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest block mb-2">
                {situation === "FOR" ? "Raiser's Position" : "3-Better's Position"}
              </label>
              {availableVillains.length === 0 ? (
                <p className="text-xs text-[#6b7280] italic">No valid matchups for this position.</p>
              ) : (
                <div className="grid grid-cols-6 gap-1">
                  {POSITIONS.map((pos) => {
                    const available = availableVillains.includes(pos);
                    return (
                      <button
                        key={pos}
                        onClick={() => available && setVillainPos(pos)}
                        disabled={!available}
                        className={`py-2 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                          effectiveVillain === pos
                            ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                            : !available
                            ? "bg-[#f9f9f9] text-[#d1d5db] border-[#e5e5e5] cursor-not-allowed"
                            : "bg-white text-[#6b7280] border-[#e5e5e5] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                        }`}
                      >
                        {pos}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Hand selector */}
          <HandSelector selected={selectedCombo} onSelect={setSelectedCombo} />

          {/* Legend */}
          <div className="border border-[#e5e5e5] rounded-lg p-4">
            <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">Legend</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {[
                { color: "bg-[#16a34a]", label: "Raise / Open" },
                { color: "bg-[#2563eb]", label: "Call" },
                { color: "bg-[#86efac]", label: "Mixed raise" },
                { color: "bg-[#93c5fd]", label: "Mixed call" },
                { color: "bg-[#f3f4f6] border border-[#e5e5e5]", label: "Fold" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-sm shrink-0 ${color}`} />
                  <span className="text-xs text-[#6b7280]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Matrix + Output ── */}
        <div className="flex flex-col gap-6">

          {/* 13×13 matrix */}
          <div className="border border-[#e5e5e5] rounded-lg p-4 overflow-x-auto">
            <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-3">
              Range Matrix — click to select
            </p>
            <div className="min-w-[480px]">
              {/* Header row */}
              <div className="grid grid-cols-[20px_repeat(13,1fr)] gap-px mb-px">
                <div />
                {RANKS.map((r) => (
                  <div key={r} className="text-center text-[9px] font-semibold text-[#6b7280] pb-0.5">{r}</div>
                ))}
              </div>
              {/* Matrix rows */}
              {RANKS.map((rowRank, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-[20px_repeat(13,1fr)] gap-px mb-px">
                  <div className="flex items-center justify-center text-[9px] font-semibold text-[#6b7280]">{rowRank}</div>
                  {RANKS.map((_, colIdx) => {
                    const combo = getCombo(rowIdx, colIdx);
                    const cellColor = getMatrixCellColor(situation, heroPos, effectiveVillain, combo);
                    const isSelected = combo === selectedCombo;
                    return (
                      <button
                        key={colIdx}
                        onClick={() => setSelectedCombo(combo)}
                        title={combo}
                        className={`aspect-square text-[8px] font-semibold rounded-sm transition-all cursor-pointer
                          ${CELL_CLASSES[cellColor]}
                          ${isSelected ? "ring-2 ring-[#f97316] ring-offset-0 z-10 relative scale-110" : "hover:opacity-80"}
                        `}
                      >
                        {combo.endsWith('s') || combo.endsWith('o') ? combo.slice(0, 2) : combo}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Output panel */}
          <div className="border border-[#e5e5e5] rounded-lg p-5">
            {/* Hand label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold font-mono text-[#1a1a1a]">{selectedCombo}</span>
              <span className="text-sm text-[#6b7280]">
                {situation === "RFI" && `${heroPos} RFI`}
                {situation === "FOR" && effectiveVillain && `${heroPos} vs ${effectiveVillain} open`}
                {situation === "F3B" && effectiveVillain && `${heroPos} vs ${effectiveVillain} 3-bet`}
              </span>
            </div>

            {isNA ? (
              <p className="text-sm text-[#6b7280] italic">BB has no RFI range.</p>
            ) : isPureFold ? (
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#e5e7eb]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span className="text-sm font-semibold text-[#6b7280]">Fold — not in range</span>
              </div>
            ) : (
              <>
                {/* Action frequency bars */}
                <div className="flex gap-3 mb-4">
                  {results.map((r) => (
                    <div key={r.action} className="flex flex-col items-center gap-1 flex-1">
                      <div className="w-full bg-[#f3f4f6] rounded h-2 overflow-hidden">
                        <div
                          className={`h-full rounded transition-all ${
                            r.action === "Fold" ? "bg-[#d1d5db]"
                            : r.action === "Call" ? "bg-[#2563eb]"
                            : "bg-[#16a34a]"
                          }`}
                          style={{ width: pct(r.frequency) }}
                        />
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded font-semibold ${ACTION_COLORS[r.action] ?? "bg-[#f3f4f6] text-[#6b7280]"}`}>
                        {r.action}
                      </span>
                      <span className="text-sm font-bold text-[#1a1a1a]">{pct(r.frequency)}</span>
                    </div>
                  ))}
                </div>

                {/* Summary line */}
                <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded mb-3 ${
                  topAction && topAction.frequency >= 0.85
                    ? topAction.action === "Call"
                      ? "bg-[#dbeafe] text-[#1d4ed8]"
                      : "bg-[#dcfce7] text-[#15803d]"
                    : "bg-[#fef9c3] text-[#a16207]"
                }`}>
                  {topAction && topAction.frequency >= 0.85 ? (
                    <>
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-current/20 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M1 3l1.5 1.5L5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {`Pure ${topAction.action} — always take this action.`}
                    </>
                  ) : (
                    <>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current/50 shrink-0" />
                      Mixed strategy — use a randomizer.
                    </>
                  )}
                </div>
              </>
            )}

            {/* Explanation */}
            {!isNA && (
              <p className="text-xs text-[#6b7280] leading-relaxed border-t border-[#e5e5e5] pt-3 mt-1">
                {explanation}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hand Selector Component ─────────────────────────────────────────────────

const RANK_LABELS = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];

function HandSelector({ selected, onSelect }: { selected: string; onSelect: (c: string) => void }) {
  const [r1, setR1] = useState<string>("A");
  const [r2, setR2] = useState<string>("K");
  const [suitType, setSuitType] = useState<"s" | "o" | "p">("s");

  function buildCombo(rank1: string, rank2: string, type: "s" | "o" | "p"): string {
    if (type === "p") return `${rank1}${rank1}`;
    // Ensure higher rank first
    const idx1 = RANK_LABELS.indexOf(rank1);
    const idx2 = RANK_LABELS.indexOf(rank2);
    const high = idx1 <= idx2 ? rank1 : rank2;
    const low  = idx1 <= idx2 ? rank2 : rank1;
    return `${high}${low}${type}`;
  }

  function handleChange(newR1: string, newR2: string, newType: "s" | "o" | "p") {
    setR1(newR1); setR2(newR2); setSuitType(newType);
    const combo = buildCombo(newR1, newR2, newType);
    onSelect(combo);
  }

  return (
    <div className="border border-[#e5e5e5] rounded-lg p-4">
      <label className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest block mb-3">
        Your Hand
      </label>
      <div className="flex flex-col gap-3">
        {/* Type selector */}
        <div className="flex gap-2">
          {([["s","Suited"],["o","Offsuit"],["p","Pair"]] as [typeof suitType, string][]).map(([val, label]) => (
            <button
              key={val}
              onClick={() => handleChange(r1, r2, val)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                suitType === val
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-[#6b7280] border-[#e5e5e5] hover:border-[#1a1a1a]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Rank selectors */}
        <div className="flex gap-2">
          <div className="flex-1">
            <p className="text-[10px] text-[#6b7280] mb-1">{suitType === "p" ? "Rank" : "First card"}</p>
            <select
              value={r1}
              onChange={(e) => handleChange(e.target.value, r2, suitType)}
              className="w-full border border-[#e5e5e5] rounded px-2 py-1.5 text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#f97316] cursor-pointer"
            >
              {RANK_LABELS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          {suitType !== "p" && (
            <div className="flex-1">
              <p className="text-[10px] text-[#6b7280] mb-1">Second card</p>
              <select
                value={r2}
                onChange={(e) => handleChange(r1, e.target.value, suitType)}
                className="w-full border border-[#e5e5e5] rounded px-2 py-1.5 text-sm text-[#1a1a1a] bg-white focus:outline-none focus:border-[#f97316] cursor-pointer"
              >
                {RANK_LABELS.filter((r) => r !== r1).map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          )}
        </div>

        {/* Preview */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6b7280]">Selected:</span>
          <span className="font-mono font-bold text-[#1a1a1a]">
            {buildCombo(r1, r2, suitType)}
          </span>
          {buildCombo(r1, r2, suitType) !== selected && (
            <button
              onClick={() => onSelect(buildCombo(r1, r2, suitType))}
              className="ml-auto text-xs text-[#f97316] hover:underline cursor-pointer"
            >
              Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
