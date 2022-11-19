export interface TaskProps {
    content:string
    onDeleteTask: (taskId: string) => void
    id: string
    isChecked: boolean
    onCheckTask: (taskId: string) => void
}
export interface TaskTest {
    id: string
    content: string
    isChecked: boolean
}

export interface EmptyTaskType {
    tasks: TaskTest[]
}