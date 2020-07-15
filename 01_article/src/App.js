import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const article = {
  title: "Reactやっていこうな",
  text: `
【宣言的な View】
React は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな View を設計するだけで、React はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。
宣言的な View を用いてアプリケーションを構築することで、コードはより見通しが立ちやすく、デバッグのしやすいものになります。

【コンポーネントベース】
自分自身の状態を管理するカプセル化されたコンポーネントをまず作成し、これらを組み合わせることで複雑なユーザインターフェイスを構築します。
コンポーネントのロジックは、Template ではなく JavaScript そのもので書くことができるので、様々なデータをアプリケーション内で簡単に取り回すことができ、かつ DOM に状態を持たせないようにすることができます。

【一度学習すれば、どこでも使える】
React と組み合わせて使用する技術に制限はありません。React を使って新しい機能を追加する際に、既存のソースコードを書き換える必要はありません。
React は Node を使ったサーバー上でもレンダーできますし、React Native を使うことでモバイルアプリケーションの中でも動きます。
  `,
  author: "Bob",
  date: "2020-07-09T02:56:20.773Z",
};

function App() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ブログ</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h5" style={{ padding: "32px 16px 0 0" }}>
          {article.title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            // refs: https://github.com/mui-org/material-ui/issues/9189
            whiteSpace: "pre-line",
          }}
        >
          {article.text}
        </Typography>
      </Container>
    </div>
  );
}

export default App;
