import React from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbsComponent } from "./BreadCrumbs";

export class News extends React.Component {
    render() {
        return (
            <div className="News">
                <BreadcrumbsComponent location={window.location} />
                <div>News</div>
                <NavLink to="/news/pageone">PageOne</NavLink>
            </div>
        )
    }
}