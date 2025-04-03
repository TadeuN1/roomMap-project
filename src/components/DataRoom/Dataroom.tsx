import { useLocation } from "react-router-dom"
import styles from './Dataroom.module.css'
import StudentsInfo from "../ChairInfo/StudentsInfo";

type StartInfos = {
  teacher: string;
  room: string
}
const Dataroom = () => {
  const location = useLocation()
  const state = location.state as StartInfos


  return<div className={styles.container}>
    <div className={styles.roominfo}>
    <h2> Bem vindo(a), Professor(a) {state.teacher} </h2>
    <h2> {state.room}</h2>
    </div>

    <div>
      <StudentsInfo />
    </div>
    
</div>
}

export default Dataroom