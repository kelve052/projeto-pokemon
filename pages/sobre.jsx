import Image from "next/image"
import style from '../styles/sobre.module.css'

export default function Sobre(){
    return(
        <section className={style.sobre}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto temporibus iusto aspernatur nobis voluptatibus illo voluptatum neque nostrum nulla, libero id, laborum quo iure placeat laboriosam ratione accusamus possimus blanditiis.</p>
            <Image src='/Imagens/charizard.png' width='300' height='300'/>
        </section>
    )
}