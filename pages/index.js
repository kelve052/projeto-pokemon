import styles from '@/styles/Home.module.css'
import style from '../styles/card.module.css'
import { useLayoutEffect } from 'react'
import Image from 'next/image'
import Card from '../components/card'

export async function getStaticProps(){
  const limit = 251
  const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
  

  const dados_json = await dados.json()
  dados_json.results.forEach((item, index) => {
    item.id = index + 1
  })
  return(
    {props:{pokemons: dados_json.results}}
  )
}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.div_h1}>
        <h1>Poke1111<span>Next</span></h1>
        <Image src='/Imagens/pokeball.png' width='40' height='40'/>
      </div>
      <div className={style.cardglobal}>
      {pokemons.map(a =>(
          <Card key={a.id} pokemon={a} />
      ))}
      </div>
    </>
  )
}
