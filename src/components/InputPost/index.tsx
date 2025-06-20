import { createContext, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
import { Posts } from '../Posts';

export const MyContext = createContext<string>('');

export function InputPost() {
    const [inputValue, setInputValue] = useState<string>('');
    
    function handleValueChange(e){
      setInputValue(e.target.value);
    }


    return (
        <div className={styles.container}>
          <input className={styles.input} type="text" name="post" value={inputValue} onChange={handleValueChange}/>
          <input className={styles.btnInput} type="button" value="Enviar"/> 

          <MyContext.Provider value={inputValue}>
            <Posts/>
          </MyContext.Provider>     
        </div>
    );
}