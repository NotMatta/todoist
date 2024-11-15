import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useTasks } from './components/task-util'
import DropArea from './components/task-dropper'
import './App.css'

function App() {

    const {tasks,setTasks} = useTasks()

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
    }

    return (
        <div className='border w-screen h-screen flex justify-center items-center'>
            <DragDropContext onDragEnd={handleDragEnd}>
            <div className='w-4/5 h-4/5 bg-red-100 flex gap-2'>
                <DropArea droppableId="notDone"/>
                <DropArea droppableId="current"/>
                <DropArea droppableId="done"/>
            </div>
            </DragDropContext>
        </div>
    )
}

export default App
