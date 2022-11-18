import toDoLogo from '../assets/Logo.svg'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header} >
            <img src={toDoLogo} />
        </div>
    )
}