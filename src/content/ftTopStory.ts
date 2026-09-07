export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Republicans fear Trump has turned toxic on the campaign trail",
  standfirst:
    "Some party candidates worry the president’s low popularity and inflammatory rhetoric will cost them November’s election",
  authors: "James Politi in Washington",
  dateLabel: "7 September 2026",
  url: "https://www.ft.com/content/3edf3717-4737-424c-9162-d330851edcf6",
  summary:
    "Senior Republicans fear Donald Trump is undermining their midterm prospects by dismissing voter concerns on affordability, the prolonged Iran war, and local opposition to AI data centres while campaigning for himself. With his approval ratings at new lows two months before November, forecasters increasingly expect Democrats to take the House and possibly the Senate. Trump called the six-month Iran conflict’s economic fallout “small potatoes,” drawing pushback from vulnerable Republicans such as Mike Lawler, while an NBC survey found 69% of Americans oppose data centres in their area. Maga Inc’s $400mn-plus war chest has only recently begun to open—including a planned $10mn for Ken Paxton—leaving many candidates unsure of timely help, and some battleground incumbents are skipping this week’s Dallas midterm convention. Party strategists still see Trump as uniquely able to drive Republican turnout, but warn that swing voters dislike his personal aggrandisement and that candidates who criticise him risk losing his financial support.",
  implications: [
    "A Democratic House (and possibly Senate) would raise US policy-gridlock risk for tax, spending, trade, and regulatory agendas relevant to Ops & Finance planning.",
    "Prolonged Iran-war and energy-price pressure keeps inflation and household affordability as live midterm and market themes into November.",
    "Local backlash against AI data centres may slow permitting and capex timelines for hyperscale infrastructure in contested districts.",
    "Uneven Maga Inc spending and candidate distancing from Trump increase uncertainty around Republican turnout, fundraising, and late-cycle volatility.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
