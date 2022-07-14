import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/product' exact>
            <Product />
          </Route>
          <Route path='/product/:productId'>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
