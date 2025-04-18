import { Category } from 'src/types'
import { time } from './time'
import { greetings } from './greetings'

export const phrases: Category = {
  name: 'Phrases',
  subCategories: [greetings, time],
}
