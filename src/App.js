import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/Homepage.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hat" render={()=>(<div> <h1>Hats page</h1></div>)}/>
        <Route  path={"/shop"} render={()=>(<div> <h1>Shops page</h1></div>)} /> 
        <Route path={'/shop/hats'} render={()=>(<div> <h1>Hats page</h1></div>)}/>
        <Route path={'/shop/men'} render={()=>(<div> <h1>mens page</h1></div>)}/>               
      </Switch>
      
    </div>
  );
}

export default App;
