import { Button, Container, Paper, Typography, Link, AppBar, Grid } from "@mui/material";

const projects = [
  {
    title: "FEEDO Front",
    description:
      "今回提案するアプリのデモバージョンのフロント側。TOMOLプロジェクトにて静岡市長賞、株式会社リバティー賞を受賞。",
    links: [
      { url: "https://e55c631a-45d9-4671-7295-38c7f9b35eca.mtayo.net/management", text: "FEEDO", color: "success" as const },
      { url: "https://github.com/cube5963/feedo_front", text: "リポジトリを見る", color: "secondary" as const },
    ],
  },
  {
    title: "FEEDO Back",
    description: "今回提案するアプリのデモバージョンのバック側",
    links: [{ url: "https://github.com/cube5963/feedo_back", text: "リポジトリを見る", color: "secondary" as const }],
  },
  {
    title: "FEEDO Old",
    description:
      "StartUpWeekend静岡7thで制作したサイト。リアルタイムで回答を受け取れるアンケートアプリというコンセプトのもと作成しました。静岡市長奨励賞を獲得。",
    links: [
      { url: "https://ca55bad4-a542-2735-89ab-670a991e0c24.mtayo.net/", text: "FEEDO Old", color: "success" as const },
      { url: "https://github.com/cube5963/feedo_old", text: "リポジトリを見る", color: "secondary" as const },
    ],
  },
  {
    title: "gaga friends",
    description:
      "StartUpWeekend静岡8thで制作したサイト。共通の趣味を持つ人同士が集まれるコミュニティというコンセプトで作成しました。",
    links: [
      { url: "https://sw-8th.vercel.app/", text: "gaga friendsを見る", color: "success" as const },
      { url: "https://github.com/Raito5963/SW8th", text: "リポジトリを見る", color: "secondary" as const },
    ],
  },
  {
    title: "修学旅行しおり",
    description: "自分たちが通っている高校の修学旅行で使用した、自分たちのクラスのためのしおり。",
    links: [{ url: "https://github.com/cube5963/school_trip_public", text: "リポジトリを見る", color: "secondary" as const }],
  },
];

export default function Home() {
  return (
    <Container sx={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
      <AppBar sx={{ p: 2, bgcolor: "green", width: "100%" }}>
        <Typography variant="h2" align="center">
          Aokiju Labo
        </Typography>
      </AppBar>
      <Paper elevation={3} sx={{ mt: 15, p: 5, textAlign: "center" }}>
        <Typography variant="h2">制作物紹介</Typography>
      </Paper>
      <Grid container spacing={3} sx={{ mt: 2, flex: 1 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Paper
              elevation={10}
              sx={{
                p: 5,
                textAlign: "center",
                minHeight: "300px",
                height: "auto", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h3">{project.title}</Typography>
              <Typography variant="body1" sx={{ flexGrow: 1, my: 2 }}>
                {project.description}
              </Typography>
              <div>
                {project.links.map((link, i) => (
                  <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" sx={{ display: "inline-block", mx: 1 }}>
                    <Button variant="contained" color={link.color} sx={{ m: 1 }}>
                      {link.text}
                    </Button>
                  </Link>
                ))}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
