import request from "superagent";

const baseURL = "https://api.github.com";

const getReposRequest = ({ username }) =>
  request.get(`${baseURL}/users/${username}/repos`);

const getUserProfile = ({ username }) =>
  request.get(`${baseURL}/users/${username}`);

export { getReposRequest, getUserProfile };
