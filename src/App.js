
import './App.css';
// import './header'
import Header from './header';
import {Route, BrowserRouter as Router, Switch,} from "react-router-dom"
import Biography from "./Pages/Biogrophy"
import Home from "./Pages/Home"
import Merch from "./Pages/merch"
import News from "./Pages/news"
import tourdates from "./Pages/tourdates"

function App() {
  return (
    <Router>
      <div className="App">
       <p>hello</p>
       <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/biography" component={Biography}/>
          <Route path="/merch" component={Merch}/>
          <Route path="/news" component={News}/>
          <Route path="/tourdates" component={tourdates}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
