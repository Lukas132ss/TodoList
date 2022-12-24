import styles from './Header.module.css';
import { Rocket } from 'phosphor-react';
export function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.todo}>
                <Rocket size={36} />
                <span>to</span>do
            </h1>
        </div>
    )
}