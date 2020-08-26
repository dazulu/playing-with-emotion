import React from 'react'

const Testimonials = () => {
  return (
    <>
      <div className="background">
        <div className="wrapper">
          <h3 className="title">What people are saying</h3>

          <div className="testimonials">
            <div className="testimonial">
              <div className="person">
                <img
                  src="/testimonials/appletapple.jpg"
                  alt="appletapple"
                  className="avatar"
                />
                <div>
                  <p className="name">appletapple</p>
                  <span className="tag tag--twitch">Twitch Streamer</span>
                </div>
              </div>
              <q className="quote">
                Lorem ipsum delor sit amet is mise an madra ag taffan go leor
                anois go ciunn
              </q>
            </div>

            <div className="testimonial">
              <div className="person">
                <img
                  src="/testimonials/jimothyz.jpg"
                  alt="jimothyz"
                  className="avatar"
                />
                <div>
                  <p className="name">jimothyz</p>
                  <span className="tag tag--twitch">Twitch Streamer</span>
                </div>
              </div>
              <q className="quote">
                Lorem ipsum delor sit amet is mise an madra ag taffan go leor
                anois go ciunn
              </q>
            </div>

            <div className="testimonial">
              <div className="person">
                <img
                  src="/testimonials/jimothyz.jpg"
                  alt="shayk47"
                  className="avatar"
                />
                <div>
                  <p className="name">jimothyz</p>
                  <span className="tag tag--twitch">Twitch Streamer</span>
                </div>
              </div>
              <q className="quote">
                Lorem ipsum delor sit amet is mise an madra ag taffan go leor
                anois go ciunn
              </q>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .background {
          background-color: #fcfcfc;
        }

        .title {
          text-align: center;
          font-weight: 800;
        }

        .wrapper {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .testimonials {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .testimonial {
          background: #fff;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03),
            0 2px 4px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.03),
            0 8px 16px rgba(0, 0, 0, 0.03), 0 16px 32px rgba(0, 0, 0, 0.03),
            0 32px 64px rgba(0, 0, 0, 0.05);
          border-top-left-radius: 20px;
          border-bottom-right-radius: 20px;
          padding: 30px;
          max-width: 300px;
          width: 100%;
        }

        .testimonial {
          margin: 30px 3vw;
        }

        .person {
          display: flex;
        }

        .avatar {
          background: grey;
          border-top-right-radius: 18px;
          border-bottom-left-radius: 18px;
          border-radius: 20px;
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }

        .name {
          font-weight: 700;
          font-size: 18px;
        }

        .tag {
          font-size: 13px;
          border-radius: 15px;
          padding: 3px 8px;
        }

        .tag--twitch {
          background: #ebdbff;
          color: #7f43ce;
        }

        .quote {
          display: block;
          padding-top: 15px;
        }
      `}</style>
    </>
  )
}

export default Testimonials
