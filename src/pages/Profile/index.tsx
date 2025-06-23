import styles from './styles.module.css';
import { Main } from "../../templates/Main";
import { useLocation } from 'react-router-dom';

export function Profile() {
  const { state } = useLocation();
    if (!state || !Array.isArray(state)) {
    return <p>Nenhum produto encontrado.</p>;
  }
  console.log(state);
  return (
    <Main>
      <section className={styles.list}>
        <table border={1}>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Utilidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.utility}</td>
                <td>R$ {item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Main>
  );
}
