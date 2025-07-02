import classNames from "classnames/bind";
import React from "react";
import styles from "./DefaultLayout.module.scss";
import Header from "../conponents/Header";
import Sidebar from "../conponents/Sidebar";

const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    return ( 
        <React.Fragment>
            <section className={cx("box-header")}>
                <div className='container'>
                    <Header />
                </div>
            </section>
            <div className='container'>
                <div className={cx("container-body")}>
                    <Sidebar />
                    <div className={cx("content")}>
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default DefaultLayout;