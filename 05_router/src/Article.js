import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useArticle } from "./hooks/article";

export function Article(props) {
  const { id } = props;
  const { article } = useArticle(id);

  if (!article) {
    return <div>loading...</div>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5" style={{ padding: "32px 16px 0 0" }}>
        {article.title}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        Author: {article.author} | {new Date(article.date).toLocaleString()}
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
  );
}
