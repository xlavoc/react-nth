import Nav from './components/nav/Nav';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/products/Products';
import Offers from './components/offers/Offers';
import Orders from './components/orders/Orders';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Theme from './assets/styles/Theme';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Router>
        <Theme>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/offers">
                <Offers />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
            </Switch>
          </main>
        </Theme>
      </Router>
    </Suspense>
  );
}

export default App;
