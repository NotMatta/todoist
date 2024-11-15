import { createContext, useContext } from "react"

export interface TaskDataType {
    Title: string,
    status: "notDone" | "current" | "done" | string,
    id: string,
    index: number 
}

interface TasksContextType {
    tasks: TaskDataType[],
    setTasks: (newTasks:TaskDataType[]) => void,
    save: () => void
}

const taskContext = createContext<TasksContextType>({
    tasks: [],
    setTasks:() => {},
    save:() => {}
})

const renderContext = createContext(() => {})

const useTasks = () => {
    return useContext(taskContext)
}

export{
    taskContext,
    renderContext,
    useTasks
}
