export type AgendaEvent = {
  title: string;
  start: string;
  end: string;
};

export const agenda = {
  heading: "Daily Agenda",
  dateLabel: "Friday, 4 September 2026",
  timezone: "Asia/Singapore",
  updatedAt: "2026-09-04T05:51:45Z",
  events: [
    {
      title: "Confirm SJI Sep fees GIRO",
      start: "12:00",
      end: "12:15",
    },
    {
      title: "Check FSM S68 fills / open orders",
      start: "12:15",
      end: "12:30",
    },
    {
      title: "CIMB FastSaver: fund S$1,000 if needed",
      start: "13:00",
      end: "13:15",
    },
  ] satisfies AgendaEvent[],
} as const;

export type AgendaContent = typeof agenda;
