export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Anthropic tells investors it will be profitable for second straight quarter",
  standfirst:
    "Claude maker seeks to ease cash burn concerns before blockbuster IPO amid fears over pace of AI development",
  authors: "George Hammond; James Fontanella-Khan",
  dateLabel: "14 September 2026",
  url: "https://www.ft.com/content/4564e6a5-69e9-40a6-bf0f-a888f2f4f002",
  summary:
    "Anthropic told a small group of shareholders that adjusted operating income would be positive for a second consecutive quarter, excluding items such as stock-based compensation, as it works to calm cash-burn worries ahead of a planned Nasdaq IPO. Gross margins reportedly exceed 80%, while revenue rose 14-fold year-on-year to $11.5bn in Q2 and annualised revenue reached $65bn by end-July, up from $9bn at year-end. Investors are forecasting about $120bn in annualised revenue by year-end, and the five-year-old company could list at a valuation of $2tn or more, though it has delayed publishing its prospectus while fielding investor questions. Scrutiny remains intense around AI safety, the scale of model-training costs, and whether a slower development pace — a stance Anthropic CEO Dario Amodei has urged, and that OpenAI’s Sam Altman and Elon Musk have publicly echoed — could let rivals close the gap.",
  implications: [
    "Second straight positive adjusted operating income plus >80% gross margins ease burn concerns — reassess AI vendor credit risk and long-term SaaS/API spend commitments.",
    "Annualised revenue at $65bn (end-July) with ~$120bn year-end forecasts implies aggressive scale; stress-test budget assumptions for Claude/API pricing and capacity availability.",
    "A delayed prospectus ahead of a possible $2tn+ IPO signals valuation and disclosure risk — watch listing timing before treating Anthropic equity or related indices as near-term hedges.",
    "CEO calls to slow AI development, echoed by peers, raise competitive and regulatory scenario risk — build contingency for delayed model releases and shifting safety compliance costs.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
