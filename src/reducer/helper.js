const MAX_VALUE = 99

export const changeWithIncrDecr = (oldValue, type) => {
  if (oldValue === undefined) return null

  if (type === 'TYPE::DECREMENT' && oldValue !== 0) return oldValue - 1
  else if (type === 'TYPE::INCREMENT' && oldValue !== MAX_VALUE) return oldValue + 1

  return null
}