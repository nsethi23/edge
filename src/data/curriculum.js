export const CURRICULUM = [
  {
    id: "ch0",
    title: "How the Game Works",
    description: "The foundation. Positions, vocabulary, math, and the metrics every winning player tracks.",
    lessons: [
      {
        id: "ch0-l1",
        chapter: "Chapter 1 · Lesson 1",
        title: "Positions at the Table",
        concept: "Where you sit determines when you act. Acting later means more information — and more profit.",
        content: [
          {
            heading: "The Six Seats",
            body: "In a 6-max cash game, every seat has a name. The names tell you where in the order you act. Preflop, action starts left of the big blind and moves clockwise. Postflop, action starts left of the dealer button.",
            table: [
              { pos: "LJ", full: "Lojack", note: "First to act preflop. Also called UTG. Least information, tightest range." },
              { pos: "HJ", full: "Hijack", note: "Second to act preflop. Slightly more range than LJ." },
              { pos: "CO", full: "Cutoff", note: "One right of the Button. Strong position — acts second-to-last postflop." },
              { pos: "BN", full: "Button", note: "The dealer. Acts last postflop on every street. Best seat at the table." },
              { pos: "SB", full: "Small Blind", note: "Posts half a big blind. Acts first postflop — worst positional seat." },
              { pos: "BB", full: "Big Blind", note: "Posts one big blind. Last to act preflop, second postflop." },
            ]
          },
          {
            heading: "Why Position Matters",
            body: "When you act last, you see what your opponents do before making your decision. A player {{IP}} can call, raise, or fold with full information about the opponent's action. A player {{OOP}} must commit to a line blind. This is why the {{BN}} is the most profitable seat and the {{SB}} is the most costly — position is the single most important structural advantage in poker.",
          },
          {
            heading: "Early, Middle, Late",
            body: "Positions are grouped by when they act. {{EP}} (Early Position) in 6-max means just the {{LJ}} — first in, least info. {{MP}} (Middle Position) is the {{HJ}}. {{LP}} (Late Position) is the {{CO}} and {{BN}}. The {{SB}} and {{BB}} are the blinds — they have forced money in but are structurally disadvantaged postflop (SB always, BB sometimes).",
          }
        ],
        glossaryTerms: ["LJ", "HJ", "CO", "BN", "SB", "BB", "IP", "OOP", "EP", "MP", "LP"],
        quiz: [
          {
            question: "Which position acts last on every postflop street?",
            options: ["Cutoff", "Small Blind", "Button", "Big Blind"],
            correct: 2,
            explanation: "The Button always acts last postflop. This never changes regardless of how many players are in the hand."
          },
          {
            question: "In 6-max, who acts first preflop?",
            options: ["Small Blind", "Lojack", "Hijack", "Big Blind"],
            correct: 1,
            explanation: "The Lojack (LJ) is under the gun in 6-max — the first to act preflop with the least information."
          },
          {
            question: "Why is acting last (being IP) an advantage?",
            options: [
              "You see more cards",
              "You pay less rake",
              "You see your opponent's action before deciding",
              "You get to set the bet size first"
            ],
            correct: 2,
            explanation: "Position means information. When you act last, you already know whether your opponent bet, checked, or folded — which makes every decision easier."
          },
          {
            question: "Which seat is structurally the most costly to play from?",
            options: ["Button", "Cutoff", "Big Blind", "Small Blind"],
            correct: 3,
            explanation: "The Small Blind posts a forced bet AND acts first postflop on every street. It combines a financial penalty with permanent positional disadvantage."
          }
        ]
      },

      {
        id: "ch0-l2",
        chapter: "Chapter 1 · Lesson 2",
        title: "The Vocabulary of Poker",
        concept: "Pros speak a compressed language. Learn it and you'll think faster at the table.",
        content: [
          {
            heading: "Players and Hands",
            body: "When analyzing a hand, the player whose perspective we take is called the {{Hero}}. All opponents are {{Villain}}s. A {{PP}} (pocket pair) is when both hole cards share the same rank — AA, 77, 22. The {{Nuts}} means the best possible hand given the board. {{Air}} means a hand with no real value — no made hand, no draw. A hand with {{SDV}} (showdown value) can win if checked to showdown but isn't strong enough to bet three streets.",
          },
          {
            heading: "Positional Shorthand",
            body: "You'll constantly see hands described as 'BN vs BB' or 'CO opens, HJ calls'. These refer to the seat abbreviations. Being {{IP}} means acting after your opponent. Being {{OOP}} means acting first. In a heads-up pot, if the {{BN}} raises and the {{BB}} calls, BN is {{IP}} and BB is {{OOP}} for the entire hand.",
          },
          {
            heading: "Street Terms",
            body: "A full hand has four betting rounds: {{Preflop}} (before community cards), {{Flop}} (first three community cards), {{Turn}} (fourth card), and {{River}} (fifth and final card). The player with the best five-card hand at {{River}} showdown wins the pot.",
          },
          {
            heading: "Hand Types to Know",
            body: "A {{TPTK}} (Top Pair Top Kicker) means you paired the highest board card with the best possible kicker — e.g., AK on an A72 board. An {{OESD}} has 8 outs to a straight. A {{FD}} has 9 outs to a flush. A {{GS}} (gutshot) has only 4 outs. A {{BDFD}} is a backdoor flush draw — needs both turn and river to be the same suit as two of your hole cards.",
          }
        ],
        glossaryTerms: ["Hero", "Villain", "PP", "Nuts", "Air", "SDV", "IP", "OOP", "Preflop", "Flop", "Turn", "River", "TPTK", "OESD", "FD", "GS", "BDFD"],
        quiz: [
          {
            question: "What does 'the nuts' mean?",
            options: [
              "A very strong bluff",
              "The absolute best possible hand on the current board",
              "Having aces in your hand",
              "A made hand that beats most draws"
            ],
            correct: 1,
            explanation: "The nuts is the best possible hand given the community cards. It cannot be beaten — only tied by an identical holding in rare cases."
          },
          {
            question: "You hold J9. The board is QT8. What draw do you have?",
            options: ["Gutshot straight draw", "Backdoor flush draw", "Open-ended straight draw", "Flush draw"],
            correct: 2,
            explanation: "J9 on QT8 has an open-ended straight draw (OESD). A K makes the straight on the top end, a 7 makes it on the bottom — 8 outs total."
          },
          {
            question: "What is 'showdown value' (SDV)?",
            options: [
              "A hand strong enough to bet the river",
              "A hand with no chance of winning",
              "A hand that can win if checked to showdown but isn't strong enough to triple barrel",
              "A premium pocket pair"
            ],
            correct: 2,
            explanation: "SDV hands (like middle pair or a weak top pair) can win at showdown but give up too much value by betting aggressively. They prefer check-call lines."
          },
          {
            question: "In a BN vs BB hand, who is in position postflop?",
            options: ["Big Blind", "Button", "Neither — they swap each street", "Whoever bets first"],
            correct: 1,
            explanation: "Position is fixed for the entire hand. The Button always acts last postflop, so BN is always IP and BB is always OOP in this matchup."
          }
        ]
      },

      {
        id: "ch0-l3",
        chapter: "Chapter 1 · Lesson 3",
        title: "Actions and Betting Lines",
        concept: "Every poker action has a name and a meaning. Your sequence of actions is your 'line' — and lines reveal your range.",
        content: [
          {
            heading: "The Core Actions",
            body: "At any point in a hand, you can take one of these actions:\n\n• **Fold** — discard your hand and give up your stake in the pot\n• **Call (c)** — match the current bet to stay in\n• **Raise (r)** — increase the bet, forcing others to act again\n• **Check (x)** — pass the action when no bet has been made\n• **Limp (l)** — call the big blind preflop (generally a weak play in 6-max)",
          },
          {
            heading: "Bet Sizing Language",
            body: "Bet sizes are expressed as a fraction of the pot or in big blinds. A '1/3-pot bet' means betting one-third of the current pot. A '2.5bb open' means raising to 2.5 big blinds preflop. {{RFI}} (Raise First In) means you are the first player to voluntarily enter the pot by raising — the standard preflop line in 6-max. A {{3bet}} is a re-raise after an open. A {{4bet}} is a re-raise after a 3-bet.",
          },
          {
            heading: "Action Lines",
            body: "A 'line' is the sequence of actions you take across a hand. Common lines are written in shorthand:\n\n• **x/f** — check then fold to a bet\n• **x/c** — check then call a bet\n• **x/r** — check then raise (the check-raise)\n• **b/b** — bet the flop, bet the turn (double barrel)\n• **b/b/b** — bet all three streets (triple barrel)\n\nYour line tells the story of your range. Competent opponents read your line and deduce what hands you can have.",
          },
          {
            heading: "Special Bets",
            body: "A {{Cbet}} (continuation bet) is a flop bet by the preflop raiser. It is the most common postflop line in poker. A {{DK}} (donk bet) is when the player {{OOP}} bets into the preflop raiser — denying them the c-bet option. A {{Sqz}} (squeeze) is a 3-bet after an open and at least one call, exploiting the cold-caller's capped range. A {{CC}} (cold call) is calling a raise without having previously put money in.",
          }
        ],
        glossaryTerms: ["RFI", "3bet", "4bet", "Cbet", "DK", "Sqz", "CC", "VPIP", "PFR"],
        quiz: [
          {
            question: "What is a continuation bet (c-bet)?",
            options: [
              "Betting when you're out of position",
              "A bet made by the preflop raiser on the flop",
              "Any bet made after checking the flop",
              "Betting when you have top pair or better"
            ],
            correct: 1,
            explanation: "A c-bet is a flop bet made by the player who raised preflop. It 'continues' the story of aggression. It's the most common postflop line and doesn't require a strong hand."
          },
          {
            question: "You open to 2.5bb, the player behind calls, and the big blind re-raises. What has the big blind done?",
            options: ["Cold called", "4-bet", "Squeezed", "Donk bet"],
            correct: 2,
            explanation: "A squeeze is a 3-bet after there's been a raise and at least one call. The caller's calling range is capped (no premiums), which makes the squeeze more effective."
          },
          {
            question: "What line is x/r?",
            options: ["Check then raise", "Call then raise", "Check then fold", "Check then call"],
            correct: 0,
            explanation: "x/r means check-raise — you pass your turn to act (x), then raise after your opponent bets (r). It's a strong deceptive line that traps opponents who c-bet too much."
          },
          {
            question: "What does RFI stand for?",
            options: [
              "Re-raise First In",
              "Raise From IP",
              "Raise First In",
              "Regular Fold or Increase"
            ],
            correct: 2,
            explanation: "RFI means Raise First In — the first player to voluntarily enter the pot does so by raising. In 6-max cash games, limping is generally exploitable, so RFI is the standard preflop action."
          }
        ]
      },

      {
        id: "ch0-l4",
        chapter: "Chapter 1 · Lesson 4",
        title: "Hand Ranges and the Grid",
        concept: "Stop thinking about your hand. Start thinking about ranges. That's the switch from amateur to professional.",
        content: [
          {
            heading: "What Is a Range?",
            body: "A {{Range}} is the full set of hands a player could hold in a given situation. When UTG raises, they don't have one hand — they have a range of hands consistent with that action. The best players think about ranges constantly: their own range, their opponent's range, and how those ranges interact on each board.",
          },
          {
            heading: "The 13×13 Hand Grid",
            body: "All 169 distinct preflop hands can be displayed in a 13×13 grid. Pocket pairs run diagonally from AA (top-left) to 22 (bottom-right). Suited hands (s) appear in the upper-right triangle. Offsuit hands (o) appear in the lower-left triangle. There are 78 suited combinations × 4 suits = 312 suited combos. There are 78 offsuit combinations × 12 suit combinations = 936 offsuit combos. Plus 13 pocket pairs × 6 combos each = 78 pair combos. Total: 1,326 unique poker hand combinations.",
          },
          {
            heading: "Range Notation",
            body: "When you see 'UTG opens 15%', that means the player raises the top 15% of all hands by equity. A tight UTG range looks like: AA-TT, AKs-ATs, AKo-AJo, KQs-KTs, QJs-QTs, JTs. A range written as '99+' means pocket nines and any higher pair. 'ATs+' means ace-ten suited and any ace with a higher card (ATs, AJs, AQs, AKs).",
          },
          {
            heading: "Polarized vs Merged Ranges",
            body: "A {{Polarized}} range has very strong hands and bluffs, with little in between — think river 3-bets. A {{Merged}} range is full of medium-strength hands — think a calling range on a dry board. Understanding which type of range your opponent is likely holding changes everything about how you play against them.",
          }
        ],
        glossaryTerms: ["Range", "Polarized", "Merged", "Combos", "GTO"],
        quiz: [
          {
            question: "How many total unique poker hand combinations are there in a 52-card deck?",
            options: ["169", "1,326", "52", "2,652"],
            correct: 1,
            explanation: "There are 1,326 distinct two-card hand combinations ($\\binom{52}{2}$). The 169 number refers to distinct hand types by rank — not accounting for suits."
          },
          {
            question: "How many suited combos does AKs have?",
            options: ["16", "12", "6", "4"],
            correct: 3,
            explanation: "Suited hands come in 4 combos — one for each suit (AhKh, AdKd, AcKc, AsKs). Offsuit hands like AKo have 12 combos, and pocket pairs have 6 combos."
          },
          {
            question: "What does '99+' mean in range notation?",
            options: [
              "Any hand with a 9 in it",
              "Pocket nines and all pocket pairs higher than nines",
              "Any hand stronger than 99% of all hands",
              "Nine-nine offsuit only"
            ],
            correct: 1,
            explanation: "'99+' means pocket nines and better: 99, TT, JJ, QQ, KK, AA. The '+' means 'this hand and all higher pocket pairs.'"
          },
          {
            question: "What is a polarized range?",
            options: [
              "A range containing mostly medium-strength hands",
              "A range of only premium pairs",
              "A range with strong hands and bluffs but few medium-strength holdings",
              "A range that changes based on position"
            ],
            correct: 2,
            explanation: "A polarized range contains the nutted hands (value) and air (bluffs) but skips the medium hands. It's common in river bets where medium hands prefer check-calling."
          }
        ]
      },

      {
        id: "ch0-l5",
        chapter: "Chapter 1 · Lesson 5",
        title: "Combinatorics",
        concept: "Counting combos tells you how likely an opponent has a specific hand. It's the math that separates guessing from knowing.",
        content: [
          {
            heading: "Why Combos Matter",
            body: "When you put an opponent on 'a set or a bluff', combos help you figure out how often each is true. If there are 3 combo of sets and 12 combos of bluffs in their range, they're bluffing 4× more often than they're value-betting — that's a fold. Without counting combos, you're guessing. With them, you're calculating.",
          },
          {
            heading: "Counting Pocket Pairs",
            body: "There are 6 combinations of any pocket pair. Formula: $\\frac{x(x-1)}{2}$, where x = cards of that rank remaining. If no board cards, x = 4: $\\frac{4 \\times 3}{2} = 6$. If one card of that rank is on the board, x = 3: $\\frac{3 \\times 2}{2} = 3$. If you hold one, x = 3 as well. So 'does villain have AA?' — if you hold an ace and one is on the board, only 1 combo remains.",
          },
          {
            heading: "Counting Unpaired Hands",
            body: "For hands like AK, multiply available cards of each rank: 4 aces × 4 kings = 16 combos of AK. For AKs (suited), there are 4 combos. For AKo, there are 12 combos. When board cards remove some suits, you must reduce the count. E.g., on an A♠K♥9♦ board, AK has 2 aces left × 3 kings left = 6 combos of two-pair.",
          },
          {
            heading: "Combos in Practice",
            body: "Villain shoves the river on a flush-completing board. You think their range is sets, two pairs, and flush draws. Count: sets = ~6 combos, two-pair = ~8 combos, made flush = 9 combos. That's 14 value combos vs 9 bluffs. They're bluffing 39% of the time. If your pot odds give you 33%, it's a profitable call.",
          }
        ],
        glossaryTerms: ["Combos", "PP", "Blocker"],
        quiz: [
          {
            question: "How many combinations does a pocket pair have before any cards are removed?",
            options: ["4", "12", "6", "16"],
            correct: 2,
            explanation: "Any pocket pair (AA, KK, 22, etc.) has exactly 6 combinations: $\\frac{4 \\times 3}{2} = 6$. There are 4 cards of each rank and you choose 2."
          },
          {
            question: "How many combinations does AK (all suits combined) have?",
            options: ["4", "6", "12", "16"],
            correct: 3,
            explanation: "AK has 16 combos total: 4 aces × 4 kings = 16. This includes 4 suited combos and 12 offsuit combos."
          },
          {
            question: "You hold an A♠. The board has an A♥. How many combos of AA can villain have?",
            options: ["6", "3", "1", "0"],
            correct: 2,
            explanation: "With 2 aces removed (one in your hand, one on board), only 2 aces remain. Combos = $\\frac{2 \\times 1}{2} = 1$. Villain has almost no chance of holding AA."
          },
          {
            question: "Why do blockers matter in poker?",
            options: [
              "They prevent opponents from seeing your cards",
              "Cards in your hand reduce the number of combos your opponent can hold",
              "They block opponents from raising",
              "They increase your equity"
            ],
            correct: 1,
            explanation: "A blocker is a card in your hand that removes combinations from your opponent's range. Holding an ace blocks their AA and AK combos — they can't have a hand containing the ace you hold."
          }
        ]
      },

      {
        id: "ch0-l6",
        chapter: "Chapter 1 · Lesson 6",
        title: "Pot Odds and Outs",
        concept: "Pot odds tell you the price you're paying. Outs tell you your chance of winning. Compare the two and you have your answer.",
        content: [
          {
            heading: "What Are Pot Odds?",
            body: "{{PotOdds}} represent the price you're getting to call a bet. The formula is simple:\n\n$$\\text{Pot Odds} = \\frac{\\text{Risk}}{\\text{Risk} + \\text{Reward}}$$\n\nExample: The pot is $100 and villain bets $100. You must call $100 to win $200. Pot odds = 100 ÷ (100 + 200) = 33%. This means you need to win at least 33% of the time for the call to be profitable.",
          },
          {
            heading: "What Are Outs?",
            body: "An out is any unseen card that, if dealt, will improve your hand to the best hand. Flush draws have 9 outs (13 of the suit minus 4 you can see). Open-ended straight draws ({{OESD}}) have 8 outs. Gutshots have 4 outs. Two overcards to make a pair have 6 outs.",
            table: [
              { pos: "9", full: "Flush Draw", note: "All remaining cards of your suit" },
              { pos: "8", full: "Open-Ended Straight Draw", note: "4 cards on each end complete the straight" },
              { pos: "4", full: "Gutshot / Inside Straight Draw", note: "Only one rank fills the gap" },
              { pos: "6", full: "Two Overcards", note: "3 combos × 2 ranks = 6 outs to make a pair" },
              { pos: "12", full: "Flush Draw + Gutshot", note: "9 flush outs + 4 straight outs (minus 1 overlap)" },
              { pos: "15", full: "Flush Draw + OESD", note: "9 + 8 outs, minus ~2 overlaps" },
            ]
          },
          {
            heading: "The Rule of 2 and 4",
            body: "A quick mental shortcut for equity from outs:\n\n• On the flop (two cards to come): multiply $\\text{outs} \\times 4$\n• On the turn (one card to come): multiply $\\text{outs} \\times 2$\n\nExample: flush draw on the flop — $$9 \\times 4 \\approx 36\\%$$ equity. On the turn: $$9 \\times 2 \\approx 18\\%$$\n\nThis is an approximation — the exact formula adjusts for more than 9 outs.",
          },
          {
            heading: "Putting It Together",
            body: "Pot is $100, villain bets $100. Pot odds = 33%. You have a flush draw — about 36% equity on the flop (9 × 4 ≈ 36%). Since 36% > 33%, calling is mathematically profitable. If you had a gutshot instead (4 × 4 ≈ 16%), the call would lose money in the long run against a pot-sized bet.",
          }
        ],
        glossaryTerms: ["PotOdds", "OESD", "FD", "GS", "Implied", "RevImplied"],
        quiz: [
          {
            question: "Pot is $200. Villain bets $100. What are your pot odds?",
            options: ["25%", "33%", "50%", "67%"],
            correct: 1,
            explanation: "$\\text{Pot Odds} = \\frac{\\text{Risk}}{\\text{Risk} + \\text{Reward}}$ = 100 ÷ (100 + 300) = 100 ÷ 400 = 25%. Wait — the pot is $200 before the bet, so after the bet it's $300. You risk $100 to win $300. 100 ÷ (100+300) = 25%. If you got 33%, note the pot before the bet was $200. Correct answer: 25%."
          },
          {
            question: "Using the Rule of 4, what is the approximate equity of a flush draw on the flop?",
            options: ["18%", "24%", "36%", "45%"],
            correct: 2,
            explanation: "Flush draw = 9 outs. On the flop (two cards to come) use $\\times 4$: 9 × 4 = 36%. This is the famous 'flush draw is about 35-36%' number you should have memorized."
          },
          {
            question: "What is an 'out'?",
            options: [
              "A card already on the board",
              "Any unseen card that would give you the best hand",
              "A card that improves your hand but doesn't make it best",
              "Any card that improves your opponent's hand"
            ],
            correct: 1,
            explanation: "An out is an unseen card that, if it comes, gives you the winning hand. Dead outs — cards that improve you but also improve villain to something better — don't count."
          },
          {
            question: "You have an open-ended straight draw on the turn. Roughly what is your equity?",
            options: ["8%", "17%", "32%", "25%"],
            correct: 1,
            explanation: "OESD = 8 outs. On the turn (one card to come) use $\\times 2$: 8 × 2 = 16%, roughly 17%. You need pot odds better than ~17% to make a profitable call."
          }
        ]
      },

      {
        id: "ch0-l7",
        chapter: "Chapter 1 · Lesson 7",
        title: "Equity and Expected Value",
        concept: "EV is the north star of every poker decision. If a play has positive expected value, it's the right play — over thousands of repetitions.",
        content: [
          {
            heading: "What Is Equity?",
            body: "{{Eq}} (equity) is your share of the pot based on your current probability of winning. It's how often you'd win if all remaining cards were dealt out with no more betting. A flush draw on the flop has about 35% equity. AA preflop against KK has about 82% equity. Equity is not EV — it's just the starting point.",
          },
          {
            heading: "Hand vs Hand Equity",
            body: "Poker hands can't be ranked in isolation. AKo has 59.5% equity vs JTs, but only 47.4% vs 22. JTs has 53.8% equity vs 22. There is no linear hand strength — it's all relative to the opponent's holding. This is why thinking in ranges is essential: you need to know your equity against their whole range, not one specific hand.",
            table: [
              { pos: "AKo", full: "vs JTs", note: "59.5% — high cards dominate suited connectors" },
              { pos: "AKo", full: "vs 22", note: "47.4% — small pairs are a coin flip vs overcards" },
              { pos: "JTs", full: "vs 22", note: "53.8% — suited connectors are slight favorites vs underpairs" },
              { pos: "AA", full: "vs KK", note: "82% — pair domination" },
              { pos: "KK", full: "vs AQ", note: "71% — pair vs one overcard" },
              { pos: "87s", full: "vs AK", note: "38% — 'two live cards' vs two big cards" },
            ]
          },
          {
            heading: "Expected Value (EV)",
            body: "{{EV}} is the average outcome of a play over infinite repetitions. The formula:\n\n$$EV = (P_{win} \\times W) - (P_{lose} \\times L)$$\n\nExample: You call a $100 bet. You win $300 (pot) 40% of the time and lose $100 60% of the time.\nEV = (0.40 × 300) − (0.60 × 100) = 120 − 60 = +$60\n\nPositive EV = profitable over the long run. Negative EV = losing play. The EV of folding is always 0.",
          },
          {
            heading: "Why EV Wins and Variance Doesn't",
            body: "You can make a perfect +EV call and still lose the hand. That's variance. Over the short run, poker feels like luck. Over thousands of hands, the math always wins. Players who maximize EV every hand will win in the long run. Players who make decisions based on recent results (results-oriented thinking) will leak money even when they feel like they're playing well.",
          }
        ],
        glossaryTerms: ["Eq", "EV", "Range", "GTO"],
        quiz: [
          {
            question: "What does equity represent in poker?",
            options: [
              "The amount of money you've invested in the pot",
              "Your current probability of winning the pot if cards were dealt out with no more betting",
              "The EV of a specific action",
              "Your stack size relative to the pot"
            ],
            correct: 1,
            explanation: "Equity is your share of the pot based on win probability. It's not the same as EV — EV accounts for fold equity and future betting, while equity is purely about showdown probability."
          },
          {
            question: "What is the EV of folding?",
            options: ["-100%", "0", "It depends on the pot size", "Equal to your equity in the hand"],
            correct: 1,
            explanation: "The EV of folding is always exactly 0. Once money goes in the pot it's no longer yours. Folding neither gains nor loses money from your stack — it just ends your involvement."
          },
          {
            question: "AK vs 22 preflop all-in. Who is the favorite and by roughly how much?",
            options: [
              "AK is a 70% favorite",
              "22 is a 55% favorite",
              "They are 50-50",
              "AK is a slight underdog, roughly 47-53"
            ],
            correct: 3,
            explanation: "AK vs 22 is a classic 'race' or 'coin flip' — but 22 is actually a slight favorite at about 53% vs AK's 47%. The pair just barely edges the overcards."
          },
          {
            question: "You make a +EV call and lose the hand. What happened?",
            options: [
              "You made the wrong decision",
              "Your calculation was wrong",
              "Normal variance — the right decision can still lose in the short run",
              "You should have folded"
            ],
            correct: 2,
            explanation: "A +EV play is correct regardless of the result. Variance means individual outcomes deviate from expectation. Over thousands of repetitions, +EV decisions always win. Results-oriented thinking is a trap."
          }
        ]
      }
    ]
  },

  {
    id: "ch1",
    title: "Thinking in Ranges",
    description: "How to build, read, and use hand ranges to make better decisions in every spot.",
    lessons: [
      {
        id: "ch1-l1",
        chapter: "Chapter 2 · Lesson 1",
        title: "Range vs Range Thinking",
        concept: "You never play against one hand. You play against a range. The sooner you internalize this, the faster you improve.",
        content: [
          {
            heading: "The Amateur Mistake",
            body: "Beginners try to put opponents on a specific hand: 'he has ace-king.' Advanced players think in ranges: 'his range is AA-TT, AKs-ATs, AKo-AQo.' The difference is enormous. Putting someone on one hand forces you to make all your decisions based on that single guess. Thinking in ranges means you make decisions that work well across everything they can have.",
          },
          {
            heading: "How Ranges Narrow",
            body: "Every action your opponent takes gives you information. An UTG raise says their range is tight. A c-bet on a low board from out of position says they likely have something. A check on an ace-high board says they probably don't have an ace. Each action — or inaction — shifts the probability distribution of their range. Your job is to update this estimate on every street.",
          },
          {
            heading: "Your Own Range Matters Too",
            body: "Strong players don't just think about villain's range — they think about what their own range looks like to the villain. If you always c-bet strong hands and check weak ones, attentive opponents will adjust. If you always 3-bet only premiums, you become easy to play against. Having a balanced, {{Polarized}} or {{Merged}} range in the right spots makes you harder to exploit.",
          },
          {
            heading: "Range Advantage",
            body: "One player often has a range advantage in a given spot — their range interacts better with the board. E.g., a UTG raiser vs a BB caller on an A72 rainbow board: the UTG has all the AA, AK, AQ, AJ — the BB's range skews toward medium connected hands. The UTG has the range advantage and should c-bet this board frequently. Range advantage drives bet frequency and sizing.",
          }
        ],
        glossaryTerms: ["Range", "Polarized", "Merged", "NutAdv", "GTO", "MES"],
        quiz: [
          {
            question: "Why is range thinking superior to 'putting opponent on a hand'?",
            options: [
              "It's faster at the table",
              "It accounts for all possible holdings and their likelihood, not just one guess",
              "It allows you to bluff more",
              "It only applies to preflop decisions"
            ],
            correct: 1,
            explanation: "Range thinking assigns probabilities across all hands villain could hold. Putting them on one hand means you make optimal decisions for that hand but wrong decisions against all their other holdings. Ranges capture the whole truth."
          },
          {
            question: "UTG raises preflop and gets called by the BB. The flop comes A♠7♦2♣. Who typically has range advantage here?",
            options: ["The Big Blind", "The UTG raiser", "Neither — it's a neutral flop", "Whoever has the most chips"],
            correct: 1,
            explanation: "UTG's range is full of AK, AQ, AJ, AA — they connect strongly with the ace. BB's calling range is wider and skews toward medium connected hands that miss this dry board. UTG has clear range advantage."
          },
          {
            question: "What does 'your range narrows on each street' mean?",
            options: [
              "You should bluff less on later streets",
              "Your stack gets smaller each street",
              "Each action you take removes certain hands from your plausible holdings",
              "Ranges only apply to preflop play"
            ],
            correct: 2,
            explanation: "When you check the flop, fold to a bet, or raise the turn, you're communicating which hands you could hold. Observant opponents track your actions across streets and deduce your range. This is 'hand reading' at the highest level."
          },
          {
            question: "What is nut advantage?",
            options: [
              "Having more chips than your opponent",
              "Having a higher proportion of the strongest hands compared to your opponent's range",
              "Having the nuts on the current board",
              "Bluffing with the best draw"
            ],
            correct: 1,
            explanation: "Nut advantage means your range contains more of the strongest possible hands for this board than your opponent's range does. It justifies more aggressive play — you can credibly represent the big hands they can't."
          }
        ]
      },

      {
        id: "ch1-l2",
        chapter: "Chapter 2 · Lesson 2",
        title: "Pre-Flop Opening Ranges",
        concept: "Your opening range is your first strategic decision in every hand. Position should be your primary driver.",
        content: [
          {
            heading: "Why Ranges Differ by Position",
            body: "Position determines how much information you'll have postflop. The {{BN}} opens the widest range — up to 40-45% of hands — because it acts last postflop and can outplay opponents with information. The {{LJ}} opens the narrowest range — around 15% — because it faces 5 players still to act and will be out of position against most of them.",
          },
          {
            heading: "Standard 6-Max Opening Ranges",
            body: "These are GTO-based opening ranges for 6-max 100bb cash games:\n\n• **LJ**: 17.6% — 66+, A3s+, K8s+, Q9s+, J9s+, T9s, ATo+, KJo+, QJo\n• **HJ**: 21.4% — 55+, A2s+, K6s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KTo+, QTo+\n• **CO**: 27.8% — 33+, A2s+, K3s+, Q6s+, J8s+, T7s+, 97s+, 87s, 76s, A8o+, KTo+, QTo+, JTo\n• **BTN**: 43.5% — 33+, A2s+, K2s+, Q3s+, J4s+, T6s+, 96s+, 85s+, 75s+, 64s+, 53s+, A4o+, K8o+, Q9o+, J9o+, T8o+, 98o\n• **SB**: 62.3% — 22+, A2s+, K2s+, Q2s+, J2s+, T3s+, 94s+, 84s+, 74s+, 63s+, 53s+, 43s, A2o+, K4o+, Q5o+, J7o+, T7o+, 96o+, 86o+, 76o",
            rangeChart: {
              title: "LJ Opening Range (17.6%)",
              ranges: [
                { hands: "66+,A3s+,K8s+,Q9s+,J9s+,T9s,ATo+,KJo+,QJo", color: '#C8A84B', label: "LJ open (17.6%)" },
              ],
            },
          },
          {
            heading: "The Logic of Tight Early, Wide Late",
            body: "When you open from the {{LJ}}, your hand must be strong enough to withstand 3-bets from players with position on you AND still play profitably postflop out of position. From the {{BN}}, you're getting position on everyone — so you can open a wider range and outplay them postflop even with weaker holdings. Position advantage makes marginal hands playable.",
          },
          {
            heading: "Bet Sizing When Opening",
            body: "Standard opening sizes in 6-max cash games (100bb): 2.5x the big blind (2.5bb) from most positions. Some players use 2x from late position and 3x from early position. The key: use consistent sizing so opponents can't determine your hand strength from your bet size alone. Sizing tells are one of the most common leaks in live poker.",
          }
        ],
        glossaryTerms: ["RFI", "BN", "LJ", "HJ", "CO", "SB", "BB", "GTO", "3bet"],
        quiz: [
          {
            question: "Which position opens the widest preflop range in 6-max?",
            options: ["Lojack", "Hijack", "Button", "Cutoff"],
            correct: 2,
            explanation: "The Button opens 40-45% of hands because it has permanent positional advantage postflop. With information on every street, you can play a much wider range profitably."
          },
          {
            question: "Why does LJ open a tighter range than the Button?",
            options: [
              "LJ has a smaller stack",
              "LJ pays more rake",
              "LJ acts first postflop and faces more players yet to act preflop",
              "LJ sees fewer cards"
            ],
            correct: 2,
            explanation: "The LJ is first to act preflop — any of the 5 players remaining can 3-bet. Postflop, LJ is out of position against everyone except the blinds. These combined disadvantages demand a tighter, stronger opening range."
          },
          {
            question: "What is the standard opening size in 6-max 100bb cash games?",
            options: ["1 big blind (limp)", "2.5 big blinds", "5 big blinds", "3.5 big blinds"],
            correct: 1,
            explanation: "The standard open raise size in 6-max 100bb cash games is 2.5bb (2.5 times the big blind). This is large enough to build a pot but small enough to fold when faced with a 3-bet and maintain positional pressure."
          },
          {
            question: "A hand like 76s is typically in the Button's opening range but not the LJ's. Why?",
            options: [
              "76s is too weak to ever raise with",
              "76s requires being IP postflop to realize its speculative value",
              "76s is only good in multiway pots",
              "76s has no blockers"
            ],
            correct: 1,
            explanation: "76s is a speculative hand — it needs to flop draws and sets to be profitable. In position (BN), you can take cheap draws and outplay opponents. OOP (LJ), you pay too high a price in missed c-bets, difficult multiway pots, and playing draws blind."
          }
        ]
      },

      {
        id: "ch1-l3",
        chapter: "Chapter 2 · Lesson 3",
        title: "3-Betting and Defense",
        concept: "The 3-bet is the most powerful preflop weapon. But only when used at the right frequency, with the right hands.",
        content: [
          {
            heading: "What Is a 3-Bet?",
            body: "A {{3bet}} is a re-raise after someone else has opened. The blinds are the first bet, the open is the second bet (2-bet), and the re-raise is the 3-bet. 3-bets serve two purposes: they build the pot for value with premiums (AA, KK, QQ, AKs) and they deny equity to the opener when used as a bluff with suited connectors or blockers.",
          },
          {
            heading: "Linear vs Polarized 3-Bet Ranges",
            body: "A **linear 3-bet range** contains the top X% of hands — all your value hands in sequence (AA, KK, QQ, JJ, AKs, AQs...). Use this when IP against a weak player who folds too much. A **polarized 3-bet range** uses value hands (AA, KK, QQ, AKs) AND bluffs (A5s, A4s, suited connectors) — skipping middle-strength hands like JJ or AQo which you flat-call. Use this IP against regulars. The {{Polarized}} structure protects your flat-calling range and makes you harder to play against.",
          },
          {
            heading: "Defending Against 3-Bets",
            body: "When you're 3-bet, you have three options: fold, call (flat), or 4-bet. Your {{4bet}} range should be very strong (AA-QQ, AKs) and some bluffs with blockers (A5s, KQs). Flatting a 3-bet requires a hand that can realize equity postflop: medium pairs (JJ-88), suited broadways (AQs, KQs), and strong suited connectors. Folding too much to 3-bets makes your opens exploitable.",
          },
          {
            heading: "3-Bet Sizing",
            body: "Standard 3-bet sizes in 6-max 100bb:\n• In position: 3x the open (if BN opens 2.5bb, 3-bet to 7.5bb)\n• Out of position: 3.5-4x the open (you need more to compensate for OOP disadvantage)\n\nA larger OOP 3-bet reduces the pot odds for the opener, making it less attractive to call and play postflop against you with position.",
          }
        ],
        glossaryTerms: ["3bet", "4bet", "Polarized", "Blocker", "GTO"],
        quiz: [
          {
            question: "What are the two purposes of a 3-bet?",
            options: [
              "Increasing the pot and confusing opponents",
              "Value with strong hands and denial/fold equity with bluffs",
              "Isolating weak players and building pots",
              "Testing your opponent and protecting your hand"
            ],
            correct: 1,
            explanation: "3-bets serve two distinct functions: (1) Value — building a large pot with strong hands like AA/KK/QQ, and (2) Bluff — denying equity and winning the pot immediately with weaker but playable hands like A4s or 76s."
          },
          {
            question: "In a polarized 3-bet range, hands like JJ or AQo are often:",
            options: ["3-bet for value", "Folded preflop", "Flat-called rather than 3-bet", "4-bet as bluffs"],
            correct: 2,
            explanation: "In a polarized structure, middle-strength hands (JJ, TT, AQo, KQs) are flat-called rather than 3-bet. 3-betting them turns your hand face-up (you're repping value) and reduces their postflop playability. Keeping them in your flat range protects that range."
          },
          {
            question: "Why should you 3-bet larger from out of position?",
            options: [
              "To bluff more effectively",
              "To compensate for positional disadvantage by reducing pot odds for the opener",
              "Because OOP hands are stronger",
              "To make more money on value hands"
            ],
            correct: 1,
            explanation: "Out of position (e.g., SB or BB 3-betting CO), you're at a structural disadvantage postflop. A larger 3-bet forces the opener to call a bigger price, reducing their pot odds and making it less profitable for them to call with speculative hands they'd dominate with position."
          },
          {
            question: "What is a good 3-bet bluff hand?",
            options: ["72o", "A5s", "KJo", "88"],
            correct: 1,
            explanation: "A5s is ideal: it has an ace blocker (reducing AA/AK combos in villain's range), it's suited (backdoor equity), and it's too weak to call profitably but strong enough with equity to 3-bet as a bluff. 72o has no blockers, no equity. KJo and 88 prefer to flat."
          }
        ]
      },

      {
        id: "ch1-l4",
        chapter: "Chapter 2 · Lesson 4",
        title: "Minimum Defense Frequency",
        concept: "If you fold too often, you're handing money to anyone willing to bet. MDF is the math that stops you from being exploited.",
        content: [
          {
            heading: "The Problem: Folding Too Much",
            body: "If you fold 80% of the time when someone bets, they can profitably bet with any two cards. They just need the 20% you don't fold to be profitable enough to cover the 80% they win outright. Against a very tight folder, any bet has a positive EV — which is why you need a {{MDF}} (Minimum Defense Frequency): a floor below which folding becomes exploitable.",
          },
          {
            heading: "The MDF Formula",
            body: "$$\\text{MDF} = 1 - \\alpha$$\n\nwhere $\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$\n\nAlpha is the break-even fold frequency — the percentage villain needs you to fold to profit with a pure bluff. If you fold exactly at MDF, villain's bluffs break even — not profitable, not losing. This creates indifference.\n\nExample: Pot = $100, villain bets $50 (half-pot).\nAlpha = 50 ÷ (50 + 100) = 33%\nMDF = 1 − 0.33 = 67%\n\nYou must defend at least 67% of your range (by calling or raising) to prevent pure bluffs from being profitable.",
          },
          {
            heading: "MDF in Practice",
            body: "MDF doesn't mean you call with your worst 67% of hands — it means the bottom of your defending range must be strong enough to call. Weak hands that can't beat bluffs should fold. Your best hands raise. Your medium hands call. The total of those two buckets should reach the MDF threshold. If it doesn't, you're over-folding and giving opponents a license to bluff.",
          },
          {
            heading: "Bet Size and MDF",
            body: "Larger bets require you to fold more (lower MDF). Smaller bets require you to defend more (higher MDF):\n\n• 1/3-pot bet: Alpha = 25%, MDF = 75%\n• 1/2-pot bet: Alpha = 33%, MDF = 67%\n• 2/3-pot bet: Alpha = 40%, MDF = 60%\n• Pot-sized bet: Alpha = 50%, MDF = 50%\n• 2× pot bet: Alpha = 67%, MDF = 33%\n\nThis is why large overbets on the river are so powerful — they force you to fold 67% of the time and only call with your best hands.",
          }
        ],
        glossaryTerms: ["MDF", "Alpha", "EV", "GTO"],
        quiz: [
          {
            question: "What does MDF stand for and what does it prevent?",
            options: [
              "Maximum Defense Frequency — prevents value betting",
              "Minimum Defense Frequency — prevents opponents from profitably bluffing with any two cards",
              "Mandatory Draw Factor — calculates flush draw equity",
              "Median Defense Formula — balances calling and folding"
            ],
            correct: 1,
            explanation: "MDF (Minimum Defense Frequency) is the floor below which you're over-folding and making opponents' bluffs automatically profitable. Defend at MDF and their pure bluffs break even — they have no incentive to bluff 100% of the time."
          },
          {
            question: "Pot is $100. Villain bets $100 (pot-sized). What is the MDF?",
            options: ["33%", "50%", "67%", "75%"],
            correct: 1,
            explanation: "Alpha = 100 ÷ (100 + 100) = 50%. MDF = 1 − 50% = 50%. Against a pot-sized bet, you must defend exactly 50% of your range — half your hands should continue."
          },
          {
            question: "Villain uses a very small bet — 1/4 pot. This means:",
            options: [
              "You need to fold more than usual",
              "You must defend a very high frequency — around 80%",
              "The bet is usually a bluff",
              "MDF doesn't apply to small bets"
            ],
            correct: 1,
            explanation: "Small bets have low alpha — the bluffer needs you to fold infrequently to break even. Alpha for 1/4-pot = 25 ÷ (25 + 100) = 20%. MDF = 80%. You must defend 80% of your range. Small bets demand wide calls."
          },
          {
            question: "When defending to meet MDF, should you always call with your bottom 67% of hands?",
            options: [
              "Yes — MDF requires calling with exactly 67% of hands",
              "No — the bottom of your defending range still needs to beat bluffs; weak hands fold, strong hands raise",
              "No — you should only fold and never call",
              "Yes — all hands in your range have equal value"
            ],
            correct: 1,
            explanation: "MDF sets the threshold frequency, not which hands to call with. You raise your best hands and call your medium hands until you reach MDF. Hands genuinely too weak to beat bluffs still fold — you can't call with 72o just because you need to defend 67%."
          }
        ]
      },

      {
        id: "ch1-l5",
        chapter: "Chapter 2 · Lesson 5",
        title: "The Alpha Formula: Bluff Math",
        concept: "Every bet has a break-even point. Knowing the math tells you exactly how often your bluffs need to work.",
        content: [
          {
            heading: "What Is Alpha?",
            body: "{{Alpha}} is the break-even fold percentage for a bluff. If your opponent folds more than Alpha, the bluff is immediately profitable. If they fold less, you need sufficient equity to make up the difference. The formula:\n\n$$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$$\n\nExample: You bet $75 into a $100 pot. Alpha = 75 ÷ 175 = 43%. If villain folds more than 43% of the time, this bluff has positive EV — regardless of your hand.",
          },
          {
            heading: "Why Bet Size Changes Alpha",
            body: "A larger bet has a higher alpha — you need opponents to fold more often for the bluff to break even. A smaller bet has a lower alpha — even a modest fold frequency makes it profitable. This is the core tension in sizing: small bets put pressure cheaply but small bets demand wide calls (high MDF). Large bets are expensive but force tight folding (low MDF).",
          },
          {
            heading: "Semi-Bluffs vs Pure Bluffs",
            body: "A pure bluff (air, no draw) needs villain to fold at least Alpha% of the time to be profitable. A semi-bluff (a bluff with draw equity, like a flush draw) needs villain to fold less than Alpha because you also win some percentage of the time at showdown. The stronger your draw, the less you rely on fold equity and the more you can bet with abandon.",
          },
          {
            heading: "Bluff-to-Value Ratio on the River",
            body: "On the river (no more cards to come), bluffs are purely about fold equity. A balanced river bet of pot-size needs villain to fold 50% to break even on bluffs. Standard GTO construction: for every 2 value combos you bet the river, you should have 1 bluff combo (at pot-size). This ratio changes with bet size — larger bets, fewer bluffs proportionally; smaller bets, more bluffs.",
          }
        ],
        glossaryTerms: ["Alpha", "EV", "MDF", "Polarized", "GTO"],
        quiz: [
          {
            question: "You bet $60 into a $60 pot. What is alpha (break-even fold %)?",
            options: ["33%", "40%", "50%", "60%"],
            correct: 2,
            explanation: "Alpha = 60 ÷ (60 + 60) = 60 ÷ 120 = 50%. You need villain to fold 50% of the time for this pot-sized bet to break even as a pure bluff."
          },
          {
            question: "You have a flush draw on the turn (9 outs, ~18% equity) and decide to bluff. Villain needs to fold less than Alpha because:",
            options: [
              "Flush draws always have enough equity to bluff",
              "Your draw equity wins some pots even when they call, so you need less fold equity",
              "Alpha doesn't apply to drawing hands",
              "Turn bluffs always break even"
            ],
            correct: 1,
            explanation: "A semi-bluff (bluff with equity) profits from two sources: (1) villain folding immediately, and (2) winning at showdown when called. The draw's equity reduces how often you need to steal the pot. The stronger the draw, the lower the required fold frequency."
          },
          {
            question: "At pot-size on the river, GTO says you should have roughly:",
            options: [
              "Equal value bets and bluffs",
              "2 value combos for every 1 bluff combo",
              "3 value combos for every 2 bluff combos",
              "Pure value with no bluffs"
            ],
            correct: 1,
            explanation: "At pot-sized bet, alpha = 50%. Villain calls ~50% and folds ~50%. For bluffs to break even, you need 1 bluff per 2 value bets — this ratio makes villain indifferent. They win 50% of the time they call (1 value per bluff = break even), so they should be indifferent between calling and folding."
          },
          {
            question: "Why does a smaller bet have a lower alpha?",
            options: [
              "Small bets are less likely to be bluffs",
              "You risk less per bluff attempt, so even a modest fold frequency makes it profitable",
              "Small bets have more equity behind them",
              "Smaller bets don't require fold equity"
            ],
            correct: 1,
            explanation: "$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$. A smaller bet in the numerator = lower fraction = lower alpha. You only need villain to fold a small fraction to recover your cheap bet. That's why small bets can be profitable bluffs even against calling stations."
          }
        ]
      },

      {
        id: "ch1-l6",
        chapter: "Chapter 2 · Lesson 6",
        title: "Reading Villain's Range",
        concept: "Hand reading is the skill of narrowing your opponent's range using every piece of available information.",
        content: [
          {
            heading: "Start Wide, Narrow Down",
            body: "When a hand begins, assign villain their preflop range based on position and action. A UTG open is ~15% of hands. A BTN open is ~40%. After each action, eliminate hands inconsistent with that action. They 3-bet from the BB? Remove hands too weak to 3-bet. They check-call the flop? Remove very strong hands (unlikely to slow-play on a wet board) and pure air (likely to fold). What's left is their range.",
          },
          {
            heading: "Board Texture and Range Interaction",
            body: "Different boards favor different ranges. A dry A-high board (A♠7♦2♣) favors the preflop raiser — they have more Ax combinations. A wet low board (8♥7♠5♠) favors the BB caller — suited connectors and small pairs that BB calls with connect hard. Reading villain means understanding not just their preflop range but how the board texture filters it.",
          },
          {
            heading: "Timing and Sizing Tells",
            body: "At live tables, timing and physical tells are famous. But in all games, sizing is a tell: players often size larger with strong value and smaller with weaker value or bluffs. Most amateurs never bluff-raise, so check-raises in low-stakes games skew heavily toward value. Exploit this by over-folding to check-raises from passive players and never bluffing into them with thin value.",
          },
          {
            heading: "What Checks Reveal",
            body: "A check is as informative as a bet. When a tight player checks the flop in position after calling a 3-bet, they likely have a medium-strength hand — too strong to fold, too weak to build a pot. A check on an ace-high board from the BB often means they don't have an ace. Use the absence of aggression to refine your range estimate.",
          }
        ],
        glossaryTerms: ["Range", "GTO", "MES", "NutAdv", "Cbet"],
        quiz: [
          {
            question: "A UTG player opens, everyone folds to the BB who 3-bets. What should you NOT remove from their range immediately?",
            options: [
              "22-55",
              "AA, KK, QQ",
              "72o",
              "Random weak aces like A3o"
            ],
            correct: 1,
            explanation: "AA, KK, and QQ are always in a 3-bet range — they're the core value. 72o is never in a 3-bet range. Weak small pairs and weak aces are often folded or only flatted, so they can be reduced or removed."
          },
          {
            question: "The board is 8♥7♠5♠. This board texture favors:",
            options: [
              "The UTG raiser's range",
              "The BB caller's range",
              "Neither player",
              "Only players with sets"
            ],
            correct: 1,
            explanation: "Low, wet boards favor wider calling ranges. The BB calls with hands like 87s, 65s, 96s, small pairs — exactly the hands that connect with 875. The UTG raiser's premium range (broadways, high pairs) often misses this texture badly."
          },
          {
            question: "Against a passive player who almost never bluffs, you should:",
            options: [
              "Call their bets more liberally since they're always bluffing",
              "Over-fold when they bet or raise, since their range is heavily weighted toward value",
              "Always c-bet them off their hand",
              "Treat them the same as any regular"
            ],
            correct: 1,
            explanation: "Against a passive, non-bluffing player, the MES (maximally exploitative strategy) is to over-fold vs their aggression. Their range is so value-heavy that calling with thin hands is -EV. You lose to MDF theory but gain by exploiting their actual tendencies."
          },
          {
            question: "When a player checks the flop in position after calling your preflop raise, what does that typically indicate?",
            options: [
              "They have a very strong hand and are slow-playing",
              "They have a medium-strength hand: too strong to fold but not strong enough to build a big pot",
              "They always have a draw",
              "They're about to fold on the turn"
            ],
            correct: 1,
            explanation: "A check in position after calling is usually a medium-strength hand — one that prefers pot-control. Very strong hands typically bet for value; pure air folds. The check-in-position range is often medium pairs, weak top pairs, and speculative hands taking a free card."
          }
        ]
      },

      {
        id: "ch1-l7",
        chapter: "Chapter 2 · Lesson 7",
        title: "GTO vs Exploitative Play",
        concept: "GTO makes you unexploitable. Exploitative play makes you maximum profit. The best players can do both.",
        content: [
          {
            heading: "What Is GTO?",
            body: "{{GTO}} (Game Theory Optimal) is a strategy that cannot be exploited in the long run. If you play perfectly GTO, no adjustment your opponent makes can generate a positive EV against you. GTO doesn't mean you win every hand or even every session — it means your strategy is mathematically balanced so that over infinite hands, you cannot be beaten. GTO is the unexploitable baseline.",
          },
          {
            heading: "What Is MES?",
            body: "{{MES}} (Maximally Exploitative Strategy) means adjusting maximally to your opponent's specific tendencies. If villain folds 80% of the time to c-bets, you c-bet 100% of your range. If they call every river bet, you stop bluffing entirely. MES is higher EV against specific opponents than GTO — but it makes you exploitable in return. A GTO player could adjust to your MES strategy and beat you.",
          },
          {
            heading: "When to Use Each",
            body: "Against unknown players: play closer to GTO. You don't have enough info to exploit them and you don't want to be exploited. Against known bad players (calling stations, chronic over-folders): shift toward MES. Value bet relentlessly against callers. Bluff obsessively against folders. The worse your opponent plays, the more you should deviate from GTO toward exploitative adjustments.",
          },
          {
            heading: "The Practical Balance",
            body: "In real games, you never play perfect GTO — you approximate it. The value of studying GTO is: (1) it gives you a solid default strategy, (2) it teaches you what 'balanced' means, so you can recognize when opponents deviate, and (3) it reveals the framework (bluff-to-value ratios, MDF, alpha) that underlies all good decisions. Use GTO as your foundation, exploitative play as your weapon.",
          }
        ],
        glossaryTerms: ["GTO", "MES", "EV", "Alpha", "MDF"],
        quiz: [
          {
            question: "What makes a GTO strategy valuable even if you never play perfect GTO?",
            options: [
              "It wins every session",
              "It gives you a balanced default and reveals the framework behind good decisions",
              "It's the only way to beat good players",
              "GTO strategies fold less than exploitative ones"
            ],
            correct: 1,
            explanation: "GTO study teaches you balance, bluff-to-value ratios, MDF, and alpha — the structural framework of sound poker. Even if you can't play perfectly GTO at the table, understanding these concepts improves every decision you make."
          },
          {
            question: "You're playing a tournament regular who you have no reads on. Should you play closer to GTO or MES?",
            options: [
              "MES — exploit them immediately",
              "GTO — without reads, a balanced strategy prevents them from exploiting you",
              "Neither — just play your gut",
              "MES with a small GTO component"
            ],
            correct: 1,
            explanation: "Against an unknown opponent (especially a regular), defaulting to a GTO-approximating strategy is safest. You protect yourself from their potential adjustments. Only shift to MES once you have reliable reads on specific leaks."
          },
          {
            question: "Villain is a calling station who never folds made hands to river bets. The optimal adjustment is:",
            options: [
              "Bluff them off every pot",
              "Stop bluffing entirely and value bet relentlessly with made hands",
              "Fold to their bets since they always have it",
              "Play GTO against them"
            ],
            correct: 1,
            explanation: "Against a calling station, MES means maximizing value. Their tendency to over-call makes bluffs -EV (they call too often) and value bets highly +EV. Stop bluffing, thin-value relentlessly, and watch the money flow."
          },
          {
            question: "If you play maximally exploitative (MES) against an opponent, what risk do you take on?",
            options: [
              "You might over-fold in key spots",
              "Your strategy becomes exploitable if they adjust to your adjustments",
              "MES always leads to spewing chips",
              "You can no longer bluff"
            ],
            correct: 1,
            explanation: "MES exploits a specific player but creates imbalances a smart opponent could counter-exploit. E.g., if you never bluff against a calling station, a GTO player who observes this will know your bets are always value and fold precisely. MES is a weapon, not a strategy against competent opponents."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch2",
    title: "Preflop Play",
    description: "The decisions you make before the flop set up everything that follows. Most losing players leak the most money here.",
    lessons: [
      {
        id: "ch2-l1",
        chapter: "Chapter 3 · Lesson 1",
        title: "Opening Ranges by Position",
        concept: "Most players play too many hands from early position and not enough from the button. Your range should nearly double from LJ to BN.",
        content: [
          {
            heading: "Why Position Determines Range Width",
            body: "The further left of the button you are, the more opponents remain to act behind you. From {{LJ}}, five players can wake up with a strong hand. From the {{BN}}, only the blinds remain — and they play {{OOP}} postflop. More players behind means you need a stronger hand to justify entering. Fewer players behind means you can profitably enter with a wider range.",
          },
          {
            heading: "Opening Ranges by Seat",
            body: "These are approximate 6-max RFI ranges at 100bb. They're not fixed rules — they adjust based on opponent tendencies — but they're the correct baseline.",
            table: [
              { pos: "LJ", full: "17.6%", note: "66+, A3s+, K8s+, Q9s+, J9s+, T9s, ATo+, KJo+, QJo" },
              { pos: "HJ", full: "21.4%", note: "55+, A2s+, K6s+, Q9s+, J9s+, T9s, 98s, 87s, 76s, ATo+, KTo+, QTo+" },
              { pos: "CO", full: "27.8%", note: "33+, A2s+, K3s+, Q6s+, J8s+, T7s+, 97s+, 87s, 76s, A8o+, KTo+, QTo+, JTo" },
              { pos: "BTN", full: "43.5%", note: "33+, A2s+, K2s+, Q3s+, J4s+, T6s+, 96s+, 85s+, 75s+, 64s+, 53s+, A4o+, K8o+, Q9o+, J9o+, T8o+, 98o" },
              { pos: "SB", full: "62.3%", note: "22+, A2s+, K2s+, Q2s+, J2s+, T3s+, 94s+, 84s+, 74s+, 63s+, 53s+, 43s, A2o+, K4o+, Q5o+, J7o+, T7o+, 96o+, 86o+, 76o" },
            ],
            rangeChart: {
              title: "Range expansion by position",
              ranges: [
                { hands: "66+,A3s+,K8s+,Q9s+,J9s+,T9s,ATo+,KJo+,QJo", color: '#C8A84B', label: "LJ (17.6%)" },
                { hands: "55+,A2s+,K6s+,Q9s+,J9s+,T9s,98s,87s,76s,ATo+,KTo+,QTo+", color: '#E07840', label: "HJ (21.4%)" },
                { hands: "33+,A2s+,K3s+,Q6s+,J8s+,T7s+,97s+,87s,76s,A8o+,KTo+,QTo+,JTo", color: '#4AAF7A', label: "CO (27.8%)" },
                { hands: "33+,A2s+,K2s+,Q3s+,J4s+,T6s+,96s+,85s+,75s+,64s+,53s+,A4o+,K8o+,Q9o+,J9o+,T8o+,98o", color: '#5A8ED4', label: "BTN (43.5%)" },
              ],
            },
          },
          {
            heading: "Hand Types by Position",
            body: "Early position: big pairs (AA-TT), strong broadways (AK-AJ, KQ), a few suited connectors. Late position adds: medium pairs (99-44), weak suited aces (A7s-A2s), all one-gap suited connectors, and weaker offsuit broadways. The pattern is simple — in {{LP}} you're playing more speculative hands because you'll be {{IP}} postflop to extract value.",
          }
        ],
        glossaryTerms: ["LJ", "HJ", "CO", "BN", "SB", "BB", "RFI", "EP", "LP", "IP", "OOP"],
        quiz: [
          {
            question: "Which position has the widest opening range in 6-max NL?",
            options: ["Hijack", "Cutoff", "Button", "Small Blind"],
            correct: 2,
            explanation: "The Button opens ~45% of hands — nearly the widest range — because only the blinds remain and both play OOP postflop. The CO is second at ~26%, reflecting one fewer opponent to beat."
          },
          {
            question: "Why does the LJ open a tighter range than the CO?",
            options: [
              "The LJ posts a bigger blind",
              "Five players act after the LJ, any of whom can have a strong hand",
              "The LJ is closer to the dealer button",
              "The LJ has fewer chips on average"
            ],
            correct: 1,
            explanation: "From LJ, all five remaining players (HJ, CO, BN, SB, BB) can 3-bet or call. With more players behind, you need a stronger hand to risk building a pot. From CO, only BN and the blinds remain — dramatically reducing that risk."
          },
          {
            question: "A9s is typically too weak to open from LJ, but fine to open from CO. Why?",
            options: [
              "A9s plays better in multiway pots",
              "A9s has more equity from CO",
              "From CO you have better position postflop and fewer players left to act",
              "The CO has a positional discount on bet sizing"
            ],
            correct: 2,
            explanation: "A9s is a speculative hand — it needs position to extract value. From CO you'll often be IP postflop vs the blinds, and only two opponents remain to 3-bet. From LJ, the hand is dominated by ranges that call, and you're OOP against everyone who continues."
          },
          {
            question: "What is RFI?",
            options: [
              "Raise From IP — raising when you have position",
              "Raise First In — being the first to voluntarily put money in by raising",
              "Re-raise First In — a 3-bet in disguise",
              "Range Frequency Index — a solver metric"
            ],
            correct: 1,
            explanation: "RFI means Raise First In — you open the pot with a raise, with no one having entered before you. In 6-max cash games, RFI (not limping) is the standard way to enter a pot voluntarily. Limping is generally exploitable."
          }
        ]
      },

      {
        id: "ch2-l2",
        chapter: "Chapter 3 · Lesson 2",
        title: "3-Betting: Value and Bluffs",
        concept: "If your 3-bet range is only premium pairs, you're printing money for everyone who 3-bets you back. Balance means mixing in bluffs.",
        content: [
          {
            heading: "Value 3-Bets vs Bluff 3-Bets",
            body: "A value {{3bet}} means you're raising because you expect to be ahead of your opponent's calling range: AA, KK, QQ, AKs. A bluff 3-bet means you raise with a hand that has little showdown value but benefits from fold equity and has some equity when called — suited aces like A5s, A4s, K4s. The goal is a polar 3-bet range: the best hands and a set of well-chosen bluffs, with the medium hands (TT, AJs) either calling or 3-betting depending on position.",
            rangeChart: {
              title: "Polarized 3-bet range (vs CO open, from BTN)",
              ranges: [
                { hands: "AA, KK, QQ, AKs", color: '#C8A84B', label: "Value 3-bet" },
                { hands: "A5s, A4s, A3s", color: '#5A8ED4', label: "Bluff 3-bet" },
                { hands: "JJ, TT, AQs, AJs, KQs", color: '#4AAF7A', label: "Call (flat)" },
              ],
            },
          },
          {
            heading: "Why Suited Aces Make Good 3-Bet Bluffs",
            body: "A5s, A4s, A3s are the classic 3-bet bluff hands for three reasons: (1) they block your opponent's AA and AK combos — if you hold an ace, they can't have as many premiums; (2) they have backdoor flush draws when called; (3) they don't play well by calling IP because the 'ace' in the hand means you often make top pair but with a weak kicker. Hands like KQs or JTs play better as calls — they flop well and don't benefit from having blockers to the 4-bet range.",
          },
          {
            heading: "3-Bet Sizing",
            body: "The standard {{3bet}} size is 3x the open when {{IP}} — if villain opens 2.5bb, 3-bet to 7-8bb. When {{OOP}}, size up to 3.5-4x — 9-10bb vs the same 2.5bb open. The larger OOP size compensates for your postflop disadvantage by building a pot where villain must put in more to call, and it prices out speculative hands that crush you in position.",
          }
        ],
        glossaryTerms: ["3bet", "IP", "OOP", "Polarized", "RFI", "Blocker", "4bet"],
        quiz: [
          {
            question: "Why is A5s a better 3-bet bluff than KQo?",
            options: [
              "A5s has more raw equity preflop",
              "A5s blocks villain's AA/AK and has a flush draw when called; KQo plays better as a call",
              "KQo can't beat villain's 3-bet calling range",
              "A5s is suited and therefore always preferable"
            ],
            correct: 1,
            explanation: "A5s blocks the AA and AK combos that would 4-bet you, and when called, it has backdoor equity. KQs/KQo flop well (lots of pair/straight/broadway combinations) and prefer to see a flop in position rather than bloat the pot against a strong 3-bet-calling range."
          },
          {
            question: "You are OOP vs a BN open. What is the correct 3-bet sizing on 2.5bb?",
            options: ["6bb", "7.5bb", "9-10bb", "12bb"],
            correct: 2,
            explanation: "OOP, 3-bet to 3.5-4x the open. On a 2.5bb open, that's 8.75-10bb. The larger size prices out speculative IP callers (suited connectors, small pairs) and compensates for the positional disadvantage you'll have for every remaining street."
          },
          {
            question: "Which hands form the core of a value 3-bet range?",
            options: [
              "Any pair and any ace",
              "AA, KK, QQ, and AK — sometimes JJ and AQs depending on position",
              "All suited hands with an ace",
              "Only AA and KK — everything else is a call"
            ],
            correct: 1,
            explanation: "Value 3-bets are hands that dominate your opponent's calling range: AA, KK, QQ, AKs/AKo. JJ and AQs are borderline — they 3-bet from certain positions (OOP where flatting is costly) but call from others (IP vs a late-position open)."
          },
          {
            question: "What is the main risk of having a 3-bet range that is only strong value hands?",
            options: [
              "You will be called too often",
              "Opponents learn you only 3-bet premiums and fold everything except their own premiums, destroying your value",
              "You will run out of hands to 3-bet",
              "Pure value 3-bet ranges have negative EV"
            ],
            correct: 1,
            explanation: "If you only 3-bet AA/KK/QQ/AK, observant opponents adjust: they fold everything except their own premiums when you 3-bet, killing your value. A balanced range with bluffs forces them to call down with medium hands that you crush with your value."
          }
        ]
      },

      {
        id: "ch2-l3",
        chapter: "Chapter 3 · Lesson 3",
        title: "Responding to 3-Bets",
        concept: "Most players either fold too much or call too much vs 3-bets. The right response depends on your hand, your position, and your opponent's tendencies.",
        content: [
          {
            heading: "The Three Options: Call, 4-Bet, Fold",
            body: "When facing a {{3bet}}, you have three options. Fold is correct for a wide swath of your opening range — when you open LJ with KTo and face a 3-bet, that hand is a clear fold. Call is correct for hands that play well postflop and have equity vs the 3-bet range, especially {{IP}}. {{4bet}} is correct for your strongest hands (AA, KK, sometimes QQ/AKs) and your bluffs (A5s, A4s). The key mistake most players make: calling {{OOP}} with hands that don't justify it.",
            rangeChart: {
              title: "Facing a 3-bet in position (CO open vs BTN 3-bet)",
              ranges: [
                { hands: "AA, KK", color: '#C8A84B', label: "4-bet value" },
                { hands: "QQ, AKs, AKo", color: '#E07840', label: "4-bet or call" },
                { hands: "JJ, TT, 99, AJs, ATs, KQs", color: '#4AAF7A', label: "Call IP" },
                { hands: "A5s, A4s", color: '#5A8ED4', label: "4-bet bluff" },
              ],
            },
          },
          {
            heading: "Position Dramatically Affects Your Defending Range",
            body: "IP vs a 3-bet, you can defend ~20-25% of your opening range — calls with JJ-99, AJs-ATs, KQs, and a few suited connectors. OOP, your calling range shrinks significantly — maybe 10-15%. Hands like KQo, AJo, and even TT become folds OOP because they can't navigate multistreet play well from the wrong side. The same hand that calls IP is often a fold OOP.",
          },
          {
            heading: "What to 4-Bet (and What Not To)",
            body: "A {{4bet}} range should be polar: your very strongest hands (AA, KK) and your bluffs (A4s, A5s, sometimes K4s). Don't 4-bet QQ and AK reflexively — they can profitably call IP vs an aggressive 3-bettor. Don't 4-bet KQs — it flops well and plays better as a call. 4-bet bluffs should hold the ace-blocker so they reduce villain's AA/AK combos. Sizing: 18-22bb from a standard 3-bet of 9-10bb.",
          }
        ],
        glossaryTerms: ["3bet", "4bet", "IP", "OOP", "Blocker", "Polarized"],
        quiz: [
          {
            question: "You open CO to 2.5bb. The BN 3-bets to 7.5bb. You hold KQo. What is the standard play?",
            options: [
              "4-bet to 20bb — KQo is too strong to fold",
              "Call — KQo plays well in position vs a BN 3-bet",
              "Fold — KQo is not strong enough to call a 3-bet",
              "Call only if you are deep stacked (>150bb)"
            ],
            correct: 1,
            explanation: "KQo is a profitable call in position vs a BN 3-bet. You're IP, the hand has good equity vs a 3-bet range, and it flops well (top pair broadway, strong draws). 4-betting is a mistake — KQo doesn't benefit from the blocker effect and doesn't want to be called by AA/KK. Folding gives up too much."
          },
          {
            question: "You open HJ to 2.5bb. The BB 3-bets to 9bb. You hold TT. What is the standard play?",
            options: [
              "4-bet to 22bb — TT is a value hand",
              "Call — TT has good equity and can flop sets",
              "Fold — TT is dominated by the BB's 3-bet range",
              "Shove — TT plays best as a push or fold"
            ],
            correct: 1,
            explanation: "TT is a call OOP vs a BB 3-bet at 100bb. The hand has ~55% equity vs a typical 3-bet range and can flop a set. 4-betting TT OOP bloats the pot against a range that crushes you when it 5-bets (AA, KK). Folding is too tight — TT has too much equity."
          },
          {
            question: "Why does position shrink your 3-bet calling range so dramatically?",
            options: [
              "OOP players must post additional blinds",
              "OOP you act first on every postflop street, making it harder to realize your equity",
              "Position affects preflop equity directly",
              "OOP hands face more multi-way pots"
            ],
            correct: 1,
            explanation: "When OOP, you must commit to a line before seeing what your opponent does. Medium-strength hands (TT, KQo) can't check-call profitably enough because you'll face double-barrel pressure you can't fight back against efficiently. IP, those same hands can call down or raise at the right moment."
          },
          {
            question: "Why are hands like A5s and A4s good 4-bet bluffs but KQs is not?",
            options: [
              "A5s and A4s have more equity against premiums",
              "A5s/A4s hold ace-blockers to reduce villain's AA/AK combos, while KQs plays better as a call IP",
              "KQs is too strong to be a bluff",
              "Suited aces are always better for 4-bet bluffing than suited broadways"
            ],
            correct: 1,
            explanation: "A5s and A4s reduce villain's strongest 5-bet combos (they can't have as many AA or AK if you hold an ace) and have some equity when called. KQs, on the other hand, flops well and has more value as a call IP — it makes top pair, strong draws, and straights."
          }
        ]
      },

      {
        id: "ch2-l4",
        chapter: "Chapter 3 · Lesson 4",
        title: "Blind Defense",
        concept: "The Big Blind is the only seat where pot odds are pre-loaded. You're getting a discount — use it. Under-defending invites endless stealing.",
        content: [
          {
            heading: "The Pot Odds Argument for BB Defense",
            body: "When the {{BN}} raises to 2.5bb, you've already posted 1bb in the {{BB}}. A call costs you 1.5bb more to win a pot of 4bb (your 1bb + villain's 2.5bb + 0.5bb SB). Pot odds = 1.5 ÷ (1.5 + 4) = 27%. You need roughly 27% equity to call. Most hands you'd consider defending have well over 27% equity vs a BN opening range — even 73s has ~38% equity. The math favors defending widely.",
          },
          {
            heading: "Defense Frequencies by Steal Position",
            body: "The tighter the steal range, the fewer hands you defend. Against a wide BN steal (~45%), BB defends ~60% of hands. Against a tighter HJ open (~16%), BB defends ~35%. These numbers are derived from {{MDF}} — if you fold more than this, you're giving the opener a license to steal profitably regardless of hand.",
            table: [
              { pos: "vs BN", full: "Defend ~60%", note: "Wide open range — pot odds justify many calls" },
              { pos: "vs CO", full: "Defend ~50%", note: "Slightly tighter — still many marginal calls profitable" },
              { pos: "vs HJ", full: "Defend ~38%", note: "Tighter range — fold more broadway rags, offsuit connectors" },
              { pos: "vs LJ", full: "Defend ~30%", note: "Tightest range — their range has you crushed more often" },
            ]
          },
          {
            heading: "SB Defense Is Different",
            body: "The {{SB}} posts 0.5bb but plays {{OOP}} for the rest of the hand against both the opener and the {{BB}}. SB defense is significantly tighter than BB defense — you don't have the same pot odds (1bb discount) and you'll be the first to act postflop in a multiway pot. The standard SB strategy: 3-bet or fold most hands. Flatting from SB closes action to the BB, can create awkward multiway pots, and leaves you OOP without the lead.",
          }
        ],
        glossaryTerms: ["BB", "SB", "BN", "MDF", "OOP", "3bet", "PotOdds"],
        quiz: [
          {
            question: "BN opens to 2.5bb. BB has already posted 1bb. What are your pot odds to call?",
            options: ["33%", "27%", "40%", "20%"],
            correct: 1,
            explanation: "You call 1.5bb more to win a pot of 5.5bb (1bb posted + 2.5bb from BN + 0.5bb SB + your 1.5bb call = total pot 5.5bb). Risk / (Risk + Reward) = 1.5 / (1.5 + 4) = 27%. You need 27% equity to break even on the call."
          },
          {
            question: "Why does BB defend a wider range vs a BN open than vs an LJ open?",
            options: [
              "BN position is weaker postflop",
              "The BN's range is wider so you have more equity vs it; LJ's tighter range dominates more hands",
              "The SB folds more often to BN opens",
              "LJ opens give BB worse pot odds"
            ],
            correct: 1,
            explanation: "BN opens ~45% of hands — a wide range that includes speculative hands your BB range competes with well. LJ opens ~13% — a tight range that has more big pairs and strong broadways that crush your BB calling range. Defending at the same frequency vs both would mean calling with hands that have negative EV vs LJ's range."
          },
          {
            question: "Why is flatting from SB generally weaker than 3-betting or folding?",
            options: [
              "SB has worse pot odds than BB",
              "Flatting from SB closes action and forces you OOP in a multiway pot with the weakest hand",
              "SB cannot profitably call any raises",
              "SB position is always last to act preflop"
            ],
            correct: 1,
            explanation: "When SB flats, BB is still left to act — they can 3-bet, creating a multiway pot where SB is sandwiched OOP between two players. 3-betting from SB puts the pressure back on the opener and defines your hand clearly. Folding is clean. Flatting is the weakest option."
          },
          {
            question: "What does MDF tell you in the context of blind defense?",
            options: [
              "The maximum number of hands you should play from the blinds",
              "The minimum frequency you must defend to prevent profitable auto-stealing",
              "The minimum expected profit from blind defense",
              "How often the dealer should steal the blinds"
            ],
            correct: 1,
            explanation: "MDF (Minimum Defense Frequency) is the fraction of your range you must defend to make a bet break-even for the attacker. In blind play, if you fold more than MDF vs a steal, the opener profits regardless of their hand — they can literally open 100% and show profit. Defending at least MDF removes that option."
          }
        ]
      },

      {
        id: "ch2-l5",
        chapter: "Chapter 3 · Lesson 5",
        title: "4-Betting: When and How",
        concept: "If you never 4-bet bluff, your 4-bet range becomes readable. Fold to it with anything under QQ, call with QQ-KK, and 5-bet shove AA. You become a machine.",
        content: [
          {
            heading: "Constructing a 4-Bet Range",
            body: "A {{4bet}} range is always polar: strong value at the top, bluffs at the bottom, nothing in between. Value: AA (always), KK (almost always), QQ and AKs are borderline. Bluffs: A5s, A4s, A3s — hands with the ace blocker that reduce the number of AA and AK combos villain can hold, plus some backdoor equity. Hands like JJ, TT, KQs are too strong to fold but too speculative to 4-bet bluff with — they go in the calling range.",
          },
          {
            heading: "4-Bet Sizing",
            body: "Standard 4-bet sizing is 2-2.5x the 3-bet: if villain 3-bets to 9bb, 4-bet to 20-22bb. This size makes it mathematically difficult for villain to call without a premium hand, while not over-committing your stack before the flop. At 100bb, a 22bb 4-bet leaves a roughly pot-sized shove available on the flop — useful for continuing your story postflop.",
          },
          {
            heading: "Responding to a 4-Bet",
            body: "When you face a {{4bet}}, your options simplify dramatically. Most hands that called or 3-bet are now too weak to continue — fold KQs, JJ, TT unless stacks are very deep. 5-bet shove your value (AA, KK) and fold your bluffs (A5s, etc. — they've served their purpose by getting folds). Flatting a 4-bet is almost always a mistake at 100bb: the {{SPR}} becomes so low that postflop play is largely commitment-or-fold anyway, and you'd rather play that as a shove or fold preflop.",
          }
        ],
        glossaryTerms: ["4bet", "3bet", "SPR", "Polarized", "Blocker", "5bet"],
        quiz: [
          {
            question: "You 3-bet to 9bb and get 4-bet to 22bb. You hold AKo. What is the standard play at 100bb?",
            options: [
              "Fold — you're behind the 4-bet range",
              "Call — AKo has good equity and can flop top pair",
              "5-bet shove — AKo is near the top of your range",
              "5-bet to 45bb for pot control"
            ],
            correct: 2,
            explanation: "AKo is a 5-bet shove at 100bb. You have ~43% equity vs KK and ~32% vs AA, and you dominate QQ and all bluffs. With a 22bb 4-bet already in and 100bb stacks, a call would leave a ~0.5 SPR on the flop — you'd be committing the rest of your stack anyway. Get it in now."
          },
          {
            question: "Why is A4s a better 4-bet bluff than K9s?",
            options: [
              "A4s has more raw preflop equity",
              "A4s holds an ace-blocker, reducing villain's AA and AK combos; K9s doesn't",
              "K9s is too weak to bluff with",
              "A4s is always suited while K9s is not"
            ],
            correct: 1,
            explanation: "When you 4-bet bluff with A4s, villain can have fewer AA and AK combos (you hold an ace). This makes it less likely they hold the hands that call or 5-bet you profitably. K9s doesn't reduce their strongest combos at all — it's a worse bluffing candidate."
          },
          {
            question: "You 3-bet from BB, and CO 4-bets to 22bb at 100bb stacks. You hold JJ. What is standard?",
            options: [
              "5-bet shove — JJ is too good to fold",
              "Call — set mine post-flop",
              "Fold — JJ is a marginal hand vs a 4-bet range",
              "Call only if you have pot odds"
            ],
            correct: 2,
            explanation: "JJ faces a polar 4-bet range of AA, KK, QQ, AKs, and bluffs. You have ~40% equity vs QQ+/AK. However, flatting a 4-bet at 100bb leaves SPR ~0.5 — all-in on the flop with one pair is not a comfortable spot. Folding JJ to a tight 4-bettor is standard. Shoving is only correct against very aggressive 4-bettors."
          },
          {
            question: "What is the standard 4-bet size vs a 3-bet of 9bb?",
            options: ["12bb", "16bb", "20-22bb", "30bb"],
            correct: 2,
            explanation: "4-bet to approximately 2-2.5x the 3-bet. On a 9bb 3-bet, that's 18-22bb. This sizing makes most speculative hands unprofitable to call while leaving workable stack geometry for the postflop continuation."
          }
        ]
      },

      {
        id: "ch2-l6",
        chapter: "Chapter 3 · Lesson 6",
        title: "Preflop Bet Sizing",
        concept: "Your open size is a tool, not a habit. Raising to 3bb from every seat at every stack depth is leaking money and giving away information.",
        content: [
          {
            heading: "The Standard Open: 2–2.5bb",
            body: "In a standard 6-max cash game at 100bb, the default open is 2-2.5bb. This gives the blinds unfavorable pot odds without over-investing preflop with hands that miss the flop 65% of the time. Opening to 3bb or more is common at small stakes but is suboptimal at equilibrium — you build a bigger pot out of position when you miss, and you commit more chips with a wide range.",
          },
          {
            heading: "When to Adjust Your Size",
            body: "Size up when there are limpers: add 1bb per limper on top of your standard raise (2.5bb + 1bb per limper). This punishes passive entries. Size up when effective stacks are short (<50bb) — larger preflop sizing reduces postflop SPR problems. Size down slightly in late position — 2bb from the {{BN}} is standard. Size up slightly from {{EP}} — 2.5bb signals a tighter range and builds a slightly better pot geometry for the multistreet hands you'll play.",
          },
          {
            heading: "3-Bet Sizing IP vs OOP",
            body: "When {{IP}}, 3-bet to approximately 3x the open: a 2.5bb open becomes a 7.5-8bb 3-bet. When {{OOP}}, 3-bet to 3.5-4x: the same 2.5bb open becomes 9-10bb. The additional size OOP has two effects: it prices out speculative callers (suited connectors and small pairs that want to play cheap) and compensates for your postflop disadvantage by extracting more money when they fold and putting them in a tougher spot when they call.",
          }
        ],
        glossaryTerms: ["RFI", "3bet", "BN", "EP", "IP", "OOP", "SPR"],
        quiz: [
          {
            question: "There are two limpers before you on the CO. You decide to raise. What is a standard sizing?",
            options: ["2.5bb", "3bb", "4.5-5bb", "7bb"],
            correct: 2,
            explanation: "The standard adjustment for limpers is: add 1bb per limper to your standard open. With two limpers and a standard 2.5bb open, that's 2.5bb + 2bb = 4.5bb. This punishes the passive entries and creates a pot that isn't trivially cheap to see a flop."
          },
          {
            question: "Why is opening to 3bb every hand from every position a mistake?",
            options: [
              "It is always correct to open 3bb",
              "3bb opens are too small in early position",
              "You over-invest preflop with your full opening range, which misses the flop 65% of the time",
              "3bb violates the minimum raise rule"
            ],
            correct: 2,
            explanation: "A 2.5bb open risks 1.5bb more than a limp. A 3bb open risks 2bb. Over thousands of hands, that extra 0.5bb per open — especially with speculative hands that miss often — adds up significantly. The 2-2.5bb standard is optimal because it applies enough pressure without over-committing."
          },
          {
            question: "You open the HJ to 2.5bb. The BB 3-bets to 8bb (IP logic wrong — BB is OOP). Villain actually 3-bets from BN to 8bb. This seems too small for a BN 3-bet. What is the correct BN 3-bet sizing?",
            options: ["6bb", "7.5bb", "9-10bb", "12bb"],
            correct: 1,
            explanation: "BN is IP vs the opener. IP 3-bet sizing is approximately 3x the open. On a 2.5bb open, that's 7.5bb. Larger sizing is correct from OOP positions (BB 3-bets to 9-10bb); IP you can use a smaller size and play a larger pot with positional advantage."
          },
          {
            question: "Why do OOP 3-bets use a larger size than IP 3-bets?",
            options: [
              "To generate more rake",
              "OOP hands have more equity",
              "To price out speculative callers and compensate for positional disadvantage on every postflop street",
              "OOP players need to build a bigger pot to win"
            ],
            correct: 2,
            explanation: "When you 3-bet OOP (e.g., from the BB), you'll play every remaining street at a disadvantage. A larger 3-bet size extracts more when villain folds, and when called, creates a larger pot that justifies aggressive OOP play. It also prices out small pairs and suited connectors that would otherwise profitably set-mine IP."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch3",
    title: "C-Betting & Board Textures",
    description: "The continuation bet is the most common postflop line in poker — and the most commonly misused.",
    lessons: [
      {
        id: "ch3-l1",
        chapter: "Chapter 4 · Lesson 1",
        title: "The C-Bet Decision",
        concept: "C-betting every flop as the preflop raiser is one of the most common leaks in poker. The flop texture — not your hand — should drive the decision.",
        content: [
          {
            heading: "Why C-Bets Work",
            body: "A {{Cbet}} works because your preflop range is wider and stronger than the caller's range on most boards. When you raised from EP and were called, your range contains AA, KK, QQ, AK — hands that hit nearly every high board. Your opponent's calling range skews toward medium pairs and suited connectors. On an A♠K♦7♣ flop, you have range advantage: most of the big hands belong to you. Betting captures that advantage immediately.",
          },
          {
            heading: "When the C-Bet Is High Frequency",
            body: "C-bet frequently: (1) when you have clear range advantage — dry high boards (A72, K83) as the preflop aggressor; (2) when you're {{IP}} — you can c-bet small and control the pot; (3) when the board contains many possible two-pair and straight combinations that favor your range. High frequency c-bets use a small size — 25-33% of pot — because you're betting a wide range and need your bluffs to be cheap.",
          },
          {
            heading: "When to Check Instead",
            body: "Check: (1) when the board favors the caller's range — low connected boards (7♠6♦5♣) hit the BB's wide defense range more than your tight EP range; (2) when you're {{OOP}} and the board is dynamic — you face raises and check-call decisions with no information; (3) to balance — if you always c-bet strong hands, attentive players will check-raise you whenever you bet. A checking range that includes strong hands is not optional.",
          }
        ],
        glossaryTerms: ["Cbet", "IP", "OOP", "Range", "NutAdv"],
        quiz: [
          {
            question: "You open LJ, BB calls. Flop is A♠7♦2♣. Who has range advantage and why?",
            options: [
              "BB — they have more hands that include a 7 or 2",
              "LJ — their range contains AK, AQ, AJ, AA; BB's range rarely has top pair",
              "Neither — both ranges hit an ace equally",
              "LJ only if they have an ace in their hand"
            ],
            correct: 1,
            explanation: "LJ's range is full of AK, AQ, AJ, and AA — hands that connect directly with this ace-high dry board. BB's calling range vs LJ skews toward medium pairs, suited connectors, and broadways that mostly miss A72 rainbow. LJ has overwhelming range advantage here."
          },
          {
            question: "You open BN, BB calls. Flop is 7♣6♦5♥. Should you c-bet high frequency?",
            options: [
              "Yes — you raised, so you always have the betting lead",
              "No — this board heavily favors BB's wide calling range of suited connectors and small pairs",
              "Yes — small pairs are rare in BB's range",
              "Yes, but only if you have a pair"
            ],
            correct: 1,
            explanation: "765 connected boards are exactly what BB's wide calling range (suited connectors, small pairs, gap connectors) hits hard. BB has more straights, two-pairs, and trips here than your BN range. Check-back and reassess or bet smaller with selective hands — don't fire into a range that dominates this board."
          },
          {
            question: "What is the main reason to include strong hands in your checking range?",
            options: [
              "Strong hands make better check-raises",
              "To balance — if you only check weak hands, opponents can attack all your checks profitably",
              "Strong hands need to be concealed preflop",
              "Checking conserves pot odds"
            ],
            correct: 1,
            explanation: "If your checking range is exclusively weak hands, observant opponents will barrel every time you check, knowing you can't fight back. Including strong hands (sets, two-pairs, overpairs on wet boards) in your checking range gives those checks credibility and lets you check-raise profitably."
          },
          {
            question: "What sizing pairs with a high-frequency c-bet strategy?",
            options: [
              "75-100% pot — to build a large pot quickly",
              "25-33% pot — betting a wide range cheaply captures value with minimal risk on each individual bet",
              "50% pot — the balanced default",
              "Any size — frequency matters more than sizing"
            ],
            correct: 1,
            explanation: "High-frequency c-bets use small sizing (25-33%) because you're betting your entire range — including many bluffs and marginal hands. A small size means each individual bet loses little when called and raised, while still applying fold pressure across the opponent's entire range."
          }
        ]
      },

      {
        id: "ch3-l2",
        chapter: "Chapter 4 · Lesson 2",
        title: "Dry vs Wet Boards",
        concept: "The texture of the flop determines everything: sizing, frequency, and who should be doing the betting. Read the board before you do anything.",
        content: [
          {
            heading: "Dry Boards: Low Variance, Static Equities",
            body: "A dry board has few draws and little potential for the equity landscape to change drastically on the turn. K♠7♦2♣, A♥8♣3♦, Q♠9♦2♥ (rainbow, no connected suits). On dry boards, a hand that is ahead on the flop will usually still be ahead on the turn. This means smaller bet sizes are efficient — you don't need to charge draws because there are few draws to charge.",
          },
          {
            heading: "Wet Boards: High Variance, Dynamic Equities",
            body: "A wet board has multiple draws and rapidly shifting equities. J♥T♠9♦ (connected, one suit), 8♥7♦6♣ (straight-heavy), K♠Q♥J♦ (broadway draws). On these boards, the hand ahead on the flop can easily lose to a turn or river card. Charge draws immediately by betting larger (50-75%). On the wettest boards, even very strong hands can be in precarious positions.",
            table: [
              { pos: "K72r", full: "Dry", note: "Few draws, static equity — 33% sizing is fine" },
              { pos: "T98tt", full: "Very Wet", note: "Straights, flushes, pairs — use 66-75% to charge" },
              { pos: "AK2r", full: "Dry", note: "Ace high board favors raiser — range bet small" },
              { pos: "JT5tt", full: "Wet", note: "Flush draw + straight draw — protect with larger size" },
              { pos: "A65r", full: "Semi-Wet", note: "Some draws (64s, 74s), but manageable — 50% sizing" },
            ]
          },
          {
            heading: "Two-Tone vs Rainbow",
            body: "A rainbow board (three different suits) has no flush draws. A two-tone board (two of the same suit) introduces 9 flush draw combinations. On rainbow boards, equity is more static and smaller bets work. On two-tone boards, flush draws need to be charged — size up by 15-20% compared to your rainbow sizing. A board that is both connected and two-tone (J♥T♠9♥) warrants your largest c-bet sizing.",
          }
        ],
        glossaryTerms: ["Cbet", "FD", "OESD", "Eq", "IP"],
        quiz: [
          {
            question: "Which board warrants the largest c-bet sizing?",
            options: ["A♠7♦2♣", "K♠9♦3♥", "J♥T♦9♥", "Q♠8♦2♣"],
            correct: 2,
            explanation: "J♥T♦9♥ is connected and two-tone — it has open-ended straight draws, flush draws, and many two-pair combinations that shift equity rapidly. This is the wettest possible board and warrants your largest sizing (66-75%) to charge draws and protect your made hands."
          },
          {
            question: "Why do dry boards allow smaller c-bet sizing?",
            options: [
              "Players fold more on dry boards",
              "There are few draws to charge — equity changes slowly, so you don't need to price anyone out immediately",
              "Dry boards always favor the preflop raiser",
              "Smaller sizes generate more fold equity"
            ],
            correct: 1,
            explanation: "On dry boards, the hand that is ahead on the flop stays ahead most of the time because there are few turn/river cards that dramatically change the equity picture. Without draws to charge, a 25-33% sizing captures value and folds without over-investing."
          },
          {
            question: "How does a two-tone flop change your sizing vs a rainbow flop?",
            options: [
              "It doesn't — sizing is based on hand strength, not texture",
              "Two-tone boards introduce flush draws that need to be charged — size up 15-20%",
              "Two-tone boards require checking your strong hands",
              "Two-tone boards always favor the preflop caller"
            ],
            correct: 1,
            explanation: "A two-tone board creates 9 flush draw combinations your opponent may hold. If you let them see a turn cheaply (or for free), they realize their 35% equity. Sizing up forces them to pay to draw, and increases your EV when they call with a draw that misses."
          },
          {
            question: "On A♣K♦7♥ (rainbow), you c-bet 33% and get called. The turn is 7♦. Is this board now wetter or drier?",
            options: [
              "Wetter — paired boards are always more dangerous",
              "About the same — it's still low-variance, the pair mostly changes two-pair combinations",
              "Drier — fewer cards can hurt you",
              "It depends entirely on what villain holds"
            ],
            correct: 1,
            explanation: "A paired turn on a dry board doesn't introduce new draws — it slightly shifts the two-pair/full-house range distribution. The board remains relatively static. Your value hands (AK, AK top two pair) become more vulnerable to some trips, but the overall texture is still manageable with continued medium sizing."
          }
        ]
      },

      {
        id: "ch3-l3",
        chapter: "Chapter 4 · Lesson 3",
        title: "C-Betting In Position",
        concept: "When you're IP, c-bets can be frequent and small. Position lets you control the size of the pot without risking as much per bet.",
        content: [
          {
            heading: "Range Betting IP on Dry Boards",
            body: "On dry, low boards where you have range advantage — say A♠7♦2♣ as the preflop raiser {{IP}} — you can bet your entire range at a small size (25-33% pot). This is called a range bet. Because your whole range connects with this board better than the opponent's range, betting 100% of your hands at a small size is profitable: you take down many pots with weak hands and get value with strong ones, without over-investing.",
          },
          {
            heading: "When to Use Larger Sizing IP",
            body: "On wet or draw-heavy boards, or when you hold a strong hand on a dangerous texture, size up (50-75%). Examples: you have top set on a two-tone board, you have AA on a J♥T♠9♦ flop. Here you want to charge draws immediately rather than give them a cheap card. The cost of a check-back or small sizing is too high — one free card can cost you the pot.",
          },
          {
            heading: "The IP Check-Back",
            body: "Checking back the flop {{IP}} is not weakness — it's often the highest EV line with medium-strength hands. With second pair, weak top pair, a gutshot, or an overpair on a very wet board, checking preserves your equity in a manageable pot. It also constructs a balanced checking range — if you always bet IP, your range becomes readable. A turn bet after checking the flop (delayed c-bet) looks like weakness exploiting, but is often a strong semi-bluff.",
          }
        ],
        glossaryTerms: ["Cbet", "IP", "Range", "GS", "SDV"],
        quiz: [
          {
            question: "What is a 'range bet' and when is it appropriate IP?",
            options: [
              "Betting all-in with any hand",
              "Betting your entire range at a small size when you have clear range advantage on a dry board",
              "Betting based on the range of bet sizes available",
              "A bet made only with the top of your range"
            ],
            correct: 1,
            explanation: "A range bet means betting 100% of your hands at a small size (25-33%) on boards where your entire range has an advantage. Because every hand in your range connects better with the board than villain's, you can fire cheaply across all your holdings."
          },
          {
            question: "You are IP on a J♥T♠9♦ flop with top set (JJ). What sizing is appropriate?",
            options: [
              "25% — small sizing to keep villain in",
              "50-75% — charge draws immediately on this very wet board",
              "100%+ — this board requires an overbet",
              "Check — trap for a check-raise"
            ],
            correct: 1,
            explanation: "JJ on JT9 is an extremely vulnerable hand — flush draws and straight draws have significant equity against top set. Betting 50-75% charges draws and builds the pot for future streets. Checking to trap is risky because many turns will kill your action or complete draws."
          },
          {
            question: "You check back the flop IP with KQ on a K♣8♥3♠ board. On the turn, 5♦ comes. Should you now bet?",
            options: [
              "No — you already checked, showing weakness",
              "Yes — this is the delayed c-bet. Your turn bet after a check-back is a credible and profitable line",
              "Only if villain checks",
              "Yes, but only if villain has shown weakness by checking"
            ],
            correct: 1,
            explanation: "The delayed c-bet (checking flop, betting turn) is a standard and profitable line. After you check-back, villain expects weakness. A turn bet from a 'weak' range is harder to fight than a direct c-bet. With KQ on K83, a turn bet is good — you have top pair with good kicker and can get value."
          },
          {
            question: "Why does checking back IP help balance your range?",
            options: [
              "It prevents villain from bluffing",
              "If you only check weak hands and always bet strong ones, attentive opponents know your check means weakness and attack it",
              "Check-backs never need balancing because they're passive",
              "IP players are not required to balance"
            ],
            correct: 1,
            explanation: "If your IP checking range is only gutshots and missed overcards, opponents learn to barrel you every time you check — they know you can't fight back. Including strong hands (sets, two-pairs, overpairs) in your check-back range makes your checks credible and lets you check-raise profitably."
          }
        ]
      },

      {
        id: "ch3-l4",
        chapter: "Chapter 4 · Lesson 4",
        title: "C-Betting Out of Position",
        concept: "OOP c-bets carry more risk. You bet into an opponent who can raise you with perfect information. Bet less often, but when you do, bet larger.",
        content: [
          {
            heading: "The OOP C-Bet Is Different",
            body: "When you c-bet {{OOP}}, your opponent can call and then attack on later streets with full information about your line. Or they can raise immediately, putting you in a painful check-raise spot. You bet, then face all future decisions first. This is why OOP c-bet frequency is lower (~40-55% of flops vs ~60-70% {{IP}}) and sizing is larger. You need hands that warrant the risk — not every hand you'd happily bet {{IP}} is worth betting {{OOP}}.",
          },
          {
            heading: "When OOP C-Bets Are Right",
            body: "C-bet OOP when: (1) you have a strong made hand that wants to build the pot — top pair top kicker, sets, two pair; (2) you have a strong draw on a wet board — the semi-bluff forces folds and gives you outs when called; (3) the board is static and favors your range (A-high boards as EP raiser). Avoid c-betting OOP with pure bluffs on boards that favor the caller — the risk-reward is poor when you often face raises or calls that put you in difficult spots.",
          },
          {
            heading: "OOP Sizing: Larger for Protection",
            body: "When you c-bet OOP, use 50-75% of the pot as your standard. The larger size: (1) forces tougher decisions on draws and medium pairs; (2) extracts more value when called by weaker made hands; (3) compensates for positional disadvantage by building a larger pot where strong hands win more. Smaller OOP c-bets (25-33%) invite calls from a wide range that then has full positional advantage for the rest of the hand.",
          }
        ],
        glossaryTerms: ["Cbet", "OOP", "IP", "Cbet", "Range", "SDV"],
        quiz: [
          {
            question: "Why is OOP c-bet frequency lower than IP c-bet frequency?",
            options: [
              "OOP players have weaker ranges",
              "OOP you act first on all streets — you're more vulnerable to raises and future pressure without information",
              "OOP players don't have c-betting rights",
              "IP c-bets are always more profitable regardless of hand"
            ],
            correct: 1,
            explanation: "When betting OOP, you face pressure from an opponent who can raise you (knowing your bet showed some strength), and on future streets you must act first without knowing if they'll bet. This asymmetry means OOP c-bets work best with strong hands and semi-bluffs — not with the wide range you can use IP."
          },
          {
            question: "You are OOP as the SB vs a BN caller. Flop is 9♠8♦7♦. You hold A♥A♣. Should you c-bet?",
            options: [
              "No — check to protect against a raise",
              "Yes — AA is strong enough to c-bet OOP and build a pot, even on a wet board",
              "Yes, but only 25% to keep the pot small",
              "Check-raise only"
            ],
            correct: 1,
            explanation: "AA is a strong hand worth building a pot with, even OOP on a wet board. C-bet at 50-66% to charge straight and flush draws and get value from pairs. Checking risks giving a free card to 14-15 out hands (flush draw + straight draw). On wet boards, protection is critical."
          },
          {
            question: "You are OOP as BB vs CO. Flop is A♥6♣2♠ (rainbow). You hold 6♦6♥ (a set). What sizing is appropriate?",
            options: [
              "25% — keep the pot small to protect against an ace",
              "33% — dry board, small size is efficient",
              "50-66% — you want to build the pot with a set even OOP",
              "Check — sets should always be slow-played"
            ],
            correct: 2,
            explanation: "A set on A62r is a very strong hand. You want to build the pot for future streets. OOP sizing should be 50-66% — this builds value and makes it difficult for drawing hands (unlikely on this dry board) to call profitably. Checking risks giving a free card and missing value."
          },
          {
            question: "Why is a small OOP c-bet (25-33%) often a mistake?",
            options: [
              "Small bets are never appropriate OOP",
              "It invites calls from a wide range that plays the rest of the hand with positional advantage on the cheap",
              "Small bets violate minimum raise requirements",
              "OOP players must always bet at least 50%"
            ],
            correct: 1,
            explanation: "A small OOP c-bet gives your opponent excellent pot odds to call with draws, medium pairs, and floats — and they have position on you for every remaining street. You're building a pot you'll be disadvantaged in. Either check (protect by not building the pot) or bet big enough to make speculative calls unprofitable."
          }
        ]
      },

      {
        id: "ch3-l5",
        chapter: "Chapter 4 · Lesson 5",
        title: "Flop Bet Sizing",
        concept: "Bet sizing is not one size fits all. Small on dry boards, large on wet ones. Matching your size to the texture is a skill most players never develop.",
        content: [
          {
            heading: "The Three Sizing Buckets",
            body: "Small (25-33%): use on dry boards when betting your entire range or a wide portion of it. The logic: few draws exist, equity changes slowly, you can bet cheaply and frequently. Medium (50%): standard sizing on mixed-texture boards — some draws present, some range advantage. Large (66-100%): wet boards with many draws, polarized ranges (turn/river), or when you need to charge draws and protect vulnerable made hands. Overbets (>pot) appear on specific high-card run-outs where your range has a nut advantage.",
          },
          {
            heading: "Pot Geometry: Planning Ahead",
            body: "Your flop bet size determines the pot size on the turn, which determines how much you can comfortably bet on the river. A 33% flop c-bet leaves a pot of ~2x the original. A 75% flop c-bet leaves a pot of ~2.75x. If you always bet 75% on the flop, your turn and river stacks will be committed faster — fine with strong hands, painful when you miss and have to give up. Plan three streets from the flop.",
          },
          {
            heading: "Sizing to Board Texture",
            body: "Here is the practical rule: dry board + IP + range advantage = small (25-33%). Wet board + any position + draws present = medium to large (50-75%). Polar range (strong hands and air, nothing medium) + any board = large to overbet (75-125%). You're not sizing to your specific hand — you're sizing to your range. The size reveals how your range interacts with the board.",
            table: [
              { pos: "A72r", full: "25-33%", note: "Dry, range advantage for raiser — bet entire range small" },
              { pos: "KQ5tt", full: "50-66%", note: "Semi-wet — flush draw present, some range advantage" },
              { pos: "JT9dd", full: "66-75%", note: "Very wet — charge all draws, protect made hands" },
              { pos: "K72tt", full: "33-50%", note: "Dry board, two-tone — slight adjustment for flush draws" },
              { pos: "AK2r", full: "25-33%", note: "Static, raiser dominates — range bet small" },
            ]
          }
        ],
        glossaryTerms: ["Cbet", "SPR", "Polarized", "FD", "IP", "OOP"],
        quiz: [
          {
            question: "You open BN, BB calls. Flop K♣7♦2♠ (rainbow). You are IP. What sizing is optimal?",
            options: ["50-66%", "75-100%", "25-33%", "Check"],
            correct: 2,
            explanation: "K72 rainbow is a dry board where BN's range has clear advantage (AK, KQ, KJ etc.). With few draws to charge and a range advantage, 25-33% is the efficient size — you bet your entire range cheaply and capture fold equity without over-investing with your many missed hands."
          },
          {
            question: "You are OOP on J♥T♦9♥. You hold A♥K♣. What is the correct c-bet sizing?",
            options: ["25%", "33%", "66-75%", "Check always — too wet to bet OOP"],
            correct: 2,
            explanation: "JT9 with a heart flush draw is one of the wettest possible flops. Even OOP with just two overcards, if you bet, you must bet large (66-75%) to charge draws and make impure floats unprofitable. However, with only overcards OOP here, checking is also a reasonable option — the board heavily favors calling ranges."
          },
          {
            question: "What does a 75% flop c-bet do to your postflop stack geometry?",
            options: [
              "Nothing — stack geometry is fixed by preflop sizing",
              "It reduces SPR on the turn, committing stacks faster — fine with strong hands, harmful when you're bluffing and need to give up",
              "It prevents opponents from bluffing on the turn",
              "It always creates a better pot size for the river"
            ],
            correct: 1,
            explanation: "A 75% flop bet leaves a smaller SPR going to the turn. If you hold a strong hand, this is fine — you're building toward getting stacks in. If you hold a bluff or weak hand and face resistance, you've inflated the pot for a story you can't continue comfortably."
          },
          {
            question: "When is an overbet (>pot) sizing appropriate on the flop?",
            options: [
              "Whenever you have a premium hand",
              "On specific boards where your range has a massive nut advantage that the opponent's range cannot compete with",
              "Against bad players who call too much",
              "Never — oversized bets reveal strong hands"
            ],
            correct: 1,
            explanation: "Overbets make sense when your range has a nut advantage — many very strong hands that the opponent's range can't match. For example, as the 3-bettor on an A-high board vs the caller: you hold AA/AK at higher frequency. On specific boards, an overbet with your entire range (including bluffs) is profitable because the opponent can't match your nuts."
          }
        ]
      },

      {
        id: "ch3-l6",
        chapter: "Chapter 4 · Lesson 6",
        title: "Building a Checking Range",
        concept: "Your checking range on the flop is not your trash. If it is, attentive opponents will run you over. Include strong hands. Check-raise them.",
        content: [
          {
            heading: "Why a Balanced Checking Range Is Mandatory",
            body: "If you only c-bet strong hands and check weak ones, an observant opponent has perfect information every time you check: you're weak, and they should bet. You'll check, they'll bet, you'll face a tough fold decision with your entire checking range. A balanced checking range includes some strong hands — sets, two-pairs, strong overpairs on wet boards — so that checking doesn't immediately signal weakness.",
          },
          {
            heading: "What Belongs in Your IP Check-Back Range",
            body: "Check back {{IP}}: (1) medium-strength made hands — second pair, weak top pair — that prefer pot control over building; (2) hands with good backdoor draws that can improve on the turn and then bet the delayed c-bet; (3) strong hands on very wet boards where checking protects you from a raise and sets up a check-raise later; (4) combo draws on boards where you'd rather realize equity against a narrowed range. Don't check back strong hands routinely — but include them selectively.",
          },
          {
            heading: "The Check-Raise: Your OOP Weapon",
            body: "{{OOP}}, the check-raise is your primary tool for building pots with strong hands and bluffs. Check-raise frequency on the flop as the preflop raiser should be ~8-12% of all check-raise attempts. Value check-raises: sets, two-pairs, strong top pairs on wet boards. Bluff check-raises: strong draws (flush draws with straight draw potential), combo draws. Size: check-raise to 2.5-3x the c-bet. This forces the IP player to have a strong hand to continue and extracts maximum value from your made hands.",
          }
        ],
        glossaryTerms: ["Cbet", "IP", "OOP", "SDV", "Range", "FD"],
        quiz: [
          {
            question: "You are IP on K♠7♦2♣. You check back. Villain leads the turn for 60%. What does your check-back suggest about your range — and why is including strong hands important?",
            options: [
              "Your check-back always means you missed — there's nothing strong in your check-back range",
              "If your check-back range includes strong hands, villain cannot assume weakness and attack freely",
              "Check-backs IP always mean you have top pair",
              "Turn bets after a check-back are always bluffs"
            ],
            correct: 1,
            explanation: "If your check-back range is exclusively weak, every check signals 'please bet' to attentive opponents. By including sets, two-pairs, and strong draws in your IP check-back range, your check-back keeps villains honest — they risk facing a raise or call from a strong hand when they try to exploit."
          },
          {
            question: "You check-raise the flop OOP. What is the standard sizing vs a 33% c-bet?",
            options: ["2x the bet (pot-sized)", "2.5-3x the bet", "5x the bet (punishing)", "Min-raise"],
            correct: 1,
            explanation: "Check-raising to 2.5-3x the c-bet is standard. On a 33% pot c-bet (say, 3.3bb into a 10bb pot), check-raise to ~9-10bb. This forces the bettor to have a strong hand to continue, builds the pot efficiently with your strong made hands, and makes semi-bluff check-raises profitable when villain folds."
          },
          {
            question: "Which hand type is an ideal OOP check-raise bluff on a wet board?",
            options: [
              "Ace-high with no draw",
              "Middle pair with weak kicker",
              "A strong combo draw — e.g., flush draw + straight draw or flush draw + overcards",
              "Any two-card hand that can bluff"
            ],
            correct: 2,
            explanation: "Combo draws (flush draw + OESD, or flush draw + two overcards) are the best check-raise bluffs: they have 12-15 outs when called, so they're barely even bluffs — they have substantial equity even when not getting a fold. Plus the check-raise itself generates additional fold equity."
          },
          {
            question: "You are OOP on A♠8♥3♦. You hold A♥J♦ (top pair, decent kicker). Should you c-bet or check?",
            options: [
              "Always c-bet — TPTK is a strong hand",
              "Check — TPTK prefers to check-call and pot-control on this dry board OOP",
              "C-bet 50-66% to build the pot with a strong hand",
              "C-bet 25% as a cheap value bet"
            ],
            correct: 2,
            explanation: "TPTK on A83r is a strong hand worth building a pot with, even OOP. C-bet 50-66%: it's a hand you want to value-bet, and the dry board won't change dramatically on the turn. Checking TPTK OOP on a static board is over-cautious — you're leaving value on the table by not building with the best hand."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch4",
    title: "Turn & River Play",
    description: "Most players know how to c-bet the flop. Few know what to do on the turn and river when hands get complicated.",
    lessons: [
      {
        id: "ch4-l1",
        chapter: "Chapter 5 · Lesson 1",
        title: "The Turn Decision",
        concept: "The turn is where plans get tested. The card changes everything — or nothing. You need to know which, and decide before it comes.",
        content: [
          {
            heading: "What Changed on the Turn?",
            body: "Every turn card reshapes the equity landscape. Ask three questions: (1) Did this card hit my range or my opponent's range? A K on the turn as the preflop aggressor improves your range more than theirs. A low connected card completing a possible straight hits calling ranges harder. (2) Did this card change the draw situation? A flush-completing card on the turn destroys value bets with medium made hands. (3) What does my line look like given what I've done so far?",
          },
          {
            heading: "Continue vs Give Up",
            body: "After a flop c-bet, you'll face a turn decision with a wide range of hands. The key question is: does this hand benefit from continuing? Value hands (top pair+) almost always continue. Semi-bluffs with draws continue if equity justifies it. Air — hands with no pair and no draw — gives up. The mistake most players make is continuing too often with weak hands that have no path to winning the pot. A timely check on the turn (giving up) preserves chips and avoids putting money into a pot you can't win.",
          },
          {
            heading: "The Turn as a New C-Bet Opportunity",
            body: "The delayed c-bet — checking the flop and betting the turn — is a powerful and under-appreciated line. You check the flop (showing weakness), your opponent checks back (indicating they don't want to build the pot), and then you fire the turn. This line is credible because villain expects your check-back to be weak; your turn bet looks like you picked up a piece of the board. It works especially well with backdoor draws that developed on the turn into actual draws or made hands.",
          }
        ],
        glossaryTerms: ["Cbet", "IP", "OOP", "Range", "Eq", "SDV"],
        quiz: [
          {
            question: "You c-bet the flop on A♣8♦3♥. Villain calls. Turn is K♠. Who does this card help more?",
            options: [
              "Villain — they called with KQ",
              "You (the preflop aggressor) — your range includes AK, KK, and AK two-pair more than villain's calling range",
              "Neither — it's a blank",
              "Villain always benefits from turn cards"
            ],
            correct: 1,
            explanation: "As the preflop raiser, your range contains KK, AK, and KQ at higher frequency than your opponent's calling range (which is capped by not 3-betting). The K turn improves your range more than theirs — it's a good card to continue barreling."
          },
          {
            question: "You c-bet the flop with 7♥6♥ (a flush draw) on K♣9♦2♥. Villain calls. Turn is 2♠ (a blank). Should you continue?",
            options: [
              "Yes — always double barrel flush draws",
              "It depends on pot odds and whether the board texture supports a bluff",
              "No — you missed, always check",
              "Yes — pair the board cards always help bluffers"
            ],
            correct: 1,
            explanation: "With a flush draw on the turn, you have ~18% equity (9 × 2). Whether to continue depends on pot odds, your range on this board, and whether villain's range can fold enough to justify a barrel. The 2-paired board slightly reduces value hands but the flush draw still warrants a semi-bluff if the story makes sense."
          },
          {
            question: "Why is the delayed c-bet (check flop, bet turn) a strong line?",
            options: [
              "It saves money on the flop",
              "Villain expects your flop check to signal weakness — your turn bet looks like a backdoor draw developed or you picked up a piece of the board",
              "Turn bets always get more folds than flop bets",
              "It only works with strong made hands"
            ],
            correct: 1,
            explanation: "After a check-back, villain's range on the turn is typically medium hands that don't want to build a big pot. Your turn bet — into an expected-weak range — is harder to fight than a direct c-bet. It also represents a realistic story: you 'developed equity' on the turn."
          },
          {
            question: "You have complete air (no pair, no draw) on the turn after c-betting the flop. What is the standard play?",
            options: [
              "Always double barrel to represent range",
              "Check and give up — air has no path to winning the pot and continuing bleeds chips",
              "Bet small to represent a blocking bet",
              "Check-raise if villain bets the turn"
            ],
            correct: 1,
            explanation: "Pure air on the turn after a c-bet is a give-up spot. You have no equity, no draws, and no improving cards. Continuing is spewing. Check, and if villain bets, evaluate the fold equity of a raise vs a fold based on pot odds and your read — but the default is check-fold."
          }
        ]
      },

      {
        id: "ch4-l2",
        chapter: "Chapter 5 · Lesson 2",
        title: "Double Barrels",
        concept: "A double barrel is not about your hand strength. It's about whether the turn card and board texture support continued pressure on villain's range.",
        content: [
          {
            heading: "What Makes a Good Barrel Card",
            body: "Good barrel cards are ones that improve your range more than your opponent's. As the preflop raiser: high cards (A, K, Q) on paired or ace-high boards, cards that complete your backdoor flush draw, broadway cards that hit your opening range harder than a calling range. Bad barrel cards: small connected cards (5, 6, 7) that fill in straight draws and hit the caller's wide range, flush-completing cards when you don't have the flush.",
          },
          {
            heading: "Barrel Frequencies",
            body: "Not every flop c-bet should become a double barrel. Against a typical opponent, barrel ~55-65% of turn situations where you c-bet the flop. This number goes up when: the turn card improves your range, villain is a weak/tight player prone to folding, you have a strong hand or semi-bluff. It goes down when: the board completed a draw that's in villain's range, villain called with strength (no indication of draws), and you have pure air.",
          },
          {
            heading: "Triple Barreling",
            body: "A triple barrel (c-bet flop, turn, river) is a commitment to represent a specific strong hand. Your river bet must be consistent with the story you've told on the flop and turn. Triple barrel with: your strong value hands (AA, set, two-pair) that want to build across all three streets; polarized bluffs on specific river cards that miss draws (draw-completing river cards kill your story, blank rivers support it). Never triple barrel medium hands — they can't bluff effectively and don't need the action.",
          }
        ],
        glossaryTerms: ["Cbet", "Range", "Polarized", "IP", "OOP", "BDFD"],
        quiz: [
          {
            question: "You c-bet a K♦8♥3♣ flop. The turn is A♠. As the preflop raiser, is this a good barrel card?",
            options: [
              "No — aces always complete caller's draws",
              "Yes — your range contains AK, AA, AQ at higher frequency than the caller's capped range",
              "Only if you hold an ace",
              "Aces are neutral — they help both ranges equally"
            ],
            correct: 1,
            explanation: "As the preflop raiser, your range is full of AK, AA, AQ — top-of-range hands that connect perfectly with the ace turn. The caller's range is capped (no 3-bet preflop) and skews toward medium pairs and suited connectors. The A turn improves your range dramatically more than theirs."
          },
          {
            question: "You c-bet K♥T♠6♦ and the turn is 7♣. Is this a good barrel card?",
            options: [
              "Yes — 7 hits your KT range",
              "No — 7 fills in straight draws (J8, 98, 85) that are prevalent in a caller's range",
              "Yes — low cards always favor the aggressor",
              "Only if you hold a 7"
            ],
            correct: 1,
            explanation: "The 7 on KT6 completes J8 (straight), gives 98 an open-ended draw, and adds to 85s straight potential. These hands are in the caller's wide range. This is a bad barrel card for the aggressor — consider checking and re-evaluating."
          },
          {
            question: "Which hand is the best candidate for a triple barrel on Q♠J♦7♥ → 2♦ → 3♠?",
            options: [
              "T9 (missed straight draw)",
              "QJ (two pair)",
              "76s (bottom two pair)",
              "AK (no pair, no draw)"
            ],
            correct: 1,
            explanation: "QJ (two pair) is the best triple barrel candidate — it's a strong value hand that wants to build across all three streets and wins at showdown. T9 missed its draw and shouldn't be triple-barreling (the story doesn't hold). AK has nothing. 76s made two pair on the flop but the K72 board... wait, the board is QJ7 — 76s has a pair of sevens, which is a reasonable value hand but not as strong as QJ."
          },
          {
            question: "What makes triple barreling medium-strength hands a mistake?",
            options: [
              "Medium hands can never bet three streets",
              "Medium hands can't bluff effectively (they have showdown value) and don't need to build a three-street pot",
              "Triple barrels always lose money",
              "Medium hands should check-raise instead"
            ],
            correct: 1,
            explanation: "Medium hands (second pair, weak top pair, one-pair hands) have showdown value — they can win at showdown if checked down. Turning them into a triple barrel bluff sacrifices that value for fold equity you often don't need. And if called on the river, you lose to a range that beats you. Check-call instead."
          }
        ]
      },

      {
        id: "ch4-l3",
        chapter: "Chapter 5 · Lesson 3",
        title: "Delayed C-Bets",
        concept: "Checking the flop and betting the turn is not passive play — it's a specific line with a specific purpose. Learn when it's the highest EV move.",
        content: [
          {
            heading: "When to Use a Delayed C-Bet",
            body: "The delayed c-bet (check flop, bet turn) works best when: (1) you have a backdoor draw that developed into an actual draw on the turn; (2) you have a medium-strength hand that benefits from pot control on the flop but wants to bet for value or protection on the turn; (3) the turn card improves your perceived range (a high card that makes your 'weak' flop check now look like you picked up top pair); (4) you want to set up a balanced range — checking the flop with strong hands occasionally makes all your check-backs more credible.",
          },
          {
            heading: "The Backdoor Draw Line",
            body: "You hold A♥K♦ on J♥T♠5♥. You check the flop — your hand has only backdoor flush (needs 2 hearts) and overcards. Turn is Q♥ — now you have the nut flush draw + gut shot + two overcards. This is a perfect delayed c-bet: you check-back the flop 'weakly', then fire the turn as a semi-bluff with significant equity when called. Villain's range on the turn is medium-strength hands that want cheap showdowns — your bet puts them in a difficult spot.",
          },
          {
            heading: "Sizing the Delayed C-Bet",
            body: "The delayed c-bet size should be standard: 50-66% of pot is typical. The key is that the turn pot is the same size as if you had bet the flop, so you're not building a larger pot than you would have with a direct c-bet. Don't go smaller than 40% — the deceptive value of the line is in the story, not the sizing. Going too small gives away that you don't have a strong hand.",
          }
        ],
        glossaryTerms: ["Cbet", "BDFD", "IP", "OOP", "Eq", "FD"],
        quiz: [
          {
            question: "You check A♠K♦ on K♥T♦5♦. Turn is A♦ (giving you top two pair). What is this line called and why is it powerful?",
            options: [
              "A value bet — nothing special about the line",
              "A delayed c-bet — your check-back made you look weak; the turn bet now looks like a bluff or draw but you have two pair",
              "A check-raise set up",
              "Pot control with a strong hand"
            ],
            correct: 1,
            explanation: "Checking top pair on the flop and hitting top two pair on the turn gives you a deceptive line — villain thinks your check-back was weak. Your turn bet looks like you picked up the ace, but you have two pair. Villain may hero-call with worse hands thinking you're bluffing, building a bigger pot for your value."
          },
          {
            question: "You check 7♠6♠ on K♣9♦2♠. Turn is 8♠ — giving you a flush draw + open-ended straight draw. What is this and why should you bet the turn?",
            options: [
              "A weak hand — check again and hope to hit",
              "A semi-bluff with ~15 outs — fold equity + equity when called makes a turn bet highly profitable",
              "A value bet — open-ended straight draws are always strong enough to bet",
              "Only bet if villain checks first"
            ],
            correct: 1,
            explanation: "76s on a K92 board with a spade turn has a flush draw (9 outs) + OESD (8 outs, minus overlaps) ≈ 15 outs. That's approximately 30% equity on the river. With fold equity added (many hands in villain's range cannot call a turn bet), this is an excellent semi-bluff opportunity."
          },
          {
            question: "Why does including strong hands in your delayed c-bet range help your bluffs?",
            options: [
              "Strong hands have more equity",
              "If you only delay c-bet with draws and air, villain learns to call your delayed c-bets — including strong hands keeps them honest",
              "Strong hands don't need to be in the range",
              "It doesn't matter what else is in your range"
            ],
            correct: 1,
            explanation: "If your delayed c-bet always means 'I have a draw or semi-bluff', attentive opponents call with any made hand. Including value hands (sets you slow-played, two-pairs) in your delayed c-bet range means villain faces a tougher decision when you bet the turn — they can't profitably call all your bets."
          },
          {
            question: "What sizing is standard for a delayed c-bet on the turn?",
            options: ["25-33% — keep it small since you showed weakness", "50-66% — standard turn sizing tells the full story", "75-100% — larger because you gave a free card", "Min-bet to keep the pot small"],
            correct: 1,
            explanation: "50-66% is standard for delayed c-bets. Going too small (25%) signals a weak blocker bet. Going too large (100%) over-represents strength and commits too much with semi-bluffs. 50-66% builds the pot appropriately for value hands and exerts real pressure on bluffs."
          }
        ]
      },

      {
        id: "ch4-l4",
        chapter: "Chapter 5 · Lesson 4",
        title: "River Value Betting",
        concept: "The river is where money gets made or lost. Too many players check rivers where they should bet, and bet rivers where they should check.",
        content: [
          {
            heading: "Thin Value: The Most Important Skill",
            body: "Thin value means betting with a hand that is ahead of villain's calling range, but only marginally. Example: you hold K♦J♣ on K♠T♦7♥9♣2♠. You have top pair. Can villain call a bet with worse? If their range contains KT, K9, QJ (open ender that missed), TT — then yes, many hands call your value bet that are worse. If their range is mostly sets and two-pairs, your bet loses money. Thin value betting requires knowing what your opponent is likely to call with.",
          },
          {
            heading: "River Sizing for Value",
            body: "River bet sizing depends on what you want to accomplish. Betting large (66-100%) extracts maximum from hands that will call no matter what — sets, two-pairs, strong draws that hit. Betting small (33-50%) induces calls from weaker hands that would fold to a large bet — weak top pairs, middle pairs, some busted draws that will 'look you up'. Match your size to what you want to call: bet large vs committed ranges, bet small to induce marginal calls.",
          },
          {
            heading: "When to Check Back for Value",
            body: "Not every strong hand should bet the river. Check if: (1) your hand beats almost nothing villain checks (they bet all their worse hands, so checking = facing only better); (2) a bet would fold out the only hands you beat — for example, betting 75% of pot with a one-pair hand on a wet board when all worse hands fold and all better hands call. Checking back the river sometimes extracts more value by inducing bluffs from missed draws.",
          }
        ],
        glossaryTerms: ["EV", "IP", "OOP", "SDV", "Range", "Eq"],
        quiz: [
          {
            question: "You hold A♥J♦ on A♠K♣T♥9♦5♣. Is a large river bet (75%) correct?",
            options: [
              "Yes — TPTK is always a value bet",
              "Maybe not — villain's calling range may contain AK, AQ, KT (two pairs and sets that beat you), while weaker hands fold to a large bet",
              "Yes — bet large to protect against backdoor draws",
              "Only if villain checked twice"
            ],
            correct: 1,
            explanation: "AKJT9 5-card board with AJ: villain's calling range to a large bet is likely two pair+ (AK, AT, KT, sets). Most of those beat you. Worse hands (worse kicker aces, pairs) won't call a large bet on a scary board. A small bet (33-40%) might induce a call from a dominated ace or middle pair."
          },
          {
            question: "Why might you bet smaller on the river for value?",
            options: [
              "To bluff more cheaply",
              "To induce calls from weak hands that would fold to a large bet — extracting value from marginal holdings",
              "Smaller bets always win more on the river",
              "To balance your river betting range"
            ],
            correct: 1,
            explanation: "Betting small on the river (33-40%) induces calls from hands that would fold to a pot-sized bet: one-pair hands, weak top pairs, players looking for a cheap showdown. If your hand beats these marginal holdings, a small bet extracts value you'd miss with an intimidating overbet."
          },
          {
            question: "When does checking back a strong hand on the river make sense?",
            options: [
              "Never — always extract maximum value",
              "When villain's range is weighted toward hands that beat you, or when checking induces bluffs from missed draws",
              "Only with the nuts",
              "When you're uncertain whether you're ahead"
            ],
            correct: 1,
            explanation: "Checking back the river makes sense when: (1) all worse hands in villain's range have already folded, so a bet only gets called by better; (2) there are missed draws in villain's range that will bluff if you check, and you'd rather call their bluff than bet and get zero action from those hands."
          },
          {
            question: "Villain checks the river after calling your flop and turn bets on K♠Q♦7♣ → J♥ → 2♦. You hold K♣K♦ (top set). Should you bet?",
            options: [
              "Check — protect the check-back range",
              "Bet large (75-100%) — a set wants to build the biggest pot possible",
              "Bet small (33%) to induce a call",
              "Check — the board has many hands that beat you"
            ],
            correct: 1,
            explanation: "KK (top set) on KQJ72 is a monster hand. After two streets of calling, villain often has QJ, KQ, maybe a straight draw that partially missed. You want to bet large to extract maximum value from two-pair hands and sets that are weaker. The scary board may actually help — hands like QJ or KQ can't fold to a river bet."
          }
        ]
      },

      {
        id: "ch4-l5",
        chapter: "Chapter 5 · Lesson 5",
        title: "River Bluffing",
        concept: "River bluffs are the highest-stakes decisions in poker. Get them right and you print money. Get them wrong and you donk off stacks.",
        content: [
          {
            heading: "When River Bluffs Work",
            body: "A river bluff is profitable when villain folds more than {{Alpha}} (the break-even fold %). $\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$. On a pot of $100 with a $80 river bet: Alpha = 80 ÷ 180 = 44%. You need villain to fold 44% of the time for the bluff to be profitable. Choose river spots where villain's range has many hands that can fold — capped ranges, missed draws, medium pairs that face a scary board.",
          },
          {
            heading: "Selecting Your River Bluffs",
            body: "The best river bluffs are: (1) missed draws that have no showdown value — you can't win at showdown anyway, so a bluff is your only path to the pot; (2) hands that block villain's continuing range — if you hold an ace on an ace-high board, villain has fewer of the top-pair hands that call you; (3) hands that unblock villain's folding range — don't bluff with a hand that blocks the exact cards villain holds when they fold (e.g., don't bluff with 9♥8♥ on a 9-high board where villain folds 9x).",
          },
          {
            heading: "River Bluff Sizing",
            body: "River bluffs typically use large sizing: 66-100% of pot, sometimes overbets (125-150%). The reason: you're forcing a binary decision on villain. A small bluff is easy to call — bad players hero-call small bets reflexively. A large bluff forces them to commit a significant fraction of their stack to 'catch you'. The larger the bet relative to pot, the fewer hands villain can profitably call with, and the higher your required fold % — so pick spots where their folding range is wide.",
          }
        ],
        glossaryTerms: ["Alpha", "Blocker", "EV", "SDV", "Range", "Polarized"],
        quiz: [
          {
            question: "You bet $100 into a $150 pot on the river as a bluff. What is the break-even fold %?",
            options: ["33%", "40%", "50%", "60%"],
            correct: 1,
            explanation: "$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$ = 100 ÷ (100 + 150) = 100 ÷ 250 = 40%. Villain needs to fold 40% of the time for this bluff to break even. If they fold more than 40%, it's profitable regardless of your hand."
          },
          {
            question: "Which hand makes the best river bluff and why?",
            options: [
              "Top pair weak kicker — it's ahead of some hands",
              "A missed flush draw — it has no showdown value, making a bluff the only path to winning",
              "A set — maximally deceptive",
              "Any two cards on a dry board"
            ],
            correct: 1,
            explanation: "Missed draws are ideal river bluffs because they have zero showdown value — you cannot win at showdown. Bluffing is your only path to the pot. Using a hand with showdown value (top pair) as a bluff is a mistake — you're sacrificing equity you could realize by checking."
          },
          {
            question: "Why do river bluffs use larger sizing than flop c-bets?",
            options: [
              "Because the pot is larger on the river",
              "To force a binary commit-or-fold decision — large bets remove marginal calls that small bets invite",
              "River bets always need to be larger",
              "To generate maximum fold equity at all times"
            ],
            correct: 1,
            explanation: "Large river bets force villain to decide: 'Is this worth committing a large portion of my stack?' Smaller bets are easy to call out of curiosity or with weak hands. Large bets require stronger hands to call profitably, reducing the range that calls and increasing your fold equity."
          },
          {
            question: "You hold A♠5♠ on K♠Q♥J♦T♣3♠. Your flush draw missed. What is your river decision?",
            options: [
              "Always bluff — you have the ace of spades as a blocker",
              "Evaluate: your A♠ blocks nut flush (A-high spade flush) that would call any bet. Consider bluffing if villain's range has many missed draws and medium pairs that fold",
              "Check — never bluff on board-paired runouts",
              "Check-fold — missed draws should never bluff"
            ],
            correct: 1,
            explanation: "A♠ on a K-Q-J-T board blocks the nut flush and reduces villain's calling combos. This is a good blocker bluff candidate. However, the board has four broadway cards — villain may have a straight (which calls any bet). Assess villain's range: if they have many missed draws or medium pairs, the bluff is profitable. The blocker helps."
          }
        ]
      },

      {
        id: "ch4-l6",
        chapter: "Chapter 5 · Lesson 6",
        title: "Calling on the River",
        concept: "River calls are pure math plus read. You either have the right price or you don't. Most players call too much out of curiosity and too little in obvious bluff spots.",
        content: [
          {
            heading: "The Math of River Calls",
            body: "On the river, there's no future equity — the pot is fixed. Your call is correct if your pot odds exceed the frequency with which you win. $\\text{Pot Odds} = \\frac{\\text{Risk}}{\\text{Risk} + \\text{Reward}}$. You need to win that % of the time to break even. Example: $80 into a $200 pot. Pot odds = 80 ÷ 280 = 28.6%. If villain is bluffing more than 28.6% of the time here, your call is profitable. This is a pure calculation — not a gut feel.",
          },
          {
            heading: "MDF on the River",
            body: "{{MDF}} (Minimum Defense Frequency) tells you how often you must call to prevent villain from auto-profiting. $\\text{MDF} = 1 - \\alpha$. On a 66% pot-sized river bet: Alpha = 40%, MDF = 60%. You should call at least 60% of your range to prevent pure auto-profit bluffing. But river MDF is complicated by the fact that your range at this point is not uniform — some hands should always call (strong made hands), some should never call (air), and the middle range is where pot odds and reads determine your decision.",
          },
          {
            heading: "Common River Call Mistakes",
            body: "Calling too much: paying off value bets with weak hands 'just in case they're bluffing'. The bet must have a bluffing frequency in villain's range for a call to make sense. Folding too much: folding medium hands vs aggression from players who bluff at high frequency. The fix for both: think in ranges, not hands. Estimate the ratio of value to bluff in villain's river bet range. If they're bluffing more than your pot odds require, call. If they're weighted toward value, fold.",
          }
        ],
        glossaryTerms: ["MDF", "Alpha", "PotOdds", "EV", "Range", "SDV"],
        quiz: [
          {
            question: "Villain bets $75 into a $150 pot on the river. What are your pot odds and what is villain's required bluff frequency for a call to be profitable?",
            options: [
              "33% pot odds; villain must bluff 33% of the time",
              "25% pot odds; villain must bluff 25% of the time",
              "50% pot odds; villain must bluff 50% of the time",
              "40% pot odds; villain must bluff 40% of the time"
            ],
            correct: 0,
            explanation: "Pot odds = Risk / (Risk + Reward) = 75 / (75 + 225) = 75/300 = 25%. For your call to be profitable, villain must be bluffing at least 25% of the time they make this bet. If they bet 100% value and 0% bluffs, your call loses. If they bluff 33%, your call wins."
          },
          {
            question: "Villain fires a large river bet into a small pot. You have a medium pair. What is the key question?",
            options: [
              "Is my pair good enough?",
              "How often is villain bluffing this specific line, and does that frequency justify the price I'm getting?",
              "Did I play the flop correctly?",
              "Should I have folded earlier?"
            ],
            correct: 1,
            explanation: "River calls are math + range reading. The question is not 'is my pair strong enough?' — it's 'is villain bluffing often enough to justify calling at my pot odds?' If villain is a tight player who rarely bluffs rivers, fold the medium pair. If they fire rivers aggressively with missed draws, call."
          },
          {
            question: "What does it mean to call too much on the river?",
            options: [
              "Calling every river bet regardless",
              "Calling when villain's range is weighted toward value, paying off hands you can't beat",
              "Calling only with strong made hands",
              "Not calling enough bluffs"
            ],
            correct: 1,
            explanation: "Over-calling means calling with hands that cannot beat a significant portion of villain's range — paying off value hands that have you crushed. The key mistake: calling based on hand strength ('I have top pair, I have to call') rather than pot odds vs. estimated bluff frequency."
          },
          {
            question: "Why is river MDF harder to apply than flop MDF?",
            options: [
              "The pot is larger on the river",
              "River MDF assumes uniform ranges, but by the river your range is polarized — you have strong hands that always call and weak hands that always fold, leaving a small middle range where the math applies",
              "MDF doesn't apply to the river",
              "River decisions involve more variance"
            ],
            correct: 1,
            explanation: "MDF assumes your entire range is similar. On the river, your range has polarized: obvious call hands (sets, two-pairs) always call regardless of math; obvious folds (complete air) always fold. MDF really applies to the middle range — medium pairs, weak top pairs — where pot odds and reads determine the decision."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch5",
    title: "Bluffing",
    description: "Bluffing is not a personality trait — it's a mathematically governed tool. Use it correctly and it prints money. Misuse it and it costs stacks.",
    lessons: [
      {
        id: "ch5-l1",
        chapter: "Chapter 6 · Lesson 1",
        title: "Why Bluffing Works",
        concept: "Bluffing works not because you're deceptive — it works because the math forces your opponent to fold more often than they should if they don't know your range.",
        content: [
          {
            heading: "The Break-Even Fold Frequency",
            body: "Every bluff has a break-even point: the fold % below which bluffing loses money. This is {{Alpha}} = Bet ÷ (Bet + Pot). Bet $50 into $100: Alpha = 33%. Villain must fold 33% of the time for the bluff to break even. If they fold 40%, every bluff attempt at this size generates positive EV regardless of your hand. If they fold 20%, every bluff loses money. Bluffing is not about convincing your opponent — it's about betting in spots where villain's folding frequency exceeds alpha.",
          },
          {
            heading: "Fold Equity: The Source of Bluff Value",
            body: "{{FoldEq}} (fold equity) is the additional value created when a bet causes an opponent to fold a hand with equity. When you semi-bluff a flush draw and villain folds middle pair, you win the pot without going to showdown. Fold equity plus hand equity is what makes semi-bluffs so powerful — you win two ways. Pure bluffs (no hand equity) rely entirely on fold equity. This is why pure bluffs require more confidence in fold frequency than semi-bluffs.",
          },
          {
            heading: "Bluff-to-Value Ratios",
            body: "At equilibrium, your river betting range should maintain a specific bluff-to-value ratio based on your bet sizing. With a 66% pot bet, your ratio should be roughly 1 bluff for every 2 value hands (2:1 value to bluff). With a 100% pot bet, it's closer to 1:1. With 50% pot bet, closer to 2.5:1. This ratio is what forces the opponent to call — if you bluff too often, they call and catch you. If you bluff too rarely, they fold everything and you only win small pots.",
          }
        ],
        glossaryTerms: ["Alpha", "FoldEq", "EV", "MDF", "Polarized", "SDV"],
        quiz: [
          {
            question: "You bet $60 into an $80 pot. What is the break-even fold frequency (Alpha)?",
            options: ["43%", "50%", "33%", "60%"],
            correct: 0,
            explanation: "$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$ = 60 ÷ (60 + 80) = 60 ÷ 140 = 43%. Villain must fold at least 43% of the time for this bluff to be profitable. Note: the pot is the pot before your bet — the $80 in the pot doesn't include your $60 bet yet."
          },
          {
            question: "Why are semi-bluffs more powerful than pure bluffs?",
            options: [
              "Semi-bluffs are harder to detect",
              "Semi-bluffs win two ways: fold equity when villain folds AND hand equity when called and the draw completes",
              "Semi-bluffs always have higher fold equity",
              "Pure bluffs violate GTO principles"
            ],
            correct: 1,
            explanation: "A pure bluff only wins if villain folds. A semi-bluff wins if villain folds AND wins a fraction of the time when called (the draw completes). This dual path to winning means semi-bluffs are profitable at lower fold frequencies than pure bluffs, making them much safer and more valuable."
          },
          {
            question: "With a 100% pot-sized river bet, what is the approximate optimal bluff-to-value ratio?",
            options: [
              "3 bluffs for every 1 value hand",
              "1 bluff for every 1 value hand (1:1)",
              "1 bluff for every 3 value hands",
              "2 bluffs for every 1 value hand"
            ],
            correct: 1,
            explanation: "With a pot-sized bet, villain needs ~50% equity to call (risk = reward). For them to be indifferent, you must be bluffing ~50% of the time — i.e., 1:1 bluff-to-value. If you bluff more, they always call. If you bluff less, they always fold. The ratio depends directly on your bet size."
          },
          {
            question: "Villain folds 55% of the time to your $50 into $100 bluff (alpha = 33%). What does this tell you?",
            options: [
              "You are being too aggressive",
              "Your bluff is highly profitable — villain folds 22% more often than required",
              "You should increase the size to extract more",
              "Villain is making the correct decision"
            ],
            correct: 1,
            explanation: "Alpha is 33% but villain folds 55% — they're over-folding by 22 percentage points. Every bluff attempt generates significant positive EV. You should bluff in this spot at high frequency. When you find a player who over-folds, exploit it until they adjust."
          }
        ]
      },

      {
        id: "ch5-l2",
        chapter: "Chapter 6 · Lesson 2",
        title: "Semi-Bluffing",
        concept: "The semi-bluff is the highest EV bluff in poker. You have equity when called AND fold equity when they fold. Both work in your favor.",
        content: [
          {
            heading: "What Makes a Good Semi-Bluff",
            body: "A semi-bluff needs two things: (1) enough outs to win the pot when called at a meaningful frequency, and (2) enough fold equity in the spot to make bluffing immediately profitable even without hitting. The best semi-bluffs have 8-15 outs — flush draws (9 outs), OESDs (8 outs), combo draws (12-15 outs). Gutshots (4 outs) are marginal semi-bluffs on the flop — better as calls than bets unless you add fold equity from position or range advantage.",
          },
          {
            heading: "Semi-Bluff Spots by Street",
            body: "Flop semi-bluffs: most powerful because you have two cards to come. A flush draw on the flop has ~35% equity — it's almost a coin flip. Bet to generate folds and realize equity when called. Turn semi-bluffs: one card remaining, equity is lower. A flush draw on the turn has ~18%. Semi-bluff here when the pot is large enough to justify the risk and the board texture supports your story. River semi-bluffs: you missed. Now it's a pure bluff with no equity — this transitions from semi-bluff to pure bluff territory.",
          },
          {
            heading: "Combining Draws",
            body: "Combo draws (flush draw + straight draw) are among the most valuable hands in poker because they have 12-15 outs. A hand like J♥T♥ on Q♥9♦5♥ has: 9 flush outs + 8 straight outs − 2 overlaps ≈ 15 outs, approximately 54% equity on the flop. This hand is actually a favorite against most made hands on the flop. Betting it aggressively is not a bluff — it's a value bet that also has fold equity as a bonus.",
          }
        ],
        glossaryTerms: ["FoldEq", "FD", "OESD", "GS", "Eq", "Combos"],
        quiz: [
          {
            question: "You hold A♥K♥ on Q♥J♦4♣. How many outs do you have and what type of draw is this?",
            options: [
              "9 outs — flush draw only",
              "6 outs — two overcards only",
              "Approximately 12 outs — flush draw (9) + two overcards to TPTK (6) minus overlaps",
              "4 outs — gutshot only"
            ],
            correct: 2,
            explanation: "AhKh on QJ4: you have a backdoor flush draw (needs 2 hearts — not an immediate draw), two overcards (A and K each give you TPTK — 3+3=6 outs), and a backdoor royal draw. This is actually a gutshot (T gives you a straight) + two overcards ≈ 4+6 = ~10 outs with some caveats. It's a semi-bluff but not as powerful as a direct flush draw."
          },
          {
            question: "Why is a combo draw (flush draw + OESD) sometimes a value bet rather than a bluff?",
            options: [
              "Combo draws always have more than 50% equity",
              "With ~15 outs, combo draws have approximately 54% equity on the flop — making them favorites over most made hands",
              "Value bets only apply to made hands",
              "Combo draws should always be played passively"
            ],
            correct: 1,
            explanation: "A combo draw with 14-15 outs has ~54% equity on the flop (two cards to come). Against one-pair hands, you're a favorite. This makes aggressive betting not just a semi-bluff but sometimes pure value — you're the statistical favorite and building the pot with the best hand."
          },
          {
            question: "You have a flush draw on the flop with ~35% equity. Villain bets and you raise. Villain calls. The turn is a blank. You now have ~18% equity. Should you continue?",
            options: [
              "Always fire the turn — you committed chips on the flop",
              "It depends — evaluate pot odds, villain's likely range, and whether a turn bet has positive EV given your equity and fold equity",
              "Never — 18% is too low to continue",
              "Shove all-in — your equity warrants it"
            ],
            correct: 1,
            explanation: "With 18% equity on the turn, your semi-bluff needs fold equity to be profitable. If pot odds require you to win 25% of the time and you only win 18% when called, you need villain to fold enough to make up the difference. On a large pot with a scary board, continued aggression may still be +EV."
          },
          {
            question: "Which semi-bluff is most powerful on the flop?",
            options: ["Gutshot straight draw (4 outs)", "Two overcards (6 outs)", "Open-ended straight draw (8 outs)", "Flush draw (9 outs)"],
            correct: 3,
            explanation: "A flush draw has 9 outs and approximately 35% equity on the flop (two cards to come). This is the strongest semi-bluff on the flop. An OESD has 8 outs (~32%). Two overcards have 6 outs (~24%). A gutshot has 4 outs (~16%). The more outs, the more equity when called, making the semi-bluff more valuable."
          }
        ]
      },

      {
        id: "ch5-l3",
        chapter: "Chapter 6 · Lesson 3",
        title: "Bluff Selection",
        concept: "Not all bluffs are equal. The best bluffs have blockers to calling hands, unblock folding hands, and tell a credible story.",
        content: [
          {
            heading: "The Blocker Principle",
            body: "A {{Blocker}} is a card in your hand that reduces the number of combos your opponent can hold. If you hold A♠, villain has one fewer ace — reducing their AA, AK, AQ combos. Blockers matter for bluffs because they reduce the calling range. On a K-high board where villain's calling hands include AK: bluffing with an ace blocks some of those combos. On a flush-heavy board, bluffing with a suited ace reduces the combinations of nut flush villain can hold.",
          },
          {
            heading: "Unblocking the Folding Range",
            body: "This is the flip side of blocking: don't hold the cards villain needs to fold. If villain folds all their 7x hands, don't bluff with 7-6s — you block the very hands that would fold. Instead, bluff with 8-5s: villain's 7x (that you want to fold) is unblocked. Example: bluffing a river on a board where villain's folding range includes flush draws. Don't bluff with a flush draw blocker (like a suited card in the flush suit) — you reduce villain's folding range.",
          },
          {
            heading: "Telling a Credible Story",
            body: "The best bluffs are consistent with a hand that would have played all three streets the same way. If you checked the flop and turn then blast the river, your range needs to include hands that would logically do this — slow-played sets, flopped straights that took a passive line. A bluff that doesn't fit your range story is readable. Before bluffing, ask: 'What hand am I representing, and would that hand have taken this exact line?'",
          }
        ],
        glossaryTerms: ["Blocker", "Alpha", "FoldEq", "EV", "Range", "Polarized"],
        quiz: [
          {
            question: "You are bluffing on an A♥K♠Q♣J♦9♠ board. Which holding makes the best bluff blocker?",
            options: [
              "T♣T♦ (pocket tens that missed a straight)",
              "A♦5♦ (holds an ace, blocking top pair calling hands)",
              "2♣3♣ (random low cards with no relevance)",
              "K♦Q♦ (two pair that isn't a bluff)"
            ],
            correct: 1,
            explanation: "A♦5♦ on AKQJx blocks villain's TPTK (AK, AQ) and nut-type hands (AA). When you hold an ace, villain has fewer of the top-pair-top-kicker combos that would call your bluff. This makes A5s a good blocker bluff candidate on this board."
          },
          {
            question: "On a Q♠J♦T♠ board with a spade flush draw, which hand is a WORSE bluff due to the unblocking principle?",
            options: [
              "A♥K♥ (no spades — doesn't block flush draws)",
              "A♠K♠ (holds two spades — blocks villain's folding flush draws)",
              "9♣8♣ (offsuit — no blockers at all)",
              "K♦Q♦ (pair and straight draw but offsuit)"
            ],
            correct: 1,
            explanation: "A♠K♠ holds two spades on a spade flush draw board. If villain's folding range includes flush draws (hands like K♠9♠, Q♠8♠), your A♠K♠ reduces those combos — villain has fewer of the hands that would fold to your bluff. Paradoxically, holding the flush draw cards makes you a worse bluffer here."
          },
          {
            question: "Why must a bluff be consistent with a credible story?",
            options: [
              "Bluffs always need strong hands behind them",
              "An inconsistent story allows observant opponents to narrow your range and call profitably",
              "Bluffs only work on dry boards",
              "Stories don't matter — only sizing matters"
            ],
            correct: 1,
            explanation: "Skilled opponents track your action across all streets. A river bluff after check-check-bet looks like a missed draw trying to steal — unless you sometimes slow-play sets this way. If your range on the river doesn't include hands that would have played exactly the same way, the bluff is transparent."
          },
          {
            question: "You want to bluff the river. Villain's folding range is mostly hands containing a 5 or 6. You hold 5♣6♣. Is this a good or bad bluff?",
            options: [
              "Good — 56 makes a straight draw story",
              "Bad — you block the exact hands in villain's folding range (5x and 6x), reducing the frequency they fold",
              "Good — any two connected cards make good bluffs",
              "It doesn't matter what villain folds"
            ],
            correct: 1,
            explanation: "You hold 5♣6♣, blocking the 5x and 6x hands in villain's folding range. If villain would fold 56, 65, 55, 66-type hands, your holding removes some of those from their possible range. This means they fold less often than expected. A better bluff would be a hand that doesn't block villain's folding range."
          }
        ]
      },

      {
        id: "ch5-l4",
        chapter: "Chapter 6 · Lesson 4",
        title: "Bet Sizing for Bluffs",
        concept: "Your bluff size determines how often villain needs to fold for your bluff to work. Size to the spot — not to your fear.",
        content: [
          {
            heading: "How Sizing Affects Alpha",
            body: "Bigger bets require villain to fold more often to be profitable. A 33% pot bet needs 25% folds. A 66% pot bet needs 40% folds. A pot bet needs 50% folds. This means smaller bluffs are profitable even when villain calls 75% of the time. Larger bluffs need villain to fold at least half the time. Choose your size based on how tight or wide you expect villain's continuing range to be — not based on how confident you feel.",
          },
          {
            heading: "Balancing Bluffs with Value Hands",
            body: "At the same sizing, your bluff frequency and your value bet frequency must be balanced. With a 66% pot bet: you need roughly 1 bluff for every 2 value hands. With a pot bet: 1 bluff for every 1 value hand. If you size inconsistently — big when bluffing, small when value betting — opponents can read your sizing tells and exploit you. The ideal: choose a size, then fill that range with the correct ratio of bluffs to value.",
          },
          {
            heading: "When Overbets Work",
            body: "An overbet (125-150% pot) is appropriate when: (1) your range on this board has overwhelming nut advantage — you have more strong hands than the opponent; (2) you want to force a binary all-or-nothing decision; (3) the board runs out in a way that specifically favors your range (e.g., an ace falls on the river as the 3-bettor — you have AA more often than the caller). Overbets with bluffs only work when your bluff-to-value ratio is correct at that sizing (close to 1:1).",
          }
        ],
        glossaryTerms: ["Alpha", "EV", "Polarized", "MDF", "FoldEq"],
        quiz: [
          {
            question: "You bet 33% of the pot as a bluff. What fold frequency do you need?",
            options: ["33%", "25%", "50%", "40%"],
            correct: 1,
            explanation: "$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$. With a 33% pot bet: 0.33 ÷ (0.33 + 1) = 0.33 ÷ 1.33 = 25%. You only need a 25% fold rate for this bluff to be profitable. Small bluffs are much easier to execute profitably than large ones."
          },
          {
            question: "You always bet large ($80 into $80) when bluffing, and small ($25 into $80) when value betting. What will attentive opponents do?",
            options: [
              "Nothing — sizing tells don't exist",
              "Call your small bets (knowing they're value) and fold to large bets (knowing they're bluffs)",
              "Call all bets regardless of size",
              "Fold all medium-strength hands"
            ],
            correct: 1,
            explanation: "Sizing tells are real. If you consistently use different sizes for bluffs vs value, observant opponents will map the pattern and exploit it perfectly: fold to big bets (bluffs), call small bets (value). Balance requires using the same sizing with both hands, with the correct bluff-to-value ratio."
          },
          {
            question: "With a pot-sized bet, what is the correct bluff-to-value ratio for balance?",
            options: ["3 bluffs per 1 value", "1 bluff per 3 value", "1 bluff per 1 value", "2 bluffs per 1 value"],
            correct: 2,
            explanation: "With a pot-sized bet, villain needs 50% equity to call (risk = 1 pot, gain = 2 pot, break-even = 50%). For villain to be indifferent, you must bluff 50% — i.e., 1:1 bluff-to-value. A pot bet requires the most bluffs of any sizing. If you over-bluff, they call. If you under-bluff, they fold."
          },
          {
            question: "When is an overbet (>pot) bluff justified?",
            options: [
              "Always — larger bets get more folds",
              "When your range on this board has nut advantage and you have enough nut combos to support a near-1:1 bluff-to-value ratio at that size",
              "When you are certain villain will fold",
              "Never — overbets reveal bluffs"
            ],
            correct: 1,
            explanation: "Overbets need a near-1:1 bluff-to-value ratio. They're only justified when your range genuinely has more nut-advantage hands than your opponent's — so you can fill the value side of the range. Overbetting with mostly bluffs and few value hands is exactly what gets you called and punished."
          }
        ]
      },

      {
        id: "ch5-l5",
        chapter: "Chapter 6 · Lesson 5",
        title: "Reading Bluff Spots",
        concept: "Some boards beg to be bluffed. Some beg to be called. The difference is exploitable by anyone who pays attention.",
        content: [
          {
            heading: "Board Textures That Favor Bluffing",
            body: "Dry boards (K72r, A83r) where draw-heavy ranges hit rarely are ideal for bluffs — many hands in villain's range have only medium equity and face a tough call on scary cards. Boards that 'missed' calling ranges are better for continued bluffs: UTG opens and gets a 543 rainbow — the BB's wide defense range may not have hit this well, but as the UTG raiser, you're unlikely to hold these cards either. Bluff on boards that miss both ranges, but where your range is more credible (your EP range can hold KK that the flop didn't help but is still very strong).",
          },
          {
            heading: "Opponent Tendencies Change Everything",
            body: "The most powerful bluff spots emerge from opponent-specific reads. A player who never folds top pair is a bad target for bluffs — regardless of board. A player who over-folds to continuation bets (WWSF under 40%) is an excellent target. Track: does villain fold to river bets? Do they hero-call down or give up on scary turn/river cards? Bluff frequency should be adjusted based on opponent tendencies much more than based on theoretical balance.",
          },
          {
            heading: "Turn and River Scare Cards",
            body: "Certain turn/river cards improve your bluffing range dramatically. As the preflop aggressor: an ace falling on the turn when you c-bet a K-high flop and got called. As the 3-bettor: a queen on the river when you've been representing a strong range. Scare cards are ones that plausibly complete strong hands in your range that villain cannot comfortably discount. Learn to identify these cards and fire them — the board does half the work.",
          }
        ],
        glossaryTerms: ["Cbet", "Range", "NutAdv", "MES", "Alpha", "FoldEq"],
        quiz: [
          {
            question: "You open UTG, BB calls. Flop K♣7♦2♠. You c-bet and get called. Turn is A♥. Is this a good barrel card?",
            options: [
              "No — aces always scare the aggressor",
              "Yes — the ace is a scare card that improves your range (AK, AA) and threatens to fold villain's Kx hands",
              "Only if you hold an ace",
              "No — the board is already dry enough"
            ],
            correct: 1,
            explanation: "The A turn is ideal for the UTG range. You now credibly hold AA, AK, AQ — hands that are very strong. BB's range on K72 call likely includes Kx and medium pairs that now face a tough decision vs an ace. Barrel the turn at high frequency — the scare card does the work."
          },
          {
            question: "Villain is a calling station who never folds made hands. What should you do with your bluffs?",
            options: [
              "Bluff larger to force folds",
              "Stop bluffing entirely against this player — they won't fold, making all bluffs -EV",
              "Bluff semi-bluffs only",
              "Bluff at normal frequency but smaller"
            ],
            correct: 1,
            explanation: "Against a calling station, fold equity is zero. Alpha may be 40%, but if this player folds 0% of the time, every bluff loses money. The correct MES adjustment: eliminate bluffs from your range against this player and bet for value relentlessly. Your bluffing hands become check-folds."
          },
          {
            question: "Which board texture is generally better for bluffing continuation bets?",
            options: [
              "8♠7♦6♠ (connected, two-tone)",
              "A♠K♦2♣ (rainbow, high cards, dry)",
              "J♥T♥9♦ (connected, semi-wet)",
              "Q♠5♦4♣ (semi-connected, rainbow)"
            ],
            correct: 1,
            explanation: "A♠K♦2♣ is a dry, high-card board that strongly favors the preflop aggressor's range (full of AK, AQ, AA, KK). Villain's range misses this board frequently. The board is static — equity doesn't shift much on later cards. These are ideal bluffing conditions for the raiser."
          },
          {
            question: "What does WWSF (Won When Saw Flop) below 40% indicate about an opponent?",
            options: [
              "They win too many pots postflop",
              "They fold too much when facing postflop aggression — a target for high-frequency bluffs",
              "They play too many hands preflop",
              "WWSF is unrelated to bluffing tendencies"
            ],
            correct: 1,
            explanation: "WWSF below 40% means the player wins less than 40% of pots they see the flop in — they're surrendering often. This signals a player who over-folds to postflop aggression. High-frequency c-bets, double barrels, and delayed c-bets are all profitable against this opponent type."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch6",
    title: "3-Bet Pots",
    description: "3-bet pots are a different game. Bigger pots, narrower ranges, shorter effective stacks. What works in single-raised pots often fails here.",
    lessons: [
      {
        id: "ch6-l1",
        chapter: "Chapter 7 · Lesson 1",
        title: "Stack-to-Pot Ratio",
        concept: "SPR determines how committed you are before the flop hits. Low SPR means you play commit-or-fold. High SPR means you have room to maneuver.",
        content: [
          {
            heading: "What Is SPR?",
            body: "{{SPR}} (Stack-to-Pot Ratio), defined as $$SPR = \\frac{\\text{Effective Stack}}{\\text{Pot}}$$ on the flop. In a standard single-raised pot (BN opens 2.5bb, BB calls), flop pot is ~5.5bb with ~97.5bb remaining. SPR ≈ 97.5 ÷ 5.5 ≈ 18. In a 3-bet pot (open 2.5bb, 3-bet to 9bb, call), flop pot is ~19.5bb with ~91bb remaining. SPR ≈ 91 ÷ 19.5 ≈ 4.7. SPR tells you how many pot-sized bets can go in before stacks are fully committed.",
          },
          {
            heading: "Low SPR: Commit-or-Fold",
            body: "With SPR of 2-4 (3-bet pots, 4-bet pots, short stacks), strong top pairs and overpairs become commit hands. You can't fold AA on an A-high flop when SPR is 3 — there are not enough chips left to laydown profitably. Low SPR reduces complexity: your decisions become binary. Strong one-pair hand + low SPR = get the money in. The deeper the stack, the more you need to respect made hands and draws.",
          },
          {
            heading: "High SPR: Implied Odds Matter",
            body: "With SPR > 8, implied odds come into play. Hands like small pairs and suited connectors increase in value because when they hit a big hand (set, flush, straight), they can win an entire deep stack. A set with SPR 15 wins roughly 3× the pot. A set with SPR 3 wins only the pot. This is why you can profitably set-mine (call raises with small pairs) at deep stacks but not at 30-40bb. The implied odds pay for the times you miss.",
          }
        ],
        glossaryTerms: ["SPR", "Implied", "RevImplied", "3bet", "4bet", "EV"],
        quiz: [
          {
            question: "BN opens 2.5bb, BB 3-bets to 9bb, BN calls. Effective stacks were 100bb. What is the approximate SPR on the flop?",
            options: ["~18", "~10", "~5", "~2"],
            correct: 2,
            explanation: "Pot on the flop = 9bb (3-bet) + 9bb (call) + 0.5bb (SB fold) ≈ 18.5bb. Effective stack remaining = 100bb − 9bb = 91bb. SPR = 91 ÷ 18.5 ≈ 4.9, approximately 5. This is low SPR territory where one-pair hands are often commit hands."
          },
          {
            question: "With SPR of 3, you hold AA and flop top pair on K♣8♦2♦. Should you ever fold to aggression?",
            options: [
              "Yes — sets and two-pairs are ahead",
              "No — at SPR 3, overpairs are commit hands. Folding AA to reasonable aggression here would be a significant mistake",
              "Only if villain bets all-in immediately",
              "Yes — always protect your chips with overpairs"
            ],
            correct: 1,
            explanation: "At SPR 3, AA is a commit hand. There are roughly 3 pot-sized bets remaining — you don't have the mathematical room to make laydowns with overpairs. Even if villain occasionally has a set or two pair, the EV of getting it all in with AA far exceeds the EV of folding at this stack depth."
          },
          {
            question: "Why do small pairs increase in value when stacks are deep (high SPR)?",
            options: [
              "Small pairs win more coin flips at deep stacks",
              "Implied odds — when you hit a set at high SPR, you can win a large stack. The potential winnings justify the investment of calling preflop",
              "Deep stacks reduce rake impact",
              "Small pairs bluff better at high SPR"
            ],
            correct: 1,
            explanation: "The 'set mine' strategy is profitable at deep stacks because of implied odds. You invest a small preflop amount (~7-10%) hoping to hit a set (~12% chance) and win the entire remaining stack. At SPR 15, hitting a set means winning ~15 pot-sized units. At SPR 3, only 3. The implied odds calculation requires deep stacks."
          },
          {
            question: "Which hand benefits MORE from high SPR (deep stacks)?",
            options: ["AA (aces preflop)", "22 (small pair)", "AKo (broadway)", "QQ (queens)"],
            correct: 1,
            explanation: "22 is a speculative hand that wins when it makes a set. At high SPR, a set wins a huge pot. At low SPR, the implied odds aren't there. AA benefits from SPR too, but less dramatically — it's a premium hand that wins often regardless. Pocket deuces need high SPR to be profitable to call raises with."
          }
        ]
      },

      {
        id: "ch6-l2",
        chapter: "Chapter 7 · Lesson 2",
        title: "C-Betting in 3-Bet Pots",
        concept: "As the 3-bettor, you have range advantage on almost every flop. Use it — but match the size to the SPR.",
        content: [
          {
            heading: "Why the 3-Bettor Has Range Advantage",
            body: "The 3-bettor's range is narrow and strong: AA-QQ, AKs, AKo, and bluffs like A5s, A4s. The caller's range (who called the 3-bet without 4-betting) is capped — they don't have AA or KK (they'd have 4-bet). Their range is: JJ-99, AQs-AJs, KQs, some suited connectors. On almost every board, the 3-bettor connects more strongly: any ace is an A♥K♦ for the 3-bettor, any king is a KK overpair. The caller is always behind the nut range.",
          },
          {
            heading: "C-Bet Frequency and Sizing in 3-Bet Pots",
            body: "In 3-bet pots, c-bet at a higher frequency than single-raised pots (~75-80% vs ~60%). The SPR is low enough that ranges are narrowed and the 3-bettor consistently has a range advantage. Sizing: use smaller sizing than single-raised pots — 25-40% of pot. The small pot SPR means a 40% c-bet already exerts significant pressure. Larger bets commit stacks faster; smaller bets apply pressure cheaply with a wide, strong range.",
          },
          {
            heading: "When to Check in 3-Bet Pots",
            body: "Even as the 3-bettor, checking is correct sometimes: (1) on boards that hit the caller's range more than yours (very low connected boards that the caller defended with suited connectors); (2) with premium hands on wet boards where you prefer check-raising to build the pot — AA on J♥T♠9♦ prefers check-raise to c-bet because the latter misses medium bets from the caller; (3) with your weakest bluffs when the board doesn't support continuing the story.",
          }
        ],
        glossaryTerms: ["3bet", "Cbet", "SPR", "Range", "NutAdv", "IP", "OOP"],
        quiz: [
          {
            question: "Why is the caller's range in a 3-bet pot described as 'capped'?",
            options: [
              "They have a maximum hand count",
              "They don't hold the very strongest hands (AA, KK) — those would have 4-bet. Their range has a ceiling",
              "They're limited by position",
              "Capped ranges only apply to the big blind"
            ],
            correct: 1,
            explanation: "When a player calls a 3-bet rather than 4-betting, they reveal they don't hold the absolute premium hands (AA, KK would almost always 4-bet). Their range is 'capped' — it has a ceiling. This means the 3-bettor has uncapped nut advantage, especially on high boards."
          },
          {
            question: "You 3-bet from CO, BN calls. Flop A♠K♦7♣. What should your c-bet frequency and sizing be?",
            options: [
              "50% frequency, 66% sizing — standard single-raised pot approach",
              "~80% frequency, 25-40% sizing — high frequency small bet exploiting range advantage",
              "100% frequency, 75% sizing — attack a capped range aggressively",
              "Check — AK7 is too dangerous to c-bet"
            ],
            correct: 1,
            explanation: "AK7 rainbow strongly favors the 3-bettor's range (full of AK, AA, KK). The caller's capped range hits this board poorly. C-bet ~80% at 25-40% sizing — bet your entire range cheaply. The low SPR means even a small bet exerts real pressure and builds toward commitment."
          },
          {
            question: "You 3-bet with AA, opponent calls. Flop J♥T♠9♦. Should you prefer a direct c-bet or a check?",
            options: [
              "Always c-bet AA — it's the best hand",
              "Consider checking AA here — the wet board means a check-raise extracts more value and you risk being outdrawn by a small flop bet",
              "Check only if in position",
              "Bet large (75-100%) to charge draws"
            ],
            correct: 1,
            explanation: "AA on JT9 is vulnerable to many draws. A direct small c-bet may get called cheaply by draws. Checking AA here allows you to check-raise if the caller bets, building a bigger pot, OR induce a bluff on the turn. The wet board rewards trap lines more than dry boards."
          },
          {
            question: "Why is smaller sizing (25-40%) appropriate for c-bets in 3-bet pots vs single-raised pots?",
            options: [
              "The pot is already large — small bets are relative to the pot, not absolute",
              "Small sizing is always correct",
              "The low SPR means even a 33% c-bet commits ~25% of remaining stacks, putting real pressure without over-committing bluffs",
              "3-bet pots require the smallest possible bets"
            ],
            correct: 2,
            explanation: "In a 3-bet pot with SPR ~5, a 33% pot c-bet commits roughly 7bb into an 18bb pot with 91bb remaining — about 8% of effective stacks. But relative to the pot, it's already meaningful. Smaller sizing lets you c-bet your entire range cheaply and keeps bluffs from becoming expensive commitments."
          }
        ]
      },

      {
        id: "ch6-l3",
        chapter: "Chapter 7 · Lesson 3",
        title: "Playing as the 3-Bettor When You Miss",
        concept: "You 3-bet with AK and miss the flop. Now what? Most players either abandon the bluff entirely or spew chips. Neither is right.",
        content: [
          {
            heading: "The Air Problem in 3-Bet Pots",
            body: "When you 3-bet AK and the flop comes 8♦5♣2♥, you have overcards with little immediate equity. Your range advantage is still there — caller's range struggles on low boards too — but your specific hand contributes little. The key insight: your c-bet on this board is not about AK specifically. It's about your entire range having an advantage. Bet as the range; don't check because your specific hand missed.",
          },
          {
            heading: "How Far to Take the Bluff",
            body: "On a low board (845), c-bet the flop with your whole range at small size. The turn decision depends on the card: a high card (A, K, Q) is a good barrel card — it improves your range. A low connecting card (7, 6) is a poor barrel card — it fills in the caller's straight draws and doesn't help your range. With AK on 845 → A turn: barrel. On 845 → 6 turn: consider checking. River: by the river with pure air, give up unless the board runs out extremely well for your range.",
          },
          {
            heading: "The Check-Give-Up Line",
            body: "Checking and giving up on the flop is sometimes correct. If the flop hits the caller's range hard (J♥T♦9♠ against someone who called a 3-bet with JTs, KQs type hands), checking with your entire 3-bet bluff range is a valid play. You wait for a turn card that improves your story. A blank turn after a check gives you a better delayed c-bet spot. Firing multiple streets into a range that connected with the board is how stacks get lost.",
          }
        ],
        glossaryTerms: ["3bet", "Cbet", "SPR", "Range", "IP", "OOP", "EV"],
        quiz: [
          {
            question: "You 3-bet with A♦K♣. Flop is 8♣5♥2♦. Caller's range is JJ-99, AQs, KQs, suited connectors. Should you c-bet?",
            options: [
              "No — AK missed and has no equity on this board",
              "Yes — this low board misses both ranges, but yours has AK and overpairs; c-bet your full range at small size",
              "Only if you have additional backdoor draws",
              "Check-raise to represent a set"
            ],
            correct: 1,
            explanation: "852 misses both ranges, but the 3-bettor's range is full of AA, KK, QQ that make strong overpairs, plus AK. The caller's range (JJ-99, suited connectors) has more pairs of 5s, 8s, 2s — but mostly missed too. The 3-bettor has clear range advantage even on low boards. C-bet your full range at 25-33%."
          },
          {
            question: "You 3-bet and c-bet on 8♣5♥2♦. Villain calls. Turn is 9♠. Should you barrel?",
            options: [
              "Always double barrel 3-bet pots",
              "The 9 completes some straight draws (87, 76 that were in caller's range) — this is a marginal barrel card. Evaluate: do you have a draw or does your range connect? Otherwise consider checking.",
              "Bet only if you made a pair",
              "Barrel if you have position"
            ],
            correct: 1,
            explanation: "The 9♠ on 852 completes 76, 87 (straight draws in the caller's suited connector range) and gives 99 a set. This is not a great barrel card for the 3-bettor's range. Unless you have AK with a backdoor draw or you hold 9x yourself, checking and re-evaluating on the river is reasonable."
          },
          {
            question: "In a 3-bet pot, you check the flop and the turn. River is an ace. You hold K♦Q♦ (missed). Is this a good bluff spot?",
            options: [
              "No — you've shown too much weakness with two checks",
              "Potentially yes — the ace improves your story (you appear to have slow-played AX or AA), and your KQ blocks some of villain's AK/AQ calling hands",
              "Only if the pot is small",
              "No — river bluffs in 3-bet pots never work"
            ],
            correct: 1,
            explanation: "A river ace after two checks is a credible slow-play story. Players who slow-play AA or AK might check twice and then value-bet the ace river. Your KQ holds a king and queen blocker, slightly reducing villain's AK and AQ combos. It's not a slam-dunk, but it's a reasonable polarized bluff spot."
          },
          {
            question: "What is the key mistake players make in 3-bet pots when they miss the flop?",
            options: [
              "Checking too often",
              "Either giving up immediately (losing fold equity) or barreling too many streets into boards that hit the caller (spewing stacks)",
              "Not 3-betting enough preflop",
              "Sizing too small on the flop"
            ],
            correct: 1,
            explanation: "The two extremes are both mistakes: immediate give-up loses fold equity that a range-advantage c-bet would capture. Over-barreling into boards that hit the caller turns AK into a 3-street bluff vs a made hand. The correct play: c-bet the flop with the range advantage, then selectively continue on turn cards that favor your range."
          }
        ]
      },

      {
        id: "ch6-l4",
        chapter: "Chapter 7 · Lesson 4",
        title: "Playing as the Caller in 3-Bet Pots",
        concept: "Calling a 3-bet out of position is one of the most difficult situations in poker. Most players do it too often with the wrong hands.",
        content: [
          {
            heading: "Your Range Is Capped",
            body: "When you call a 3-bet, your range is capped — you don't have AA or KK (those 4-bet or 5-bet jam). Your range is: JJ-99, AQs-ATs, KQs, and some suited connectors. This means on almost every high board, the 3-bettor has a nut advantage. You need to recognize this and adjust: check more, defend less, and pick your spots where your range specifically connects with the board texture.",
          },
          {
            heading: "The Flatting Trap OOP",
            body: "Calling a 3-bet {{OOP}} is particularly difficult. You'll act first on every street, the 3-bettor has range advantage on most boards, and the SPR is low enough that commit decisions come quickly. Most hands that might be profitable calls {{IP}} become folds {{OOP}}. The general guideline: call 3-bets {{OOP}} only with hands that have high pot equity vs their range (JJ, TT) or strong implied odds (suited connectors that can flop the nuts).",
          },
          {
            heading: "Finding the Right Spots to Fight Back",
            body: "As the caller in a 3-bet pot, fight back on: (1) boards that hit your range specifically — low connected boards that contain your suited connectors (you defended 87s, flop is 9♥8♦5♣), (2) boards where the 3-bettor's expected c-bet would be a mistake (they missed too), (3) when you make a strong hand and want to build the pot. Check-raise your sets, strong two-pairs, and strong draws on boards where the 3-bettor will c-bet frequently.",
          }
        ],
        glossaryTerms: ["3bet", "SPR", "IP", "OOP", "NutAdv", "Range", "Cbet"],
        quiz: [
          {
            question: "You call a 3-bet IP with KQs. Flop A♦K♥7♣. How should you proceed?",
            options: [
              "Donk bet — you have top pair",
              "Check to the 3-bettor — they likely have range advantage on this ace-high board",
              "Check-raise with any pair",
              "Fold — the ace hurts your hand"
            ],
            correct: 1,
            explanation: "KQ on AK7 as the 3-bet caller: you have second pair, good kicker. But the ace strongly favors the 3-bettor's range (full of AK, AQ, AA). Check and call or fold depending on action. Leading into their range advantage is a mistake — let them bet, evaluate their sizing and the story, then decide."
          },
          {
            question: "Why is calling a 3-bet OOP with KJo generally a mistake?",
            options: [
              "KJo is always a fold to 3-bets",
              "OOP you face range disadvantage on most boards AND positional disadvantage — KJo cannot profitably realize enough equity in these conditions",
              "KJo has too little equity preflop",
              "KJo is a fold to any raise"
            ],
            correct: 1,
            explanation: "KJo OOP vs a 3-bet: your range is capped, you act first every street, and KJo misses the flop 65% of the time without much backdoor equity. IP, KJo can call and use position to realize equity. OOP, you're calling to play a tough game at a disadvantage. Fold or 4-bet."
          },
          {
            question: "You call a 3-bet with 7♣6♣ IP. Flop is 8♠5♥2♦. You have an OESD. How should you proceed?",
            options: [
              "Bet immediately — you have a draw",
              "Check — let the 3-bettor c-bet, then evaluate. You can call with your OESD equity, or check-raise if the board supports it",
              "Fold — draws are too weak in 3-bet pots",
              "Shove — with an OESD you have enough equity to go all-in"
            ],
            correct: 1,
            explanation: "You have an OESD (8 outs, ~32% equity on the flop). Check and let the 3-bettor c-bet — they'll bet frequently with range advantage. You can call and see a turn with your draw. If the board is particularly good for your range, consider a check-raise to generate fold equity and realize your draw equity simultaneously."
          },
          {
            question: "On which board should the caller fight back most aggressively in a 3-bet pot?",
            options: [
              "A♠K♦7♣ — high card, dry board",
              "Q♦J♦T♠ — the 3-bettor c-bets here but this board hits KQ, JTs, and other caller holdings",
              "A♠8♦3♣ — ace-high, dry",
              "K♠K♦5♥ — paired king board"
            ],
            correct: 1,
            explanation: "QJT is a board that directly hits the caller's range: JTs (two pair/straight draw), KQs (two overcards + gutshot), QTs (top pair + gutshot), and other broadway holdings. The 3-bettor's range of AA/KK/AK misses this board relatively more than a K72 board. This is where the caller's check-raises and resistance is most credible."
          }
        ]
      },

      {
        id: "ch6-l5",
        chapter: "Chapter 7 · Lesson 5",
        title: "4-Bet Pots and Stack-Off Decisions",
        concept: "When the pot reaches 4-bet territory, you're usually playing for stacks. The only question is whether your hand justifies it.",
        content: [
          {
            heading: "The SPR in 4-Bet Pots",
            body: "In a standard 4-bet pot (open 2.5bb, 3-bet 9bb, 4-bet 22bb, call), the flop pot is ~45bb with ~78bb remaining. SPR ≈ 78 ÷ 45 ≈ 1.7. SPR under 2 means stacks are going in on almost every flop. Any decent made hand is a commit hand. Overpairs, top pairs with top kickers, and strong draws are all getting in. In 4-bet pots, preflop decisions largely determine postflop outcomes.",
          },
          {
            heading: "When to Commit Preflop",
            body: "At 100bb effective stacks, some hands warrant a 5-bet shove vs a 4-bet: AA (always), KK (almost always), AKs vs aggressive 4-bettors. QQ vs a 4-bet is the classic borderline hand — vs a tight 4-better (only AA/KK), QQ is a fold. Vs an aggressive player who 4-bets AK and bluffs, QQ is a profitable 5-bet shove. Context and reads determine the line. At 150bb+, hands like KK and QQ may prefer calls to build a better SPR situation.",
          },
          {
            heading: "Postflop Play in 4-Bet Pots",
            body: "With SPR ~1.7 on the flop, postflop decisions are simple: strong hand = get it in, weak hand = check-fold. Overpairs are commits. Strong top pairs are commits. Sets are always commits. Only unusual board/hand combinations justify complex postflop play in 4-bet pots — for the most part, preflop was the decision point. Recognize this and simplify your postflop thinking in these pots.",
          }
        ],
        glossaryTerms: ["SPR", "4bet", "5bet", "EV", "Polarized", "3bet"],
        quiz: [
          {
            question: "You call a 4-bet. Effective stacks were 100bb. The flop pot is ~45bb with ~78bb behind. What is the SPR and what does it mean?",
            options: [
              "SPR ~18 — there is lots of room for postflop play",
              "SPR ~5 — 3-bet pot territory",
              "SPR ~1.7 — almost every strong hand is a commit hand; stacks are going in on the flop",
              "SPR ~3 — modest postflop flexibility"
            ],
            correct: 2,
            explanation: "SPR = 78 ÷ 45 ≈ 1.7. With SPR under 2, the effective stacks can go in with a single pot-sized bet on the flop. One-pair hands become commit decisions. There's essentially no room for multi-street planning — you're deciding preflop whether you can get stacks in on the flop with your holding."
          },
          {
            question: "You hold QQ and face a 4-bet from a tight regular who only 4-bets AA/KK/AKs. What is the standard play?",
            options: [
              "5-bet shove — QQ is too strong to fold",
              "Call — QQ has set-mining value",
              "Fold — vs a range of AA/KK, QQ has only 35% equity and faces a commit decision at bad odds",
              "4-bet bluff-raise to confuse them"
            ],
            correct: 2,
            explanation: "QQ vs a tight 4-bet range of only AA/KK: you're dominated by KK and crushed by AA. QQ has ~35% equity vs AA/KK/AKs as a range. Getting 100bb in as a 35% equity hand is -EV. Against tight 4-bettors, QQ is a fold to a 4-bet. Against aggressive 4-bettors who include AK and bluffs, QQ becomes a 5-bet shove."
          },
          {
            question: "In a 4-bet pot with SPR 1.7, you flop middle pair (a pair of 8s on K♠8♦3♣) as the caller. How do you proceed?",
            options: [
              "Fold — middle pair is too weak in 4-bet pots",
              "Check and evaluate — middle pair may be ahead but faces significant range pressure; don't blindly commit but don't blindly fold",
              "Shove immediately — any pair is a commit in SPR 1.7",
              "Check-call any bet — your pot odds are always sufficient"
            ],
            correct: 1,
            explanation: "Middle pair in a 4-bet pot: you're not committed by default. The 4-bettor's range has KK, QQ, AA, AK — all ahead of you. Check and see what they do. If they check back, you have a cheap showdown. If they bet large, a call/fold decision needs to account for the fact that their range is narrow and strong."
          },
          {
            question: "At what effective stack depth does it become reasonable to call a 4-bet with KK (rather than 5-bet jamming)?",
            options: [
              "100bb — always jam KK",
              "150bb+ — with deeper stacks, calling builds a better SPR for postflop play with your very strong hand",
              "50bb — short stacks always call",
              "KK should always fold to a 4-bet"
            ],
            correct: 1,
            explanation: "At 150bb+, calling a 4-bet with KK creates a much more interesting SPR situation on the flop — you have room to play postflop with the second-best starting hand. Shoving for 150bb creates a bigger variance situation where AA has you crushed. Deeper stacks favor a call-and-outplay approach with KK."
          }
        ]
      }
    ]
  }


,

  {
    id: "ch7",
    title: "Common Leaks",
    description: "Most losing players leak from the same five or six spots. Identify yours and fix them — the improvement is immediate.",
    lessons: [
      {
        id: "ch7-l1",
        chapter: "Chapter 8 · Lesson 1",
        title: "Playing Too Many Hands (High VPIP)",
        concept: "The single most common leak in poker: playing hands you shouldn't. Every weak hand you enter with is a bet you've already lost part of.",
        content: [
          {
            heading: "What VPIP Measures",
            body: "{{VPIP}} (Voluntarily Put $ In Pot) is the percentage of hands a player enters voluntarily — calls or raises preflop, not counting forced blinds. A winning 6-max regular runs VPIP around 24-28%. A typical recreational player runs 35-50%+. Every hand above the profitable range is a leak. The excess hands don't just break even — they lose money, because they're hands that are dominated, out-of-position, or have poor equity vs real ranges.",
          },
          {
            heading: "The Cost of Loose Preflop Play",
            body: "Playing K8o from UTG seems harmless — it's only 2.5bb. But consider the consequences: you're dominated by AK, KQ, KJ, beaten by AA, KK, QQ. You flop a king 30% of the time and then face a tough spot with a weak kicker — did villain pair their king too, and with what kicker? Over hundreds of hands, K8o UTG generates a steady negative EV that compounds. The preflop leak is subtle but ruinous at volume.",
          },
          {
            heading: "Fixing the Leak",
            body: "Tighten your opening ranges to match position. Print out position-based opening charts and stick to them until they're automatic. The specific ranges matter less than the discipline. Key spots to tighten: EP with offsuit hands (Q9o, KTo, J9o — these are folds from UTG/HJ); limping (never limp — raise or fold); calling raises OOP with weak hands (fold K8o, Q9o, T7s to a raise unless you're getting exceptional pot odds). VPIP 25% feels tight. It's correct.",
          }
        ],
        glossaryTerms: ["VPIP", "PFR", "RFI", "EP", "LP", "IP", "OOP"],
        quiz: [
          {
            question: "A winning 6-max regular's VPIP is approximately:",
            options: ["15-18%", "24-28%", "35-40%", "50%+"],
            correct: 1,
            explanation: "Winning 6-max regulars run VPIP around 24-28%. This includes their wider BN/CO opens and blind defense, but tight EP play. A VPIP of 35%+ almost always indicates playing too many hands — especially from early and middle position."
          },
          {
            question: "You open K8o from UTG. Why is this a losing play?",
            options: [
              "K8o has negative equity preflop",
              "K8o is dominated by AK, KQ, KJ, KT and KK — hands that call your UTG open and crush your kicker",
              "UTG cannot open K8o by the rules",
              "Only suited hands can be opened from UTG"
            ],
            correct: 1,
            explanation: "K8o is dominated by many hands that will call an UTG open: KQ, KJ, KT all have you dominated on a king-high board. You're out of position against nearly everyone, and your hand doesn't flop strongly enough to compensate. Even when you make top pair, you often lose to better kickers."
          },
          {
            question: "Why is limping preflop generally a leak in 6-max?",
            options: [
              "Limping is illegal in 6-max",
              "Limping gives everyone behind excellent pot odds, allows them to raise over you with impunity, and puts you in a multiway pot OOP with a capped range",
              "Limping is only a leak with weak hands",
              "Limping costs too much in big blinds"
            ],
            correct: 1,
            explanation: "When you limp, anyone behind can raise and put you in a tough spot: call OOP in a bloated pot with a hand not worth raising yourself, or fold your invested 1bb. Meanwhile, everyone gets 2:1+ odds to call and attack you postflop. In 6-max, limp-calling is almost always exploitable — RFI or fold."
          },
          {
            question: "A player has VPIP of 42% in a 6-max game. What is the most likely impact on their winrate?",
            options: [
              "Positive — more hands means more profit",
              "Neutral — VPIP doesn't affect winrate",
              "Negative — they are playing significantly more hands than optimal, consistently entering pots with dominated or marginal holdings",
              "Positive only if they have a high aggression factor"
            ],
            correct: 2,
            explanation: "A 42% VPIP in 6-max means the player is entering ~42% of hands vs a profitable range of ~25%. The extra 17% of hands are mostly dominated or marginal — they lose money consistently. VPIP above 30% in 6-max is almost always a leak without exceptional postflop skill compensating for it."
          }
        ]
      },

      {
        id: "ch7-l2",
        chapter: "Chapter 8 · Lesson 2",
        title: "Playing Passively (Low Aggression)",
        concept: "Passive poker is losing poker. Checking and calling is the weakest line available — use it when it's correct, not as a habit.",
        content: [
          {
            heading: "What PFR Measures",
            body: "{{PFR}} (Pre-Flop Raise %) measures how often a player raises preflop. A winning 6-max regular's PFR is typically 18-22% — close to their VPIP. A PFR significantly below VPIP (e.g., VPIP 30%, PFR 12%) reveals a player who calls frequently rather than raising. This is the classic 'fish' profile: they play too many hands and play them passively. The gap between VPIP and PFR is the 'limp/call' range — hands played weakly.",
          },
          {
            heading: "The Value of Aggression",
            body: "Betting and raising win pots two ways: (1) villain folds immediately (fold equity), and (2) villain calls but is behind. Checking and calling wins pots only one way: being ahead at showdown. Passivity sacrifices the entire fold equity component of EV. With a made hand, passive play also leaves money on the table — you're not building the pot when you're ahead. Aggression is not about being reckless; it's about capturing the full expected value of strong hands and semi-bluffs.",
          },
          {
            heading: "Where Passive Players Leak Most",
            body: "Common passive leaks: (1) limping preflop instead of raising with medium hands; (2) checking strong made hands when you should be value betting; (3) calling c-bets with draws instead of raising as semi-bluffs; (4) checking back the river with a strong hand after villain shows weakness; (5) not betting the turn or river for thin value with one-pair hands. Each of these checks/calls could be a profitable bet that either folds out equity or builds a bigger pot when ahead.",
          }
        ],
        glossaryTerms: ["PFR", "VPIP", "FoldEq", "Cbet", "EV", "SDV"],
        quiz: [
          {
            question: "A player has VPIP 28%, PFR 10%. What does the large gap reveal?",
            options: [
              "They're playing an optimal balanced strategy",
              "They enter 18% of hands passively (limps and calls) — indicating over-calling and limping, a leak in 6-max",
              "They 3-bet frequently",
              "Nothing — VPIP and PFR always differ"
            ],
            correct: 1,
            explanation: "VPIP 28%, PFR 10% means 18% of their hands are entered passively (calls and limps). In 6-max, that means limping in, or calling raises without 3-betting hands that warrant it. These passive entries create weak-range situations postflop and sacrifice preflop fold equity."
          },
          {
            question: "You hold A♣J♦ and flop TPTK on J♥7♣2♠ (rainbow). Villain checks to you. What is the correct play?",
            options: [
              "Check — pot control",
              "Bet for value — TPTK on a dry board is worth building the pot with",
              "Check-raise if villain bets next",
              "Check — let villain bluff into you"
            ],
            correct: 1,
            explanation: "TPTK on J72r is a strong hand. Checking for pot control gives villain a free card and loses value from second pair, worse jacks, and draws. Bet 50-66%: build the pot when you're ahead. Checking is only correct with this hand as an occasional trap; the default is to bet for value."
          },
          {
            question: "Villain c-bets 40% of the pot. You hold a flush draw. Should you generally call or raise?",
            options: [
              "Always call — draws are for calling",
              "Consider raising as a semi-bluff — the raise generates fold equity in addition to your draw equity",
              "Always fold — draws lose money",
              "Call only if you have implied odds"
            ],
            correct: 1,
            explanation: "Flat-calling a c-bet with a flush draw is passive — you only win the pot by hitting the flush or villain giving up. Raising as a semi-bluff wins immediately when villain folds and gives you pot equity when called. Your flush draw has ~35% equity on the flop — you can raise aggressively and profit both ways."
          },
          {
            question: "Why does checking back the river with a strong hand after villain checks (when you should bet) cost money?",
            options: [
              "It doesn't — checking back is always correct",
              "You miss value from hands worse than yours that would have called a bet",
              "Villain gains information",
              "It creates SPR problems"
            ],
            correct: 1,
            explanation: "When villain checks the river and you have a strong hand, there's a population of worse hands in their range that would call a value bet. Checking back wins the same pot as calling but misses those value bets. Over thousands of river spots, these missed value bets compound into significant lost EV."
          }
        ]
      },

      {
        id: "ch7-l3",
        chapter: "Chapter 8 · Lesson 3",
        title: "Over-Calling (Calling Too Much)",
        concept: "Calling is the weakest action in poker. It wins only when you're already ahead. Raise to protect your equity or fold to admit you're behind.",
        content: [
          {
            heading: "Why Calling Is Weak",
            body: "When you call a bet, you: (1) give your opponent a chance to improve on later streets, (2) reveal that your hand is not strong enough to raise, and (3) miss the fold equity a raise would generate. Raising wins pots two ways (folds + showdowns). Calling wins only one way (showdowns). The best players minimize calls in favor of raises and folds — a strategy called 'raise or fold' (or 'RFO') for certain positions. Not every spot is RFO, but the principle is correct: challenge the assumption that calling is safe.",
          },
          {
            heading: "Situations Where Players Over-Call",
            body: "Common over-calling leaks: (1) calling c-bets on boards where your range has no advantage — you called with J9s and the flop is A♦K♣7♠ (you have nothing, fold); (2) calling turn bets with weak draws that don't justify the price; (3) calling river bets out of curiosity — 'I want to see what they had.' Curiosity calls are pure EV leakage. If the math says fold, fold. The information gained by calling to see their hand is not worth the money.",
          },
          {
            heading: "The Aggression Factor",
            body: "{{Aggression Factor}} (AF), calculated as $AF = \\frac{\\text{Raises} + \\text{Bets}}{\\text{Calls}}$, A healthy AF for winning 6-max players is 2.5-4. An AF under 2 indicates over-calling. An AF above 6 can indicate reckless aggression. Players with low AF are calling stations — they call too much and raise too little. The fix: when you find yourself about to call, ask 'Is there any way I can turn this into a raise?' Often the answer is yes, and the raise is the better play.",
          }
        ],
        glossaryTerms: ["VPIP", "PFR", "FoldEq", "MDF", "EV", "Alpha"],
        quiz: [
          {
            question: "Aggression Factor (AF) = $\\frac{\\text{Raises} + \\text{Bets}}{\\text{Calls}}$. A player with AF of 1.2 is:",
            options: [
              "Appropriately balanced",
              "Too aggressive",
              "Over-calling — they call far more than they raise or bet",
              "Playing GTO"
            ],
            correct: 2,
            explanation: "AF of 1.2 means for every 1 call, the player raises or bets only 1.2 times — barely more passive than neutral. Winning players have AF 2.5-4. AF under 2 is a strong signal of over-calling and passive play that leaks money by sacrificing fold equity and pot-building with strong hands."
          },
          {
            question: "You call a c-bet on a board that missed your hand entirely (no pair, no draw). Is this typically profitable?",
            options: [
              "Yes — you can still bluff on the turn",
              "No — calling with no equity means you win only if villain gives up, which you should have no read to count on",
              "Yes — pot odds justify floating any flop",
              "Only if you have position"
            ],
            correct: 1,
            explanation: "Calling with air is called a 'float' — profitable only if: (1) you're IP and can bluff the turn, and (2) villain's c-betting range is weak enough that they'll fold often. Without position or a read that villain will check the turn, floating with air is chip spewing. Fold and wait for a better spot."
          },
          {
            question: "Villain bets the river. You have a medium pair and have no read. The pot odds require you to win 33% of the time. What is the critical question?",
            options: [
              "Is my pair strong enough?",
              "Is villain bluffing at least 33% of the time in this exact spot?",
              "How big is the pot?",
              "Did I play the flop correctly?"
            ],
            correct: 1,
            explanation: "The correct question is always: given villain's range in this spot, are they bluffing at least as often as the pot odds require? If villain is a value-heavy player who rarely bluffs rivers, fold even with a medium pair. If villain fires rivers aggressively, call even with a weak hand. The math, not the hand, drives the decision."
          },
          {
            question: "Why are 'curiosity calls' on the river a leak?",
            options: [
              "They're fine — information is valuable",
              "The EV of a curiosity call is negative — you're paying to see a hand you already expect to lose, and the information gained doesn't justify the cost",
              "They only matter in tournaments",
              "They're not a leak — players should always call the river"
            ],
            correct: 1,
            explanation: "Calling the river 'just to see what they had' is paying for information you don't need. If you've already calculated the odds and the math says fold, executing the fold is +EV. Paying to see the cards is pure information cost — you lose money now in exchange for future knowledge that may have minimal strategic value."
          }
        ]
      },

      {
        id: "ch7-l4",
        chapter: "Chapter 8 · Lesson 4",
        title: "Bluffing Into Calling Stations",
        concept: "Bluffing a player who never folds is not brave — it's math-blind. The best exploit against a calling station is to never bluff them.",
        content: [
          {
            heading: "Identifying a Calling Station",
            body: "A calling station is a player with very high WTSD (Went to Showdown %) — typically 35%+ — and very low fold-to-cbet % (<30%). They call down with weak hands, rarely raise, and rarely fold under pressure. These players are extremely profitable opponents — but only if you adjust. Against a calling station, every bluff you fire is likely to be called and every value bet is likely to be called. Adjust both ways: eliminate bluffs, increase value bet frequency.",
          },
          {
            heading: "The Math of Bluffing a Caller",
            body: "$\\alpha = \\frac{\\text{Bet}}{\\text{Bet} + \\text{Pot}}$. If you fire a half-pot bluff, alpha = 33%. A calling station who calls 75% of the time makes every bluff attempt -EV: EV = (0.25 × Pot) − (0.75 × Bet) = 0.25P − 0.375P = −0.125P. You're losing 12.5% of the pot on every bluff. Against a calling station who calls 90%, every bluff loses even more. The number doesn't lie — stop bluffing players who don't fold.",
          },
          {
            heading: "Maximally Exploiting Calling Stations",
            body: "Against players who over-call: (1) eliminate bluffs entirely; (2) thin-value bet relentlessly — bet hands you'd normally check-back (second pair, weak top pair, weak draws that made a pair); (3) value bet larger — they'll call regardless of size, so maximize the price; (4) check back only when you have clear showdown value and no better hands call you. The mistake players make: continuing to bluff calling stations in the belief that they'll 'catch on eventually.' They won't. Exploit them until they bust.",
          }
        ],
        glossaryTerms: ["MES", "GTO", "Alpha", "EV", "FoldEq", "WTSD"],
        quiz: [
          {
            question: "Villain's fold-to-c-bet is 18%. What does this tell you about your bluffing strategy against them?",
            options: [
              "Bluff at standard frequency — 18% is close enough to the optimal",
              "Bluff more — they call too much and you should pressure them",
              "Bluff zero or near-zero — their 18% fold rate makes most bluffs significantly -EV",
              "Only semi-bluff against this player"
            ],
            correct: 2,
            explanation: "If villain folds only 18% to c-bets and alpha on a half-pot bet is 33%, your bluffs are losing money (18% fold rate < 33% break-even). Bluffing this player is -EV. The correct adjustment: eliminate bluffs and exclusively bet for value. Their calling frequency makes every value bet highly profitable."
          },
          {
            question: "Against a calling station, you hold second pair, decent kicker, on the river. Villain checks. Should you bet?",
            options: [
              "No — second pair is a showdown hand",
              "Yes — thin-value bet. Calling stations call with weaker pairs and worse hands that you beat; extract the value",
              "Only if you're in position",
              "Check — you might be behind"
            ],
            correct: 1,
            explanation: "Against a calling station, thin-value bets are highly profitable. They'll call with one pair, any pair, weak kickers — hands that are behind your second pair. What would normally be a check-back (too thin to value bet against a normal player) becomes a clear value bet vs a player who over-calls."
          },
          {
            question: "You've been losing to a calling station because they keep calling your bluffs. What is the correct adjustment?",
            options: [
              "Bluff less frequently",
              "Bluff with better hands",
              "Stop bluffing entirely and value bet mercilessly — their over-calling is profitable for you only on value bets",
              "Size up your bluffs to force folds"
            ],
            correct: 2,
            explanation: "The correct MES adjustment: zero bluffs, maximum value. Calling stations don't fold, so every bluff loses. But their tendency to over-call also means every value bet wins more than it would against a normal player. Your whole strategy against them flips: bet for value obsessively, never bluff."
          },
          {
            question: "Why is sizing up your value bets against a calling station optimal?",
            options: [
              "Larger bets scare them into folding",
              "They call regardless of size — so maximizing the size maximizes the amount they pay when behind",
              "Bet sizing has no effect on calling stations",
              "Large bets reveal your hand strength"
            ],
            correct: 1,
            explanation: "If a player calls any reasonable bet size, you should bet as large as you can get away with while still getting called. The size that maximizes EV against a calling station is the largest size they'll call with their continuing range. Against habitual callers, this is often quite large."
          }
        ]
      },

      {
        id: "ch7-l5",
        chapter: "Chapter 8 · Lesson 5",
        title: "Ignoring Position",
        concept: "Position is the most important structural advantage in poker. Playing out of position without compensation is voluntarily giving away expected value.",
        content: [
          {
            heading: "Quantifying the Position Advantage",
            body: "The {{BN}} is the most profitable seat at 6-max tables. The {{SB}} is the most costly. In most online databases, the difference between BN and SB win rates across the player pool is 20-30bb/100 hands. That's a massive structural advantage simply from where you sit. Players who understand position treat it as a precious resource: they fight to be in position, they avoid entering pots out of position without strong hands, and they understand that every hand they play OOP needs to be adjusted for the disadvantage.",
          },
          {
            heading: "How Position Leaks Manifest",
            body: "Positional leaks look like: (1) defending too wide from the blinds — calling raises in BB with K9o when OOP is punishing; (2) cold-calling from SB when you should 3-bet or fold; (3) opening too wide from early position — EP should be tight because you'll often be OOP postflop; (4) not adjusting your postflop strategy for position — making the same check-calls OOP as you do IP. Each of these discounts the positional cost you're incurring.",
          },
          {
            heading: "Using Position to Control the Pot",
            body: "{{IP}} players have a fundamental advantage on every street: they see the opponent's action before making their own. This means: checking back the flop with medium-strength hands controls pot size more effectively IP; betting for thin value with weak one-pair hands is safer IP; you can call and then bluff more profitably IP. When OOP, you must rely on leading (donk betting), check-raising, or check-folding — all of which require stronger hands to execute profitably.",
          }
        ],
        glossaryTerms: ["IP", "OOP", "BN", "SB", "BB", "EP", "LP", "PotOdds"],
        quiz: [
          {
            question: "Which position consistently loses the most money per 100 hands in 6-max NL?",
            options: ["Button", "Cutoff", "Small Blind", "Big Blind"],
            correct: 2,
            explanation: "The Small Blind loses the most per 100 hands in 6-max. It pays a forced half-blind AND plays OOP postflop against every opponent. Even good SB players typically run -10 to -20bb/100 from that seat. The forced financial entry without positional compensation makes it the worst seat structurally."
          },
          {
            question: "You are in the SB vs a BN steal. You have KJo. What is the standard play?",
            options: [
              "Call — KJo has good equity vs a BN range",
              "3-bet or fold — flatting from SB puts you OOP in a bloated multiway pot or a difficult heads-up situation",
              "Limp and see the flop",
              "Always fold from SB vs steals"
            ],
            correct: 1,
            explanation: "KJo from SB vs a BN steal: 3-bet (representing strength and building a pot where you take initiative) or fold (if you're concerned about being dominated). Calling closes the action on the BB and puts you OOP with a hand that plays better with the betting lead. KJo isn't strong enough to 3-bet/call vs a 4-bet, making fold or 3-bluff the cleaner lines."
          },
          {
            question: "You open UTG with KQo and get called by BN and BB. Flop K♠9♦4♣. How does being OOP affect your play?",
            options: [
              "It doesn't — TPTK is a value hand regardless of position",
              "OOP, you should bet to protect your hand and avoid giving away free cards to two opponents on a dry board",
              "Check-fold — being OOP makes TPTK unprofitable",
              "Check — pot control is more important OOP"
            ],
            correct: 1,
            explanation: "TPTK OOP in a multiway pot: bet. Two opponents behind you means free checks cost you value from worse kings and draws. Checking OOP in multiway pots with TPTK is passive play. Bet 60-70% to charge draws, protect your equity, and build a pot where you're likely ahead."
          },
          {
            question: "Why should early position opening ranges be tighter than late position ranges?",
            options: [
              "EP players must pay larger blinds",
              "From EP, you'll be OOP postflop vs most of the table for the entire hand — you need stronger hands to justify entering",
              "EP ranges are limited by rules",
              "Late position players always have better hands"
            ],
            correct: 1,
            explanation: "From UTG, if you get called by CO, BN, and BB, you're OOP vs all three for every remaining street. Your hand must be strong enough to navigate difficult postflop decisions from the most disadvantaged position. Wider EP ranges mean playing more hands OOP against opponents who will outplay you — a guaranteed leak."
          }
        ]
      },

      {
        id: "ch7-l6",
        chapter: "Chapter 8 · Lesson 6",
        title: "How to Study Poker",
        concept: "Playing more hands without studying is just rehearsing your mistakes. Study breaks the cycle — but only if you study the right things the right way.",
        content: [
          {
            heading: "The Study-Play Loop",
            body: "Improvement in poker comes from a cycle: play, review, study, implement, play. Playing without review means you never identify your leaks. Studying without playing means theory stays abstract. The ratio of study to play should be at least 1:2 for players serious about improving — for every 2 hours at the table, spend 1 hour in study. Over time, study hours pay exponentially more than play hours at the same stakes.",
          },
          {
            heading: "Hand Review: The Core Practice",
            body: "Hand review is the highest-leverage study practice. Focus on: (1) Spots where you were unsure — not spots where the decision felt clear; (2) Spots where you lost a large pot — what decision tree led to maximum loss? (3) Recurring spots — if you find yourself confused by the same situation repeatedly, that's the leak to fix. When reviewing, reconstruct villain's range at each decision point and evaluate the EV of your line vs alternatives. Don't just note what you did — identify what you should have done.",
          },
          {
            heading: "Using Solvers and Resources Effectively",
            body: "GTO solvers (GTO+, PioSOLVER, GTO Wizard) show optimal plays for any spot. Use them to understand concepts, not to memorize solutions — poker has trillions of nodes and rote memorization is impossible. The workflow: identify a spot you want to understand, input it into a solver, study the high-frequency plays and the logic behind them, then find the abstraction — the principle that explains multiple similar spots. Resources: training sites, forums (2+2, PokerCoaching), and coaching are valuable if you use them actively (take notes, practice) rather than passively (watch and forget).",
          }
        ],
        glossaryTerms: ["GTO", "MES", "EV", "VPIP", "PFR", "WTSD"],
        quiz: [
          {
            question: "What is the most effective study practice for identifying your specific leaks?",
            options: [
              "Watching training videos",
              "Hand review — systematically analyzing spots where you were uncertain or lost significant pots",
              "Reading poker books",
              "Playing more hands at higher stakes"
            ],
            correct: 1,
            explanation: "Hand review directly connects study to your specific game. Watching videos teaches general concepts; hand review reveals your personal leaks. The player who reviews their own hands and identifies recurring mistakes improves faster than one who only absorbs general education."
          },
          {
            question: "When should you study a solver solution vs when should you build an intuitive understanding?",
            options: [
              "Always memorize the solver output exactly",
              "Use solvers to understand the principles behind decisions — identify the pattern that explains why certain hands take certain actions, rather than memorizing specific nodes",
              "Never use solvers — play by feel",
              "Only use solvers for preflop charts"
            ],
            correct: 1,
            explanation: "Poker has too many nodes to memorize. Solvers are best used to understand *why* a certain play is optimal. 'Why does AK c-bet 100% here but only 60% on this other board?' — the answer is a transferable principle about range advantage, board texture, and SPR. Extract the principle, not the number."
          },
          {
            question: "You review a hand where you bet-bet-bet three streets and lost. The correct question is:",
            options: [
              "Why did I lose this hand?",
              "Was my three-street betting line optimal given villain's range, and if not, at which street was my decision a mistake?",
              "Should I have folded preflop?",
              "Was I unlucky?"
            ],
            correct: 1,
            explanation: "Outcome (winning or losing) is irrelevant to whether your line was correct. The correct question: was each betting decision +EV given the information available? Identify the specific decision point — preflop, flop, turn, river — where the EV was wrong. Fix that node. The rest takes care of itself."
          },
          {
            question: "What is the recommended study-to-play ratio for a serious improving player?",
            options: [
              "0:1 — just play, learning comes from experience",
              "1:2 — one hour of study for every two hours of play",
              "5:1 — mostly study, minimal play",
              "1:10 — play ten times as much as you study"
            ],
            correct: 1,
            explanation: "A 1:2 study-to-play ratio (1 hour study per 2 hours play) is a reasonable target for serious improvement. This ensures theory is grounded in real decisions and that study is proportional enough to actually change habits. Players who only play without studying rehearse their mistakes. Players who only study without playing can't translate theory into real decisions under pressure."
          }
        ]
      }
    ]
  }
]