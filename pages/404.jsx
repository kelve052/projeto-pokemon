import Image from "next/image"
import style from '../styles/notfund.module.css'

export default function Notfund({pokemon}){
    return(
        <section className={style.section}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${25}.png`} width='300' height='300'/>
            <p>Ops você acabou se perdendo!</p>
        </section>
    )
}