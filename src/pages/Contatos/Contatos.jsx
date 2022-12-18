// import { database} from "../../servicos/firebase"
// import { ref, set, push} from "firebase/database"


import { useState } from 'react'
import telefoneImg from '../../assets/gif.gif'
import styles from './contatos.module.css'


function Contatos() {
  const [mensagem, setMensagem] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }
  function handleCreateMensagem(event) {
    event.preventDefault()
    const mensagemListaRef = ref(database,'Mensagens')
    const novaMensagemRef = push(mensagemListaRef)
    set(novaMensagemRef, {
      texto: mensagem,
      email: email,
      nome: nome
    })

    setMensagem('')
    setNome('')
    setEmail('')
  }

  return(
    <>
      <div className={styles.header}>
        <h1>
         Vem Falar Com a Gente
        </h1>
        <img src={telefoneImg} alt="Git de moça atendendo o telefone" />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateMensagem} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite seu nome" onChange={handleInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite seu email" onChange={handleInputValueEmail} value={email} />
          <textarea className={styles.formTextArea} placeholder="Digite sua mensagem" onChange={handleInputValueMensagem} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
    )
  }

  export default Contatos
