import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

//icons
import { BiMessageCheck } from "react-icons/bi";
import { BiMessageAltX } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";

//style
import "./Avaliacao.css"

const Avaliacao = () => {

    const [isComponentVisible, setComponentVisibility] = useState(true);
    const [isDivVisible, setDivVisibility] = useState(true);

    const toggleComponentVisibility = () => {
        setComponentVisibility(!isComponentVisible);
        setDivVisibility(!isDivVisible);
    };

    return (
        <article className="analise">

            <h3>CassinoPix é confiável?</h3>

            <div className="caixa-analise">

                <div className="acordion">
                    <h5>Reputação</h5>
                    <button className='chevron' onClick={() => { toggleComponentVisibility() }}> <FontAwesomeIcon icon={isComponentVisible ? faChevronUp : faChevronDown} style={{ padding: 0 }} /></button>
                </div>

                <ul className='months'>
                    <li>6 meses</li>
                    <li>12 meses</li>
                    <li>2022</li>
                    <li>2021</li>
                    <li>Geral</li>
                </ul>

                <div className="main">

                    <div className="emoji">

                        <img src="/transferir.png" alt="Ótima reputação" />

                        <div className="emoji_reputacao">
                            <p>RA1000</p>
                            <p><span>9.8</span>/10</p>
                            <p>01/05/2023 - 31/10/2023</p>
                        </div>

                    </div>

                    <div className="resumo">
                        <div className="box-resumo">
                            <span>Reclamações</span>
                            <p><FontAwesomeIcon icon={faBullhorn} /><span>755</span></p>
                        </div>

                        <div className="bar"></div>

                        <div className="box-resumo">
                            <span>Respondidas</span>
                            <p><BiMessageCheck />755</p>
                        </div>
                    </div>

                </div>

                {isDivVisible && (

                    <>
                        <div className="medicoes">

                            <p>Reclamações respondidas</p>
                            <div className="avaliation">
                                <div className="size">
                                    <div className="true_size"><p className='content'></p></div>
                                </div>
                                <span>100%</span>
                            </div>

                            <p>Voltariam a fazer negócio</p>
                            <div className="avaliation">
                                <div className="size">
                                    <div className="true_size1"><p className='content'></p></div>
                                </div>
                                <span>90%</span>
                            </div>

                            <p>Índice de solução</p>
                            <div className="avaliation">
                                <div className="size">
                                    <div className="true_size2"><p className='content'></p></div>
                                </div>
                                <span>95%</span>
                            </div>

                            <p>Nota do consumidor</p>
                            <div className="avaliation">
                                <div className="size">
                                    <div className="true_size3"><p className='content'></p></div>
                                </div>
                                <span>90%</span>
                            </div>
                        </div>

                        <div className="last-resume">
                            <div className="box-resumo2">
                                <span>Não respondidas</span>
                                <p><BiMessageAltX />0</p>
                                <div className="size_last-resumo">
                                    <div className="true_size-last-resumo"><p className='content'></p></div>
                                </div>
                            </div>

                            <div className="box-resumo2">
                                <span>Avaliadas</span>
                                <p><IoMdStar />545</p>
                                <div className="size_last-resumo">
                                    <div className="true_size-last-resumo"><p className='content'></p></div>
                                </div>
                            </div>
                        </div>

                    </>

                )}

            </div>

        </article>
    )
}

export default Avaliacao