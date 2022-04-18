import { useState } from "react";


function Button()
{

    const [getValue, setValue] = useState(1);

    const incrementaValor = () => setValue(getValue + 1);
    const decrementaValor = () => setValue(getValue - 1);

    return (
        <div className="Button">
            <button onClick={incrementaValor}>Incremente {getValue}</button>
            <button onClick={decrementaValor}>Decremente {getValue}</button>
        </div>
    )
}

export default Button;