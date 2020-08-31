import React, {useState, useEffect} from 'react'
import * as yup from 'yup';
import axios from 'axios';
import Input from './Input'

export default function Form(){

    const defaultState = {
        name: "",
        specialInstructions: "",
        pizzaSize: "Small", // Gonna be our checklist (position)
        toppingsOne: false, // Gonna be similar to Terms
        toppingsTwo: false,
        toppingsThree: false,
        toppingsFour: false
    }

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({ ...defaultState, toppingsOne: "", toppingsTwo: "" });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // Schema
    let formSchema = yup.object().shape({
        name: yup.string()
        .min(2, "Name needs to be longer than 2 characters")
        .required('Name required.'),
    })

    useEffect(() => {
        //formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));

        if (formState.name && formState.name.length > 2) {
            setButtonDisabled(!formState.toppingsOne && !formState.toppingsTwo && !formState.toppingsThree && !formState.toppingsFour);
        }

    }, [formState]);

    const formSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
        console.log(formState)

    }

    const ValidateChange = (e) => {
        e.persist()

        if (e.target.value.length === 0) {
            setErrors({
                ...errors,
                [e.target.name]: `${e.target.name} field is required`
            })
        }
    }

    const inputChange = (e) => {

        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        ValidateChange(e)
    }

    return (
        
        <form className='form container' onSubmit={formSubmit}>
            <Input
                type="text"
                name="name"
                onChange={inputChange}
                value={formState.name}
                label="Name"
                errors={errors}
                />

            <Input
                type="text"
                name="specialInstructions"
                onChange={inputChange}
                value={formState.specialInstructions}
                label="Special Instructions"
                errors={errors}
            />
            
            <label htmlFor="pizzaSize">
                Pick your pizza size!

                <select name="pizzaSize" onChange={inputChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Insane">Insane</option>
                </select>
            </label>

            <label className="toppingsOne" htmlFor="toppingsOne">
                <input name="toppingsOne" type="checkbox" onChange={inputChange}/>Pepperoni
                <input name="toppingsTwo" type="checkbox" onChange={inputChange}/>Sausage
                <input name="toppingsThree" type="checkbox" onChange={inputChange}/>Jalepenos
                <input name="toppingsFour" type="checkbox" onChange={inputChange}/>Beef
            </label>
            <button id="submitButton" disabled={buttonDisabled}>Add To Order</button>


           
       

            
        </form>
    )
}