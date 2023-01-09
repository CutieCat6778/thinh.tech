import Image from "next/image"
import { useEffect, useState } from "react"

export default function DarkModeIcon() {

  const [state, setState] = useState(false)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(document.documentElement.classList.item(0) === "dark")
    setLoaded(true)
  }, [])


  if(loaded) {
    if(state) {
      return <Image src="/moon.svg" width={36} height={36} alt="Dark mode icon"/>
    } else {
      return <Image src="/sun.svg" width={36} height={36} alt="Dark mode icon"/>
    }
  } else {
    return null
  }
}