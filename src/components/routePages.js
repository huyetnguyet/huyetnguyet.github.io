import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

import Home from "components/home";
import {
  Games,
  Guide,
  Images,
  Life,
  News,
  Stars,
  Tech,
  Travel,
  Search,
} from "components/tabs";

import View from "common/sharedComponents/view";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html">
        <Redirect to="/" />
      </Route>
      <Route exact path="/search:querySearch" component={Search} />

      <Route exact path="/games" component={Games} />
      <Route exact path="/guide" component={Guide} />
      <Route exact path="/images" component={Images} />
      <Route exact path="/life" component={Life} />
      <Route exact path="/news" component={News} />
      <Route exact path="/stars" component={Stars} />
      <Route exact path="/tech" component={Tech} />
      <Route exact path="/travel" component={Travel} />
      <Route path="/:view" component={View} />
    </Switch>
  );
}
