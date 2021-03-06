import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/Login/index';
import Registration from "./Components/Register/index";
import Layout from "./Components/Page/layout";
import Calendar from "./Components/Calendar/Calendar";
import ApiData from "./Components/ApifetchData/Index";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/register" exact component={Registration} />
                <Route path="/layout" exact component={Layout} />
                <Route path="/calandar" exact component={Calendar} />
                <Route path="/apidata" exact component={ApiData} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
