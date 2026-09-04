export type FinanceNewsItem = {
  headline: string;
  source: string;
  blurb: string;
  url: string;
};

export const financeNews = {
  heading: "Today in finance",
  dateLabel: "Friday, 4 September 2026",
  timezone: "Asia/Singapore",
  updatedAt: "2026-09-04T05:53:00Z",
  items: [
    {
      headline: "August jobs report: payrolls projected up about 53,000",
      source: "CNBC",
      blurb:
        "Consensus looks for a modest rebound after a soft summer, with unemployment expected near 4.1% ahead of the Fed.",
      url: "https://www.cnbc.com/2026/09/03/august-2026-jobs-report-payrolls.html",
    },
    {
      headline: "U.S. stocks jump as Waller’s comments ease rate-hike fears",
      source: "Economic Times",
      blurb:
        "Dow, S&P 500, and Nasdaq rose over 1% after Fed Governor Waller said he may favour holding rates if inflation keeps cooling.",
      url: "https://economictimes.indiatimes.com/markets/us-stocks/wall-street-guide/us-stocks-today-us-stocks-jump-as-waller-comments-ease-rate-hike-fears/articleshow/133745833.cms",
    },
    {
      headline: "ADP: private-sector employment rose by 38,000 in August",
      source: "ADP",
      blurb:
        "Private payroll growth slowed versus forecasts, with manufacturing and professional services shedding jobs.",
      url: "https://mediacenter.adp.com/2026-09-02-ADP-National-Employment-Report-Private-Sector-Employment-Increased-by-38,000-Jobs-in-August",
    },
    {
      headline: "U.S. private payrolls slow; factory orders rebound in July",
      source: "Reuters",
      blurb:
        "ADP missed estimates at +38,000 while Commerce data showed factory orders up 0.9%, led by civilian aircraft.",
      url: "https://ktwb.com/2026/09/02/us-private-payrolls-growth-slows-in-august-adp-says/",
    },
    {
      headline: "Markets brace for Friday’s Employment Situation release",
      source: "BLS / Finance Calendar",
      blurb:
        "August nonfarm payrolls are due at 8:30 a.m. ET — the last major labour print before the mid-September FOMC meeting.",
      url: "https://www.bls.gov/schedule/news_release/empsit.htm",
    },
    {
      headline: "Jobs report preview: Fed focus shifts toward inflation",
      source: "Kiplinger",
      blurb:
        "Experts expect a soft but stable labour market, with officials describing conditions as satisfactory while watching prices.",
      url: "https://www.kiplinger.com/investing/economy/jobs-report-august-2026-what-to-expect",
    },
  ] satisfies FinanceNewsItem[],
} as const;

export type FinanceNewsContent = typeof financeNews;
