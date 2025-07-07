import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import images from "~/assets/image";

const cx = classNames.bind(styles);

function Image({ src, alt, className, fallback = images.noImage, ...props }) {
    const [hasError, setHasError] = useState(false);

    return (
        <img
            className={cx("wrapper", {
                [className]: className,
            })}
            src={hasError ? fallback : src}
            alt={alt}
            onError={() => setHasError(true)}
            {...props}
        />
    );
}

export default Image;
