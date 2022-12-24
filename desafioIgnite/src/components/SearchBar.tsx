import styles from './SearchBar.module.css';
import { PlusCircle } from 'phosphor-react'

export function SearchBar() {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <input
                        type="text"
                        placeholder="Adicione uma tarefa"
                        // value=""
                        className={styles.input}
                    />
                    <button type='submit' className={styles.button}>
                        <a href="#">
                            <span>Criar</span>
                            <PlusCircle size={15.8} />
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}