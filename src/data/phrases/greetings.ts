import { SubCategory, Form } from 'src/types'

export const greetings: SubCategory = {
  name: 'Greetings',
  translations: [
    {
      en: 'goodbye / see you later',
      hu: 'viszontlátásra / viszlát',
    },
    {
      en: 'hello / hi / goodbye / bye',
      hu: 'Szia',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'hello / hi / goodbye / bye',
      hu: 'sziasztok',
      form: Form.SECOND_PLURAL,
    },
    {
      en: 'How are you?',
      hu: 'Hogy vagy?',
      form: Form.SECOND_SINGULAR,
    },
    {
      en: 'How are you?',
      hu: 'Hogy van?',
      form: Form.THIRD_SINGULAR,
    },
    {
      en: 'nice to meet you / delighted',
      hu: 'nagyon örülök',
    },
  ],
}
