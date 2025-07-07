import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./HeaderOnly.module.scss";
import Header from "../conponents/Header";

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
                    <div className={cx("content")}>
                        {children}
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default DefaultLayout;