import React from "react";
import { BreadcrumbsComponent } from "./BreadCrumbs";

export class About extends React.Component {
    render() {
        return (
            <div className="About">
                <BreadcrumbsComponent location={window.location} />
                <div>About</div>
            </div>
        )
    }
}