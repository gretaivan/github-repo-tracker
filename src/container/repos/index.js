import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepoCard } from "../../components";
import { fetchRepos } from "../../actions";

function Repos() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);

  useEffect(async () => {
    dispatch(fetchRepos());
  }, []);

  console.log(result[0].user);

  const renderRepos = result.map((element) => (
    <RepoCard repo={element} />
  ));

  return renderRepos;
}
export default Repos;
