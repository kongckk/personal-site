export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Global bond sell-off reignites as oil jumps to $109",
  standfirst:
    "US yields reach highs of the day after Scott Bessent’s Treasury buyback operation undershoots its target",
  authors:
    "Myles McCormick; George Steer; Jamie Smyth; Kate Duguid; Emily Herbert; Ian Smith",
  dateLabel: "10 September 2026",
  url: "https://www.ft.com/content/49e8c693-0064-4ef9-917f-5f2be97458fc",
  summary:
    "US long-term borrowing costs hit their highest level in nearly two decades as oil climbed toward $109 a barrel and investors soured on the Treasury’s debt buyback. The 30-year yield rose as much as 0.08 percentage points to 5.37%, its highest since 2007, after the Treasury accepted only $5.2bn of offers against a $6bn buyback target; the 10-year yield jumped 0.11 points to 4.95% and the two-year rose 0.16 points to 4.58% as traders priced more Fed rate rises. A $22bn 30-year auction cleared at 5.308%, the highest since 2001, though demand remained firm. Brent settled 6.3% higher at $107.63 before trading near $109, with supply fears tied to Middle East conflict, a Houthi port seizure, and Saudi August output of 6.2mn b/d — the lowest monthly print of 2026 and 23% below July. Wholesale inflation also accelerated, with August PPI at 5.4% year on year versus 4.7% in July, while equities fell (S&P 500 −0.6%, Nasdaq 100 −0.9%). Strategists framed a “double whammy” of higher oil and rising term premia amid fiscal credibility concerns, including a proposed $5,000 adult dividend estimated to cost more than $1tn.",
  implications: [
    "Near-5% 10-year and 5.37% 30-year yields lift discount rates and refinancing costs — revisit debt schedules, lease rates, and long-duration project IRR assumptions.",
    "An undersubscribed $6bn buyback ($5.2bn accepted) is a weak liquidity signal; treat upcoming auctions and term-premium moves as near-term funding-risk markers.",
    "Oil near $109 plus rising PPI (5.4%) point to sticky input and shipping costs — stress-test operating budgets and hedge coverage for energy-linked spend.",
    "Fiscal headlines (>$1tn dividend proposal) and higher rate-rise odds argue for tighter WACC scenarios and closer monitoring of credit spreads and equity beta.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
