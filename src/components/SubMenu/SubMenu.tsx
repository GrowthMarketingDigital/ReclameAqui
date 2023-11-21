//icons
import { MdOutlineHome } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";
import { BiMessageError } from "react-icons/bi";
import { BiSolidCoupon } from "react-icons/bi";
import { TbUserQuestion } from "react-icons/tb";
import { BiSolidMessageDots } from "react-icons/bi";

//style
import "./SubMenu.css"

const SubMenu = () => {
  return (
    <div className="submenu">
        <ul>
            <li><MdOutlineHome className='icon-list'/>Página Inicial</li>
            <li><FaBullhorn />Reclamações</li>
            <li><BiSolidCoupon />Cupons de desconto</li>
            <li><BiSolidMessageDots />Sobre</li>
            <li><TbUserQuestion />FAQ</li>
            <li><BiMessageError/>Principais Problemas</li>
        </ul>
    </div>
  )
}

export default SubMenu