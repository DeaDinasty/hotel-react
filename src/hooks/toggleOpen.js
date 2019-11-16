import { useState } from 'react'

export default (initialValue) => {
  const [isOpen, setOpen] = useState(initialValue)
  const toggleOpen = () => setOpen(prevState => !prevState)

  return {
    isOpen,
    toggleOpen
  }
}