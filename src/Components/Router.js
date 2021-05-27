import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "./Header";


export default () => (
  <Router><>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/tv" exact component={TV}/>
      <Route path="/search" exact component={Search}/>
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      {/* : <- 이것이 의미하는건 변경할 될 수 있는 이름이 오게하기 위해서 넣어주는것 */}
      <Redirect from="*" to="/"/>
    </Switch>
    </>
  </Router>
);
