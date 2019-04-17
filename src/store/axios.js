import axios from 'axios';
const baseURL = '/vue';
const instance = axios.create({
  baseURL,
});
export default instance;
