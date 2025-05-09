import { Card } from '@mantine/core'

import { dictionary } from '~/data'
import { Category } from '~/types'

import './categories.css'

interface CategoriesProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>
}

export const Categories = ({ setSelectedCategory }: CategoriesProps) => {
  return (
    <div className='category-container'>
      {dictionary.map((category, index) => (
        <Card
          key={index}
          shadow='xs'
          padding='0px'
          className='category-card'
          onClick={() => setSelectedCategory(dictionary[index])}
        >
          <div className='category-title'>{category.name}</div>
        </Card>
      ))}
    </div>
  )
}
