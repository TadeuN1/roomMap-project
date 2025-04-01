import { useState } from 'react';
import styles from './InitialInfo.module.css'

const InitialInfo = () => {
  const [teacher, setTeacher] = useState("")
  const [room, setRoom] = useState("")

  const test = () => {
    console.log(teacher + room)
  }

  return<div className={styles.container}>
      <h3> Insira os dados iniciais:</h3>

      <div className={styles.inputs}>
        <input placeholder='PROFESSOR(A) RESPONSÁVEL' type='text' onChange={(e) => setTeacher(e.target.value)} />
        <input placeholder='NOME DA TURMA/TURNO' type='text' onChange={(e) => setRoom(e.target.value)} />
        <button onClick={test}> Começar </button>
      </div>
      

    </div>

}

export default InitialInfo