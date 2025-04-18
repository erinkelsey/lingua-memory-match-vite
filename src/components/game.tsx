import { useState, useEffect } from 'react'
import { Card, Button, Title, ActionIcon } from '@mantine/core'
import { MdVolumeUp } from 'react-icons/md'

import { shuffleArray, speak } from 'src/utils'
import { Translation, Form, PRONOUNS } from '~/types'

import './game.css'

interface GameProps {
  translations?: Translation[]
  numberOfCards?: number
  userLanguage?: keyof typeof PRONOUNS
  translationLanguage?: keyof typeof PRONOUNS
}

interface Card {
  text: string
  translation: string
  language: string
  pronoun?: string
  form?: Form
}

export const Game = ({
  translations = [],
  numberOfCards = 6,
  userLanguage = 'en',
  translationLanguage = 'hu',
}: GameProps) => {
  const [flipped, setFlipped] = useState<boolean[]>([])
  const [shuffledTranslations, setShuffledTranslations] = useState<Card[]>([])
  const [flippedIndices, setFlippedIndices] = useState<number[]>([])
  const [matchedIndices, setMatchedIndices] = useState<boolean[]>([])
  const [numMatched, setNumMatched] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const numWords = numberOfCards / 2

  const initializeGame = () => {
    const allShuffledTranslations = shuffleArray(translations)
    const selectedTranslations = allShuffledTranslations.slice(0, numWords)
    const cards = selectedTranslations.flatMap((translation) => [
      {
        text: translation[userLanguage],
        translation: translation[translationLanguage],
        language: userLanguage,
        // pronoun: PRONOUNS[translationLanguage][translation.form as Form],
        form: translation.form,
      },
      {
        text: translation[translationLanguage],
        translation: translation[userLanguage],
        language: translationLanguage,
        pronoun: PRONOUNS[translationLanguage][translation.form as Form],
      },
    ])
    setFlipped(Array(cards.length).fill(false))
    setMatchedIndices(Array(cards.length).fill(false))
    setShuffledTranslations(shuffleArray(cards))
    setFlippedIndices([])
    setNumMatched(0)
    setGameOver(false)
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    initializeGame()
  }, [numberOfCards])

  const shuffle = () => {
    setFlippedIndices([])
    setFlipped(Array(shuffledTranslations.length).fill(false))
    setTimeout(() => {
      initializeGame()
    }, 500)
  }

  const handleFlip = (index: number) => {
    // If there are already two flipped cards, or the card is already matched,
    // or all cards are matched, do nothing
    if (
      flippedIndices.length === 2 ||
      matchedIndices[index] ||
      numMatched == numWords
    )
      return

    // Flip the card
    const newFlipped = [...flipped]
    newFlipped[index] = !newFlipped[index]
    setFlipped(newFlipped)

    // Add the card to the flipped indices
    const newFlippedIndices = [...flippedIndices, index]
    setFlippedIndices(newFlippedIndices)

    // If there are two flipped cards, check if they match
    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices
      const firstCard = shuffledTranslations[firstIndex]
      const secondCard = shuffledTranslations[secondIndex]

      // If the cards match, update the matched indices and reset the flipped indices
      if (
        firstCard.text === secondCard.translation &&
        secondCard.text === firstCard.translation
      ) {
        setTimeout(() => {
          const newMatchedIndices = [...matchedIndices]
          newMatchedIndices[firstIndex] = true
          newMatchedIndices[secondIndex] = true
          setMatchedIndices(newMatchedIndices)
          setFlippedIndices([])
          setNumMatched(numMatched + 1)

          if (numMatched + 1 === numWords) {
            setGameOver(true)
          }
        }, 500)
      } else {
        // If the cards don't match, flip them back after a delay
        setTimeout(() => {
          const resetFlipped = [...flipped]
          resetFlipped[firstIndex] = false
          resetFlipped[secondIndex] = false
          setFlipped(resetFlipped)
          setFlippedIndices([])
        }, 1500)
      }
    }
  }

  const handleSpeak = async (event: React.MouseEvent, item: Card) => {
    event.stopPropagation()
    speak(item.text, item.language)
  }

  return (
    <div>
      {gameOver ? (
        <Title order={3} mb={16}>
          Congratulations! You Won 🎉
        </Title>
      ) : (
        <Title order={3} mb={16}>
          Match the translations
        </Title>
      )}
      <div className={`card-container cards-${numberOfCards}`}>
        {shuffledTranslations.map((item, index) => (
          <div
            key={index}
            className='flip-card'
            onClick={() => handleFlip(index)}
          >
            <div
              className={`flip-card-inner ${flipped[index] ? 'flipped' : ''}`}
            >
              <Card
                shadow='sm'
                padding='lg'
                radius='md'
                withBorder
                className='flip-card-front'
              >
                <h3>LINGUA</h3>
              </Card>
              <Card
                shadow='sm'
                padding='lg'
                radius='md'
                withBorder
                className={`flip-card-back ${
                  matchedIndices[index] ? 'matched' : ''
                }`}
              >
                {item.form && <div className='form-label'>({item.form})</div>}
                {item.pronoun && (
                  <div className='pronoun-label'>({item.pronoun})</div>
                )}
                <p>{item.text}</p>
                <ActionIcon
                  className='speak-button'
                  variant='outline'
                  color='green'
                  onClick={(event) => handleSpeak(event, item)}
                >
                  <MdVolumeUp />
                </ActionIcon>
                <div className='language-label'>{item.language}</div>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <div className='shuffle-container'>
        <Button
          miw={300}
          onClick={shuffle}
          className='shuffle-button'
          color='green'
        >
          Shuffle
        </Button>
      </div>
    </div>
  )
}
