import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useArticles } from "./hooks/article";

export function ArticleList(props) {
  const { articles } = useArticles();
  const { selectedArticleId, onArticleSelected } = props;

  useEffect(() => {
    if (articles && articles.length > 0 && selectedArticleId === null) {
      onArticleSelected(articles[0]);
    }
  }, [articles, onArticleSelected, selectedArticleId]);

  const onClickItem = (articleSummary) => {
    onArticleSelected(articleSummary);
  };

  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <List component="nav">
      {articles.map((articleSummary) => (
        <ListItem
          key={articleSummary.id}
          button
          selected={selectedArticleId === articleSummary.id}
          onClick={() => onClickItem(articleSummary)}
        >
          <ListItemText
            primary={articleSummary.title}
            secondary={new Date(articleSummary.date).toLocaleString()}
          />
        </ListItem>
      ))}
    </List>
  );
}
