import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import { TaskProps } from '../../@types/TaskType'

export const Task: React.FC<TaskProps> = ({
    content,
    onDeleteTask,
    onCheckTask,
    id,
    isChecked = false
}) => {

    const handleDeleteTask = () => {
        onDeleteTask(id)
    }

    const handleCheckTask = (task: string) => {
        isChecked = !isChecked
        onCheckTask(task)
    }

    

    return (
        <div className={styles.taskWrapper} >
            <div className={styles.checkContentBox} >
                <div className={styles.agroupInputAndContent} >
                    <input
                        defaultChecked={isChecked}
                        onClick={() => { handleCheckTask(id); }}
                        id={id}
                        type='checkbox'
                    />
                    <label htmlFor={id} >      </label>
                    <p>{content}</p>
                </div>

                <button
                    onClick={handleDeleteTask}
                >
                    <Trash
                        size={24}
                    />
                </button>
            </div>
        </div>
    )
}