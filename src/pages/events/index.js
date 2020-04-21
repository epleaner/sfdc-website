import React from "react";
import { Router } from "@reach/router";

import Event from "../../components/pageComponents/Event";

export default () => {
  return (
    <Router basepath="/events">
      <Event path="/r/:recurringEventName" />
      <Event path="/:eventName/:eventDate" />
    </Router>
  );
};
