import './global.css'
import { Header } from './components/header/Header'
import styles from './App.module.css'
import plusIcon from './components/assets/plus.svg'
import { ChangeEvent, useState } from 'react'
import { Task } from './components/task/Task'
import { TaskProps } from './@types/TaskType'


function App() {
  const [tasks, setTasks] = useState([''])

  const [newTask, setNewTask] = useState('')

  const handleNewTaskCreate = () => {

    setTasks((tasks) => {
      return [...tasks, newTask]
    })
    setNewTask('')
  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask(event.target.value)
  }

  const handleDeleteTask = (taskToDelete: string) => {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)

  }
  const [taskChecked, setTaskChecked] = useState<Array<TaskProps>>([])

  const handleCheckTask = ({task}:any) => {
    if (taskChecked.includes(task)) {
      const newTasksChecked = taskChecked.filter((taskChecked) => taskChecked !== task)
      setTaskChecked(newTasksChecked)
      console.log(newTasksChecked)
    } else {
      setTaskChecked([...taskChecked, task])
    }
  }

  const tasksCount = tasks.length - 1
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <div className={styles.taskInputAndButton} >
          <textarea
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={newTask}
          >
          </textarea>
          <button
            onClick={handleNewTaskCreate}
          >
            Criar <img src={plusIcon} />
          </button>
        </div>
        <div className={styles.taskFeedbackRow} >
          <div className={styles.taskFeedbackCreated} >
            Tarefas criadas
            <span>{tasksCount}</span>
          </div>
          <div className={styles.taskFeedbackDone} >
            Concluídas
            <span>0 de {tasksCount}</span>
          </div>
        </div>
        <div>
          {tasks.map((task, index) => {
            if (task === '') return
            const taskKey = task + index
            return (

              <Task
                isChecked={false}
                onCheckTask={handleCheckTask}
                tasks={tasks}
                key={taskKey.toString()}
                keyClass={taskKey}
                content={task}
                onDeleteTask={handleDeleteTask}
              />
            )
          })

          }
        </div>
      </div>
    </div>
  )
}

export default App
