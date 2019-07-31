import axios from "axios";

const KEY = "AIzaSyCEtcvm6AMeLa7ppTLheVAv21Jx6dRS8ZU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
