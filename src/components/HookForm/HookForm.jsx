import useInputState from "../Hooks/UseInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rojoni')
    // const nameState = useInputState('Rojoni Hooked')
    const emailState = useInputState('rojoni@sojoni.go')


    const handleSubmit = e => {
        // console.log('form data', name);
        console.log('form data', emailState.value);
        
        e.preventDefault()
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                {/* <input 
                value={name}
                onChange={handleNameChange}
                type="text" name='name' /> */}
                <br />
                <input 
                
                // {...emailState}
                value={emailState.value}
                onChange={emailState.onChange}
                type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;