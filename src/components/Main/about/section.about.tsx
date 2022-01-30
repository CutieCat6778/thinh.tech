import {  FC } from "react";
import { Scroll } from "../../../interface/state";
import { SectionText } from "./text.section.aout";

export const SectionAbout: FC<Scroll> = ({y}) => {
  if(y > 200){
    return <SectionText/>
  } else return null;
}
