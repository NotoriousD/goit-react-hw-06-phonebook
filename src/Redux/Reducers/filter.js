const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "FILTER_BY_NAME":
      return payload;

    default:
      return state;
  }
};

export default filterReducer;
