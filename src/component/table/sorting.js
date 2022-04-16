export const Sorting = {
  ASC: "ascending",
  DESC: "descending",
  NEUTRAL: "neutral",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Sorting.ASC:
      return state.map((todo) => {
        if (todo.name === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case Sorting.DESC:
      return state.map((todo) => {
        if (todo.name === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
