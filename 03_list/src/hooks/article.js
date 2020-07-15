import { useEffect, useState } from "react";
import { fetchArticle } from "../data/apiclient";

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
