import { Category } from 'src/types'

import { countries } from './countries'
import { bedroom } from './bedroom'
import { bathroom } from './bathroom'
import { kitchen } from './kitchen'
import { livingRoom } from './livingRoom'
import { school } from './school'
import { outdoors } from './outdoors'

export const spaces: Category = {
  name: 'Spaces',
  subCategories: [
    countries,
    bedroom,
    bathroom,
    kitchen,
    livingRoom,
    school,
    outdoors,
  ],
}
