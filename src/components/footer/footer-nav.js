import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '~/components'

const FooterNav = ({ text, links }) => (
  <ul className="footer-nav">
    <h3 className = 'footer-nav__name'>{text}</h3>
    {
      links.map((link, index) => (
        <li
          className = 'footer-nav__item'
          key = {`footer-list${index}`}
        >
          <Link text = {link.text} href = {link.href} />
        </li>
      ))
    }
  </ul>
)

FooterNav.propTypes = {
  text: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string
  })).isRequired
}

export default FooterNav