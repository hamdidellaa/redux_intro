export default (todos = [], action) => {
  switch (action.type) {
    case "GET":
      return todos;

    default:
      return todos;
  }
};
