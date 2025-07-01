import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../conponents/Header";
import Sidebar from "../conponents/Sidebar";

const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
    return ( 
        <div className='container'>
            <Header />
            <div className={cx("container-body")}>
                <Sidebar />
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;