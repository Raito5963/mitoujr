import {
  Button,
  Container,
  Paper,
  Typography,
  Link,
  AppBar
} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <AppBar sx={{ p: 2, bgcolor:"green"}} >
        <Typography variant="h2" align="center">
          Aokiju Labo
        </Typography>
      </AppBar>
      <Paper elevation={3} sx={{ mt:15, p: 5 }}>
        <Typography variant="h2">
          制作物紹介
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 2 }}>
        <Typography variant="h3">
          FEEDO Front
        </Typography>
        <br />
        <Typography variant="body1">
          今回提案するアプリのデモバージョンのフロント側。TOMOLプロジェクトにて静岡市長賞、株式会社リバティー賞を受賞。
        </Typography>
        <br />
        <Link href="https://e55c631a-45d9-4671-7295-38c7f9b35eca.mtayo.net/management" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="success">
            FEEDO
          </Button>
        </Link>
        <span> </span>
        <Link href="https://github.com/cube5963/feedo_front" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="secondary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 2 }}>
        <Typography variant="h3">
          FEEDO Back
        </Typography>
        <br />
        <Typography variant="body1">
          今回提案するアプリのデモバージョンのバック側
        </Typography>
        <br />
        <Link href="https://github.com/cube5963/feedo_back" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="secondary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 2 }}>
        <Typography variant="h3">
          FEEDO Old
        </Typography>
        <br />
        <Typography variant="body1">
          StartUpWeekend静岡7thで制作したサイト。リアルタイムで回答を受け取れるアンケートアプリというコンセプトのもと作成しました。静岡市長奨励賞を獲得。
        </Typography>
        <br />
        <Link href="https://ca55bad4-a542-2735-89ab-670a991e0c24.mtayo.net/" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="success">
            FEEDO Old
          </Button>
        </Link>
        <span> </span>
        <Link href="https://github.com/cube5963/feedo_old" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="secondary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 2 }}>
        <Typography variant="h3">
          gaga friends
        </Typography>
        <br />
        <Typography variant="body1">
          StartUpWeekend静岡8thで制作したサイト。共通の趣味を持つ人同士が集まれるコミュニティというコンセプトで作成しました。
        </Typography>
        <br />
        <Link href="https://sw-8th.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="success">
            gaga friendsを見る
          </Button>
        </Link>
        <span> </span>
        <Link href="https://github.com/Raito5963/SW8th" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="secondary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>
      <Paper elevation={3} sx={{ p: 5, mt: 2 }}>
        <Typography variant="h3">
          修学旅行しおり
        </Typography>
        <br />
        <Typography variant="body1">
          自分たちが通っている高校の修学旅行で使用した、自分たちのクラスのためのしおり。
        </Typography>
        <br />
        <Link href="https://github.com/cube5963/school_trip_public">
          <Button variant="contained" color="secondary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>

    </Container>
  );
}