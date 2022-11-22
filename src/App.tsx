import './global.css'
import { Header } from './components/header/Header'
import styles from './App.module.css'
import plusIcon from './components/assets/plus.svg'
import { ChangeEvent, useEffect, useState } from 'react'
import { Task } from './components/task/Task'
import { TaskTest } from './@types/TaskType'
import { v4 as uuid } from 'uuid'
import { EmptyTask } from './components/emptyTasks/EmptyTask'


const emptyObject = {
  id: '',
  content: '',
  isChecked:''
}

function App() {
  const [tasks, setTasks] = useState<Array<TaskTest>>([])

  const [newTask, setNewTask] = useState<any>(emptyObject)

  const handleNewTaskCreate = () => {
    if (newTask?.content === '') return alert('Você não pode enviar uma tarefa vazia.')
    setTasks([...tasks, newTask])
    setNewTask(emptyObject)
  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const checkTask = {
      id: uuid(),
      content: event.target.value,
      isChecked: false
    }
    setNewTask(checkTask)
  }

  const handleDeleteTask = (taskId: string) => {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task?.id !== taskId
    })
    setTasks(tasksWithoutDeletedOne)
  }

  const handleCheckTask = (taskId: string) => {
    const newTasksListChecked = tasks.map((item) => {
      if (item.id === taskId) {
        item.isChecked = !item.isChecked
      }
      return item
    })
    setTasks(newTasksListChecked)
  }

  const tasksDoneCount = tasks.filter((task) => {
    return task?.isChecked === true
  })

  useEffect(() => {
    setTasks(tasks)
  },[tasks])

  const tasksCount = tasks.length
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <div className={styles.taskInputAndButton} >
          <textarea
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={newTask?.content}
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
            <span>{tasksDoneCount.length} de {tasksCount}</span>
          </div>
        </div>

        <div>
          {tasks.map((task, index) => {
            if (task?.content === '') return
            return (
              <Task
                isChecked={task?.isChecked}
                onCheckTask={handleCheckTask}
                key={task?.id}
                id={task?.id}
                content={task?.content}
                onDeleteTask={handleDeleteTask}
              />
            )
          })
          }
        </div>
        {
          tasks.length === 0 && <EmptyTask />
        }


      </div>
    </div>
  )
}

export default App
