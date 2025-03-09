import { Category } from 'src/types'

import { bedroom } from './bedroom'
import { bathroom } from './bathroom'
import { kitchen } from './kitchen'
import { livingRoom } from './livingRoom'
import { office } from './office'
import { outdoors } from './outdoors'

export const spaces: Category = {
  name: 'Spaces',
  subCategories: [bedroom, bathroom, kitchen, livingRoom, office, outdoors],
}
