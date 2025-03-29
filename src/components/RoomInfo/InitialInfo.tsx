import styles from './InitialInfo.module.css'

const InitialInfo = () => {
  return<div className={styles.container}>
      <h3> Insira os dados iniciais:</h3>

      <div className={styles.inputs}>
        <input placeholder='PROFESSOR(A) RESPONSÁVEL' type='' />
        <input placeholder='NOME DA TURMA/TURNO' type='' />
        <input placeholder='Nº COLUNAS' type='' />
        <input placeholder='Nº LINHAS' type='' />
        <button> Começar </button>
      </div>
      

    </div>

}

export default InitialInfo