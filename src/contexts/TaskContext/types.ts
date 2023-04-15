import { ReactNode } from 'react'

export type IContextData = {
  tasks: ITaskProps[]
  setTasks: any
  taskName: string
  setTaskName: any
  amountTaskCompleted: number
  setAmountTaskCompleted: any
  handleAddTaskName: () => void
  handleDeleteTask: (id: string) => void
  incrementOrDecreaseTasks: (isDone: boolean) => void
}

export type ITaskProps = {
  id: string,
  description: string,
  isCompleted: boolean,
}

export type IProviderProps = {
  children: ReactNode
}