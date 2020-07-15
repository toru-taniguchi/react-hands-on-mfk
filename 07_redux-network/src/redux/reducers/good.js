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
      if (!state[`article:${articleId}`]) {
        newState[`article:${articleId}`] = 0;
      }

      // 該当の記事IDのカウントを増やす
      newState[`article:${articleId}`] = newState[`article:${articleId}`] + 1;

      return newState;
    default:
      // このReducerは今回のActionを処理しないので、参照ごとそのまま返す
      return state;
  }
}
