import { useEffect, useState } from "react";
import { fetchArticle, fetchArticles } from "../data/apiclient";

export function useArticle() {
  const [article, setArticle] = useState();

  useEffect(() => {
    fetchArticle().then((_article) => {
      setArticle(_article);
    });
  }, []);

  return {
    article,
  };
}

export function useArticles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetchArticles().then((_articles) => {
      setArticles(_articles);
    });
  }, []);

  return {
    articles,
  };
}
