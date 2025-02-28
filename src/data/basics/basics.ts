import { Category } from 'src/types'
import { colors } from './colors'
import { family } from './family'
import { materials } from './materials'
import { numbers } from './numbers'
import { seasons } from './seasons'
import { time } from './time'
import { weather } from './weather'
import { weekdays } from './weekdays'

export const basics: Category = {
  name: 'Basics',
  subCategories: [
    colors,
    family,
    materials,
    numbers,
    seasons,
    time,
    weather,
    weekdays,
  ],
}
