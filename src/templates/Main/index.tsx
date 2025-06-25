import { Header } from "../../components/Header";
import styles from './styles.module.css';

type MainProps = {
    children: React.ReactNode;
}

export function Main({ children }: MainProps) {
    return (
       
        <div className={styles.all}>
            <Header/>
            <main>
                {children}
                <footer>
                &copy; Desenvolvido por Rafaela Bourdette 2025
            </footer>
            </main>
            
        </div>
    );
}