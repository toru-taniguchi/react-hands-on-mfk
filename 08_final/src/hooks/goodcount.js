import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { generateKey } from "../redux/reducers/good";
import { incrementGoodForArticle } from "../data/apiclient";

export function useGoodForArticle() {
  const dispatch = useDispatch();
  const goodState = useSelector((state) => state.good);

  const setGoodCount = useCallback(
    (articles) => {
      dispatch({
        type: "GOOD_COUNT_SET_ALL",
        payload: {
          counts: articles.map((article) => ({
            id: article.id,
            good: article.good,
          })),
        },
      });
    },
    [dispatch]
  );

  const incrementGoodCount = useCallback(
    async (articleId) => {
      // 更新前の値を復旧用に保持しておく
      const oldGoodCount = goodState[generateKey(articleId)] || 0;

      // 通信が成功するかどうかはわからないが、ユーザーに安心してもらうために投機的に数字を増やしておく
      dispatch({
        type: "GOOD_COUNT_INCREMENT",
        payload: {
          articleId,
        },
      });

      try {
        const result = await incrementGoodForArticle(articleId);

        dispatch({
          type: "GOOD_COUNT_SET",
          payload: {
            articleId,
            good: result.good,
          },
        });
      } catch (e) {
        // 失敗したら更新前の数字に復旧する
        dispatch({
          type: "GOOD_COUNT_SET",
          payload: {
            articleId,
            good: oldGoodCount,
          },
        });
      }
    },
    [dispatch, goodState]
  );

  const getGoodCount = useCallback(
    (articleId) => {
      return goodState[generateKey(articleId)] || 0;
    },
    [goodState]
  );

  return {
    goodState,
    getGoodCount,
    incrementGoodCount,
    setGoodCount,
  };
}
