import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';

import Products from './Components/Products';
import Navigation from './Components/Navigation';
import ColumnHeaders from './Components/ColumnHeader';
import fetchData from './Services/fetchData';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  function toggleLoading() {
    setLoading(!loading);
  }

  useEffect(
    () =>
      fetchData()
        .then((data) => setProducts(data))
        .then(toggleLoading),
    []
  );

  const [
    jackets,
    shirts,
    accessories,
    derp,
    reps,
    abiplos,
    nouke,
    xoon,
  ] = products;

  return (
    <Router>
      <AppWrapper>
        {loading ? (
          <Navigation />
        ) : (
          <h1>
            The data is loading, please be patient
          </h1>
        )}
        <Switch>
          <Route exact path="/">
            <h2>Welcome to the Warehouse</h2>
          </Route>
          <Route path="/jackets">
            <ColumnHeaders />
            <Products
              products={jackets}
              derp={derp}
              reps={reps}
              abiplos={abiplos}
              nouke={nouke}
              xoon={xoon}></Products>
          </Route>
          <Route path="/shirts">
            <ColumnHeaders />
            <Products
              products={shirts}
              derp={derp}
              reps={reps}
              abiplos={abiplos}
              nouke={nouke}
              xoon={xoon}></Products>
          </Route>
          <Route path="/accessories">
            <ColumnHeaders />
            <Products
              products={accessories}
              derp={derp}
              reps={reps}
              abiplos={abiplos}
              nouke={nouke}
              xoon={xoon}></Products>
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

  h1 {
    margin-top: 3vh;
    text-align: center;
    font-size: 2rem;
  }

  h2 {
    margin-top: 3vh;
    font-size: 1.5rem;
    margin: 2%;
  }
`;
