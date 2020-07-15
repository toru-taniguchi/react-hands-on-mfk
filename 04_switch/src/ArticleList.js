import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useArticles } from "./hooks/article";

export function ArticleList() {
  const { articles } = useArticles();

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <List component="nav">
      {articles.map((articleSummary) => (
        <ListItem key={articleSummary.id} button>
          <ListItemText
            primary={articleSummary.title}
            secondary={new Date(articleSummary.date).toLocaleString()}
          />
        </ListItem>
      ))}
    </List>
  );
}
