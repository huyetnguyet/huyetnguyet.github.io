import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "components/home";
import Games from "components/games";
import News from "components/news";
import Tech from "components/tech";

import { Pages } from "components/pages";

import Pages2021 from "storages/content/2021/routePages";

export default function routePages() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/news" component={News} />
      <Route exact path="/tech" component={Tech} />
      <Pages />
      <Pages2021 />
    </Switch>
  );
}
