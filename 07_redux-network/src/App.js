import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ArticleList } from "./ArticleList";
import { Article } from "./Article";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ブログ</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArticleList />
        <Switch>
          <Route component={Article} path="/article/:articleId" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
