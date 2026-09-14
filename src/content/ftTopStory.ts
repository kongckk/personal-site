export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Ten-year Treasury yield hits 5% for first time since 2023",
  standfirst:
    "World’s most widely watched financial marker moves towards levels not seen in decades as inflation shock from Iran war lingers",
  authors: "Kate Duguid (New York); Emily Herbert and Ian Smith (London)",
  dateLabel: "15 September 2026",
  url: "https://www.ft.com/content/06cb850d-089a-4318-88d7-a410e9766b89",
  summary:
    "The 10-year US Treasury yield briefly reached 5.01%, its highest level since 2023, as oil-price gains and the Iran war shock intensified a global bond sell-off. Brent crude rose as high as $109.80 after Saudi Arabia closed a key pipeline, adding to inflation concerns alongside heavy government borrowing and debt issued to finance the AI boom. Higher Treasury yields raise mortgage and corporate borrowing costs, pressure indebted borrowers, and make bonds relatively more attractive than equities. Investors worry the move could disrupt AI financing and test the sustainability of the US’s $40tn debt pile. Traders expect the Federal Reserve to raise rates by 25 basis points, while analysts warn that continued oil-price increases could push yields higher and deepen global market stress.",
  implications: [
    "Budget for higher refinancing, working-capital and capex costs as the Treasury benchmark approaches or exceeds 5%.",
    "Rising yields may challenge highly leveraged businesses and the economics of debt-funded AI and technology investment.",
    "Monitor oil exposure and inflation pass-through, which could raise supplier, logistics and operating costs.",
    "Expect broader global effects: UK 10-year gilt yields also reached their highest level since 2007, increasing borrowing pressure internationally.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
