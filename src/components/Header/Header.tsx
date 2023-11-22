import { useState } from 'react';

//components
import ButtonComponent from "../Button/Button.tsx";
import SubMenu from '../SubMenu/SubMenu.tsx';

//font
import { BiCalendarStar } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

//styles
import "./Header.css"

const Header = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handlePopoverOpen = () => {
        setIsPopoverOpen(true);
    };

    const handlePopoverClose = () => {
        setIsPopoverOpen(false);
    };

    return (
        <div className='mainHeader'>
            <header className="cabecalho">
                <div className="logo">
                    <img
                        src="/SIMBOLO 1 CP.png"
                        title="CassinoPix"
                        alt="Logo CassinoPix"
                    />
                </div>
                <nav className="menu-information">
                    <div className="information">
                        <h2 className="short-name" title="CassinoPix">
                            CassinoPix
                        </h2>
                    </div>

                    <div className="avaliation">

                        <div className="inline-avaliation">
                            <p>
                                <BiCalendarStar className='icon' />
                                Há 2 anos no RA
                            </p>

                            <div className="views">
                                <a href="#">
                                    <MdRemoveRedEye className='icon' />
                                    + 100 mil visualizações
                                </a>
                            </div>

                            <div className="popover-container">
                                <IoIosInformationCircleOutline className='info' onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} />
                                {isPopoverOpen && (
                                    <div className="popover-content">
                                        <div className="popover-arrow"></div>
                                        <p>Últimos 12 meses</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <ButtonComponent />
            </header>
            <SubMenu />
        </div>
    );
}

export default Header;
