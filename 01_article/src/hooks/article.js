import React from "react";
import { useArticle } from "./hooks/article";

export function Article() {
  const { article } = useArticle();

  if (!article) {
    return <div>loading...</div>;
  }
}
