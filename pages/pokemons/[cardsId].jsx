import {useRouter} from "next/router"
import Image from "next/image"
import style from '../../styles/cardsId.module.css'

export async function getStaticPaths(){
    const limit = 260
    const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
    const resposta_json = await dados.json()


    const paths = resposta_json.results.map((pokemons, index) => {
        return{
            params: {cardsId: (index +1).toString() },
        }
    })
    return{paths, fallback: false}
}

export async function getStaticProps(context){
    const id = context.params.cardsId

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resposta_json = await resposta.json()

    return {
        props: { pokemons: resposta_json },
    }
}

export default function Cards({pokemons}){
    const router = useRouter()
    return(
        <section className={style.section}>
            <h3>{pokemons.name}</h3>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`}
                width='200' height='200' alt={pokemons.name}
            />
            <div className={style.numero}>
                <p className={style.p}>Número:</p>
                <p className={style.id}>#{pokemons.id}</p>
            </div>
            <div>
                <p className={style.tipo}>Tipo</p>
                <div className={style.divh6}>
                    {pokemons.types.map((item) =>(
                        <p className={style[`${item.type.name}`]}>{item.type.name}</p>
                    ))}
                </div>

                <div className={style.peso_altura}>
                    <div className={style.linha}>
                        <p className={style.peso}>Peso: </p>
                        <sapn>{pokemons.weight / 10}Kg</sapn>
                    </div>
                    <div>
                        <p className={style.altura}>Altura: </p>
                        <sapn>{pokemons.height * 10} cm</sapn>
                    </div>
                </div>
            </div>
        </section>
    )
}
