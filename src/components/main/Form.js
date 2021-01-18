function Form(props) {
    return(
        <form className="job-form" onSubmit={props.onSubmit}>
            
            <label>
                
                <input type="text" name="title" required placeholder="Job Title: "></input>
            </label>
            <label>
                
                <input type="text" name="company" required placeholder="Company:"></input>
            </label>
            <label>
                
                <input type="text" name="start" required placeholder="Start year:"></input>
            </label>
            <label>
                
                <input type="text" name="end" required placeholder="End Year:"></input>
            </label>
            <label>
                
                <textarea type="text" name="description" required placeholder="Description:"></textarea>
            </label>
            
            <input type="submit" name="submit" value="Submit"></input>
            <button onClick={props.onCancel} name="cancel" >Cancel</button>
        </form>
    )
}

export default Form