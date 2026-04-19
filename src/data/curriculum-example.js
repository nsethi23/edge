/**
 * curriculum-example.js — schema reference
 *
 * Copy to curriculum.js and replace with your own content.
 * curriculum.js is gitignored.
 */

export const CURRICULUM = [
  {
    id: "ch0",
    title: "Chapter Title",
    description: "Short description shown on the chapter card.",
    lessons: [
      {
        id: "ch0-l1",
        chapter: "Chapter 1 · Lesson 1",
        title: "Lesson Title",
        concept: "Single-sentence hook shown on the lesson card.",
        content: [
          {
            heading: "Section Heading",
            // {{TERM}} tokens are highlighted and linked to the glossary
            body: "Body text. Reference glossary terms with {{TERM}} syntax. Supports **bold**.",

            // optional — renders a table below the body
            table: [
              { pos: "COL1", full: "Column Two", note: "Column Three" },
            ],

            // optional — renders an interactive 13×13 hand grid
            // notation: AA-66, AKs-ATs, ATo+, 66+, JTs, etc.
            rangeChart: {
              title: "Chart title",
              ranges: [
                // first match wins per cell
                { hands: "AA,KK,QQ,AKs", color: '#C8A84B', label: "Value" },
                { hands: "A5s,A4s,A3s",  color: '#E07840', label: "Bluff" },
              ],
            },
          },
          {
            heading: "Second Section",
            body: "Additional content section.",
          },
        ],
        glossaryTerms: ["TERM1", "TERM2"],
        quiz: [
          {
            question: "Question?",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "Shown after a correct answer.",
          },
        ],
      },
    ],
  },
]
