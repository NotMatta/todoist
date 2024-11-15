import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useTasks } from './components/task-util'
import DropArea from './components/task-dropper'
import './App.css'
import { useState } from 'react'
import { renderContext } from './components/task-util'

function App() {

    const {tasks,setTasks,save} = useTasks()
    const [render,forceRender] = useState(false)

    const handleDragEnd = (res:DropResult) => {
        if(! res.destination) return
        const newTasks = tasks
        const [taskToDrop] = newTasks.splice(res.source.index,1)
        const destionationIndex = res.destination.index
        newTasks.splice(destionationIndex,0,{
            ...taskToDrop,
            status: res.destination.droppableId
        })
        setTasks(newTasks)
        save()
    }

    return (
        <div className='border w-screen h-screen flex justify-center items-center'>
        <renderContext.Provider value={() => forceRender(!render)}>
            <DragDropContext onDragEnd={handleDragEnd}>
            <div className='w-4/5 h-4/5 flex gap-2'>
                <DropArea droppableId="todo"/>
                <DropArea droppableId="inProgress"/>
                <DropArea droppableId="done"/>
            </div>
            </DragDropContext>
            <button
                onClick={() => {
                    setTasks([])
                    save()
                }}
                className='p-1 px-2 rounded absolute bottom-2 right-2 shadow-black shadow'>
                Flush
            </button>
        </renderContext.Provider>
        </div>
    )
}

export default App
