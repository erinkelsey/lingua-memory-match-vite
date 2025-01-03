import { Card } from '@mantine/core'

import { SubCategory } from '~/types'

import './categories.css'

interface SubCategoriesProps {
  setSelectedSubCategory: React.Dispatch<
    React.SetStateAction<SubCategory | null>
  >
  subCategories: SubCategory[]
}

export const SubCategories = ({
  setSelectedSubCategory,
  subCategories,
}: SubCategoriesProps) => {
  return (
    <div className='category-container'>
      {subCategories.map((subCategory, index) => (
        <Card
          key={index}
          shadow='xs'
          padding='xl'
          className='category-card'
          onClick={() => setSelectedSubCategory(subCategories[index])}
        >
          <h2>{subCategory.name}</h2>
        </Card>
      ))}
    </div>
  )
}
