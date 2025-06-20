import { useContext } from "react";
import { MyContext } from "../InputPost";

export function Posts() {
    const contextValue = useContext(MyContext);

    return (
        <div>
            {contextValue}
        </div>
    )
}