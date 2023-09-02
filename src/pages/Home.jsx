import React from 'react'
import Search from '../components/Search';
import CocktailList from '../components/CocktailList';


const Home = () => {

  return (
    <section className='home container'>
      <div className='homeWrapper'>
        <Search/>
        <CocktailList/>
      </div>
    </section>
  )
}

export default Home