import { useContext } from "react";
import { MyContext } from "../InputPost";

export function Posts() {
    const {productName, submittedBtn} = useContext(MyContext);

    return (
        <div>
            {submittedBtn && <p>{productName}</p>}
        </div>
    )
}