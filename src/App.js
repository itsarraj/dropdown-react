import { useEffect, useState } from 'react';
import { Head, Options } from './component/index';

import styles from './styles/app.module.css';

function App() {
    const options = ['Yes', 'Probably Not'];
    return (
        <div className={styles.app}>
            <Head />
            <Options options={options} />
        </div>
    );
}

export default App;
