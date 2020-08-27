import Testimonals, { Testimonials } from 'components/Testimonials'

const Home: React.FC<Testimonials> = ({ testimonials }) => (
  <Testimonals testimonials={testimonials} />
)

export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/testimonials')
  const testimonials = await res.json()

  return {
    props: {
      testimonials,
    },
  }
}
