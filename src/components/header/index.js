import React from 'react'
import PropTypes from 'prop-types'

import { Logo, Link, Button } from '~/components'
import './header.scss'

/** INFO
 *  On user name padding = 20px 
 *  (not 30 like ui kit bcse in website pages disigner use 20px between nav elements)
 */

const Header = ({ userName, onLogin, onRegistration }) => (
  <header className = 'header'>
    <Logo />
    <nav className = 'header-nav'>
      <ul className = 'header-nav__list'>
        <li className = 'header-nav__list-item'>
          <Link text = 'О нас' />
        </li>
        <li className = 'header-nav__list-item'>
          <Link text = 'Услуги' isExpandable = {true} />
        </li>
        <li className = 'header-nav__list-item'>
          <Link text = 'Вакансии' />
        </li>
        <li className = 'header-nav__list-item'>
          <Link text = 'Новости' />
        </li>
        <li className = 'header-nav__list-item'>
          <Link text = 'Соглашения' isExpandable = {true} />
        </li>
      </ul>
    </nav>
    {userName ? 
      (
        <div className = 'header-user'>
          <Link text = {userName} />
        </div>
      )
    : (
        <div className = 'header-noauth'>
          <Button 
            text = {'войти'} 
            type = 'hollow'
            className = 'header__login-button'
            onClick = {onLogin}
          />
          <Button 
            text = {'зарегистрироваться'}
            type = 'fill'
            onClick = {onRegistration}
          />
        </div>
      )
    }
  </header>
)

Header.propTypes = {
  userName: PropTypes.string,
  onLogin: PropTypes.func,
  onRegistration: PropTypes.func,
}

export default Header