import { AppShell, Select, MultiSelect, Button } from '@mantine/core'

import { Form } from '~/types'
import { Settings } from '~/types/settings'

interface NavbarProps {
  settings: Settings
  setSettings: (settings: Settings) => void
  resetSettings: () => void
}

export const Navbar = (props: NavbarProps) => {
  const handleSettingsChange = (newSettings: Partial<Settings>) => {
    props.setSettings({
      ...props.settings,
      ...newSettings,
    })
  }

  console.log(props.settings)

  return (
    <AppShell.Navbar p='md'>
      <Select
        label='Number of Cards'
        placeholder='Select number of cards'
        data={[
          { value: '6', label: '6' },
          { value: '12', label: '12' },
        ]}
        value={props.settings.numberOfCards.toString()}
        onChange={(value) =>
          handleSettingsChange({ numberOfCards: Number(value) })
        }
        styles={{
          input: {
            '--input-bd-focus': 'green',
          },
          root: {
            maxWidth: 250,
          },
        }}
      />
      <MultiSelect
        label='Verb Forms'
        data={Object.values(Form).map((form) => ({
          value: form,
          label: form,
        }))}
        value={props.settings.forms}
        onChange={(value) =>
          handleSettingsChange({ forms: value.map((v) => v as Form) })
        }
        styles={{
          input: {
            '--input-bd-focus': 'green',
          },
          root: {
            maxWidth: 250,
            marginTop: '0.25rem',
          },
        }}
      />
      <Button
        variant='outline'
        color='green'
        onClick={props.resetSettings}
        styles={{
          root: {
            marginTop: '1rem',
            maxWidth: 250,
          },
        }}
      >
        Reset
      </Button>
    </AppShell.Navbar>
  )
}
