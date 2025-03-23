import styles from './Welcome.module.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
const navigate = useNavigate()

  return (
    <div className={styles.container}>
        <div className={styles.esquerda}>
            <h1>Bem vindo(a)</h1>
            <p> Aqui você encontra uma aplicação de criação de mapas de sala de aula.</p>
        </div>
        <div className={styles.direita}>
            <button className={styles.btnstart} onClick={() => navigate('/create')}> Começar</button>
        </div>

    </div>
  )
}

export default Welcome