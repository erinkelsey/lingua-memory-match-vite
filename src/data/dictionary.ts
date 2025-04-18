import { Category } from 'src/types'
import { animals } from './animals'
import { basics } from './basics'
import { food } from './food'
import { phrases } from './phrases'
import { personal } from './personal'
import { spaces } from './spaces'
import { verbs } from './verbs'

export const dictionary: Category[] = [
  basics,
  verbs,
  food,
  personal,
  spaces,
  animals,
  phrases,
]
