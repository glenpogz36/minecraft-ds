import './App.css';
import { Switch, Route } from 'react-router-dom';

import NavBar from './Router/NavBar';
import FAQ from './Components/FAQ';
import Aboutus from './Components/AboutUs';
import Support from './Components/Support';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route path="/faq" component={FAQ} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/support" component={Support} />


      </Switch>
    </div>
  );
}

export default App;
