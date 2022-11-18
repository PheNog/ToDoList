export interface TaskProps {
    content:string
    onDeleteTask: (task: string) => void
    keyClass: string
    tasks: string[]
    isChecked: boolean
    onCheckTask: (task: string) => void
}