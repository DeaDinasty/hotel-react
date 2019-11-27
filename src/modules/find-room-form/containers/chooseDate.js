import React, { useState, useCallback, useEffect } from 'react'
import { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { useComponentVisible as useComponentIsActive } from '~/hooks'
import { changeDateRange } from '~/ac/filters'
import { dateRangeSelector } from '~/selectors/filters'
import { Dropdown, Calendar } from '~/components'

const CHOOSE_DATE_CONSTANTS = {
  default: 'ДД.ММ.ГГГГ'
}

const getDropdownText = (date) => {
  if (!date) return null

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

const ChooseDate = ({ date_range, changeDateRange }) => {
  const [dateRange, setDateRange] = useState(date_range)
  const { ref, isComponentVisible: isOpen, setIsComponentVisible: setIsOpen } = useComponentIsActive(false)
  console.log(isOpen);
  

  const arrivalDropdownText = getDropdownText(dateRange.from)
  const departureDropdownText = getDropdownText(dateRange.to)

  const handleClear = () => setDateRange({from: null, to: null})

  const onApply = () => {
    changeDateRange(dateRange)
    setIsOpen(prevState => !prevState)
  }

  const changeRange = (day) => {
    const range = DateUtils.addDayToRange(day, dateRange)
    setDateRange(range)
  }

  useEffect(() => {
    setDateRange(date_range)
  }, [date_range, isOpen])

  return (
    <div className = 'find-room-time'>
      <div className = 'find-room-item'>
        <p className = 'find-room__legend'>
          прибытие
        </p>
        <Dropdown 
          headerText = {arrivalDropdownText || CHOOSE_DATE_CONSTANTS.default}
          isOpen = {isOpen}
          onOpen = {setIsOpen(prevState => !prevState)}
          onApply = {onApply}
          onClear = {arrivalDropdownText || departureDropdownText ? handleClear : null}
          className = 'find-room-time__date dropdown_big-body'
          ref = {ref}
        >
          <Calendar 
            selectedDays = {dateRange}
            onChangeRange = {changeRange}
          />
        </Dropdown>
      </div>
      <div className = 'find-room-item'>
        <p className = 'find-room__legend'>
          выезд
        </p>
        <Dropdown 
          headerText = {departureDropdownText || CHOOSE_DATE_CONSTANTS.default}
          isOpen = {isOpen}
          onOpen = {}
          className = 'find-room-time__date'
        />
      </div>
    </div>
  )
}
ChooseDate.propTypes = {
  date_range: PropTypes.shape({
    from: PropTypes.date,
    to: PropTypes.date
  }).isRequired,
  changeDateRange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  date_range: dateRangeSelector(state)
})

export default connect(mapStateToProps, { changeDateRange })(ChooseDate)