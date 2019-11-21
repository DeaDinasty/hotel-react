const MAX_VALUE = 99
const SERVICE_VAR = 'order'

export const changeWithIncrDecr = (oldValue, type) => {
  if (oldValue === undefined) return null

  if (type === 'TYPE::DECREMENT' && oldValue !== 0) return oldValue - 1
  else if (type === 'TYPE::INCREMENT' && oldValue !== MAX_VALUE) return oldValue + 1

  return null
}

export const applyChanges = (oldObject, newObject) => {
  const result = {}

  for (let [key, value] of Object.entries(oldObject)) {
    if (key === SERVICE_VAR) {
      result[key] = value
      continue
    }

    result[key] = newObject[key]
  }

  return result
}