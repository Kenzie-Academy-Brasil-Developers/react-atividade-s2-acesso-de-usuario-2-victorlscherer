import { Route, Switch } from 'react-router';
import './App.css';
import { members } from './components/Members';
import Home from './pages/Home'
import Custumer from './pages/Customer'
import Company from './pages/Company'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/"> <Home members={members} /></Route>
          <Route exact path="/customer/:id"><Custumer /></Route>
          <Route exact path="/company/:id"><Company /></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
