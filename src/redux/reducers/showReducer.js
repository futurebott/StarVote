export default function showReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_SHOW":
      return [...state, { ...action.show }];
    default:
      return state;
  }
}
