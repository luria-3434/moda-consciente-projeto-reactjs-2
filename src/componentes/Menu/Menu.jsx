import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'phosphor-react'
import styles from './menu.module.css'


function Menu() {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    open ? setOpen(false) :  setOpen(true)
  }

  return(
    <nav>
      <List size={32} isOpen={open} onClick={handleMenu} className={styles.hamburguerMenu} />
      <ul className={open ? styles.hamburguerMenuOpen : styles.menu}>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/">Inicio</Link>
        </li>

        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/loja">Loja</Link>
        </li>

        <li className={open ? styles.itemOpen : styles.item}>
          <Link  className={open ? styles.linkOpen : styles.link} to="/sobre">Sobre</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/comentarios">Dicas</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
            
          <Link className={open ? styles.linkOpen : styles.link} to="/contatos">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu