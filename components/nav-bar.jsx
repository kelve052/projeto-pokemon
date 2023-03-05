import Link from "next/link"
import Image from "next/image"
import style from '../styles/nav-bar.module.css'

export default function NavBar(){
    return(
        <nav className={style.nav}>
            <div className={style.div}>
                <Image src="/Imagens/pokeball.png" width="30" height="30" alt="PokeNext"/>
                <h1>PokeNext</h1>
            </div>
            <ul className={style.ul}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}