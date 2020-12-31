import { useState, useContext } from "react";
import CartContext from "./CartContext";

const DiscountForm = () => {
    const { setDiscount, isDiscounted, setIsDiscounted } = useContext(CartContext);

    const [formData, setFormData] = useState({
        discount: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const submit = e => {
        e.preventDefault();
        setIsDiscounted(true);
        console.log((formData));
        setDiscount(parseInt(formData.discount));
    };

    function formRender() {
        return(
            <form onSubmit={submit}>
                <input
                type="number"
                id='discount'
                name="discount"
                onChange={handleChange}
                value={formData.discount}
                placeholder='discount'
                />
                <button>Submit</button>
            </form>
        )
    };

    function noFormRender() {
        return(
            <div>Discount applied!</div>
        )
    }

    return(
        <div>
            {isDiscounted ? noFormRender() : formRender()}
        </div>
    )
}

export default DiscountForm;