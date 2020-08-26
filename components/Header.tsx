import { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

export type Emojis = '☕️' | '🧁'

type HeaderProps = {
  emoji: Emojis
  text: string
}

type TitleProps = Pick<HeaderProps, 'emoji'>

const Title = styled.h1`
  color: #cc6f78;
  display: inline-flex;
  font-size: 2em;

  &:after {
    content: ${(props: TitleProps) => `'${props.emoji}'`};
  }
`

const ToggleButton = styled.button`
  display: inline-block;
  align-self: center;
`

const Header = ({ text }: HeaderProps) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Title emoji={toggle ? '☕️' : '🧁'}>{text}</Title>
        <ToggleButton onClick={() => setToggle(!toggle)}>
          Toggle Flavour Prop
        </ToggleButton>
      </div>
    </>
  )
}

export default Header
