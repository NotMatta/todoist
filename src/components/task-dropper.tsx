import { useState } from "react"
import { Droppable } from "react-beautiful-dnd"
import { useTasks, TaskDataType } from "./task-util"
import Task from "./task-component"

const DropArea = ({droppableId}:{droppableId:string}) => {
    const {tasks,setTasks} = useTasks()
    const [newTask,setNewTask] = useState("")
    return(
        <div  className={`w-1/3 border flex flex-col p-2 gap-1 border-black rounded ${droppableId == "todo" ? "bg-red-100" : droppableId == "inProgress" ? "bg-blue-100" : "bg-green-100"}`}>
            <p className="text-4xl tracking-wide font-extrabold">{droppableId == "todo" ? "Todo" : droppableId == "inProgress" ? "in Progress" : "Done"}</p>
            <div className={`w-full flex justify-between p-2 rounded ${droppableId == "todo" ? "bg-red-400" : droppableId == "inProgress" ? "bg-blue-400" : "bg-green-400"}`}>
                <input className='w-full p-2 bg-transparent outline-none' value={newTask} onChange={e => setNewTask(e.target.value)}/>
                <button
                    disabled={newTask == ""}
                    onClick={() => {
                        const newTasks: TaskDataType[] = [...tasks,{Title: newTask,status: droppableId, index: tasks.length, id: String(tasks.length)}]
                        setTasks(newTasks)
                        setNewTask("")
                    }}
                    className={`w-10 h-10 text-3xl ${droppableId == "todo" ? "bg-red-200" : droppableId == "inProgress" ? "bg-blue-200" : "bg-green-200"}`}>+</button>
            </div>
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div className="w-full h-full flex flex-col gap-1 font-semibold"
                    {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task,i) => {
                            if(task?.status == droppableId) {
                                return <Task data={{...task,index:i}}/>
                            }
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default DropArea
