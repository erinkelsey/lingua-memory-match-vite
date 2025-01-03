export interface Translation {
  en: string
  hu: string | undefined | null
  image?: string
}

export interface SubCategory {
  name: string
  translations: Translation[]
}

export interface Category {
  name: string
  subCategories: SubCategory[]
}
