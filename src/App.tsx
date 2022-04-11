import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import OwnChakraProvider from "./chakra/OwnChakraProvider";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";
import AppRoute from "./types/AppRoute";
import "./App.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <OwnChakraProvider>
        <Router>
          <Switch>
            <Route path={AppRoute.HomePage} component={HomePage} exact />
            <Route
              path={AppRoute.UserDetailsPage}
              component={UserDetailsPage}
              exact
            />
            <Redirect to={AppRoute.HomePage} />
          </Switch>
        </Router>
      </OwnChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
