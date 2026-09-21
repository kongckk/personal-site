export const ftTopStory = {
  heading: "FT top story",
  source: "Financial Times",
  headline:
    "Kremlin-backed forgery scheme moved $6.9bn through global banks",
  standfirst:
    "FT finds thousands of Russian payments received by Standard Chartered, Citigroup and other international groups in vast leak from inside fintech A7",
  authors: "Anne-Sylvaine Chassany, Chris Cook and Anastasia Stognei",
  dateLabel: "22 September 2026",
  url: "https://www.ft.com/content/3848a4ad-1426-4352-ba86-ef1279c4ffd1",
  summary:
    "An FT exclusive based on a vast leak from inside Kremlin-backed fintech A7 shows the group funnelled more than $6.9bn through the international banking system between late 2024 and August 2025 by pairing front companies with industrial-scale forged invoices and corporate stamps. Accounts at Standard Chartered in Hong Kong alone received $1.1bn from A7-linked entities; DBS Hong Kong was sent $273mn, Citigroup clients $74mn, and Deutsche Bank clients about $18mn, while First Abu Dhabi accounts tied to A7 made more than $1.8bn of outbound payments. A7 was set up in Russia and Kyrgyzstan by Moldovan oligarch Ilan Shor with support from defence-linked state bank Promsvyazbank as a sanctions-resistant alternative to Swift, and some flows covered sensitive war-related goods including military equipment. After Standard Chartered raised suspicions and closed accounts in early 2025, volumes shifted toward UAE routing; banks named either said linked accounts were already closed or declined detailed comment while stressing AML commitments. Analysts say the leak shows how beating one Swift member bank’s controls can reopen correspondent rails—and that A7’s money-laundering network is far larger than previously understood.",
  implications: [
    "Reassess AML, trade-finance, and invoice-authenticity controls on HK, UAE, Kyrgyz, and EU corridors that touch Russian-linked payment intermediaries.",
    "Expect heightened supervisory and sanctions scrutiny for named banks (StanChart, Citi, DBS, Deutsche, FAB, JPMorgan) and their correspondent relationships.",
    "Price elevated compliance and reputational risk where Swift access depends on sending-bank KYC that industrial forgery can defeat.",
    "Watch for further account closures, SAR/STR waves, and secondary-sanctions spillover as authorities map A7 front companies across UAE, Hong Kong, and Hungary.",
  ],
} as const;

export type FtTopStoryContent = typeof ftTopStory;
