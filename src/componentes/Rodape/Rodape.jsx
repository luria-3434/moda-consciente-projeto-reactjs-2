import styles from './rodape.module.css'
import redeSocial1 from '../../assets/1384858.png'
import redeSocial2 from '../../assets/3488426.png'

function Rodape() {
  return(
    <rodape className={styles.rodape}>

      <p>
      &copy; Copyrigth Luria Lopes de Andrade 
      </p>

      <a href="https://www.linkedin.com/in/luria-lopes/" target="_blank">
            <img className={styles.redeSocial1} src={redeSocial1} alt="Icone Linkedin"/> 
        </a>        
        <a href="https://github.com/luria-3434" target="_blank">
            <img className={styles.redeSocial2} src={redeSocial2} alt="Icone Github"/>
        </a>
    </rodape>
  )
}

export default Rodape