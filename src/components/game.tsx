import { useState, useEffect } from 'react'
import { Card, Button, Title } from '@mantine/core'

import { dictionary } from 'src/data/dictionary'
import { shuffleArray } from 'src/utils'

import './game.css'

interface GameProps {
  num_words?: number
  user_language?: string
  translation_language?: string
}

export const Game = ({
  num_words = 3,
  user_language = 'en',
  translation_language = 'hu',
}: GameProps) => {
  const [flipped, setFlipped] = useState<boolean[]>([])
  const [shuffledTranslations, setShuffledTranslations] = useState<
    { text: string; translation: string }[]
  >([])
  const [flippedIndices, setFlippedIndices] = useState<number[]>([])
  const [matchedIndices, setMatchedIndices] = useState<boolean[]>([])
  const [numMatched, setNumMatched] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const initializeGame = () => {
    const allShuffledTranslations = shuffleArray(
      dictionary[0].subCategories[0].translations
    )
    const translations = allShuffledTranslations.slice(0, num_words)
    const cards = translations.flatMap((translation) => [
      {
        text: translation[user_language],
        translation: translation[translation_language],
      },
      {
        text: translation[translation_language],
        translation: translation[user_language],
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
      numMatched == num_words
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

          if (numMatched + 1 === num_words) {
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

  return (
    <div>
      <Title order={2}>Basics: Colors</Title>
      {gameOver ? (
        <Title order={3}>Congratulations! You Won 🎉</Title>
      ) : (
        <Title order={3}>Match the translations</Title>
      )}
      <div className='card-container'>
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
                <p>{item.text}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <Button
        fullWidth
        maw={400}
        onClick={shuffle}
        className='shuffle-button'
        color='green'
      >
        Shuffle
      </Button>
    </div>
  )
}
