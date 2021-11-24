import React from "react";
import { BreadcrumbsComponent } from "../BreadCrumbs";

export class PageTwo extends React.Component {
    render() {
        return (
            <div className="PageTwo">
                <BreadcrumbsComponent location={window.location} />
                PageTwo
            </div>
        )
    }
}