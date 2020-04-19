import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
