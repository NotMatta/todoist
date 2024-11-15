import { useEffect, useState} from "react"
import { taskContext, TaskDataType } from "./task-util"


const TasksProvider = ({children}:{children:React.ReactNode}) => {

    const [tasks,setTasks] = useState<TaskDataType[]>([])
    useEffect(() => {
        console.log(tasks)
    },[tasks])
    return <taskContext.Provider value={{tasks,setTasks}}>
        {children}
    </taskContext.Provider>
    
}

export default TasksProvider

