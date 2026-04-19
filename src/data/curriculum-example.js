/**
 * curriculum-example.js
 *
 * This file documents the schema for the curriculum data structure.
 * The actual curriculum content lives in curriculum.js (gitignored).
 *
 * To get started: copy this file to curriculum.js and replace
 * the placeholder content with your own lessons.
 */

export const CURRICULUM = [
  {
    id: "ch0",                          // chapter id — used for routing + unlock logic
    title: "Chapter Title",
    description: "A short description shown on the home screen chapter card.",
    lessons: [
      {
        id: "ch0-l1",                   // lesson id — must be unique across all chapters
        chapter: "Chapter 1 · Lesson 1", // display label shown in the lesson header
        title: "Lesson Title",
        concept: "A single-sentence hook shown on the lesson card before the user opens it.",

        // content: array of sections rendered top-to-bottom in LessonScreen
        content: [
          {
            heading: "Section Heading",
            // body supports {{TERM}} syntax — terms are highlighted and linked to the glossary
            body: "Lesson body text. Reference glossary terms with {{TERM}} syntax, e.g. {{IP}} or {{OOP}}. Supports **bold** markdown.",

            // table (optional): rendered as a styled table below the body
            table: [
              { pos: "COL1", full: "Column Two Value", note: "Column three value or note." },
              { pos: "COL1", full: "Column Two Value", note: "Column three value or note." },
            ],

            // rangeChart (optional): renders an interactive 13×13 poker hand grid
            // Supports standard poker range notation: AA-66, AKs-ATs, ATo+, 66+, JTs, etc.
            rangeChart: {
              title: "Chart title shown above the grid",
              ranges: [
                // First-wins coloring — earlier entries take priority on overlapping cells
                { hands: "AA,KK,QQ,AKs", color: '#C8A84B', label: "Value (legend label)" },
                { hands: "A5s,A4s,A3s",  color: '#E07840', label: "Bluff (legend label)" },
              ],
            },
          },
          {
            heading: "Second Section",
            body: "Another content section. Add as many sections as needed per lesson.",
          },
        ],

        // glossaryTerms: list of term keys to highlight in this lesson (must exist in glossary.js)
        glossaryTerms: ["IP", "OOP", "GTO"],

        // quiz: shown after all content sections — user must pass 100% to unlock next lesson
        quiz: [
          {
            question: "Sample question?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0,        // zero-indexed
            explanation: "Explanation shown after the user answers correctly.",
          },
          {
            question: "Another question?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 2,
            explanation: "Explanation shown after the user answers correctly.",
          },
        ],
      },

      // Add more lessons here...
      {
        id: "ch0-l2",
        chapter: "Chapter 1 · Lesson 2",
        title: "Second Lesson Title",
        concept: "Concept line for this lesson.",
        content: [
          {
            heading: "Section Heading",
            body: "Body text for the second lesson.",
          },
        ],
        glossaryTerms: [],
        quiz: [
          {
            question: "Question?",
            options: ["A", "B", "C", "D"],
            correct: 1,
            explanation: "Explanation.",
          },
        ],
      },
    ],
  },

  // Add more chapters here...
  {
    id: "ch1",
    title: "Second Chapter Title",
    description: "Description of the second chapter.",
    lessons: [
      {
        id: "ch1-l1",
        chapter: "Chapter 2 · Lesson 1",
        title: "Lesson Title",
        concept: "Concept line.",
        content: [
          {
            heading: "Heading",
            body: "Body text.",
          },
        ],
        glossaryTerms: [],
        quiz: [
          {
            question: "Question?",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "Explanation.",
          },
        ],
      },
    ],
  },
];
