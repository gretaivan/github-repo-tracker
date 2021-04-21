import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepoCard, Form, Header } from "../../components";
import { fetchRepos } from "../../actions";
import './style.css'


function Repos() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
 
  const query = username =>  dispatch(fetchRepos(username));
  let renderResult;

  // useEffect(async () => {
  //   dispatch(fetchRepos());
  //   // renderResult = () => loading ? <p>Loading . . .</p> : <Result result={result}/>


  // }, []);

  console.log(result)
  

  return(
    <>
      <Header />
      <Form startSearch={query}/> 
      {/* {renderResult} */}
      {result[0].user ? <h2>Owner:  {result[0].user}</h2> : <h2>Enter username to see the repositories</h2>}
      <section>
        
        {result[0].repo &&
            result.map((element, i) => (
            <RepoCard key={i} repo={element} />
          ))
        
        } 
      </section>
    </>
  )   
}

export default Repos;
