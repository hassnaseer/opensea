import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './LoginPage';
import LoginPage from './Login/index';
import Registration from "./Register/index";
import Layout from "./Page/layout";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/register" exact component={Registration} />
                <Route path="/layout" exact component={Layout} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
