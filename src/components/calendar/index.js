import React from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/ru'
import PropTypes from 'prop-types'

import { MaterialIcon } from '~/components'
import './calendar.scss'

const Navbar = ({
  onPreviousClick,
  onNextClick,
  className,
}) => {
  return (
    <div className={className}>
      <button className = 'calender-nav-button calender-nav-button_back' onClick={() => onPreviousClick()}>
        <MaterialIcon icon = {'arrow_back'} className = 'calender-nav-button__arrow' />
      </button>
      <button className = 'calender-nav-button calender-nav-button_forward' onClick={() => onNextClick()}>
        <MaterialIcon icon = {'arrow_forward'} className = 'calender-nav-button__arrow' />
      </button>
    </div>
  );
}

// for prefect date range ::before styling
const getClassName = (from ,to) => {
  if ((from && to) && (from.getTime() != to.getTime())) return 'range'
  
  return null
}

const Calendar = ({ selectedDays, onChangeRange }) => {
  const { from, to } = selectedDays
  const modifiers = { start: from, end: to }
  
  return (
    <DayPicker 
      className = {getClassName(from, to)}
      navbarElement = {<Navbar />} 
      fixedWeeks
      localeUtils = {MomentLocaleUtils}
      locale = 'ru'
      selectedDays = {[from, { from, to }]}
      modifiers = {modifiers}
      onDayClick = {onChangeRange}
    />
  )
}

Calendar.propTypes = {
  selectedDays: PropTypes.shape({
    from: PropTypes.date,
    to: PropTypes.date
  }),
  onChangeRange: PropTypes.func
}

export default Calendar