import React, { useEffect, useRef} from 'react'
import {UseGlobalContext} from '../ContextAPI';

const Search = () => {
    const{setSearchTerm} = UseGlobalContext();
     
    const searchField = useRef(null); 

    useEffect(()=>{
        searchField.current.focus();
    },[]);

    let timer;

    const debounce = (e) => {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            setSearchTerm(e.target.value)
        },2000)

        return () => clearTimeout(timer);
    }

    return (
        <section className='search'>
            <div className='search_container'>
                <form onSubmit={(e)=>e.preventDefault()}> 

                    <label htmlFor='name'>Search the Cocktail</label>

                    <input 
                    type='text' 
                    id="name"
                    name='name'
                    autoComplete='off'
                    ref={searchField} 
                    onChange={(e)=>debounce(e)}/>
                    
                </form>
            </div>
        </section>
    )
}

export default Search