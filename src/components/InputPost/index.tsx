import { createContext, useEffect, useState } from 'react';
import '../../styles/root/index.css'
import styles from './styles.module.css';
import { Posts } from '../Posts';
import { useNavigate } from 'react-router-dom';


type ProdutoProps = {
  name: string;
  utility: string;
  value: number | string;
}

export const MyContext = createContext('');

export function InputPost() {
    const navigate = useNavigate();

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
    
      const nameInput = document.querySelector('input[name="post"]') as HTMLInputElement;
      const utilitySelect = document.querySelector('select') as HTMLSelectElement;
      const valueInput = document.querySelector('input[type="number"]') as HTMLInputElement;

      const newItem = {
        name: nameInput.value,
        utility: utilitySelect.value,
        value: valueInput.value,
      }
      
      setAllProducts(prev => {
        const updatedList = [...prev, newItem];
        navigate('/profile', {
                state: updatedList
        });
        return updatedList;
      });
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

  console
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <label>Nome do Produto: </label>
            <input className={styles.input} type="text" name="post" value={productName} onChange={handleValueChange}/>
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
          
       <div>
          <input className={styles.btnInput} type="button" value="Enviar" onClick={handleSubmitBtn}/> 
       </div>

         <MyContext.Provider value={{productName , productUtility, productValue, submittedBtn} }>
            <Posts/>
          </MyContext.Provider>     
          
        </div>
    );
}