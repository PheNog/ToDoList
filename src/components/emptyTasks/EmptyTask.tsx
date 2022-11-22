import styles from './EmptyTask.module.css'
import Clipboard from '../assets/Clipboard.svg'


export const EmptyTask = () => {
    return(
        <div className={styles.containerMaster} >
            <img src={Clipboard} />
            <div className={styles.wrapperTitleAndSubtitle} >
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}