import { NextApiRequest, NextApiResponse } from 'next'
import { Testimonial } from 'components/Testimonials'

export default (req: NextApiRequest, res: NextApiResponse<Testimonial[]>) => {
  res.statusCode = 200
  res.json([
    {
      name: 'appletapple',
      image: '/appletapple.jpg',
      quote:
        'Lorem ipsum delor sit amet is mise an madra ag taffan go leor anois go ciunn',
    },
    {
      name: 'jimothyz',
      image: '/jimothyz.jpg',
      quote:
        'Lorem ipsum delor sit amet is mise an madra ag taffan go leor anois go ciunn',
    },
    {
      name: 'IrishBeets',
      image: '/irishbeets.jpg',
      quote:
        'Lorem ipsum delor sit amet is mise an madra ag taffan go leor anois go ciunn',
    },
  ])
}
