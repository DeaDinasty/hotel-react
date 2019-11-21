import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DateUtils } from 'react-day-picker';
import PropTypes from 'prop-types'

import { dateRangeSelector } from '~/selectors/filters'
import { Calendar } from '~/components'

const DateRange = ({ date_range }) => {
  const [dateRange, setDateRange] = useState(date_range)
  const changeDateRange = (day) => {
    const range = DateUtils.addDayToRange(day, dateRange)
    setDateRange(range)
  }

  return (
    <Calendar selectedDays = {dateRange} onChangeRange = {changeDateRange} />
  )
}

DateRange.propTypes = {
  date_range: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number
  })
}

const mapStateToProps = (state) => ({
  date_range: dateRangeSelector(state)
})

export default connect(mapStateToProps)(DateRange)