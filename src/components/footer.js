import React from 'react'
import { Link } from 'gatsby'
import { css as emoCSS } from 'emotion'
import styled from 'react-emotion'

import logo from '../images/logo.svg'

const css = (...args) => ({ className: emoCSS(...args) })

const Footer = () => {
  return (
    <div
      id="footer"
      {...css({
        '@media (min-width: 700px)': { padding: '40px' },
      })}
    >
      <div {...css({ textAlign: 'center', p: { fontSize: '14px' } })}>
        <img src={logo} alt="lightly lifted" width="150px" />
        <p>
          ©2018
          <br />
          Adult Use: Lis# CDPH-T000800
          <br />
          San Francisco, California
          <br />
          contact@lightlylifted.com
          <br />
          (415)-577-3702
        </p>
      </div>
      <div {...css({ padding: '10px', p: { fontSize: '14px' } })}>
        <p>
          Prop 65
          <br />
          WARNING: This product may contain chemicals known to the State of
          California to cause cancer, birth defects or other reproductive harm.
          Women who are pregnant, breastfeeding or at risk of being pregnant
          should avoid direct or indirect exposure to this product as they may
          expose their Child to an increased risk of cancer, birth defects, or
          other reproductive harm. The user of this product knowingly and
          voluntarily assumes any all risk including, but not limited to, at
          risk of cancer, birth defects or other reproductive harm, from
          exposure to this product and/or any chemical contained within it. For
          more information go to www.P65Warnings.ca.gov or for more information
          click here
        </p>
        <p>
          FDA Disclaimer: These statements have not been evaluated by the FDA
          and are not intended to diagnose, treat, cure or prevent any disease.
          Individual results may vary. Always consult with your doctor before
          starting any treatment.
        </p>
      </div>
    </div>
  )
}

export default Footer
