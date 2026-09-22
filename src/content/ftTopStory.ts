export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "US and Iran hold first talks since June as Donald Trump threatens ‘annihilation’",
  standfirst:
    "President says Steve Witkoff and Jared Kushner had ‘good meeting’ with Iranian delegation on the sidelines of the UN gathering",
  authors: "Abigail Hauslohner, Andrew England and Bita Ghaffari",
  dateLabel: "23 September 2026",
  url: "https://www.ft.com/content/1434496d-0eaf-4270-8ad3-87724cd3721e",
  summary:
    "US envoys Steve Witkoff and Jared Kushner held the first direct talks with Iranian counterparts since late June on the sidelines of the UN General Assembly, with Iranian state TV saying Foreign Minister Abbas Araghchi attended; Donald Trump called the meeting “very good,” promised further talks “in the near future,” and framed Tehran’s choice as “potential greatness or obliteration,” threatening to “annihilate the Islamic republic” if it refused a rebuild deal. The conflict has already driven a global energy crisis and wider Middle East violence, while Washington threatens sanctions on air-service providers in countries where Iranian airlines operate—Oman and Iraq said they were preparing to stop receiving those flights. Diesel in the US has hit a record average of $6.50 a gallon, per AAA, as the war isolates Washington internationally and pushes Trump’s domestic approval to new lows. Trump predicted a peace deal “right after” November’s midterms, dismissed munitions-stockpile warnings as the talk of “cowards and traitors,” and in a 33-minute UN speech claimed to have ended “eight wars,” hailed Venezuela’s overthrow, and threatened possible military action against Mexico, Cuba and others—drawing a walkout by Cuban delegates and a rebuke from UN Secretary-General António Guterres that “military power alone cannot secure peace.”",
  implications: [
    "Price elevated energy and freight risk: record US diesel and Middle East disruption raise logistics, refining, and CPI pass-through for Ops & Finance planning.",
    "Watch secondary-sanctions and aviation corridors—threats against air-service providers serving Iranian airlines (and Oman/Iraq flight stops) can strand crew, cargo, and insurance cover.",
    "Treat near-term diplomacy as unstable: talks resumed but Trump’s annihilation rhetoric and midterm-timed “deal after election” framing leave policy and market volatility high through November.",
    "Reassess geopolitical contingency for Gulf energy, FX, and equity books given UN-stage escalation toward Mexico, Cuba, and other theatres alongside Iran.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
