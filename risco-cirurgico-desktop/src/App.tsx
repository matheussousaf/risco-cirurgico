import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";
import SidebarMenu from "./components/Sidebar/Sidebar";
import Risks from "./pages/Risks/Risks";
import NewRisk from "./pages/NewRisk/NewRisk";

function App() {
  const [active, setActive] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SidebarMenu active={active} setActive={setActive} />
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/risks">
            <Risks />
          </Route>
          <Route path="/new-risk">
            <NewRisk />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
