import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";
import Image  from "~/conponents/Image";

const cx = classNames.bind(styles);

function AccountItem({data}) {
    return ( 
        <Link to={`/u/${data.nickname}`} className={cx('wrapper')}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className={cx('avatar')}>
                <Image src={data.avatar} alt={data.full_name} />
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
      );
}

export default AccountItem;