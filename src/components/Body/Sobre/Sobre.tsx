import { BiCalendarStar } from "react-icons/bi";

//styles
import "./Sobre.css"

const Sobre = () => {
  return (
    <article className="about">

      <h3>Veja mais informações sobre CassinoPix</h3>

      <div className="abouts">
        <h5>Sobre</h5>

        <div className="explain">

          <div className="explains">
            <p>Um site de apostas esportivas e loterias, feito por profissionais apaixonados por diversão e comprometidos com o público brasileiro. Venha apostar com os melhores!</p>
          </div>
        </div>

        <div className="explains2">
          <span className="explains2_text"> <BiCalendarStar /><p>Cadastrada há 4 anos</p></span>
        </div>

      </div>

    </article>
  )
}

export default Sobre