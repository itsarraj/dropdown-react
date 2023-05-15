import { Head, Options } from './component/index';

import styles from './styles/app.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Head />
            <Options />
        </div>
    );
}

export default App;
