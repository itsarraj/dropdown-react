import styles from '../styles/options.module.css';

const Options = () => {
    return (
        <div className={styles.options}>
            <select name="Select" className={styles.select}>
                <option
                    hidden
                    value="Select"
                    className={styles.selectoptionselect}
                >
                    Select
                </option>
                <option value="Yes" className={styles.selectoptionyes}>
                    Yes
                </option>
                <option
                    value="Probably Not"
                    className={styles.selectoptionprobablynot}
                >
                    Probably Not
                </option>
            </select>
        </div>
    );
};

export default Options;
