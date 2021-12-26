import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GTr8M8eE03-SPppC7asplm5GQnSnw0ZMBEgUlUxIhMU",
  },
});
