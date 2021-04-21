import React from "react";
import { Repos } from "./pages";
import { Switch, Route } from 'react-router-dom';
import {Header, Footer} from './layout'


function App() {
  return (
    <>
      <Header/>
      <Repos />
      <Footer />
    </>
  );
}

export default App;
