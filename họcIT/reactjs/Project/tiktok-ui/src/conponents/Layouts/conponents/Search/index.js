import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import AccountItem from '~/conponents/AccountItem';
import {Wrapper as PoperWrapper} from '~/conponents/Poper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const debouncedSearchValue = useDebounce(searchValue, 600);
    const inputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setIsLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedSearchValue)}&type=less`)
            .then(response => response.json())
            .then(res => {
                setSearchResult(res.data);
                setIsLoading(false);
            })
            .catch(() => {
                setSearchResult([]);
                setIsLoading(false);
            });

        return () => {
            setSearchResult([]);
            setIsLoading(false);
        }
    }, [debouncedSearchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const hendleHideResult = () => {
        setShowResult(false);
    }
    const handleSearchValue = (e) => {
        if(e.target.value.trim() === '') {
            setSearchValue('');
            setShowResult(false);
        }else if (e.target.value.trim() !== '') {
            setSearchValue(e.target.value);
            setShowResult(true);
        }
    }

    return ( 
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            offset={[0, 8]}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PoperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountItem
                                key={result.id}
                                data={result}
                            />
                        ))}
                    </PoperWrapper>
                </div>
            )}
            onClickOutside={hendleHideResult}
        >
            <div className={cx('header-search')}>
                <input 
                    ref={inputRef}
                    type="text" 
                    value={searchValue}
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    onChange={handleSearchValue}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                { !!searchValue && showResult && !isLoading && (
                <button className={cx('clear-btn')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                )}
                {isLoading && (
                <button className={cx('loading-btn')}> 
                    <FontAwesomeIcon icon={faSpinner} />
                </button>
                )}
                <button 
                    className={cx('search-btn')} 
                    tabIndex="-1" 
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                        const query = searchValue.trim();
                        if (!query) {
                            inputRef.current.focus();
                            return;
                        }

                        setIsLoading(true);
                        setTimeout(() => {
                            navigate(`/search?query=${searchValue}`);
                        }, 2000);
                    }}

                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
     );
}

export default Search;