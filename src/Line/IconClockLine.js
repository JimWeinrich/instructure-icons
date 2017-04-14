import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconClockLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconClockLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M962 160c441.067 0 799.911 358.933 799.911 800S1403.067 1760 962 1760c-441.156 0-800-358.933-800-800s358.844-800 800-800zm0 160c-352.757 0-640 287.265-640 640s287.243 640 640 640c352.679 0 639.911-287.276 639.911-640S1314.68 320 962 320zm239.067 996.907L864.222 1092.31v-541.2h195.556V987.69l249.724 166.515-108.435 162.703z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}