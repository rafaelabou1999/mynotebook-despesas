import '../../styles/root/index.css'
import styles from './styles.module.css';

export function Post() {
    return (
        <div className={styles.container}>
          <input className={styles.input} type="text" name="post"/>
          <input className={styles.btnInput} type="button" value="Enviar"/> 
        </div>
    );
}