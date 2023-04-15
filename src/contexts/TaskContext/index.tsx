import { createContext, useState } from 'react'
import { useToast } from 'native-base'
import uuid from 'react-native-uuid'

export const TasksContext = createContext({} as T.IContextData)

import * as T from './types'

export function TasksProvider({ children }: T.IProviderProps){
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState<T.ITaskProps[]>([])
  const [amountTaskCompleted, setAmountTaskCompleted] = useState(0)

  const toast = useToast()

  function handleAddTaskName() {
    if (taskName.length === 0) {
      toast.show({
        title: 'Digite uma tarefa para adicionar.',
        placement: 'top',
        bgColor: 'orange.400',
      })
      return 
    }

    const taskAlreadyExists = tasks.find(task => task.description === taskName)

    if (taskAlreadyExists) {
      toast.show({
        title: 'Essa tarefa já existe.',
        placement: 'top',
        bgColor: 'orange.400',
      })
      return 
    }
    
    setTasks(prevState => [...prevState, {
      id: `${uuid.v4()}`,
      description: taskName,
      isCompleted: false,
    }])

    setTaskName('')
  }

  function handleDeleteTask(id: string) {
    setTasks(prevState => prevState.filter(item => item.id !== id))
    
    if (tasks.length > 0 && amountTaskCompleted > 0) {
      setAmountTaskCompleted(prevState => prevState -= 1)
    }

    toast.show({
      title: 'Tarefa removida!',
      placement: 'top',
      bgColor: 'purple.500'
    })
  }

  function incrementOrDecreaseTasks(isDone: boolean) {
    if (isDone) {
      setAmountTaskCompleted(prevState => prevState += 1)
    }

    if (isDone === false && amountTaskCompleted > 0) {
      setAmountTaskCompleted(prevState => prevState -= 1)
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks,
      setTasks,
      taskName,
      setTaskName,
      handleDeleteTask,
      handleAddTaskName,
      amountTaskCompleted,
      setAmountTaskCompleted,
      incrementOrDecreaseTasks
    }}>
      {children}
    </TasksContext.Provider>
  );
}