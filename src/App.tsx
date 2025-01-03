import { useState } from 'react'

import { AppShell, Burger, Button, Title, Select } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Categories, Game, SubCategories } from './components'
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
      <AppShell.Header className='header'>
        <Burger
          opened={opened}
          onClick={toggle}
          color='black'
          // hiddenFrom='sm'
          size='sm'
        />
        <div className='title'>Lingua: Memory Match</div>
      </AppShell.Header>

      <AppShell.Navbar p='md'>
        <Select
          label='Number of Cards'
          placeholder='Select number of cards'
          data={[
            { value: '6', label: '6' },
            { value: '8', label: '8' },
            { value: '12', label: '12' },
          ]}
          value={numberOfCards.toString()}
          onChange={(value) => setNumberOfCards(Number(value))}
          styles={{
            input: {
              '--input-bd-focus': 'green',
            },
          }}
        />
      </AppShell.Navbar>

      <AppShell.Main className='main-content'>
        {selectedSubCategory !== null && selectedCategory !== null ? (
          <div>
            <Title order={2}>
              {selectedCategory.name}: {selectedSubCategory.name}
            </Title>
            <Game
              translations={selectedSubCategory.translations}
              numberOfCards={numberOfCards}
            />
            <Button
              onClick={() => setSelectedSubCategory(null)}
              mt={10}
              variant='outline'
              color='green'
            >
              Back to Subcategories
            </Button>
          </div>
        ) : selectedCategory !== null ? (
          <div>
            <Title order={2} mb={10}>
              {selectedCategory.name}
            </Title>
            <SubCategories
              setSelectedSubCategory={setSelectedSubCategory}
              subCategories={selectedCategory.subCategories}
            />
            <Button
              onClick={() => setSelectedCategory(null)}
              mt={10}
              variant='outline'
              color='green'
            >
              Back to Categories
            </Button>
          </div>
        ) : (
          <div>
            <Title order={2} mb={10}>
              Categories
            </Title>
            <Categories setSelectedCategory={setSelectedCategory} />
          </div>
        )}
      </AppShell.Main>
    </AppShell>
  )
}

export default App
