export enum Form {
  FIRST_SINGULAR = '1st s.',
  SECOND_SINGULAR = '2nd s.',
  THIRD_SINGULAR = '3rd s.',
  FIRST_PLURAL = '1st pl.',
  SECOND_PLURAL = '2nd pl.',
  THIRD_PLURAL = '3rd pl.',
}

export const PRONOUNS = {
  en: {
    [Form.FIRST_SINGULAR]: 'I',
    [Form.SECOND_SINGULAR]: 'you',
    [Form.THIRD_SINGULAR]: 'he/she/it',
    [Form.FIRST_PLURAL]: 'we',
    [Form.SECOND_PLURAL]: 'you (pl.)',
    [Form.THIRD_PLURAL]: 'they',
  },
  hu: {
    [Form.FIRST_SINGULAR]: 'én',
    [Form.SECOND_SINGULAR]: 'te',
    [Form.THIRD_SINGULAR]: 'ő/ön',
    [Form.FIRST_PLURAL]: 'mi',
    [Form.SECOND_PLURAL]: 'ti',
    [Form.THIRD_PLURAL]: 'ők/önök',
  },
}

export enum Tense {
  PRESENT = 'present',
  PAST = 'past',
  FUTURE = 'future',
  INFINITIVE = 'infinitive',
}

export enum ConjugationType {
  INDEFINITE = 'indefinite',
  DEFINITE = 'definite',
}

export interface Translation {
  en: string
  hu: string | undefined | null
  image?: string
  form?: Form
  tense?: Tense
  conjugationType?: ConjugationType
  verbBase?: string
}

export interface SubCategory {
  name: string
  translations: Translation[]
}

export interface Category {
  name: string
  subCategories: SubCategory[]
}
