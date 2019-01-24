import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentEventsView from "./views/CurrentEventsView";
import CreateNewEvent from "./views/CreateNewEvent";

interface IPartnerAppProps {
  match: {
    url: string;
  };
}

const PartnerApp: React.SFC<IPartnerAppProps> = props => {
  return (
    <div>
      <style>{"body { background-color: WhiteSmoke; }"}</style>
      <Switch>
        <Route
          path={`${props.match.url}/`}
          exact
          component={CurrentEventsView}
        />
        <Route path={`${props.match.url}/new/`} component={CreateNewEvent} />
      </Switch>
    </div>
  );
};

export default PartnerApp;
