import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Poper.module.scss';

const cx = classNames.bind(styles);

function Wraper({children, className}) {
    return (
        <div className={cx('wrapper', {
            [className]: className
        })}>
            {children}
        </div>
      );
}

export default Wraper;