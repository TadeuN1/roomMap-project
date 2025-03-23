import styles from './Dataroom.module.css'
import { useState } from 'react'


const Dataroom = () => {
  const [roomcreated, setRoomcreated] = useState(false)


  const createRoom = () => {
    setRoomcreated(true)
  }

  return<div className={styles.container}>
    
    
    <div className={styles.inforoom}>
      <input type='text' placeholder='Nome da professora responsável' />
      <input type='text' placeholder='Informe o nome da turma / Nome da sala' />
      <br></br>
      <input type="number" placeholder='Número de colunas/fileiras da sala'/>
      <input type='number' placeholder='Número de linhas da sala' />
      <br></br>
      <button onClick={createRoom}> Enviar </button>
    </div>

    <div className={styles.classroom}>
      {roomcreated ? (<p> Layout de sala criado.</p>) : null}
    </div>

</div>
}

export default Dataroom