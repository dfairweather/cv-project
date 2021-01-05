function SchoolForm(props) {
    return(
        <form className="school-form" onSubmit={props.onSubmit}>
            <label>
                Major: 
                <input type="text" name="major"></input>
            </label>
            <label>
                University: 
                <input type="text" name="university"></input>
            </label>
            <label>
                Start year:
                <input type="text" name="start"></input>
            </label>
            <label>
                End Year:
                <input type="text" name="end"></input>
            </label>
            <input type="submit" name="submit" value="Submit"></input>
            <button onClick={props.onCancel} name="cancel" >Cancel</button>
        </form>
    )
}

export default SchoolForm