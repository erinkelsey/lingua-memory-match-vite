import { Tense, Form, ConjugationType } from './types'

export interface Settings {
  numberOfCards: number
  tenses?: Tense[]
  forms?: Form[]
  conjugationTypes?: ConjugationType[]
}
