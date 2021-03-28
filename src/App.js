import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavigationBar from "./Navbars/Navbar";
import Home from "./Views/Home";
import LineChart from "./Views/First-Challenge";

<script>src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"</script>
function App() {
  return (
      <div>
          <NavigationBar/>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/First" component={LineChart} />

              </Switch>
          </Router>

      </div>


  );
}

export default App;
