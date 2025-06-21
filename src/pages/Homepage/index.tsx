import styles from './styles.module.css';

import { InputPost } from "../../components/InputPost";
import { Main } from "../../templates/Main";


export function Homepage() {
    return (
        <Main>
            <div className={styles.info}>
                <h2>Cadastre o seu produto aqui e mantenha seu orçamento em dia</h2>
            </div>
           <InputPost/>
        </Main>
    )
}