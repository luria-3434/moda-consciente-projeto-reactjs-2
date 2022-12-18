import { useState, useEffect } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import { nanoid } from 'nanoid'

import brecho1 from '../../assets/brechovaral.jpg'
import brecho2 from '../../assets/brecho2.png'
import brecho3 from '../../assets/brecho3.png'





import slowImg from '../../assets/roupaslow.jpg'

import styles from './comentarios.module.css'

const Comentarios = () => {
  const getLocalList = () => {
    let items = localStorage.getItem('list')

    if (items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }

  const [list, setList] = useState(getLocalList)
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    const task = {
      id: nanoid(),
      title: newTask,
      isComplete: false
    }

    if (task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleRemoveTask(id) {
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <div className={styles.header}>
        <h1>
          Vamos repensar o consumo de moda juntos, Deixe sujestões
        </h1>
        <h2> Marcas consciente, Iniciativas, Brechós, Livros  </h2>
        <img src={slowImg} alt="Imagem de uma pilha de roupa com o dizer Slow Fasion" />
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Deixe aqui sua sugestão"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <div className={styles.addContainer}>
          <button className={styles.addTask} type="submit" onClick={handleCreateNewTask}>
            <FiPlus size={18} color="#fff" />
          </button>
        </div>
      </div>

      <main>
        <ul className={styles.listItems}>
          {list.map(task => {
            return (
              <li key={task.id}>
                <div>
                  <p>{task.title}</p>
                </div>
                <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                  <FiTrash2 size={16} />
                </button>
              </li>
            )
          })}
        </ul>
      </main>

      <div className={styles.beneficios}>
        <section className={styles.content}>
          <div className={styles.cardsContainer}>
            <h2 className={styles.tituloCards}>Dicas de Brechós</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <a className={styles.itemLista} href="https://www.instagram.com/brechodavaral/" target="-blank"><img className={styles.imagemCard} src={brecho1} alt="Foto da vitrine do brechó com algumas peças" />Brechó Varal</a>
                <a className={styles.itemLista} href="https://www.facebook.com/brechoacicflorianopolis/" target="-blank"><img className={styles.imagemCard} src={brecho2} alt="Logo do brechó em preto e vermelho, uma camiseta e o nome do brecho" />Brechó ACIC</a>
                <a className={styles.itemLista} href="https://www.instagram.com/brecho.amocrianca/" target="-blank"><img className={styles.imagemCard} src={brecho3} alt="Banner brecho AMO" />Brechó AMO</a>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}

export default Comentarios