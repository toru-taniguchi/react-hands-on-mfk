import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ArticleList } from "./ArticleList";
import { Article } from "./Article";

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const onArticleSelected = (selectedArticle) => {
    setSelectedArticleId(selectedArticle.id);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ブログ</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArticleList
          selectedArticleId={selectedArticleId}
          onArticleSelected={onArticleSelected}
        />
        <Article id={selectedArticleId} />
      </div>
    </div>
  );
}

export default App;
