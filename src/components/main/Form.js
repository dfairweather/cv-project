function Form(props) {
    return(
        <form className="job-form" onSubmit={props.onSubmit}>
            
            <label>
                Job Title: 
                <input type="text" name="title"></input>
            </label>
            <label>
                Company: 
                <input type="text" name="company"></input>
            </label>
            <label>
                Start year:
                <input type="text" name="start"></input>
            </label>
            <label>
                End Year:
                <input type="text" name="end"></input>
            </label>
            <label>
                Description:
                <textarea type="text" name="description"></textarea>
            </label>
            
            <input type="submit" name="submit" value="Submit"></input>
            <button onClick={props.onCancel} name="cancel" >Cancel</button>
        </form>
    )
}

export default Form