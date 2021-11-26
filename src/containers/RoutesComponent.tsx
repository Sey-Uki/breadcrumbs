import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { PageOne } from "./containers/PageOne";
import { PageThree } from "./containers/PageThree";
import { PageTwo } from "./containers/PageTwo";
import { News } from "./News";

export class RoutesComponent extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/news/pageone" element={<PageOne />} />
                <Route path="/news/pageone/pagetwo" element={<PageTwo />} />
                <Route path="/contacts/pagethree" element={<PageThree />} />
            </Routes>
        );
    }
}
