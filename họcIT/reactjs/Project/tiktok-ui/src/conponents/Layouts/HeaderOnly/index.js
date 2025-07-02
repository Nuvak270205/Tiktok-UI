import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";
import Header from "../conponents/Header";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return ( 
        <div className="container">
            <Header />
            <div className={cx("container-body")}>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;