import { Category } from 'src/types'

import { accessories } from './accessories'
import { personalAttributes } from './attributes'
import { body } from './body'
import { clothing } from './clothing'
import { cosmetics } from './cosmetics'
import { hygiene } from './hygiene'
import { professions } from './professions'
import { sports } from './sports'
import { vehicles } from './vehicles'

export const personal: Category = {
  name: 'Personal',
  subCategories: [
    accessories,
    personalAttributes,
    body,
    clothing,
    cosmetics,
    hygiene,
    professions,
    sports,
    vehicles,
  ],
}
