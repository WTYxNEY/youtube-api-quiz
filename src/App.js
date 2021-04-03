import { Container } from "react-bootstrap";
import Heading from "./components/Heading";
import User from "./components/User";
import Content from "./components/Content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Youtube from "./components/Youtube/Youtube";
import VideoDetail from "./components/Youtube/VideoDetail";

function App() {
  return (
    <div className="app">
      <Container>
        <Router>
          <Route exact path="/">
            <Youtube />
          </Route>
          <Route path="/profile">
            <Heading />
            <User />
            <Content />
          </Route>
        </Router>
      </Container>
    </div>
  );
}

export default App;
