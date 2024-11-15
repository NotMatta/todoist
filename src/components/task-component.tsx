import { Draggable } from "react-beautiful-dnd"
import { renderContext, TaskDataType, useTasks } from "./task-util"
import { useContext, useState } from "react"

const Task = ({data}:{data:TaskDataType}) => {
    const {tasks,setTasks,save} = useTasks()
    const [isDraggable,setDraggable] = useState(false)
    const forceRender = useContext(renderContext)
    return (
        <Draggable key={data.id} draggableId={data.id} isDragDisabled={!isDraggable} index={data.index}>
            {(provided) => (
                  <div className={`border p-2 rounded w-full flex items-center gap-2 ${data.status == "todo" ? "bg-red-300" : data.status == "inProgress" ? "bg-blue-300" : "bg-green-300"}`}
                  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <button className={`rounded-full w-5 h-5 border-black ${data.status == "done" ? "bg-black opacity-20" : "border opacity-50"}`}
                        onClick={() => {
                            const newTasks = tasks
                            newTasks[data.index] = {...newTasks[data.index],status: (data.status ==  "done" ? "todo" : "done")}
                            setTasks(newTasks)
                            save()
                            forceRender()
                        }}
                    ></button>
                    <p className="flex-grow overflow-x-clip">
                        {data.Title}
                    </p>
                    <div className="w-3 h-8 bg-black opacity-20" onMouseEnter={() => setDraggable(true)} onMouseLeave={() => setDraggable(false)}/>
                  </div>
                )}
        </Draggable>
    )
}

export default Task
