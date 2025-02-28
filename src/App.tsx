import { useState } from 'react'

import { AppShell, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Categories, Game, SubCategories, Header, Navbar } from './components'
import { Category, SubCategory } from './types'

import './App.css'

function App() {
  const [opened, { toggle }] = useDisclosure()
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null)
  const [numberOfCards, setNumberOfCards] = useState(6)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding='md'
    >
      <Header
        opened={opened}
        toggle={toggle}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
      <Navbar
        numberOfCards={numberOfCards}
        setNumberOfCards={setNumberOfCards}
      />

      <AppShell.Main className='main-content'>
        {selectedSubCategory !== null && selectedCategory !== null ? (
          <Game
            translations={selectedSubCategory.translations}
            numberOfCards={numberOfCards}
          />
        ) : selectedCategory !== null ? (
          <SubCategories
            setSelectedSubCategory={setSelectedSubCategory}
            subCategories={selectedCategory.subCategories}
          />
        ) : (
          <Categories setSelectedCategory={setSelectedCategory} />
        )}
      </AppShell.Main>
    </AppShell>
  )
}

export default App
