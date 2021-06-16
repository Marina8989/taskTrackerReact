function AddTask() {
    return (
        <form className="form">
            <label htmlFor="task">Task</label><br />
            <input type="text" placeholder="Add task" />
            <br />
            <label htmlFor="day">Day & Time</label><br />
            <input type="text" placeholder="Date & Time" />
            <br />
            <label htmlFor="reminder">Set Reminder</label><br />
            <input type="checkbox" className="check"/>
            <br />
            <input className="checkBtn" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
