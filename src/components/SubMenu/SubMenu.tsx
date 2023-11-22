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
            <li><FaBullhorn className='icon-list2'/>Reclamações</li>
            <li><BiSolidCoupon className='icon-list3'/>Cupons de desconto</li>
            <li><BiSolidMessageDots className='icon-list4'/>Sobre</li>
            <li><TbUserQuestion className='icon-list5'/>FAQ</li>
            <li><BiMessageError className='icon-list6'/>Principais Problemas</li>
        </ul>
    </div>
  )
}

export default SubMenu