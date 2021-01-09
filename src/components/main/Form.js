function Form(props) {
    return(
        <form className="job-form" onSubmit={props.onSubmit}>
            
            <label>
                
                <input type="text" name="title" placeholder="Job Title: "></input>
            </label>
            <label>
                
                <input type="text" name="company" placeholder="Company:"></input>
            </label>
            <label>
                
                <input type="text" name="start" placeholder="Start year:"></input>
            </label>
            <label>
                
                <input type="text" name="end" placeholder="End Year:"></input>
            </label>
            <label>
                
                <textarea type="text" name="description" placeholder="Description:"></textarea>
            </label>
            
            <input type="submit" name="submit" value="Submit"></input>
            <button onClick={props.onCancel} name="cancel" >Cancel</button>
        </form>
    )
}

export default Form