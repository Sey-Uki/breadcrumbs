import React from "react";
import { Link } from "react-router-dom";

interface IBreadcrumbsProps {
    location: Location,
};

export class BreadcrumbsComponent extends React.Component<IBreadcrumbsProps> {

    render() {
        const pathnames = this.props.location.pathname.split("/").filter((el: any) => el); // массив всех путей, которые хранятся в location
        return (
            <div className="breadcrumbs">
                <div aria-label="breadcrumb">
                    Breadcrumbs:
                    <Link to="/">
                        Home
                    </Link>
                    /
                    {pathnames.map((pathname, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // получаем ссылки для Link
                        const isLast = index === pathnames.length - 1; // проверяем последний элемент
                        return isLast ? (
                            <span key={pathname}>{pathname[0].toUpperCase() + pathname.slice(1)}</span> // последний элемент не кликабельный
                        ) : (<React.Fragment key={pathname}>
                            <Link to={routeTo}>
                                {pathname[0].toUpperCase() + pathname.slice(1)}
                            </Link>
                            /
                        </React.Fragment> // все остальные элементы
                        );
                    })}
                </div>
            </div>
        );
    }
}