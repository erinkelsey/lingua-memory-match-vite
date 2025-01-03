const findVoice = (language: string) => {
  const voices = speechSynthesis.getVoices()

  if (language === 'en') {
    return voices.find((voice) => voice.lang === 'en-US')
  } else if (language === 'hu') {
    return voices.find((voice) => voice.lang === 'hu-HU')
  }

  return voices[0]
}

export const speak = (text: string, language: string) => {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.voice = findVoice(language) || speechSynthesis.getVoices()[0]

  console.log(speechSynthesis.getVoices())
  speechSynthesis.speak(utterance)
}
