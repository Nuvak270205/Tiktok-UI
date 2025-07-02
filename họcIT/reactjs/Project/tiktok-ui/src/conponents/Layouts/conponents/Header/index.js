import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/image';
import styles from './Header.module.scss';


const cx = classNames.bind(styles);

function Header() {
    

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('header-icon')}>
                <img src={images.logo} alt="Tiktok Logo" />
            </div>
            <div className={cx('header-search')}>
                <input type="text" placeholder="Search accounts and videos" spellCheck={false}/>
                <button className={cx('clear-btn')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx('loading-btn')}> 
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
                <button className={cx('search-btn')} tabIndex="-1" onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </div>
            <div className={cx('header-actions')}>

            </div>
        </header>
     );
}

export default Header;