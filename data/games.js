export const games = [
  {
    id: "wingspan",
    name: "Wingspan",
    category: "Strategy",
    duration: "40-70 min",
    players: "1-5 players",
    complexity: "Intermediate",
    summary:
      "Build a thriving wildlife preserve by attracting birds to habitats and chaining their unique powers.",
    essentials: [
      "Each habitat focuses on distinct actions: forest (gain food), grassland (lay eggs), and wetland (draw cards).",
      "Expanding a habitat strengthens the associated action and unlocks bonuses.",
      "Bird powers trigger when played or activated, generating combos across habitats."
    ],
    steps: [
      {
        title: "Set Up",
        detail:
          "Give each player a mat, 5 bird cards, 5 food tokens (one of each type), and 2 bonus cards. Choose 1 bonus card and discard the other."
      },
      {
        title: "Draft Starting Birds",
        detail:
          "Discard any number of bird cards. For each card kept, discard 1 matching food token. Everyone should begin with 5 total resources split between birds and food."
      },
      {
        title: "Take Turns",
        detail:
          "On your turn choose one action: play a bird, gain food, lay eggs, or draw bird cards. Resolve any bird powers in the habitat from right to left."
      },
      {
        title: "Score Rounds",
        detail:
          "After each round, score the round goal tile and refill the bird feeder and face-up cards. Advance the round marker and continue."
      },
      {
        title: "End Game",
        detail:
          "After 4 rounds tally bird points, bonus cards, round goals, eggs, cached food, and tucked cards. Highest total wins."
      }
    ],
    tips: [
      "Chain habitat powers to accelerate card draw or egg production before the final round.",
      "Balance your food economy with scoring birds — a strong early habitat pays off late.",
      "Watch opponents’ egg counts to contest tight round goals."
    ]
  },
  {
    id: "catan",
    name: "Catan",
    category: "Gateway",
    duration: "60-90 min",
    players: "3-4 players",
    complexity: "Casual",
    summary:
      "Race to 10 victory points by building settlements, cities, and roads while trading resources with others.",
    essentials: [
      "Numbers on hexes determine which resources are produced each roll.",
      "Settlements collect resources from adjacent hexes with rolled numbers; cities collect double.",
      "Trading with players or the port network keeps your build engine humming."
    ],
    steps: [
      {
        title: "Establish Settlements",
        detail:
          "Place 2 settlements and 2 roads on the island, ensuring each new settlement is at least 2 edges away from others."
      },
      {
        title: "Roll and Produce",
        detail:
          "At the start of each turn, roll two dice. All players receive resources for hexes matching the result where they own settlements or cities."
      },
      {
        title: "Build or Trade",
        detail:
          "Spend resources to build roads, settlements, or upgrade to cities. You can trade with other players or at ports if you have access."
      },
      {
        title: "Play Development Cards",
        detail:
          "Use purchased development cards for one-time boosts, knights to control the robber, or to score end-game points."
      },
      {
        title: "Win Condition",
        detail:
          "First player to reach 10 victory points from structures, longest road, largest army, and development card points wins."
      }
    ],
    tips: [
      "Diversify settlement placements to cover multiple numbers and resources.",
      "Track opponents’ needs to negotiate favorable trades.",
      "Use the robber to pressure leaders and protect your high-production tiles."
    ]
  },
  {
    id: "azul",
    name: "Azul",
    category: "Abstract",
    duration: "30-45 min",
    players: "2-4 players",
    complexity: "Casual",
    summary:
      "Draft tiles to complete patterns on your mosaic wall, scoring combos and avoiding waste penalties.",
    essentials: [
      "Draft from factories or the center; take all tiles of one color from a source.",
      "Fill pattern rows before moving tiles to the wall for scoring.",
      "Excess tiles fall to the floor line and cost points."
    ],
    steps: [
      {
        title: "Factory Offer",
        detail:
          "In drafting phase, choose a factory or center, take all tiles of one color, and move leftovers (if from factory) to the center."
      },
      {
        title: "Load Pattern Lines",
        detail:
          "Place chosen tiles into a single pattern row. Overflow tiles go directly to the floor line."
      },
      {
        title: "Wall Tiling",
        detail:
          "When a pattern line is full, move one tile to the matching spot on your wall and score immediately based on adjacent tiles."
      },
      {
        title: "Round Cleanup",
        detail:
          "Clear used pattern lines, discard completed tiles, reset factories, and pass the starting player marker."
      },
      {
        title: "Game End",
        detail:
          "Game ends after a player completes a horizontal line on their wall. Tally set bonuses and subtract floor penalties."
      }
    ],
    tips: [
      "Time your drafts to deny opponents the colors they need.",
      "Stack up future turns by filling higher rows early for explosive scoring later.",
      "Avoid overfilling rows — floor penalties escalate quickly."
    ]
  },
  {
    id: "just-one",
    name: "Just One",
    category: "Party",
    duration: "20 min",
    players: "3-7 players",
    complexity: "Casual",
    summary:
      "Cooperate to help the active player guess a mystery word using one-word clues, eliminating duplicates before reveal.",
    essentials: [
      "Each round one player guesses, the rest write a clue secretly.",
      "Duplicate clues cancel out, so creativity beats obvious hints.",
      "Score based on correct guesses over 13 rounds."
    ],
    steps: [
      {
        title: "Reveal Mystery Word",
        detail:
          "Active player draws a card, chooses a number 1-5, then closes their eyes while teammates see the target word."
      },
      {
        title: "Write Clues",
        detail:
          "Support players secretly write a single-word clue describing the target without coordinating."
      },
      {
        title: "Eliminate Matches",
        detail:
          "Compare clues and discard any that are identical or deemed too similar."
      },
      {
        title: "Make the Guess",
        detail:
          "Reveal remaining clues simultaneously. Active player makes one guess; success scores a point."
      },
      {
        title: "Tally Score",
        detail:
          "Aim for 13 points. 11-13 is legendary, 9-10 solid, 7-8 average, 5-6 needs practice, below 5 consider replaying."
      }
    ],
    tips: [
      "Strive for clever but safe clues that survive duplicate elimination.",
      "Signal difficulty by writing ambiguous clues when unsure of your teammates’ knowledge.",
      "Losing a point hurts more than skipping, so pass if totally lost."
    ]
  }
];
