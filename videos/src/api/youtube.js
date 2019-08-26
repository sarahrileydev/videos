import axios from "axios";

const KEY = "AIzaSyAwrG19tkbHJI2IADOi4xd0ODv9PAww-zw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
