import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
//styles
import "./Footer.css"

const Footer = () => {
    return (
        <div className="rodape">
            <section className="prefooter">

                <div className="section">
                    <h3>Para consumidor</h3>
                    <div className="inside">
                        <button className="button-inside">Área do consumidor</button>
                        <ul className="insidelist">
                            <li>Compare empresas</li>
                            <li>Rankings</li>
                            <li>Buscar descontos</li>
                            <li>Cadastre uma empresa</li>
                            <li>Minhas Reclamações</li>
                            <li>Nova reclamação</li>
                        </ul>
                    </div>
                </div>

                <div className="section2">
                    <h3>Para empresa</h3>
                    <div className="inside">
                        <button className="button-inside">Área da empresa</button>
                        <ul className="insidelist">
                            <li>Cadastrar empresa</li>
                            <li>Responder reclamações</li>
                            <li>Meus Produtos Reclame AQUI</li>
                            <li className="listdiferent"><p>Entre em sua área restrita para administrar suas<br/>
                                respostas aos consumidores, <br/>
                                <span className="linklist"> acesse aqui</span></p></li>
                        </ul>
                    </div>
                </div>

                <div className="section3">
                    <h3>Sobre o RA</h3>
                    <ul className="insidelist">
                        <li>Institucional</li>
                        <li>Fale conosco</li>
                        <li>RA Educa</li>
                        <li>Conheça a extensão</li>
                        <li>Prêmio</li>
                        <li>Blog RA</li>
                    </ul>
                </div>

                <div className="section4">
                    <h3>Central de Ajuda</h3>
                    <div className="inside">
                        <button className="button-inside-reclame">Reclamar de uma empresa</button>
                        <ul className="insidelist">
                            <li>Quero trocar minha senha</li>
                            <li>Não encontrei uma empresa</li>
                            <li>Reclamei e ainda não responderam</li>
                            <li>Quero cadastrar uma empresa</li>
                            <li>Minhas Reclamações</li>
                            <li>Fale com o Reclame AQUI</li>
                        </ul>
                    </div>
                </div>

                <div className="section5">
                    <p>Faça uma reclamação</p>
                    <p>Acesse suas reclamações</p>
                    <p>Veja o ranking das empresas</p>
                    <p>Tire suas dúvidas sobre o Reclame AQUI</p>
                </div>

            </section>
            <footer>
                <div className="redes">

                    <div className="section6">
                        <span>Siga a gente nas redes sociais</span>
                    </div>

                    <ul>
                        <li><FaFacebookF /></li>
                        <li><BsTwitterX /></li>
                        <li><FaYoutube /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedin /></li>
                    </ul>

                </div>

                <div className="logo">
                    <p>Reclame<span>Aqui</span></p>
                </div>

                <div className="termos">
                    <ul>
                        <li>Termos de uso</li>
                        <li>Política de privacidade</li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}

export default Footer