const TaskCard = ({ title, dueDate, assigneeName, completedAtDate }) => {
    if (title && dueDate && assigneeName && completedAtDate) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div>
                    <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
                </div>
                <div className="">
                    <p>Assignee: {assigneeName}</p>
                    <p>Completed on: {completedAtDate}</p>
                </div>
            </div>
        );
    } else if (title && dueDate && assigneeName) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div>
                    <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
                </div>
                <div className="">
                    <p>Assignee: {assigneeName}</p>
                    <p>Due on: {dueDate}</p>
                </div>
            </div>
        );
    } else if (title && assigneeName && completedAtDate) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div>
                    <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
                </div>
                <div className="">
                    <p>Assignee: {assigneeName}</p>
                    <p>Completed on: {completedAtDate}</p>
                </div>
            </div>
        );
    } else if (title && dueDate && assigneeName) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div>
                    <h4 className="text-xl font-serif font-bold text-red-500">{title}</h4>
                </div>
                <div className="">
                    <p>Assignee: {assigneeName}</p>
                    <p>Due on: {dueDate}</p>
                </div>
            </div>
        );
    } else if (assigneeName) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div>
                    <h4 className="text-xl font-serif font-bold text-red-500">Assignee: {assigneeName}</h4>
                </div>
            </div>
        );
    } else if (dueDate) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div className="">
                    <p>Due on: {dueDate}</p>
                </div>
            </div>
        );
    } else if (completedAtDate) {
        return (
            <div className="w-[35vw] h-fit border-2 border-gray-900 px-5 py-5 rounded-lg">
                <div className="">
                    <p>Completed on: {completedAtDate}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default TaskCard;
