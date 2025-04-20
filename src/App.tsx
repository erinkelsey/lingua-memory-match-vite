import { useState } from 'react'

import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Categories, Game, SubCategories, Header, Navbar } from './components'
import { Category, SubCategory } from './types'
import { Settings } from './types/settings'

import './App.css'

function App() {
  const [opened, { toggle }] = useDisclosure()
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null)
  const [settings, setSettings] = useState<Settings>({
    numberOfCards: 6,
  })

  const handleResetSettings = () => {
    setSettings({
      numberOfCards: 6,
      forms: [],
      tenses: [],
      conjugationTypes: [],
    })
  }

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
        settings={settings}
        setSettings={setSettings}
        resetSettings={handleResetSettings}
      />

      <AppShell.Main className='main-content'>
        {selectedSubCategory !== null && selectedCategory !== null ? (
          <Game
            translations={selectedSubCategory.translations}
            settings={settings}
            isVerbs={selectedCategory.name.toUpperCase() === 'VERBS'}
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
