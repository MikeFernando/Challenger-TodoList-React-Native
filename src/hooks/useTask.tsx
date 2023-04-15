import { useContext } from "react";

import { TasksContext } from "@contexts/TaskContext";

export function useTask() {
  const useTask = useContext(TasksContext)

  return useTask
}