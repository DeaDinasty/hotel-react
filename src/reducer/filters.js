const defaultFilters = {
  dateRange: {
    from: null,
    to: null
  },
  guestsList: {
    adults: null,
    children: null,
    babies: null
  },
  priceRange: {
    from: null,
    to: null
  },
  roomRules: {
    smoke: null,
    pets: null,
    guests: null
  },
  accessibility: {
    wideСorridor: null,
    disabledAssistant: null
  },
  amenities: {
    bedrooms: null,
    beds: null,
    bathrooms: null
  },
  additionalAmenities: {
    breakfast: null,
    desk: null,
    feedingChair: null,
    crib: null,
    tv: null,
    shampoo: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case 'FILTERS::CHANGE_DATE_RANGE':
      return { ...filters, dateRange: payload.dateRange }
  
    case 'FILTERS::CHANGE_GUESTS_LIST':
      return { ...filters, guestsList: payload.guestsList }
  
    case 'FILTERS::CHANGE_PRICE_RANGE':
      return { ...filters, priceRange: payload.priceRange }
  
    case 'FILTERS::CHANGE_ROOM_RULES':
      return { ...filters, roomRules: payload.roomRules }
  
    case 'FILTERS::CHANGE_ACCESSIBILITY':
      return { ...filters, accessibility: payload.accessibility }
  
    case 'FILTERS::CHANGE_AMENITIES':
      return { ...filters, amenities: payload.amenities }
  
    case 'FILTERS::CHANGE_ADDITIONAL_AMENITIES':
      return { ...filters, additionalAmenities: payload.additionalAmenities }
  
    default:
      return filters
  }
}