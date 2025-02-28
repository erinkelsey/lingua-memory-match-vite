import { AppShell, Select } from '@mantine/core'

interface NavbarProps {
  numberOfCards: number
  setNumberOfCards: (value: number) => void
}

export const Navbar = (props: NavbarProps) => {
  return (
    <AppShell.Navbar p='md'>
      <Select
        label='Number of Cards'
        placeholder='Select number of cards'
        data={[
          { value: '6', label: '6' },
          { value: '12', label: '12' },
        ]}
        value={props.numberOfCards.toString()}
        onChange={(value) => props.setNumberOfCards(Number(value))}
        styles={{
          input: {
            '--input-bd-focus': 'green',
          },
          root: {
            maxWidth: 250,
          },
        }}
      />
    </AppShell.Navbar>
  )
}
