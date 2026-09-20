export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "German chancellor Merz vows to stay on despite ‘disaster’ in regional elections",
  standfirst:
    "Partial results suggest CDU is set to fail to secure parliamentary representation in Mecklenburg-Vorpommern",
  authors: "Anne-Sylvaine Chassany and Laura Pitel in Berlin",
  dateLabel: "21 September 2026",
  url: "https://www.ft.com/content/d74ce82a-2a15-404a-ae3a-3921e887bab3",
  summary:
    "German Chancellor Friedrich Merz vowed on Sunday to stay in office and press ahead with economic reforms after heavy losses for his Christian Democratic Union in regional elections, calling the Mecklenburg-Vorpommern result a “disaster.” Partial counts put the CDU just below the 5% Landtag threshold there—its lowest state-election showing in postwar German history—while the far-right AfD was set to finish first at about 38%, more than doubling its prior share. The setback comes two weeks after the AfD’s shock win in Saxony-Anhalt, where it is trying to form its first regional government, and risks emboldening CDU critics who see Merz’s record unpopularity as grounds for a leadership change. In Berlin, the CDU was projected to fall to second place at 19%, with hard-left Die Linke surging to first on a platform that includes expropriating property from corporate landlords. Merz argued the backlash was a reaction to necessary reforms needed for “prosperity,” convened party heavyweights to shore up loyalty, and insisted the reforms require backbone and patience.",
  implications: [
    "Price elevated German political risk: another AfD breakthrough and a near-wipeout for the governing CDU raise odds of leadership turmoil and policy discontinuity.",
    "Watch Merz’s reform path—tax, spending, and labour measures tied to “prosperity”—for delays or dilution if party unrest intensifies.",
    "Reassess Berlin real-estate and landlord exposure as Die Linke’s projected first-place finish strengthens expropriation and rent-control politics in the capital.",
    "Treat further East German AfD gains (after Saxony-Anhalt) as a structural euro-area political premium for bunds, banks, and German equity risk.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
