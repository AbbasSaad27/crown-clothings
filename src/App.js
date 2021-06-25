import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';

const shopContent = ({match}) => {
  return (
    <div>
      <h2>{`${match.params.shopName} Page`.toUpperCase()}</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path="/shop/:shopName" component={shopContent}/>
      </Switch>
    </div>
  );
}

export default App;
