import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Made = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    display: inline;
    margin-top: 1px;
    margin-left: 5px;
    margin-right: 5px;
    width: 25px;
  }

  span {
    font-weight: 700;
    font-style: normal;
    margin-left: 4px;
  }
`

const Footer: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Made>
        Made with <img src="/heart.svg" alt="heart" /> by{' '}
        <span>IrishBeets</span>
      </Made>
    </div>
  )
}

export default Footer
