import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { PageOne } from "./containers/PageOne";
import { PageThree } from "./containers/PageThree";
import { PageTwo } from "./containers/PageTwo";
import { News } from "./News";

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/news" render={(props) => <News {...props} />} />
                <Route exact path="/about" render={(props) => <About {...props} />} />
                <Route exact path="/contacts" render={(props) => <Contacts {...props} />} />
                <Route exact path="/news/pageone" render={(props) => <PageOne {...props} />} />
                <Route exact path="/news/pageone/pagetwo" render={(props) => <PageTwo {...props} />} />
                <Route exact path="/contacts/pagethree" render={(props) => <PageThree {...props} />} />
            </Switch>
        );
    }
}
