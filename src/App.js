import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { Settings } from './Pages/Settings';
import { Dashboard } from './Pages/Dashboard';



function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/products' exact component={Products} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
