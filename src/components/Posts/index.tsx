import { useContext } from "react";
import { MyContext } from "../InputPost";

export function Posts() {
    const {inputValue, submittedBtn} = useContext(MyContext);

    return (
        <div>
            {submittedBtn && <p>{inputValue}</p>}
        </div>
    )
}