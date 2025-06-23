import { createContext, useEffect, useRef, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
import { Posts } from '../Posts';
import { useNavigate } from 'react-router-dom';


type ProdutoProps = {
  name: string;
  utility: string;
  value: number | string;
}

export const MyContext = createContext<string | number | boolean>('');

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
      return stored ? stored : 'not found'; 
    });
    const [productUtility, setProductUtility] = useState<string>(():string => {
      const stored = localStorage.getItem('productUtility');
      return stored ? stored : 'not found'; 
    });
    const [productValue, setProductValue] = useState<number>(():number => {
      const stored = localStorage.getItem('productValue');
      return stored ? Number(stored) : 0; 
    });
  

    function handleValueChange(e: React.ChangeEvent<HTMLInputElement>){
      setProductName(e.target.value);
    }

    function handleSubmitBtn(){
      const newItem = {
        name: nameRef.current?.value || '',
        utility: utilityRef.current?.value || '',
        value: valueRef.current?.value || 0,
      }
     
      const updatedList = [...allProducts, newItem];

      setSubmittedBtn(true);

      setAllProducts(updatedList);

      navigate('/profile', {
          state: updatedList
        });
      
      setSubmittedBtn(false);
    }

    function handleOptionSelection(e: React.ChangeEvent<HTMLInputElement>) {
      setProductUtility(e.target.value);
    }

    function handleValueNumber(e: React.ChangeEvent<HTMLInputElement>){
        setProductValue(Number(e.target.value));
    }

    useEffect(() => {
      localStorage.setItem('productName', productName);

      localStorage.setItem('productUtility', productUtility);

      localStorage.setItem('productValue', String(productValue)); 

      localStorage.setItem('allProducts', JSON.stringify(allProducts));
    }, [submittedBtn])

  
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <label>Nome do Produto: </label>
            <input ref={nameRef} className={styles.input} type="text" name="post" value={productName} onChange={handleValueChange}/>
          </div>
          <div className={styles.item}>
            <label>Utilidade:</label>
            <select ref={utilityRef} name="" id="" onClick={handleOptionSelection}>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="alimentação">Alimentação</option>
            </select>
          </div>
         <div className={styles.item}>
           <label htmlFor="">Valor:</label>
           <input ref={valueRef} type="number" value={productValue} onChange={handleValueNumber}/>
         </div>
          
       <div>
          <input className={styles.btnInput} type="button" value="Enviar" onClick={handleSubmitBtn}/> 
       </div>

         <MyContext.Provider value={{productName , productUtility, productValue, submittedBtn} }>
            <Posts/>
          </MyContext.Provider>     
          
        </div>
    );
}