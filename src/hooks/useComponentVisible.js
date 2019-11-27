import { useState, useEffect, useRef } from 'react'

export default function useComponentVisible(initialIsVisible, checkVisible, count) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  let ref
  if (count) {
    ref = new Array(count)

    for (let i = 0; i < count; i++) ref[i] = useRef(null)
  } else ref = useRef(null)

  const handleClickOutside = (event) => {
    if (!count) {
      if (ref.current) {
        if (!ref.current.contains(event.target)) 
          setIsComponentVisible(false)
        else checkVisible && setIsComponentVisible(true)
      }
    } else {
      let visible = false

      ref.map((value) => {
        if (value.current) 
          if (value.current.contains(event.target)) visible = true
      })

      if (visible && checkVisible) !isComponentVisible && setIsComponentVisible(true)
      else if (!visible) isComponentVisible && setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}