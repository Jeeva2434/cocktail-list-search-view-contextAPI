import React, { useState } from 'react'
import Search from '../components/Search';
import CocktailList from '../components/CocktailList';


const Home = () => {

  const[searchTerm,setSearchTerm] = useState('');

  return (
    <section className='home container'>
      <div className='homeWrapper'>
        <Search 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <CocktailList
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </section>
  )
}

export default Home