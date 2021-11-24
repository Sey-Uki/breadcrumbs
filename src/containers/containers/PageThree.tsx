import React from "react";
import { BreadcrumbsComponent } from "../BreadCrumbs";

export class PageThree extends React.Component {
    render() {
        return (
            <div className="PageThree">
                <BreadcrumbsComponent location={window.location} />
                <div>PageThree</div>
            </div>
        )
    }
}