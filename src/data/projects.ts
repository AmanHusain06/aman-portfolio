
export type Project = {
  id: number;
  title: string;
  category: string;
  status: "Completed" | "In Progress";
  description: string;
  contribution: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Assisted Paper Trading Platform",
    category: "Artificial Intelligence / Finance",
    status: "In Progress",
    description:
      "Final-year project exploring an AI-assisted paper trading " +
      "platform that combines financial market data, news sentiment " +
      "and strategy evaluation in a simulated trading environment.",
    contribution:
      "Individually developing the platform, with planned Python " +
      "data processing, sentiment analysis and trading simulation.",
    technologies: ["Python", "NLP", "Machine Learning", "Financial Data"],
    featured: true,
  },
  {
    id: 2,
    title: "JavaScript Trading Simulator",
    category: "Web Development / Finance",
    status: "Completed",
    description:
      "Interactive web application that simulates buying and " +
      "selling stocks, managing a virtual portfolio and " +
      "tracking transaction history.",
    contribution:
      "Developed the trading logic, portfolio calculations, " +
      "transaction history and interactive web interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    featured: true,
    github: "https://github.com/AmanHusain06/cpp-trading-simulator",
    image: "/images/trading-simulator.png",
  },
  {
    id: 3,
    title: "Accountify",
    category: "Full-Stack Development",
    status: "Completed",
    description:
      "Collaborative software engineering project built " +
      "using a React frontend, Node.js and Express backend, " +
      "and SQLite database.",
    contribution:
      "Contributed to a team-based full-stack application. " +
      "Specific individual responsibilities to be confirmed.",
    technologies: ["React", "Node.js", "Express", "SQLite"],
  },
  {
    id: 4,
    title: "Dimensional Instability",
    category: "3D Game Development",
    status: "Completed",
    description:
      "Unity 3D sci-fi game prototype featuring exploration, " +
      "collectible energy cores, enemy encounters and " +
      "portal-based objectives.",
    contribution:
      "Developed the 3D environment and portal deposit system, " +
      "contributed to first-person controls, combat, HUD " +
      "and victory/game-over interfaces.",
    technologies: ["Unity", "C#", "3D Game Development"],
    github: "https://github.com/yunc11/IntroGame-",
    image: "/images/dimensional-instability.png",
  },
  {
    id: 5,
    title: "Checkers AI",
    category: "Artificial Intelligence / Game Development",
    status: "Completed",
    description:
      "Python-based checkers game featuring an AI opponent " +
      "and a graphical interface built with Pygame.",
    contribution:
      "Built a checkers application in Python. " +
      "AI implementation details to be confirmed.",
    technologies: ["Python", "Pygame"],
  },
];
