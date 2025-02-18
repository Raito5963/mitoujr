import { Button, Container, Paper, Typography, Link, AppBar } from "@mui/material";

const projects = [
  {
    title: "FEEDO Front",
    description:
      "今回提案するアプリのデモバージョンのフロント側。TOMOLプロジェクトにて静岡市長賞、株式会社リバティー賞を受賞。",
    links: [
      {
        url: "https://e55c631a-45d9-4671-7295-38c7f9b35eca.mtayo.net/management",
        text: "FEEDO",
        color: "success" as const, // as const をつけて型を固定
      },
      {
        url: "https://github.com/cube5963/feedo_front",
        text: "リポジトリを見る",
        color: "secondary" as const,
      },
    ],
  },
  {
    title: "FEEDO Back",
    description: "今回提案するアプリのデモバージョンのバック側",
    links: [
      {
        url: "https://github.com/cube5963/feedo_back",
        text: "リポジトリを見る",
        color: "secondary" as const,
      },
    ],
  },
  {
    title: "FEEDO Old",
    description:
      "StartUpWeekend静岡7thで制作したサイト。リアルタイムで回答を受け取れるアンケートアプリというコンセプトのもと作成しました。静岡市長奨励賞を獲得。",
    links: [
      {
        url: "https://ca55bad4-a542-2735-89ab-670a991e0c24.mtayo.net/",
        text: "FEEDO Old",
        color: "success" as const,
      },
      {
        url: "https://github.com/cube5963/feedo_old",
        text: "リポジトリを見る",
        color: "secondary" as const,
      },
    ],
  },
  {
    title: "gaga friends",
    description:
      "StartUpWeekend静岡8thで制作したサイト。共通の趣味を持つ人同士が集まれるコミュニティというコンセプトで作成しました。",
    links: [
      {
        url: "https://sw-8th.vercel.app/",
        text: "gaga friendsを見る",
        color: "success" as const,
      },
      {
        url: "https://github.com/Raito5963/SW8th",
        text: "リポジトリを見る",
        color: "secondary" as const,
      },
    ],
  },
  {
    title: "修学旅行しおり",
    description: "自分たちが通っている高校の修学旅行で使用した、自分たちのクラスのためのしおり。",
    links: [
      {
        url: "https://github.com/cube5963/school_trip_public",
        text: "リポジトリを見る",
        color: "secondary" as const,
      },
    ],
  },
];

export default function Home() {
  return (
    <Container>
      <AppBar sx={{ p: 2, bgcolor: "green" }}>
        <Typography variant="h2" align="center">
          Aokiju Labo
        </Typography>
      </AppBar>
      <Paper elevation={3} sx={{ mt: 15, p: 5 }}>
        <Typography variant="h2">制作物紹介</Typography>
      </Paper>
      {projects.map((project, index) => (
        <Paper key={index} elevation={3} sx={{ p: 5, mt: 2 }}>
          <Typography variant="h3">{project.title}</Typography>
          <br />
          <Typography variant="body1">{project.description}</Typography>
          <br />
          {project.links.map((link, i) => (
            <span key={i}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color={link.color}>
                  {link.text}
                </Button>
              </Link>
              <span> </span>
            </span>
          ))}
        </Paper>
      ))}
    </Container>
  );
}
