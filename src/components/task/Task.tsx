import styles from './Task.module.css'
import { Trash } from 'phosphor-react'
import { TaskProps } from '../../@types/TaskType'
import { useState } from 'react'



export const Task: React.FC<TaskProps> = ({
    content, 
    onDeleteTask, 
    keyClass, 
    onCheckTask,
    tasks,
    isChecked
}) => {
    console.log('content aq', keyClass)

    const [taskChecked, setTaskChecked] =useState([])

    const handleDeleteTask = () => {
        onDeleteTask(content)
    }

    const handleCheckTask = (task: any) => {
        onCheckTask(task)
    }
    console.log('checkedaqq ', isChecked)
    return (
        <div className={styles.taskWrapper} >
            <div className={styles.checkContentBox} >
                <input 
                checked={isChecked}
                onClick={()=> {handleCheckTask(content);}}
                // checked={taskChecked.includes}
                id={`check+${keyClass}`} 
                type='checkbox'
                >

                </input>
                <label htmlFor={`check+${keyClass}`} >      </label>
                <p>{content}</p>
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