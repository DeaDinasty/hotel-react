export const changeWithIncrDecr = (oldValue, type) => {
  if (type === 'TYPE::DECREMENT' && oldValue !== 0) return oldValue - 1
  else if (type === 'TYPE::INCREMENT') return oldValue + 1

  return null
}