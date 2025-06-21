import { createContext, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
import { Posts } from '../Posts';

export const MyContext = createContext('');

export function InputPost() {
    const [inputValue, setInputValue] = useState<string>('');
    const [submittedBtn, setSubmittedBtn] = useState<boolean>(false);
    
    function handleValueChange(e){
      setInputValue(e.target.value);
    }

    function handleSubmitBtn(){
      setSubmittedBtn(!submittedBtn);
    }

    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <label>Nome do Produto: </label>
            <input className={styles.input} type="text" name="post" value={inputValue} onChange={handleValueChange}/>
          </div>
          <div className={styles.item}>
            <label>Utilidade:</label>
            <select name="" id="">
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="alimentação">Alimentação</option>
            </select>
          </div>
         <div className={styles.item}>
           <label htmlFor="">Valor:</label>
           <input type="number"/>
         </div>
          
       
          <input className={styles.btnInput} type="button" value="Enviar" onClick={handleSubmitBtn}/> 

          <MyContext.Provider value={{inputValue ,submittedBtn} }>
            <Posts/>
          </MyContext.Provider>     
        </div>
    );
}