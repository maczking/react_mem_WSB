import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, AddMem } from "components";
import { MainView, Error404 } from "views";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route path="/regular" component={MainView} />
      <Route path="/hot" component={MainView} />
      <Route path="*" component={Error404} />
      <AddMem />
    </Router>
  );
};

export default App;
