export const changeDateRange = (dateRange) => 
  ({
    type: 'FILTERS::CHANGE_DATE_RANGE',
    payload: { dateRange }
  })

export const changeGuestsList = (guestslist) => 
  ({
    type: 'FILTERS::CHANGE_GUESTS_LIST',
    payload: { guestslist }
  })

export const changePriceRange = (priceRange) => 
  ({
    type: 'FILTERS::CHANGE_PRICE_RANGE',
    payload: { priceRange }
  })

export const changeRoomRules = (roomRules) => 
  ({
    type: 'FILTERS::CHANGE_ROOM_RULES',
    payload: { roomRules }
  })

export const changeAccessibility = (accessibility) => 
  ({
    type: 'FILTERS::CHANGE_ACCESSIBILITY',
    payload: { accessibility }
  })

export const changeAmenities = (amenities) => 
  ({
    type: 'FILTERS::CHANGE_AMENITIES',
    payload: { amenities }
  })

export const changeAdditionalAmenities = (additionalAmenities) => 
  ({
    type: 'FILTERS::CHANGE_ADDITIONAL_AMENITIES',
    payload: { additionalAmenities }
  })