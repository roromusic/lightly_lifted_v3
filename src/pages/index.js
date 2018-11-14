import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { css as emoCSS } from 'emotion'

import Layout from '../components/layout'
import heroBg from '../images/hero.jpg'
import bottleS from '../images/bottle-s.png'
import cocktail from '../images/cocktail.svg'
import mind from '../images/mind.svg'
import heart from '../images/heart.svg'
import fireworks from '../images/fireworks.svg'

const css = (...args) => ({ className: emoCSS(...args) })

const Hero = styled('div')`
  background: url(${heroBg}) no-repeat center;
  background-size: cover;
`
const Wrapper = styled('div')`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
`
const Section = styled('div')`
  margin: 40px 0;
`

const Card = styled('div')`
  box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  text-align: center;
  font-size: 1.4rem;
  margin: 20px 0;
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
        })}
      >
        <img src={bottleS} alt="Lightly Lifted Bottle" />
        <h1>Indulge with Intention</h1>
        <p {...css({ fontSize: '1.5rem' })}>
          Introducing a light cannabis experience you can enjoy on your own
          terms. Just a few drops into the beverage of your choice, swish to mix
          and enjoy a gentle lift.
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
            margin: '0 10px',
            position: 'absolute',
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
          })}
        >
          Coming Soon
        </span>
      </Wrapper>
    </Hero>
    <Section>
      <Wrapper>
        <div>
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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
