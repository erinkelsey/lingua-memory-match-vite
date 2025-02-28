import { Burger, AppShell, Button } from '@mantine/core'
import { Icon } from '@iconify/react'

import { Category, SubCategory } from '../types'

interface HeaderProps {
  opened: boolean
  toggle: () => void
  selectedCategory: Category | null
  setSelectedCategory: (category: Category | null) => void
  selectedSubCategory: SubCategory | null
  setSelectedSubCategory: (subCategory: SubCategory | null) => void
}

export const Header = (props: HeaderProps) => {
  const handleBack = () => {
    if (props.selectedSubCategory !== null) {
      props.setSelectedSubCategory(null)
    } else if (props.selectedCategory !== null) {
      props.setSelectedCategory(null)
    }
  }

  const MainHeader = () => (
    <>
      <Burger
        opened={props.opened}
        onClick={props.toggle}
        color='black'
        // hiddenFrom='sm'
        size='sm'
      />
      <div className='title'>Lingua: Memory Match</div>
    </>
  )

  const CategoryHeader = () => (
    <>
      <Button onClick={handleBack} variant='subtle' color='dark'>
        <Icon icon='mdi:arrow-back' fontSize={24} />
      </Button>
      <div className='title'>{props.selectedCategory!.name}</div>
    </>
  )

  const SubCategoryHeader = () => (
    <>
      <Button onClick={handleBack} variant='subtle' color='dark'>
        <Icon icon='mdi:arrow-back' fontSize={24} />
      </Button>
      <div className='title'>
        {props.selectedCategory!.name}: {props.selectedSubCategory!.name}
      </div>
    </>
  )

  return (
    <AppShell.Header className='header'>
      {props.selectedSubCategory !== null ? (
        <SubCategoryHeader />
      ) : props.selectedCategory !== null ? (
        <CategoryHeader />
      ) : (
        <MainHeader />
      )}
    </AppShell.Header>
  )
}
