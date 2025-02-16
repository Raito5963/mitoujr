import {
  Button,
  Container,
  Paper,
  Typography,
  Link
} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 5 }}>
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
          今回提案するアプリのデモバージョンのフロント側
        </Typography>
        <br />
        <Link href="https://github.com/cube5963/feedo_front">
          <Button variant="contained" color="primary">
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
        <Link href="https://github.com/cube5963/feedo_back">
          <Button variant="contained" color="primary">
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
        <Link href="https://github.com/cube5963/feedo_old">
          <Button variant="contained" color="primary">
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
        <Link href="https://github.com/Raito5963/SW8th">
          <Button variant="contained" color="primary">
            リポジトリを見る
          </Button>
        </Link>
        <span> </span>
        <Link href="https://sw-8th.vercel.app/">
          <Button variant="contained" color="primary">
            gaga friendsを見る
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
          <Button variant="contained" color="primary">
            リポジトリを見る
          </Button>
        </Link>
      </Paper>

    </Container>
  );
}