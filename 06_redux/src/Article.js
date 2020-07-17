import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useArticle } from "./hooks/article";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useGoodForArticle } from "./hooks/goodcount";

export function Article() {
  const { articleId } = useParams();
  const { article } = useArticle(parseInt(articleId));
  const { getGoodCount, incrementGoodCount } = useGoodForArticle();

  if (!article) {
    return <div>loading...</div>;
  }

  const goodCount = getGoodCount(article.id);

  const onClickGoodButton = () => {
    incrementGoodCount(article.id);
  };

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
      <Box style={{ margin: "16px 0" }}>
        <Fab
          color="primary"
          variant={goodCount === 0 ? "round" : "extended"}
          onClick={onClickGoodButton}
        >
          <ThumbUpIcon />
          {goodCount === 0 ? (
            ""
          ) : (
            <Typography style={{ padding: "8px" }}>{goodCount}</Typography>
          )}
        </Fab>
      </Box>
    </Container>
  );
}
