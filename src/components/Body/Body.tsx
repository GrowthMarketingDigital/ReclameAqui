//style
import "./Body.css";

//subcomponentes
import Avaliacao from "./Avaliacao/Avaliacao";
import Reviews from "./Reviews/Reviews";
import Sobre from "./Sobre/Sobre";

const Body = () => {
  return (
    <section className="body">
      <Avaliacao/>
      <Reviews/>
      <Sobre/>
    </section>
  );
};

export default Body;
