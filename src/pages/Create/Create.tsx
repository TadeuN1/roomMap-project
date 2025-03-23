import styles from './Create.module.css'

const Create = () => {
  return (
    <div className={styles.container}>
      <input type='text' placeholder='Nome da professora responsável' />
      <input type='text' placeholder='Informe o nome da turma / Nome da sala' />
      <br></br>
      <input type="number" placeholder='Número de colunas/fileiras da sala'/>
      <input type='number' placeholder='Número de linhas da sala' />
      <br></br>
      <button onClick={() => console.log("Teste")}> Enviar </button>
    </div>
  )
}

export default Create