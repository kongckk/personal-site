export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Turkish authorities rush to stem fallout from stock market scandal",
  standfirst:
    "Funds frozen or liquidated and 38 people referred to prosecutors as regulators move to restore calm",
  authors: "John Paul Rathbone (Istanbul)",
  dateLabel: "17 September 2026",
  url: "https://www.ft.com/content/ef54585a-4d2f-4538-b185-9bff75ef2f5e",
  summary:
    "Turkish authorities have frozen trading in funds run by seven asset managers and ordered about 130 funds to be liquidated after a speculative bubble shook the Istanbul stock market and threatened retail savings. The central bank eased lira liquidity to limit forced selling, a state-owned bank opened talks to buy two savings-finance companies tied to the turmoil, and the capital markets regulator referred 38 people to prosecutors for suspected manipulation, with senior figures at Pusula, Tera, Hedef and Destek taken into custody or arrested. The shakeout is awkward for finance minister Mehmet Şimşek’s stabilisation programme: the BIST 100 fell a combined 8% over Tuesday–Wednesday before rebounding 3% on Thursday, and the Financial Stability Committee said the problem was concentrated, temporary and manageable while focusing on liquidity and contagion. The trigger was a fund run after Pusula Portföy said some funds could not meet redemptions on time; Tera and Atlas also faced redemption delays, with the three groups managing roughly $29bn. Concentrated fund buying in thinly traded affiliated stocks had inflated NAVs and attracted more inflows until MSCI warned of possible co-ordinated trading, S&P Dow Jones reviewed Turkey for a possible frontier downgrade, and local rules tightened.",
  implications: [
    "Treat Turkey EM equity, fund, and FX exposure as elevated contagion risk while freezes, liquidations, and custody actions play out.",
    "Watch Şimşek’s Financial Stability Committee liquidity and bailout steps for signals on whether retail savings vehicles stay ring-fenced from the fund blow-up.",
    "Reassess counterparties and NAV reliability in concentrated Turkish fund/stock structures after MSCI and S&P Dow Jones scrutiny.",
    "Price political–market interaction: emergency FS committee meetings have followed opposition shocks and Iran-war volatility; expect further policy intervention if the rebound fades.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
