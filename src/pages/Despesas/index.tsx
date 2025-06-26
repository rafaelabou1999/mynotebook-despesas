import styles from './styles.module.css';
import { Main } from "../../templates/Main";
import { useEffect, useState } from 'react';
import { Trash2Icon } from 'lucide-react';
import type { ProdutoProps } from '../../components/InputPost';


export function Despesas() {
  const [products, setProducts] = useState<ProdutoProps[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('allProducts');

    if(stored){
        const productsUpdate = JSON.parse(stored);
        setProducts(productsUpdate);
      }
  },[])
 
  if(products.length === 0){
    return <Main><p className={styles.noProduct}>Ops! 🪹 Você ainda não cadastrou nenhum produto.</p></Main>;
  }
  

  const sumValue = products.reduce((acc,item) => {
    return acc + Number(item.value);
  }, 0)

  function handleDelete(index:number) {
    const updatedList = products.filter((_,i) => {
      return i != index;
    })
    setProducts(updatedList)
    localStorage.setItem('allProducts', JSON.stringify(updatedList))
  }

  return (
    <Main>
      <section className={styles.list}>
        <table border={1}>
          <thead>
            <tr>
              <th>Despesa</th>
              <th>Utilidade</th>
              <th colSpan={3}>Preço</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td >{item.name}</td>
                <td>{item.utility}</td>
                <td colSpan={2} >R$ {item.value}</td>
                <td  className={styles.deleteProduct} onClick={() => handleDelete(index)}><Trash2Icon/></td>
              </tr>
            ))}
            <tr >
              <td colSpan={2} className={`${styles.occult} ${styles.total}`}>Total:</td>
              <td colSpan={3} className={styles.finalValue}>R$ {sumValue}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Main>
  );
}
