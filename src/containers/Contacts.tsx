import React from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbsComponent } from "./BreadCrumbs";

export class Contacts extends React.Component {
    render() {
        return (
            <div className="Contacts">
                <BreadcrumbsComponent location={window.location} />
                <div>Contacts</div>
                <NavLink to="/contacts/pagethree">PageThree</NavLink>
            </div>
        )
    }
}