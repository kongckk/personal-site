export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Treasury yields jump as Bessent’s $6bn buyback plan disappoints investors",
  standfirst:
    "10-year borrowing costs hit highest level in nearly three years despite upsized repurchase programme",
  authors: "Kate Duguid; George Steer; Myles McCormick",
  dateLabel: "9 September 2026",
  url: "https://www.ft.com/content/2476992f-c9fe-4992-887d-f34c81c100ab",
  summary:
    "US Treasury yields climbed toward three-year highs after Treasury Secretary Scott Bessent unveiled a $6bn bond buyback, below Wall Street’s $8bn–$10bn expectations and leaving markets underwhelmed. The 10-year yield rose about 0.05 percentage points to just under 4.86%, its highest level since late 2023, before easing after a $39bn 10-year auction that cleared at 4.834% versus 4.683% at the prior sale. The programme swaps older, less-liquid issues for newer ones to support market liquidity rather than shrink net issuance, and critics argue it may not offset fiscal deficits, inflation pressure, and broader fundamentals. The Treasury was due to name eligible bonds and run the operation Thursday, with a 30-year auction next as another test of demand. Bessent told currency traders he holds “asymmetric information” and is “the house now,” underscoring a more assertive policy stance as borrowing costs stay elevated.",
  implications: [
    "Near-4.86% 10-year yields raise discount rates and refinancing costs for Ops & Finance planning on debt, leases, and long-duration projects.",
    "A smaller-than-expected $6bn buyback signals limited near-term liquidity support; treat auction results and the 30-year sale as key confidence checks.",
    "Higher cleared auction yields (4.834% vs 4.683%) point to sticky funding costs — revisit interest-rate assumptions in budgets and WACC models.",
    "Fiscal-deficit and inflation concerns remain the bigger drivers than buybacks; keep scenario plans for further curve steepening and credit-spread moves.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
