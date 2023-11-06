import { useSelector, useDispatch } from "react-redux";

import { deleteTask, taskCompleted } from "../features/tasks/taskSlice";

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch()
    return (
        tasks?.map((task) =>
            <div key={task.id}>
                <h2>{task.title}</h2>
                <h2>{task.description}</h2>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                <input type="checkbox" checked={task.completed} onChange={() => dispatch(taskCompleted(task.id))}/>
            </div>
        )
    )
}

export default TaskList