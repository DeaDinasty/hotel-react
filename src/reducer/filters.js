import { changeWithIncrDecr, applyChanges } from './helper'

const defaultFilters = {
  dateRange: {
    from: null,
    to: null
  },
  guestsList: {
    adults: null,
    children: null,
    babies: null,
    order: ['adults', 'children', 'babies']
  },
  priceRange: {
    from: null,
    to: null
  },
  roomRules: {
    smoke: null,
    pets: null,
    guests: null,
    order: ['smoke', 'pets', 'guests']
  },
  accessibility: {
    wideСorridor: null,
    disabledAssistant: null,
    order: ['wideСorridor', 'disabledAssistant']
  },
  amenities: {
    bedrooms: null,
    beds: null,
    bathrooms: null,
    order: ['bedrooms', 'beds', 'bathrooms']
  },
  additionalAmenities: {
    breakfast: null,
    desk: null,
    feedingChair: null,
    crib: null,
    tv: null,
    shampoo: null,
    order: ['breakfast', 'desk', 'feedingChair', 'crib', 'tv', 'shampoo']
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case 'FILTERS::CHANGE_DATE_RANGE':
      return { ...filters, dateRange: payload.dateRange }
  
    case 'FILTERS::CHANGE_GUESTS_LIST':
      const newGuestsList = applyChanges(filters.guestsList, payload.guestsList)

      if (newGuestsList === null) return filters

      return { 
        ...filters,
        guestsList: newGuestsList
      }
  
    case 'FILTERS::CHANGE_PRICE_RANGE':
      return { ...filters, priceRange: payload.priceRange }
  
    case 'FILTERS::CHANGE_ROOM_RULES':
      return { ...filters, roomRules: payload.roomRules }
  
    case 'FILTERS::CHANGE_ACCESSIBILITY':
      return { ...filters, accessibility: payload.accessibility }
  
    case 'FILTERS::CHANGE_AMENITIES':
      const newAmenitiesValue = changeWithIncrDecr(filters.amenities[payload.name], payload.type)
      
      if (newAmenitiesValue === null) return filters

      return { 
        ...filters,
        amenities: {
          ...filters.amenities,
          [payload.name]: newAmenitiesValue
        }
      }
  
    case 'FILTERS::CHANGE_ADDITIONAL_AMENITIES':
      return { ...filters, additionalAmenities: payload.additionalAmenities }
  
    default:
      return filters
  }
}