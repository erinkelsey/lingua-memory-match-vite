const findVoice = (language: string) => {
  if (language === 'hu') return 'hu-HU-Standard-A'
  return 'en-US-Standard-F'
}

export const speak = async (text: string, language: string) => {
  const response = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${
      import.meta.env.VITE_TEXT_TO_SPEECH_API_KEY
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: { text: text },
        voice: {
          languageCode: language,
          name: findVoice(language),
          ssmlGender: 'NEUTRAL',
        },
        audioConfig: { audioEncoding: 'MP3' },
      }),
    }
  )

  const data = await response.json()
  const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`)
  audio.play()
}
