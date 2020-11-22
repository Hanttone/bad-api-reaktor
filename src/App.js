import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components/macro";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import fetchData from "./Services/fetchData";
import {useState, useEffect} from "react";
import addToLocalStorage, {loadFromLocalStorage} from "./Services/saveToLocalStorage"


function App() {

  const [products, setProducts] = useState([])

  const productsUrl = [
    'https://bad-api-assignment.reaktor.com/products/jackets',
    'https://bad-api-assignment.reaktor.com/products/shirts', 
    'https://bad-api-assignment.reaktor.com/products/accessories',
    'https://bad-api-assignment.reaktor.com/availability/derp',
    'https://bad-api-assignment.reaktor.com/availability/reps',
    'https://bad-api-assignment.reaktor.com/availability/abiplos',
    'https://bad-api-assignment.reaktor.com/availability/nouke',
    'https://bad-api-assignment.reaktor.com/availability/xoon'
] 

  useEffect(() => fetchData(productsUrl).then(data => setProducts(data)), [])

  const loadedFromLocalStorage = loadFromLocalStorage('Productdata')
  let localStorageList = loadedFromLocalStorage || [];

  if (products.length !== 0) {
    addToLocalStorage(new Date().toUTCString(), products[3], products[4], products[5], products[6], products[7], localStorageList)
  }

  /*function testCachingTime() {
    const date1 = localStorageList[0].timeStamp
    const diff = (new Date().getTime() - new Date(date1).getTime())/1000
    if (diff > 1800) {
      fetchData()
    }
  }*/

  const [jackets, shirts, accessories] = products;    

  return (
    <Router>
    <AppWrapper>
      <Navigation></Navigation>
      <Switch>
        <Route path="/jackets">
          <Products productsData={jackets} derp={localStorageList[0].derp} reps={localStorageList[0].reps} abiplos={localStorageList[0].abiplos} nouke={localStorageList[0].nouke} xoon={localStorageList[0].xoon} ></Products>
        </Route>
        <Route path="/shirts">
          <Products productsData={shirts} derp={localStorageList[0].derp} reps={localStorageList[0].reps} abiplos={localStorageList[0].abiplos} nouke={localStorageList[0].nouke} xoon={localStorageList[0].xoon}></Products>
        </Route>
        <Route path="/accessories">
          <Products productsData={accessories} derp={localStorageList[0].derp} reps={localStorageList[0].reps} abiplos={localStorageList[0].abiplos} nouke={localStorageList[0].nouke} xoon={localStorageList[0].xoon}></Products>
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
