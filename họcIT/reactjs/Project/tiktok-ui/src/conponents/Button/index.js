import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    text = false,
    primary = false,
    online = false,
    small = false,
    large = false,
    disablesd = false,
    rounder = false,
    className,
    leftIcon,
    rightICon,
    passProps
}) {
    const props = {
        onClick,
        ...passProps
    };
    let Conponent = 'button';
    if (disablesd) {
        Object.keys(props).forEach( key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to){
        props.to = to;
        Conponent = Link;
    }else if (href){
        props.href = href;
        Conponent = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        online,
        small,
        large,
        text,
        disablesd,
        rounder,
        [className]: className
    });
    
    return ( 
        <Conponent className={classes} {...props} onClick={onClick}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightICon && <span className={cx('icon')}>{rightICon}</span>}
        </Conponent>
     );
}

export default Button;