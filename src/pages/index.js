import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { css as emoCSS } from 'emotion'

import Layout from '../components/layout'
import heroBg from '../images/hero.jpg'
import bottleS from '../images/bottle-s.png'
import bottleL from '../images/bottle-l.png'
import cocktail from '../images/cocktail.svg'
import mind from '../images/mind.svg'
import heart from '../images/heart.svg'
import fireworks from '../images/fireworks.svg'
import cafeS from '../images/cafe-s.jpg'
import dropS from '../images/drop-s.jpg'
import citrusS from '../images/citrus-s.jpg'
import coffeeS from '../images/coffee-s.jpg'
import dropper from '../images/dropper.svg'
import shaker from '../images/shaker.svg'
import arrow from '../images/arrow.svg'
import check from '../images/check.svg'

const css = (...args) => ({ className: emoCSS(...args) })

const Hero = styled('div')`
  background: url(${heroBg}) no-repeat center;
  background-size: cover;
`
const Wrapper = styled('div')`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 700px) {
    padding: 40px;
  }

  @media (min-width: 100px) {
    padding: 60px;
  }
`
const Section = styled('div')`
  margin: 40px 0;
`

const Card = styled('div')`
  box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: white;

  p {
    width: 200px;
    font-size: 1.4rem;

    @media (min-width: 1000px) {
      width: 160px;
      font-size: 1.5rem;
    }
  }
`

const Description = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  @media (min-width: 700px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    :nth-of-type(odd) {
      margin-bottom: 150px;
      flex-direction: row;
    }

    div {
      width: 45%;
    }
  }
`

const Bullet = styled('p')`
  width: 100%;
  padding-left: 30px;
  position: relative;

  &:before {
    content: ' ';
    background-image: url(${check});
    position: absolute;
    left: 0px;
    height: 20px;
    width: 20px;
  }
`
const IndexPage = () => (
  <Layout>
    <Hero>
      <Wrapper
        {...css({
          textAlign: 'center',
          color: 'var(--body-text-blue)',
          fontWeight: 'bold',
          paddingBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',

          '@media (min-width: 700px)': {
            flexDirection: 'row-reverse',
          },
        })}
      >
        <div
          {...css({
            '@media (min-width: 700px)': {
              width: '50%',
            },
          })}
        >
          <img
            src={bottleL}
            alt="Lightly Lifted Bottle"
            {...css({
              width: '79px',
              '@media (min-width: 1000px)': { width: '132px' },
            })}
          />
        </div>
        <div
          {...css({
            '@media (min-width: 700px)': {
              textAlign: 'left',
              width: '50%',
            },
          })}
        >
          <h2>Indulge with Intention</h2>
          <p
            {...css({
              fontSize: '1.5rem',
              margin: '0 auto',

              '@media (min-width: 700px)': {
                margin: '0',
                marginBottom: '10px',
                maxWidth: '100%',
              },

              '@media (min-width: 1000px)': {
                fontSize: '2rem',
                marginBottom: '20px',
              },
            })}
          >
            Introducing a light cannabis experience you can enjoy on your own
            terms. Just a few drops into the beverage of your choice, swish to
            mix and enjoy a gentle lift.
          </p>
          <span
            {...css({
              height: '40px',
              display: 'block',
              backgroundColor: 'var(--yellow)',
              borderRadius: '5px',
              color: 'white',
              lineHeight: '40px',
              fontWeight: 'bold',
              fontSize: '1.6rem',
              letterSpacing: '1.5px',
              margin: '0 20px',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              transform: 'translateY(50%)',

              '@media (min-width: 700px)': {
                position: 'static',
                display: 'inline',
                padding: '10px',
                margin: '0',
              },
            })}
          >
            Coming Soon
          </span>
        </div>
      </Wrapper>
    </Hero>
    <Section>
      <Wrapper>
        <div
          {...css({
            '@media (min-width: 700px)': {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
          })}
        >
          <Card>
            <img src={cocktail} alt="cocktail" height="90px" />
            <p>Add it to your first cocktail instead of having a second</p>
          </Card>
          <Card>
            <img src={mind} alt="clear mind" height="90px" />
            <p>Enhance your mood and experiences</p>
          </Card>
          <Card>
            <img src={heart} alt="happy heart" height="90px" />
            <p>Enjoy cannabis without the smoke smell, chemicals or sugars</p>
          </Card>
          <Card>
            <img src={fireworks} alt="fireworks" height="90px" />
            <p>Brighten the everyday.</p>
          </Card>
        </div>
      </Wrapper>
    </Section>
    <Section
      {...css({
        backgroundColor: 'var(--blue-bg)',
        color: 'var(--body-text-blue)',
      })}
    >
      <Wrapper>
        <h1
          {...css({
            '@media (min-width: 1000px)': {
              textAlign: 'center',
              marginBottom: '50px',
            },
          })}
        >
          Calm Your Mind;
          <br />
          Don't Lose It
        </h1>
        <Description>
          <div>
            <h3>A Gentle Mood Lifter</h3>
            <p>
              Lightly Lifted’s cannabis infused beverage enhancement is expertly
              blended to provide a mild cannabis experience that lifts mind,
              body, and spirit. A balanced 1:1 ratio of THC to CBD is known to
              relieve stress, reduce anxiety and enhance your mood. With a mild
              dose of cannabis in your cup you’ll feel a gentle mood lift and
              nothing more.
            </p>
          </div>
          <div {...css({ textAlign: 'center' })}>
            <img src={cafeS} alt="lightly lifted with coffee" width="100%" />
          </div>
        </Description>
        <Description>
          <div>
            <h3>A Conscious Cannabis Experience</h3>
            <p>
              Using our measured dropper, you fully control your dose and
              experience. The fast-acting formula is quicker than edibles and
              far more mild for a relaxing experience you will enjoy.
            </p>
          </div>
          <div {...css({ textAlign: 'center' })}>
            <img src={dropS} alt="lightly lifted with coffee" width="100%" />
          </div>
        </Description>
      </Wrapper>
    </Section>
    <Section>
      <Wrapper>
        <Description>
          <div>
            <h3>Simple, Balanced and Consistent</h3>
            <p>
              Lightly Lifted is carefully crafted in small doses for a reliable
              and consistent formula that produces a gentle ‘just right’ feeling
              with every use. The perfectly balanced ratio of THC to CBD.
            </p>
          </div>
          <div {...css({ textAlign: 'center' })}>
            <img src={citrusS} alt="lightly lifted with coffee" width="100%" />
          </div>
        </Description>
        <Description>
          <div>
            <h3>Discreet & Easy to Enjoy</h3>
            <p>
              Lightly Lifted provides a mild dose of cannabis in a water-soluble
              solution that mixes seamlessly into your drink. Drop into
              Kombucha, juice, tea, cocktails or coffee. Our sleek 1 oz bottle
              fits easily in your purse so you can enjoy discreetly on-the-go.
            </p>
          </div>
          <div {...css({ textAlign: 'center' })}>
            <img src={coffeeS} alt="lightly lifted with coffee" width="100%" />
          </div>
        </Description>
      </Wrapper>
    </Section>
    <Section
      {...css({
        backgroundColor: 'var(--blue-bg)',
        textAlign: 'center',
      })}
    >
      <Wrapper>
        <h1>How To Use</h1>
        <div
          {...css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            '@media (min-width: 700px)': {
              marginBottom: '40px',
            },

            '@media (min-width: 1000px)': {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          })}
        >
          <Card>
            <img src={dropper} alt="dropper" {...css({ height: '90px' })} />
            <p>Drop Lightly Lifted into the drink of your choice.</p>
          </Card>

          <div {...css({ margin: '20px 0 30px' })}>
            <img
              src={arrow}
              alt="arrow"
              {...css({
                height: '50px',
                transform: 'rotate(90deg)',
                '@media (min-width: 1000px)': { transform: 'rotate(0deg)' },
              })}
            />
          </div>
          <Card>
            <img src={shaker} alt="shaker" {...css({ height: '90px' })} />
            <p>Swish around for 2-3 seconds then enjoy.</p>
          </Card>
        </div>
        <Card
          {...css({
            textAlign: 'left',
            maxWidth: '672px',
            margin: '0 auto',
            p: { width: 'auto', maxWidth: '40ch' },
          })}
        >
          <Bullet>
            Start with a <strong>small dose</strong> (1mL) until you are
            familiar with the effects.
          </Bullet>
          <Bullet>
            Depending on your size of serving, you may begin feeling the effect
            in as little as <strong>30 minutes</strong>; but it may take two or
            more hours for the <strong>full effect</strong> to kick in.
          </Bullet>
          <Bullet>
            <strong>Allow yourself time</strong> to experience each serving
            fully before consuming more.
          </Bullet>
        </Card>
      </Wrapper>
    </Section>
  </Layout>
)

export default IndexPage
