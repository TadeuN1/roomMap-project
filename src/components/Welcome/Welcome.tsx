import InitialInfo from '../RoomInfo/InitialInfo'
import styles from './Welcome.module.css'

const Welcome = () => {

  return (
    <div className={styles.container}>
        <div className={styles.esquerda}>
            <h1>Bem vindo(a)</h1>
            <p> Aqui você encontra uma aplicação de criação de mapas de sala de aula.</p>
        </div>
        <div>
            <InitialInfo />
        </div>

    </div>
  )
}

export default Welcome