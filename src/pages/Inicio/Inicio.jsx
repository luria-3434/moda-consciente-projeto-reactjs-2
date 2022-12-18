import styles from '../Inicio/inicio.module.css'
import inicioImg from '../../assets/desfileflavia.png'
import patagoniaImg from '../../assets/Patagonia-Logo.png'
import allbirdsImg from '../../assets/Allbirds.png'
import nayaImg from '../../assets/Capturar-naya-v.png'
import isaacImg from '../../assets/7d8feb_65ed80d49f264bff8da56b2eadaab6d9_mv2.png'

function Inicio() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Por Uma Moda Mais Consciente
        </h1>
        <img src={inicioImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>
          <b>Slow fashion: o que é e quais as suas vantagens?</b>
          <br></br>
          Uma mudança de paradigma necessária para o atual mercado da moda e que pode transformar seu negócio
          Um novo olhar sobre o modo de produzir itens de vestuário vem ganhando força em todo o mundo: o movimento
          slow fashion. O conceito, traduzido ao pé da letra como “moda lenta”, está mudando as relações de consumo e 
          exigindo mais atenção das marcas em relação aos seus processos de produção.

          Na contramão do fast fashion, um sistema de produção em massa que prioriza quantidade e custos menores com mão de obra e 
          matéria-prima, o slow fashion procura valorizar cada etapa do processo de produção, desde os insumos até a venda, e oferecer 
          produtos com mais duráveis confeccionados por meio de processos sustentáveis e ecologicamente corretos.</p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Marcas Brasileiras com Propósito</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
                    <a className={styles.itemLista} href="https://www.isaacsilva.com.br/" target="-blank"><img className={styles.imagemCard} src={isaacImg}/></a>
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Sobre a Marca </h3>
              <p className={styles.texto}>
              Isaac Silva é uma loja democrática de roupas sem gênero que vestem todos os tipos de corpos. 
              Com modelagens em sua maioria para vivências de verão, os tecidos são fluidos e frescos. São modelos com detalhes que fazem a diferença em qualquer look. 
              são feitos em handmade pelo próprio estilista Isaac Silva.</p>

            </div>
          </div>
          <div className={styles.card}>
          <a className={styles.itemLista} href="https://nayavioleta.com.br/" target="-blank"><img className={styles.imagemCard} src={nayaImg} /></a>
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Sobre a Marca</h3>
              <p className={styles.texto}>Criada em 2007, a marca leva o nome artístico de sua criadora, a designer Naya Violeta, 
               profissional que adota como perspectiva para as suas criações o olhar pessoal e afetivo, assim como 
                o caráter auto-biográfico e narrativo, elementos que juntos permeiam as pesquisas visuais e de tendências para a marca.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Marcas de Fora com Propósito </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
          <a className={styles.itemLista} href="https://www.patagonia.com/home/" target="-blank"><img className={styles.imagemCard} src={patagoniaImg}/></a>
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Sobre a Marca</h3>
              <p className={styles.texto}>Começamos com nossos produtos, utilizando materiais que causavam menos danos ao meio 
              ambiente. Doamos 1% das vendas a cada ano. Tornamo-nos uma Empresa B certificada e uma corporação beneficente da 
              Califórnia, escrevendo nossos valores em nosso estatuto corporativo para que fossem preservados. Mais recentemente, 
              em 2018, mudamos o propósito da empresa para: Estamos no negócio para salvar nosso planeta natal.</p>
            </div>
          </div>
          <div className={styles.card}>
          <a className={styles.itemLista} href="https://www.allbirds.com/" target="-blank"><img className={styles.imagemCard} src={allbirdsImg} /></a>
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Sobre a Marca</h3>
              <p className={styles.texto}>Ao oferecer uma gama de produtos cuidadosamente selecionada para todas as estações, 
              somos capazes de manter uma cadeia de suprimentos pequena e unida. Construímos relacionamentos profundos e plurianuai
               com as fábricas e mantemos contato consistente – nós as visitamos, elas nos visitam. Além de realizar nossas próprias 
               auditorias quando necessário, aceitamos padrões de terceiros mutuamente reconhecidos para reduzir a fadiga de auditoria
                nas fábricas e garantir práticas de fabricação seguras, legais, humanas e éticas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Inicio