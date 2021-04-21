import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RepoCard = ({ repo }) => {
  const dispatch = useDispatch();
  // console.log(repo);
  return (
    <div className="card">
      {/* Username: {repo.user} */}
      <h3>Repo: {repo.repo} </h3>
      <p>Issue Count: {repo.open_issues} </p>
      <p><span>&#9888;</span>Forks: {repo.forks}</p>
      <p><span>&#9734;</span>Stargazers: {repo.stargazers}</p>
    </div>
  );
};

export default RepoCard;
