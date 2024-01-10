import { useEffect, useState } from 'react'

const useHideOnScroll = (hideOnScrollDown: boolean) => {
  const [hide, setHide] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    if (!hideOnScrollDown) return () => {}

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll) {
        setHide(true)
      } else if (currentScroll < lastScroll) {
        setHide(false)
      }

      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [hideOnScrollDown, lastScroll])

  return hide
}

export default useHideOnScroll
