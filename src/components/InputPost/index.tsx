import { useRef, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
//import { Posts } from '../Posts';
import { useNavigate } from 'react-router-dom';

export type ProdutoProps = {
  name: string;
  utility: string;
  value: number | string;
}


export function InputPost() {
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement>(null);
    const utilityRef = useRef<HTMLSelectElement>(null);
    const valueRef = useRef<HTMLInputElement>(null);
    
    const [submittedBtn, setSubmittedBtn] = useState<boolean>(false);
   
    const [allProducts, setAllProducts] = useState<ProdutoProps[]>(() => {
      const storedItem = localStorage.getItem('allProducts');
      return storedItem ? JSON.parse(storedItem) : [];
    });

    const [productName, setProductName] = useState<string>(():string => {
      const stored = localStorage.getItem('productName');
      return stored ? stored : ''; 
    });
    const [productUtility, setProductUtility] = useState<string>(():string => {
      const stored = localStorage.getItem('productUtility');
      return stored ? stored : ''; 
    });
    const [productValue, setProductValue] = useState<number>(():number => {
      const stored = localStorage.getItem('productValue');
      return stored ? Number(stored) : 0; 
    });
  
    function handleSubmitBtn(){
      const newItem = {
        name: nameRef.current?.value || '',
        utility: utilityRef.current?.value || '',
        value: valueRef.current?.value || 0,
      }

      if(newItem.name === '' || newItem.utility === '' || newItem.value === 0){
        console.log('Por favor, preencha todos os campos')
        return;

      } else {
        const updatedList = [...allProducts, newItem];
        
        setSubmittedBtn(true);

        setAllProducts(updatedList);
        localStorage.setItem('allProducts', JSON.stringify(updatedList));

        navigate('/profile', {
                state: allProducts
        });
      }
    
      setSubmittedBtn(false);
    }

    localStorage.setItem('productName', productName);
    localStorage.setItem('productUtility', productUtility);
    localStorage.setItem('productValue', String(productValue)); 

  console.log(submittedBtn)
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <label>Nome do Produto: </label>
            <input ref={nameRef} className={styles.input} type="text" name="post" value={productName} onChange={e => setProductName(e.target.value)} required/>
          </div>
          <div className={styles.item}>
            <label>Utilidade:</label>
            <select ref={utilityRef} name="" id="" onChange={e => setProductUtility(e.target.value)}>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="alimentação">Alimentação</option>
            </select>
          </div>
         <div className={styles.item}>
           <label htmlFor="">Valor:</label>
           <input ref={valueRef} type="number" value={productValue} onChange={e => setProductValue(Number(e.target.value))} required/>
         </div>
          
       <div>
          <input className={styles.btnInput} type="button" value="Enviar" onClick={handleSubmitBtn}/> 
       </div>      
        </div>
    );
}