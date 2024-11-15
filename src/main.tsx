import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TasksProvider from './components/tasks-provider.tsx'

createRoot(document.getElementById('root')!).render(
        <TasksProvider>
            <App />
        </TasksProvider>
)
