const TaskCard = (props) => {
    let Date = props.dueDate;
    const Assignee = props.assigneeName;
    let title = props.title;
    let competed=props.completed;
    let DE;
    if (competed) {
        DE = "completed on: " + props.completedAtDate;
    }
    else {
        DE = "due date: " + Date;
    }
    return (
        <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
            <div>
                <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
            </div>
            <div className="">
                <p>{DE}</p>
            </div>
            <div className="assignee">
                <h4>Assignee name:{Assignee}</h4>
            </div>
        </div>
  
      )
  }
  export default TaskCard;