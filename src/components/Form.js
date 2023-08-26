import React from "react";

const Form = () => {
    const [name, setName] = React.useState("");
    const [cart, setCart] = React.useState("");


    console.log('name is', name, 'cart value is', cart);
    return (
        <div>
            <label>
                Enter the date
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
                {/* {console.log('hi, my name is jaick')} */}
            </label>
            <br></br>
            <label>
                Enter the shopping cart
                <input type="text" value={cart} onChange={(e) => setCart(e.target.value)} ></input>
            </label>
        </div>

    );
}

export default Form;