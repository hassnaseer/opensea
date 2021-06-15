import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Registration from "./Registration";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/register" exact component={Registration} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
