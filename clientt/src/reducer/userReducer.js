export const initialState = null;
export const reducer = (state, action) => {
  if (action.type === "user") {
    //* payload ki value jo hum ne de ha wo mil gai ha
    return action.payload;
  }
  //* wo payload ki value ab state ma aaa gai ha
  return state;
};
