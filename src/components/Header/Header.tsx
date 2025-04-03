import { FaGithub, FaLinkedin, FaHome  } from "react-icons/fa"
import styles from './Header.module.css'
const Header = () => {

  return<div className={styles.container}>
        <a href="/"> <FaHome size={50}/></a>
        <h2> Criador de Mapas de Sala de Aula </h2>
          <div className={styles.links}>
            <a href="https://github.com/TadeuN1" target="_blank"> <FaGithub size={50}/> </a>
            <a href="https://www.linkedin.com/in/tadeuneres/" target="_blank"> <FaLinkedin size={50}/> </a>
          </div>
    </div>

}
export default Header