import { Draggable } from "react-beautiful-dnd"
import { TaskDataType } from "./task-util"


const Task = ({data}:{data:TaskDataType}) => {
    return (
        <Draggable key={data.id} draggableId={data.id} index={data.index}>
            {(provided) => (
                  <div className={`border p-2 rounded w-full ${data.status == "notDone" ? "bg-red-300" : data.status == "current" ? "bg-blue-300" : "bg-green-300"}`}
                  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {data.Title}{data.status}
                  </div>
                )}
        </Draggable>
    )
}

export default Task
