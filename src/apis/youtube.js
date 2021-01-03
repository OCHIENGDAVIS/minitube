import axios from 'axios';
const KEY = 'AIzaSyDoUMdPL7CPUtcXZO1BnpCLwW6JV-fzW2k';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key: KEY,
  },
});
