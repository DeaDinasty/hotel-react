// Just helper for me, this func generate id's for list
// Adds id's, in objects array and normalize by id
const generateId = () => {
  const sessionIds = []

  const generate = () => {
    const temp = Math.random().toString(36).substring(2, 15)

    if (temp.length < 7) return generate()
    else return temp
  }

  return function generateAndCheck() {
    const id = generate().concat(Date.now())

    if (!sessionIds.includes(id)) {
      sessionIds.push(id)
      return id
    } else return generateAndCheck()
  }
}

export default (list) => {
  const generate = generateId()

  list.reduce((acc, item) => ({ ...acc, [generate()]: item }))
}