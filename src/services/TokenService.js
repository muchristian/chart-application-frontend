const getAccessToken = () => {
  return localStorage.getItem("_chat_app_refresh_token");
};

const setAccessToken = (token) => {
  localStorage.setItem("_chat_app_refresh_token", token);
};

const removeAccessToken = () => {
  localStorage.removeItem("_chat_app_refresh_token");
};

const TokenService = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
};

export default TokenService;
