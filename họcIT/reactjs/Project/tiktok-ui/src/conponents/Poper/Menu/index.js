import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PoperWrapper } from '~/conponents/Poper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultChange = () => {};

function Menu({children, item = [], onChange = defaultChange}) {

    const [history, setHistory] = useState([{ data: item }]);
    console.log(history);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
               <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}

                />
            );
        });
    };

    return ( 
        <Tippy
            interactive
            delay={[0, 800]}
            offset={[12, 8]}
            placement='bottom-end'
            onHide={() => setHistory(history => history.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-list')}>
                        {history.length > 1 && <Header title={current.title} onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1));
                        }}/>}
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy> );
}

export default Menu;