import React from 'react'
import Link from 'next/link'

const CategoriesCard = ({category}) => {
  return (
    <div className='border-2 border-gray-300 p-5 lg:p-10 grid place-content-center gap-3 text-center hover:bg-yellow-200 transition-all rounded-lg'>
      <Link href={`/categories/${category.slug}`}>
        <h5>{category.name}</h5>
        <p>{category.description}</p>
      </Link>
    </div>
  )
}

export default CategoriesCard