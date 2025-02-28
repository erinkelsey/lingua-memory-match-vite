import { Category } from '~/types'
import { arctic } from './arctic'
import { desert } from './desert'
import { domestic } from './domestic'
import { forest } from './forest'
import { grasslands } from './grasslands'
import { jungle } from './jungle'
import { ocean } from './ocean'

export const animals: Category = {
  name: 'Animals',
  subCategories: [arctic, desert, domestic, forest, grasslands, jungle, ocean],
}
