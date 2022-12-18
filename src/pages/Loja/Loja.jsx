import styles from '../Loja/loja.module.css'
import cabide from '../../assets/cabide.jpg'
import look1 from '../../assets/look1.jpg'
import look2 from '../../assets/look2.jpg'
import look3 from '../../assets/look3.jpg'
import look4 from '../../assets/look4.jpg'
import look5 from '../../assets/look5.jpg'
import look6 from '../../assets/look6.jpg'
import look7 from '../../assets/look7.jpg'
import look8 from '../../assets/look8.jpg'
import look9 from '../../assets/look9.jpg'
import look10 from '../../assets/look10.jpg'
import look11 from '../../assets/look11.jpg'
import look12 from '../../assets/look12.jpg'
import look13 from '../../assets/look13.jpg'
import look14 from '../../assets/look14.jpg'
import look15 from '../../assets/look15.jpg'

function Loja() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Novidade de Novo: Guarda-Roupa Compartilhado
        </h1>
        <img src={cabide} alt="Fotografia de uma arara com varias roupas penduradas" />
      </div>
      <div className={styles.subtitulo}>
        <p>
          <b>Guarda-Roupa Compatilhado </b>
          <br></br>
          Você sabe o que é um guarda-roupa compartilhado? É como se fosse um brechó, só que, em vez de comprar, você aluga as peças. 
          E não é um serviço apenas para ocasiões como
           casamentos ou formaturas, que é uma prática cada vez mais comum.
           A maioria dos guarda-roupas compartilhados funciona por assinatura: você escolhe um plano, seleciona as peças e fica com elas durante um 
           tempo. É a moda circular e 
           sustentável na prática! </p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Acervo Disponível</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look1} alt="macacão midi estampado de alças finas, na cor laranjado"/>Ref: Look 001</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look2} alt="Jaqueta de sarja com franjas em um tom de creme"/>Ref: Look 002</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look3} alt="Calça Jeans com uma lavagem clara, modelo reto"/>Ref: Look 003</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look4} alt="Jaqueta tipo camisa com uma cor verde citrica"/>Ref: Look 004</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look5} alt="Jaqueta preta em material sintetico estilo mais rock"/>Ref: Look 005</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look6} alt="Calça jeans skin basica"/>Ref: Look 006</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look7} alt="Mini-Saia Jeans"/>Ref: Look 007</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look8} alt="Saia midi com estampa de zebra"/>Ref: Look 008</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look9} alt=" Vestido preto com bordado de lantejolas"/>Ref: Look 009</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look10} alt="Camiseta verde basica"/>Ref: Look 010</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look11} alt=" blusa listrada preto e branco com detalhes em metal na alça"/>Ref: Look 011</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look12} alt="Bota chelsea preta bem tratorada"/>Ref: Look 012</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look13} alt="Sandalia de salto preta"/>Ref: Look 013</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look14} alt="Brinco dourado grande"/>Ref: Look 014</a>
                    <a className={styles.itemLista}><img className={styles.imagemCard} src={look15} alt="Pulseira prata com pedras cristais"/>Ref: Look 015</a>
            </div>
            <h3 className={styles.reserva}>Para reservar as peças escolhidas copie a ref: da peça e envie para gente na pagina <a href="Contato" target="-blank">Contato</a> e te retornaremos com mais informações sobre disponibilidade e data de envio.
</h3>

          </div> 
          </div>
          </section>
        </div>
  
    </>
  )
}

export default Loja