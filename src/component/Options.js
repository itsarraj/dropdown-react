import { useEffect, useState } from 'react';
import styles from '../styles/options.module.css';

const Options = ({ options }) => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const handleMouseEnter = () => {
        setDisplayOptions(true);
    };
    const handleMouseLeave = () => {
        setDisplayOptions(false);
    };
    const handleOptionClick = (option) => {
        console.log('Selected option:', option);
        setDisplayOptions(false);
    };
    return (
        <div className={styles.options}>
            <div
                className={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className={styles.button}>Select</button>
                <div className={styles.dropdown}>
                    {displayOptions && (
                        <>
                            <ul className={styles.dropdownMenu}>
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className={styles.dropdownItem}
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Options;
