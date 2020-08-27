import { jsx, css } from '@emotion/core'

export interface Testimonial {
  name: string
  quote: string
  image: string
  type?: 'twitch' | 'youtube'
}

export interface Testimonials {
  testimonials: Testimonial[]
}

const Testimonials: React.FC<Testimonials> = ({ testimonials }) => {
  return (
    <>
      <div css={wrapper}>
        {testimonials.map((data: Testimonial, index: number) => (
          <div css={card} key={`t${index}`}>
            <div css={person}>
              <img css={avatar} src={data.image} alt={data.name} />
              <div>
                <p css={name}>{data.name}</p>
                <span css={tag}>Twitch Streamer</span>
              </div>
            </div>
            <q>{data.quote}</q>
          </div>
        ))}
      </div>
    </>
  )
}

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const card = css`
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03),
    0 16px 32px rgba(0, 0, 0, 0.03), 0 32px 64px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 30px;
  margin: 30px 3vw;
  max-width: 300px;
  width: 100%;
`
const person = css`
  display: flex;
  margin-bottom: 15px;
`
const avatar = css`
  background: grey;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-radius: 20px;
  width: 70px;
  height: 70px;
  margin-right: 20px;
`
const name = css`
  font-weight: 700;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
`
const tag = css`
  font-size: 13px;
  border-radius: 15px;
  padding: 3px 8px;
  background: #ebdbff;
  color: #7f43ce;
`

export default Testimonials
