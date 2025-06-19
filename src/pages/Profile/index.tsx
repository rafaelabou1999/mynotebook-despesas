import styles from './styles.module.css';

import { Main } from "../../templates/Main";


export function Profile() {
    return (
        <Main>
           <section className="images">
             <div className={styles.container}>
                <div className={styles.banner}>
                </div>
                <div className={styles.profile}>
                    <img src="https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482_1280.jpg"/>
                </div>
             </div>
           </section>
           <section className="bio">
             <div className={styles.username}>
                <h2>Rafaela Bourdette</h2>
                <h4>25 anos</h4>
                <h4>Rio de Janeiro, RJ</h4>
             </div>
           </section>
        </Main>
    )
}