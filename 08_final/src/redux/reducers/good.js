// goodのStateの型
//
// type GoodState = {
//   [articleKey: string]: number;
// }
//
// example:
// {
//   "article:1": 3,
//   "article:2": 2,
//   "article:3": 14,
// }
export function good(state = {}, action) {
  switch (action.type) {
    case "GOOD_COUNT_INCREMENT":
      const articleId = action.payload.articleId;

      // 参照をコピー
      const newState = { ...state };

      // 中身がなかった場合は初期化
      if (!state[generateKey(articleId)]) {
        newState[generateKey(articleId)] = 0;
      }

      // 該当の記事IDのカウントを増やす
      newState[generateKey(articleId)] = newState[generateKey(articleId)] + 1;

      return newState;
    case "GOOD_COUNT_SET_ALL":
      const counts = action.payload.counts; // [{id: 1, good: 5}, {id: 2, good: 24}, ...]

      // オブジェクトに変換する
      return counts.reduce((prev, curr) => {
        prev[generateKey(curr.id)] = curr.good;
        return prev;
      }, {});
    case "GOOD_COUNT_SET":
      const newData = action.payload;

      return {
        ...state,
        [generateKey(newData.articleId)]: newData.good,
      };
    default:
      // このReducerは今回のActionを処理しないので、参照ごとそのまま返す
      return state;
  }
}

export function generateKey(articleId) {
  return `article:${articleId}`;
}
