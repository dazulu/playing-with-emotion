import { useState, useContext } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

type Emoji = '☕️' | '🧁'

type HeaderProps = {
  text: string
  emojis: Emoji[]
}

type TitleProps = {
  emoji: Emoji
}

const Title = styled.h1`
  color: var(--color-primary);

  &:after {
    content: ${(props: TitleProps) => `'${props.emoji}'`};
  }
`

const Header: React.FC<HeaderProps> = ({ text, emojis }) => {
  const [option1, option2] = emojis
  const [emoji, setEmoji] = useState<Emoji>(option1)

  const toggleEmoji = (): void => {
    setEmoji(emoji === option1 ? option2 : option1)
  }

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Title emoji={emoji}>{text}</Title>
        <button onClick={toggleEmoji}>Toggle Flavour Prop</button>
      </div>
    </>
  )
}

export default Header
