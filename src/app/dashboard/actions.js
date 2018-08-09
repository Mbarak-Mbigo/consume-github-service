const FETCH_REPOS = "FETCH_REPOS";
const FETCH_REPOS_SUCCEEDED = "FETCH_REPOS_SUCCEEDED";
const FETCH_REPOS_FAILED = "FETCH_REPOS_FAILED";

const fetchRepos = () => ({
  type: FETCH_REPOS
});

const fetchReposSucceeded = payLoad => ({
  type: FETCH_REPOS_SUCCEEDED,
  payLoad
});

const fetchReposFailed = () => ({
  type: FETCH_REPOS_FAILED
});

export {
  FETCH_REPOS,
  FETCH_REPOS_SUCCEEDED,
  fetchRepos,
  fetchReposSucceeded,
  fetchReposFailed
};
