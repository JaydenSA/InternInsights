import React from 'react'
import { getCategories } from '@/services';
import CategoriesCard from './CategoriesCard';

const DisplayCategories = async () => {
    const categories = await getCategories();
  return (
    <section className='flex flex-col gap-10'>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 pb-5 lg:px-40'>
            { categories.map((categorie, index) => (
                <CategoriesCard category={categorie} index={index}/>
            ) )}
        </div>
    </section>
  )
}

export default DisplayCategories