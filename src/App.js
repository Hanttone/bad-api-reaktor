import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import Navigation from "./Components/Navigation";
import Jackets from "./Components/Jackets";
import fetchData from "./Services/fetchData";
import {useState, useEffect} from "react";

function App() {

  const [jackets, setJackets] = useState([])

    useEffect(() => 
    fetchData('https://bad-api-assignment.reaktor.com/products/jackets').then(data => setJackets(...data)), [])


  return (
    <Router>
    <AppWrapper>
      <Navigation></Navigation>
      <Switch>
        <Route path="/jackets">
          <Jackets jacketsData={jackets} ></Jackets>
        </Route>
        <Route path="/shirts">

        </Route>
        <Route path="/accessories"></Route>
      </Switch>
    </AppWrapper>
    </Router>
  );
}

export default App;

const AppWrapper = styled.div`
height: 100vh;
width: 100%;
`;
