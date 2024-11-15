import { useEffect, useState} from "react"
import { taskContext, TaskDataType } from "./task-util"


const TasksProvider = ({children}:{children:React.ReactNode}) => {

    const [tasks,setTasks] = useState<TaskDataType[]>([])
    const [load,setLoad] = useState(false)

    useEffect(() => {
        if(load){
            window.localStorage.setItem("tasks",JSON.stringify(tasks))
        }
        if(!load){
            const storedTasks = window.localStorage.getItem("tasks")
            if (storedTasks){
                const parsedTasks = JSON.parse(storedTasks)
                setTasks(parsedTasks)
            }
            setLoad(true)
        }
    },[load,tasks])

    return <taskContext.Provider value={{tasks,setTasks,save:() => {
        window.localStorage.setItem("tasks",JSON.stringify(tasks))
    }}}>
        {children}
    </taskContext.Provider>
    
}

export default TasksProvider

