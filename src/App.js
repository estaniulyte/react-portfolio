import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';
import PhotographyPage from './components/PhotographyPage';
import IllustrationsPage from './components/IllustrationsPage';
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Switch  location={location} key={location.pathname}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/projects" component={ProjectsPage}/>
          <Route exact path="/work" component={WorkPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/photography" component={PhotographyPage}/>
          <Route exact path="/graphic-design" component={IllustrationsPage}/>
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  </> 
}

export default App

