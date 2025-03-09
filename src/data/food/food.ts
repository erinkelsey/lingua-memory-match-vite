import { Category } from 'src/types'
import { desserts } from './desserts'
import { drinks } from './drinks'
import { fruits } from './fruits'
import { meals } from './meals'
import { meats } from './meats'
import { pantry } from './pantry'
import { snacks } from './snacks'
import { vegetables } from './veggies'

export const food: Category = {
  name: 'Food',
  subCategories: [
    desserts,
    drinks,
    fruits,
    meals,
    meats,
    pantry,
    snacks,
    vegetables,
  ],
}
