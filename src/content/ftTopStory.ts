export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Federal Reserve defies Donald Trump with first rate rise since 2023",
  standfirst:
    "President calls for 1% borrowing costs after US central bank signals willingness for further action to cool inflation",
  authors:
    "Claire Jones and Myles McCormick (Washington); Kate Duguid (New York)",
  dateLabel: "16 September 2026",
  url: "https://www.ft.com/content/f5ce5c38-76e3-4212-8c60-4c868f6dee70",
  summary:
    "The Federal Open Market Committee unanimously raised the federal funds rate by 25 basis points to 3.75–4%, the first increase since 2023, citing inflation that remains too high and risks from Middle East-related price shocks and an AI-component scramble. Chair Kevin Warsh said broad financial conditions were not restrictive and indicated the Fed was prepared to tighten further, directly contradicting Donald Trump’s demand for rates of 1% or less. Markets responded hawkishly: the two-year Treasury yield rose 7 basis points to 4.74%, the dollar index gained 0.74%, and futures priced almost a 90% chance of another increase before year-end. PCE inflation is 3.7% against the Fed’s 2% target, and projections showed 12 officials expecting another quarter-point rise in 2026, with four forecasting two further increases. Despite Warsh’s positive assessment of hiring, earnings and capital investment, policymakers do not expect inflation to reach 2% until 2029, reinforcing expectations that borrowing costs may stay higher for longer.",
  implications: [
    "Reprice borrowing, refinancing, and working-capital plans for a higher-for-longer path after the first hike since 2023 and strong odds of another before year-end.",
    "Watch dollar strength and two-year yields for FX, hedging, and input-cost pressure on Ops budgets and cross-border contracts.",
    "Treat Middle East and AI-component supply shocks as persistent inflation risks that can keep policy tight into 2027–2029.",
    "Separate White House rate demands from FOMC signals when forecasting financing costs and investment timing.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
