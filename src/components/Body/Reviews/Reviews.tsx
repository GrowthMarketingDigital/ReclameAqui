import Comentarios from "../Comentarios/Comentarios"
import "./Reviews.css"

const Reviews = () => {
  return (
    <article className="search">

      <h3>O que estão falando sobre a CassinoPix</h3>

      <div className="review">

        <div className="review_avaliacao">
          <h5>Reclamações</h5>

          <ul className='avaliacao_list'>
            <li>Últimas</li>
            <li>Não respondidas</li>
            <li>Respondidas</li>
            <li>Avaliadas</li>
          </ul>
        </div>
      
        <div className="respostas">
          <Comentarios />
        </div>

      </div>

    </article>
  )
}

export default Reviews

