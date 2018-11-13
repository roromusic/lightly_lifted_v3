import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { css as emoCSS } from 'emotion'

import Layout from '../components/layout'
import heroBg from '../images/hero.jpg'
import bottleS from '../images/bottle-s.png'

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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
