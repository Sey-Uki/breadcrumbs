import React from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbsComponent } from "../BreadCrumbs";

export class PageOne extends React.Component {
    render() {
        return (
            <div className="PageOne">
                <BreadcrumbsComponent location={window.location} />
                <div>PageOne</div>
                <NavLink to="/news/pageone/pagetwo">PageTwo</NavLink>
            </div>
        )
    }
}