export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Oil nears $100 as US launches new strikes on Iranian tankers",
  standfirst:
    "American military hit ‘multiple’ ships linked to Iran’s Revolutionary Guards in response to more attempted missile attacks on a US Navy warship",
  authors:
    "Steff Chávez in Washington; Najmeh Bozorgmehr in Tehran; Jamie Smyth in New York; Verity Ratcliffe in London",
  dateLabel: "9 September 2026",
  url: "https://www.ft.com/content/b460b828-6183-4914-9140-5dfb6d61312c",
  summary:
    "Brent crude jumped 2.4% to $99.34 a barrel after the US struck multiple Iranian tankers tied to the Revolutionary Guards and Houthi militants hit Saudi energy infrastructure, marking a fresh Middle East escalation. Washington said the tanker strikes answered further attempted missile attacks on a US Navy warship, following weekend hits on three Iranian crude tankers after Tehran targeted two American ships. Oil has rallied since late August amid repeated US–Iran exchanges; Brent had peaked near $126 in April and fallen as low as $70 in July, while Houthi attacks on regional energy assets have tightened supply, fed global inflation, and helped spark a major bond-market sell-off. Iran has increasingly targeted vessels moving Gulf oil past the Strait of Hormuz, with the IRGC attacking at least four tankers since August 30, and Riyadh reported temporary operational halts after Houthi strikes on facilities in four southern Saudi cities. Analysts are lifting crude forecasts through 2027 as disruption persists; Eurasia Group warned recovering Chinese demand plus the Middle East standoff could soon push oil above $100, citing the US–Iran conflict, Saudi–Houthi confrontation, and Russia–Ukraine as the main upward forces.",
  implications: [
    "Near-$100 Brent raises near-term inflation, freight, and input-cost pressure for Ops & Finance planning across energy-intensive supply chains.",
    "Strait of Hormuz and tanker-targeting risk keeps Gulf crude logistics and insurance premia elevated; dual-source and inventory buffers matter.",
    "Saudi operational interruptions and Houthi strikes add upside volatility to oil and energy-linked credit, with spillover into bond-market risk appetite.",
    "Higher multi-year crude forecasts (through 2027) support reviewing hedging windows, fuel surcharges, and discretionary travel/capex budgets.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
