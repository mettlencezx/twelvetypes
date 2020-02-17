import "../assets/style/HomePage.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./child/Footer";
import Header from "./child/Header";
import Register from "./child/Register";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";
import ContactPage from "./pages/ContactPage";
import ArchetypePage from "./pages/ArchetypePage";

import DashboardPage from "./pages/DashboardPage";
import SidebarMenu from "./child/SidebarMenu";
import DemoResultPage from "./pages/DemoResultPage";
import { PrivateRoute } from "./child/PrivateRoute";
import PersonalisedPage from "./pages/PersonalisedPage";
import SalesLetterPage from "./pages/SalesLetterPage";
import MemberPage from "./pages/MemberPage";
class App extends React.Component {
  render() {
    return (
      <div className="pusher">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/archetype" component={ArchetypePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/menu" component={SidebarMenu} />
          <Route exact path="/demo-result" component={DemoResultPage} />
          <Route exact path="/personalised" component={PersonalisedPage} />
          <Route exact path="/offer" component={SalesLetterPage} />

          <PrivateRoute path="/member" component={MemberPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
