export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "UK failing to capitalise on Brexit, top Trump trade official says",
  standfirst:
    "Jamieson Greer says Britain’s alignment with EU is a ‘problem’ for a US trade deal",
  authors: "Aime Williams (Washington) and Peter Foster (London)",
  dateLabel: "4 September 2026",
  url: "https://www.ft.com/content/0d2beac3-ef62-4cbf-959e-b5c6b9703081",
  summary:
    "US Trade Representative Jamieson Greer says the UK is prioritising closer alignment with Brussels rather than exploiting Brexit to accept US standards and goods, complicating efforts to expand the bilateral trade deal. Britain’s planned EU reset would remove food-export border checks but require compliance with EU standards, potentially excluding products such as chlorine-washed chicken and hormone-treated beef from the US. The existing US-UK agreement reduced some tariffs and granted concessions on beef, ethanol, pharmaceuticals and medical technology, but most British goods still face a 10% US tariff and metals a 25% national-security tariff. Broader negotiations have stalled, especially over agriculture, industrial standards and UK tariffs on US goods. The dispute comes amid wider Trump tariff tensions, higher energy prices and global bond-market volatility.",
  implications: [
    "UK businesses may face a strategic choice between smoother EU trade and greater US market access, with dual-standard compliance increasing complexity.",
    "The unresolved US tariff regime leaves exporters exposed to elevated costs and continued policy uncertainty.",
    "Agriculture, food, autos, chemicals, metals and pharmaceuticals are particularly sensitive to standards and tariff decisions.",
    "Ongoing trade escalation could weigh on investment and financing conditions through energy-price and bond-market volatility.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
