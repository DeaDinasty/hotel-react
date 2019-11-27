import React from 'react'
import PropTypes from 'prop-types'

import FooterNav from './footer-nav'
import { Logo, TextField, FabIcon } from '~/components'
import './footer.scss'

const Footer = ({ isSimple, onSubscribe }) => (
  <footer className = 'footer'>
    {isSimple ? 
      (
        <div className = 'footer-body footer-body_simple'>

        </div>
      )
    : (
        <div className = 'footer-body'>
          <div className = 'footer-company'>
            <Logo />
            <p>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
            <p className = 'footer-soc'>
              <FabIcon className = 'fa-twitter footer-copyright__icon' />
              <FabIcon className = 'fa-facebook-square footer-copyright__icon' />
              <FabIcon className = 'fa-instagram footer-copyright__icon' />
            </p>
          </div>
          <FooterNav 
            text = 'навигация'
            links = {[{text: 'О нас'},{text: 'Новости'},{text: 'Служба поддержки'},{text: 'Услуги'}]}
          />
          <FooterNav 
            text = 'о нас'
            links = {[{text: 'О сервисе'},{text: 'Наша команда'},{text: 'Вакансии'},{text: 'Инвесторы'}]}
          />
          <FooterNav 
            text = 'Служба поддержки'
            links = {[{text: 'Соглашения'},{text: 'Сообщества'},{text: 'Связь с нами'}]}
          />
          <div className="footer-subscribe">
            <h3>Подписка</h3>
            <p>Получайте специальные предложения и новости сервиса</p>
            <TextField placeholder = 'Email' icon = 'arrow_forward' />
          </div>
        </div>
      )
    }
    {!isSimple && 
      ( 
        <div className="footer-copyright">
          <span className = 'footer-copyright__text'>Copyright © 2018 Toxin UI Kit. All rights reserved.</span>
          <FabIcon className = 'fa-twitter footer-copyright__icon' />
          <FabIcon className = 'fa-facebook-square footer-copyright__icon' />
          <FabIcon className = 'fa-instagram footer-copyright__icon' />
        </div>
      )
    }
  </footer>
)

Footer.propTypes = {
  isSimple: PropTypes.bool,
  onSubscribe: PropTypes.func
}

export default Footer