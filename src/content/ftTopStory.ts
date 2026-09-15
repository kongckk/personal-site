export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "OpenAI weighs funding round at $1.2tn valuation before IPO",
  standfirst:
    "Sam Altman’s start-up could capitalise on demand for its technology after new model launches",
  authors: "George Steer (New York); George Hammond (San Francisco)",
  dateLabel: "16 September 2026",
  url: "https://www.ft.com/content/27509db8-b032-4437-9b2a-e909f466022f",
  summary:
    "OpenAI has held early conversations with investors about raising another private funding round at a $1.2tn valuation ahead of its planned IPO, seeking to capitalise on renewed demand after recent model launches. The ChatGPT maker raised $122bn in March at an $852bn valuation and is discussing a fresh raise that could lift its value to about $1.2tn, though talks remain early-stage and the figure could change. Whether the round proceeds depends on IPO timing; CEO Sam Altman said a listing is unlikely before 2027 amid concerns about AI’s existential risks. Revenue growth has reaccelerated after GPT-5.6 and Astra launches, with annualised revenue passing $40bn last month after a 20% leap, following a slower start during which rival Anthropic reached a $965bn valuation. OpenAI confidentially filed its IPO prospectus in June but has pushed out the listing; SoftBank and Thrive Capital could increase exposure via a private round while waiting longer for IPO exits. The company spent $34bn last year on model training and “needs capital,” people familiar with the matter said, even as it insists March fundraising left ample resources; Anthropic is expected to go public as soon as October at around $2tn.",
  implications: [
    "Reassess AI vendor and infrastructure budgets as mega-round valuations and delayed IPOs reshape financing and pricing power across the sector.",
    "Watch OpenAI vs Anthropic listing timelines — a faster Anthropic IPO could shift procurement leverage and competitive product roadmaps.",
    "Treat heavy burn and private-capital dependence as counterparty and concentration risk for AI-critical operations and supplier stability.",
    "Track funding news for signals on AI cost of capital and liquidity that may affect vendor pricing, contract terms, and secondary-market exits.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
