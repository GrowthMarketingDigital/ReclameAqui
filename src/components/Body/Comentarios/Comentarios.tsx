import { useState } from "react";

//font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons"

//components
import Button2 from "../../Button/Button2";

//style
import "./Comentarios.css"

const Comentarios = () => {

  const [isDivVisible, setDivVisibility] = useState(false);
  const [isVisible, setVisibility] = useState(true);
  const [isVisible2, setVisibility2] = useState(true);

  const handleClick = () => {
    setDivVisibility(!isDivVisible);
    setVisibility(false);
    setVisibility2(true);
  }

  const handleClick2 = () => {
    setDivVisibility(!isDivVisible);
    setVisibility(true);
    setVisibility2(false);
  }

  return (
    <article>

      <div className="comentario">
        <h4>Ganhei 2000 reais</h4>
        <p>Comecei com 50 reais e fui pra 2000 numa jogada e o melhor foi que eu consegui sacar sem nenhum problema. Recomendo muito a plataforma e nunca que eu ia ganhar esse tanto de dinheiro no meu trabalho.</p>
        <p>Já abri meu aplicativo do banco e paguei todos os meses atrasados de dívidas. Estou muito feliz e com muita vontade de jogar de novo.</p>
        <p>Isso que no começo eu fiquei com muito pé atrás, mas eu não duvido de mais nada a partir de hoje. O que a plataforma falar pra eu fazer, pode ter certeza que vou fazer. </p>
        <div className="resolvido">
          <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
          <p>Há 4 dias</p>
        </div>
      </div>

      <div className="comentario">
        <h4>Fiquei viciado em ganhar</h4>
        <p>Fiz R$ 4000 com R$100 de entrada. Realmente muito bom. Já passei pra família toda, tio, tia, sogro, sogra, namorada. To muito feliz porque agora eu vou conseguir kitar o meu carro. Vou começar a jogar todo dia desse jeito. Eu era jogador em várias plataformas, mas hoje eu sou jogador só na Cassino.</p>
        <div className="resolvido">
          <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
          <p>Há 1 dia</p>
        </div>
      </div>

      <div className="comentario">
        <h4>Os jogos pagam muitooo</h4>
        <p>Não tem plataforma melhor que essa. Joguei o ninja crash e fiz 2512 reais em 10 minutos. Eles cumprem o que prometem mesmo, nem esperei 20 minutos pra receber o saque. Vou colocar mais 200 reais sem medo nenhum hoje. Muito grato pelo suporte e carinho </p>
        <div className="resolvido">
          <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
          <p>Há 4 dias</p>
        </div>
      </div>

      <div className="comentario">
        <h4>A plataforma com o saque mais rápido</h4>
        <p>Plataforma com o saque mais rápido do mercado, fiz 1200 reais hoje e saquei em 5 minutos. Apostei nas mais diversas casas em todo o país e sempre tive problemas com suporte, saque, já me bloquearam, excluíram minha conta. </p>
        <p>A Cassino sempre surpreendeu, nunca tive um único problema até hoje com eles.</p>
        <div className="resolvido">
          <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
          <p>Há 3 dias</p>
        </div>
      </div>

      <div className="comentario">
        <h4>Paguei minhas dívidas com o Tigrinho</h4>
        <p>Chocaaada. Joguei 10 minutos do Tigrinho, ele soltou a cartinha e ganhei R$ 4000. O tigre virou meu animal favorito. Hoje mesmo a plataforma me deu um cupom para duplicar minha banca. Aproveitem e joguem muito, porque plataforma que paga hoje é impossível de se achar.</p>
        <div className="resolvido">
          <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
          <p>Há 4 dias</p>
        </div>
      </div>

      {isVisible && (
        <span className="leia" onClick={handleClick}>Ler mais</span>
      )}

      {isDivVisible && (
        <>
          <div className="comentario">
            <h4>A melhor casa de apostas que já joguei</h4>
            <p>Sou apostador na CassinoPix desde o começo e nunca tive nenhum problema com saque, depósito ou suporte. O site é muito fácil de mexer, as odds são competitivas e o atendimento ao cliente é extremamente profissional.</p>
            <p>Recentemente, tive um problema com uma aposta que fiz e o suporte foi muito rápido e eficiente em resolver a situação.</p>
            <p>Recomendo muito a CassinoPix para quem procura uma casa de apostas segura e confiável.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 5 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Site seguro e confiável</h4>
            <p>Sempre tive receio de apostar online, mas depois de conhecer a CassinoPix, esse receio passou. O site é muito seguro e confiável, com criptografia de dados de última geração.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 2 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Melhores bônus e promoções</h4>
            <p>Gosto muito dos bônus e promoções da CassinoPix. Sempre eles me dão cupons e fazem sorteio de carros e iphones.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 3 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Saque muito rápido</h4>
            <p>Me cadastrei na plataforma segunda feita, fiz um saque de 1200 e em 5 minutos, estava na conta. Até agora não tive problemas</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 4 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Recomendo</h4>
            <p>Recomendo a todo mundo a CassinoPix. Gosto muito dos bônus e promoções. Sempre eles me dão cupons e fazem sorteio de carros e iphones novos.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 4 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Amo jogar na CassinoPix</h4>
            <p>Jogo quase todo dia na roleta e vale muito a pena. Nunca tive problema em sacar.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 1 dia</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Paga muitoooo</h4>
            <p>Jogo todos os dias o Tigrinho e o ninja e essa casa paga muito socorroooo. Já recomendei a familiares e amigos.</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 2 dias</p>
            </div>
          </div>

          <div className="comentario">
            <h4>Nunca tive problemas</h4>
            <p>Jogo desde o começo do ano e nunca nem precisei acionar o suporte para me ajudar</p>
            <div className="resolvido">
              <span><FontAwesomeIcon className="icon2" icon={faFaceSmile} />Resolvido</span>
              <p>Há 3 dias</p>
            </div>
          </div>

          {isVisible2 && (
            <span className="leia" onClick={handleClick2}>Mostrar menos</span>
          )}
        </>
      )}
      <div className="botao">
        <Button2 />
      </div>
    </article>
  )
}

export default Comentarios