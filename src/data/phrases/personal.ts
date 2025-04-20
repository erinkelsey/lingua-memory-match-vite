import { SubCategory, Form } from 'src/types'

export const personalQuestions: SubCategory = {
  name: 'Personal Questions',
  translations: [
    {
      en: 'How old are you?',
      hu: 'Hány éves vagy?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'What do you do?',
      hu: 'Mit csinálsz?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'What is your nationality?',
      hu: 'Milyen nemzetiségű vagy?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'What is your profession?',
      hu: 'Mi a foglalkozása?',
      form: Form.THIRD_SINGULAR,
    },
    {
      en: 'What languages do you speak?',
      hu: 'Milyen nyelven beszélsz?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'Where do you live?',
      hu: 'Hol él?',
      form: Form.THIRD_PLURAL,
    },
    {
      en: 'Where do you live?',
      hu: 'Hol élsz?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'Who are you?',
      hu: 'Ki vagy? (informális)',
      form: Form.SECOND_SINGULAR,
    },
  ],
}
