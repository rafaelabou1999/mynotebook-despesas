import { useContext } from "react";
import { MyContext } from "../InputPost";

export function Posts() {
    const {productName, productUtility, productValue, submittedBtn} = useContext(MyContext);

    return (
        <div>
            {submittedBtn && (
                <div>
                    <p>{productName}</p> 
                    <p>{productUtility}</p> 
                    <p>R$ {productValue}</p>

                </div>     
             )}
                             
        </div>
    )
}