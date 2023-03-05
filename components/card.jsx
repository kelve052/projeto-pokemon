import Image from "next/image"
import style from '../styles/card.module.css'
import Link from "next/link"

export default function Card({pokemon}){
    return(
        <div className={style.card}>
            <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width='200' height='200' alt={pokemon.name}/>
            <div className={style.id}>
                <p>#{pokemon.id}</p>
            </div>
            <h3 color="red">{pokemon.name}</h3>
            <Link href={`/pokemons/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}