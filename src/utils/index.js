export const bigNumberSpace = (number, pow = 3) => {
  const number_string = number.toString()

  const big_number = number_string.slice(0, -pow)
  const mod_number = number_string.slice(-pow, number_string.length)

  if (big_number) return `${bigNumberSpace(big_number)} ${mod_number}`
  return number
}