import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InitialInfo.module.css'

const InitialInfo = () => {
  const [teacher, setTeacher] = useState("")
  const [room, setRoom] = useState("")
  const navigate = useNavigate()

  const start = () => {
    navigate("/create", {
      state: {
        teacher: teacher,
        room: room
      }
    })
  }

  return<div className={styles.container}>
      <h3> Insira os dados iniciais:</h3>

      <div className={styles.inputs}>
        <input placeholder='PROFESSOR(A) RESPONSÁVEL' type='text' onChange={(e) => setTeacher(e.target.value)} />
        <input placeholder='NOME DA TURMA/TURNO' type='text' onChange={(e) => setRoom(e.target.value)} />
        <button onClick={start}> Começar </button>
      </div>
      

    </div>

}

export default InitialInfo