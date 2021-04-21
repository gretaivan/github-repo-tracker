// API
import axios from "axios";



//fetch
export const fetchRepos = (username) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      let repoData = data.map((el) => ({
        user: el.owner.login,
        repo: el.name,
        open_issues: el.open_issues,
        forks: el.forks,
        stargazers: el.stargazers_count,
      }));
      // console.log(repoData);
      dispatch({
        type: "LOAD_REPOS",
        payload: repoData,
      });

      // let repos = data.
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err,
      });
    }
  };
};
