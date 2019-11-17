import { changeWithIncrDecr } from './helper'

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
      return { ...filters, guestsList: payload.guestsList }
  
    case 'FILTERS::CHANGE_PRICE_RANGE':
      return { ...filters, priceRange: payload.priceRange }
  
    case 'FILTERS::CHANGE_ROOM_RULES':
      return { ...filters, roomRules: payload.roomRules }
  
    case 'FILTERS::CHANGE_ACCESSIBILITY':
      return { ...filters, accessibility: payload.accessibility }
  
    case 'FILTERS::CHANGE_AMENITIES':
      const { name, type } = payload
      const newValue = changeWithIncrDecr(filters.amenities[name], type)
      
      if (newValue === null) return filters

      return { 
        ...filters,
        amenities: {
          ...filters.amenities,
          [name]: newValue
        }

      }
      return { ...filters, amenities: payload.amenities }
  
    case 'FILTERS::CHANGE_ADDITIONAL_AMENITIES':
      return { ...filters, additionalAmenities: payload.additionalAmenities }
  
    default:
      return filters
  }
}