import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import fetchData from "./Services/fetchData";
import {useState, useEffect} from "react";


function App() {

  const [products, setProducts] = useState([])
  const [availability, setAvailability] = useState([])
 

  /*const manufacturers = ["reps", "abiplos", "nouke", "derp", "xoon"]*/

  useEffect(() => fetchData().then(data => setProducts(data)), [])

  const [jackets, shirts, accessories, ...available] = products;

  return (
    <Router>
    <AppWrapper>
      <Navigation></Navigation>
      <Switch>
        <Route path="/jackets">
          <Products productsData={jackets} availabilityData={available}></Products>
        </Route>
        <Route path="/shirts">
          <Products productsData={shirts}></Products>
        </Route>
        <Route path="/accessories">
          <Products productsData={accessories}></Products>
        </Route>
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
