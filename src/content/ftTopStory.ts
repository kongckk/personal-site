export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "US mortgage rates breach 7% as affordability pressures mount",
  standfirst:
    "Surging yields on government bonds and rising oil prices from the war in Iran drive inflation fears as national elections near",
  authors: "Zehra Munir",
  dateLabel: "24 September 2026",
  url: "https://www.ft.com/content/cabe2c29-9f66-470b-b7ac-b2bc324aa367",
  summary:
    "US 30-year fixed mortgage rates rose to 7.03% on Thursday, according to Freddie Mac—the highest level in almost two years and last seen in January 2025—as Treasury yields and oil prices climbed on inflation fears tied to supply disruptions from the war in Iran. The jump lands weeks before November midterms, amplifying an affordability narrative as Republicans defend control of Congress. Rates have risen about one percentage point since the Iran conflict escalated, while the 10-year Treasury hit its highest level since 2007 and the Fed earlier this month raised its funds rate to contain energy-driven inflation spillover. Realtor.com’s Anthony Smith said a “7 per cent handle” is psychological as well as mathematical in a slowing housing market tilting toward buyers. The 15-year mortgage rate also rose to 6.42%, its highest since May 2024. Despite White House efforts to ease housing costs via Fannie Mae and Freddie Mac and curbs on investor purchases of single-family homes, FT calculations from Zillow data show home prices up 0.5% and rents up 4.8% since Trump took office.",
  implications: [
    "Treat 7%+ mortgage rates as a live consumer and political risk into the midterms: housing affordability can move sentiment, credit demand, and fiscal rhetoric even if equity markets stay resilient.",
    "Watch Treasury–mortgage transmission: higher long-end yields and energy-linked inflation expectations are pushing mortgage pricing faster than Fed funds alone would imply—stress-test funding and duration books accordingly.",
    "For Ops & Finance planning, expect softer residential construction, weaker existing-home turnover, and more cautious developer CapEx until rates or oil/geopolitical risk ease.",
    "Policy backstops (GSE MBS buying, investor purchase limits) may not offset rate and rent pressure quickly—budget for elevated housing-cost inflation in wage, relocation, and CRE assumptions.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
