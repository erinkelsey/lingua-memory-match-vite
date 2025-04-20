import { Category } from 'src/types'
import { basic } from './basic'
import { everyday } from './everyday'
import { actions } from './actions'
import { all } from './all'

export const verbs: Category = {
  name: 'Verbs',
  subCategories: [all, actions, basic, everyday],
}
