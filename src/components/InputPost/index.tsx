import { createContext, useEffect, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
import { Posts } from '../Posts';

export const MyContext = createContext('');

export function InputPost() {
    const [inputValue, setInputValue] = useState<string>('');
    const [submittedBtn, setSubmittedBtn] = useState<boolean>(false);
    
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

    function handleValueChange(e){
      setInputValue(e.target.value);
      setProductName(inputValue);
    }

    function handleSubmitBtn(){
      setSubmittedBtn(!submittedBtn);
    }

    function handleOptionSelection(e) {
      setProductUtility(e.target.value);
    }

    function handleValueNumber(e){
        setProductValue(e.target.value);
        return Number(productValue);
    }

    useEffect(() => {
      localStorage.setItem('productName', productName);

      localStorage.setItem('productUtility', productUtility);

      localStorage.setItem('productValue', productValue);

    }, [submittedBtn])

    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <label>Nome do Produto: </label>
            <input className={styles.input} type="text" name="post" value={inputValue} onChange={handleValueChange}/>
          </div>
          <div className={styles.item}>
            <label>Utilidade:</label>
            <select name="" id="" onClick={handleOptionSelection}>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="alimentação">Alimentação</option>
            </select>
          </div>
         <div className={styles.item}>
           <label htmlFor="">Valor:</label>
           <input type="number" value={productValue} onChange={handleValueNumber}/>
         </div>
          
       
          <input className={styles.btnInput} type="button" value="Enviar" onClick={handleSubmitBtn}/> 

{
  productUtility
}
{
  productValue
}
         <MyContext.Provider value={{productName ,submittedBtn} }>
            <Posts/>
          </MyContext.Provider>     
        </div>
    );
}