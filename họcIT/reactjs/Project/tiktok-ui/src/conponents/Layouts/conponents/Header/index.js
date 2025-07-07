import React, {Children, useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import images from '~/assets/image';
import styles from './Header.module.scss';
import Button from '~/conponents/Button';
import Menu from '~/conponents/Poper/Menu';
import { FlashIcon, MessageIcon, UploadIcon } from '~/conponents/Icons';
import Image from '~/conponents/Image';
import Search from '../Search';




const cx = classNames.bind(styles);
const MenuItem = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children : {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language'

                },
                {
                    code: 'ja',
                    title: '日本語',
                    type: 'language'
                },
                {
                    code: 'zh',
                    title: '中文',
                    type: 'language'
                },
                {
                    code: 'fr',
                    title: 'Français',
                    type: 'language'
                },
                {
                    code: 'de',
                    title: 'Deutsch',
                    type: 'language'
                },
                {
                    code: 'es',
                    title: 'Español',
                    type: 'language'
                },
                {
                    code: 'it',
                    title: 'Italiano',
                    type: 'language'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Fedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    }
]


function Header() {
    const currentUser = true; 

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }
    
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@duongnv',
        },{
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        },{
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MenuItem,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('header-icon')}>
                <img src={images.logo} alt="Tiktok Logo" />
            </div>

            <Search />

            <div className={cx('header-actions')}>
                {currentUser ? (
                    <>
                        <Tippy content="Upload video" placement="bottom">
                            <UploadIcon className={cx('action-btn')}/>
                        </Tippy>
                        <Tippy content="Message" placement="bottom">
                            <FlashIcon className={cx('action-btn')}/>
                        </Tippy>
                        <Tippy content="Inbox" placement="bottom">
                            <div className={cx('action-icon')}>
                                <MessageIcon className={cx('action-btn')}/>
                                <span className={cx('badge')}>12</span>
                            </div>
                        </Tippy>
                    </>
                ) :

                (
                    <>
                        <Button text className={cx('custom-login')} onClick={() => alert("Click!")}>Upload</Button>
                        <Button primary >Login</Button>
                    </>
                )}
                <Menu
                    item={currentUser ? userMenu : MenuItem}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <div className={cx('user-avatar')}>
                            <Image src="https://bazaarvietnam.vn/wp-content/uploads/2023/06/HBVN-hoc-cach-lam-dep-nhu-nu-chinh-hoa-nhung-cuc-tinh-y.jpg" alt="User Avatar" />
                        </div>
                    ) : (
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>)}
                </Menu>
            </div>
        </header>
     );
}

export default Header;