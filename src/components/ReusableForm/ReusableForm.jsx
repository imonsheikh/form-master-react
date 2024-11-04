
const ReusableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit', children}) => {

   const handleLocalSubmit = e => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data)
   }

    return (
        <div>
            {/* <h2>Sign Form / Registration Form</h2> */}
            <h2>{formTitle}</h2>
            <h2 style={{border: '1px solid green'}}>{children} by children</h2>
             <form 
            //  onSubmit={handleSubmit}
             onSubmit={handleLocalSubmit}
             
             >
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;