import Style from "./styles/nav.module.sass"
import Image from "next/image"
import { ResolveImage } from "../../utils/utils"

export default function Nav() {
  return (
    <ul className={Style.container}>
      <li>
        <Image src={ResolveImage("Banner.svg", 190, 80)} width="190" height="80" alt="Banner Image"/>
      </li>
      <li>
        Home
      </li>
      <li>
        About
      </li>
      <li>
        Timeline
      </li>
    </ul>
  )
}
