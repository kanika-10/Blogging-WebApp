import { getItem } from "./utils/localStorage";

const config = {
  URL: "http://localhost:8000",
  token: getItem('token'),
  user: getItem('user')
};

export default config;