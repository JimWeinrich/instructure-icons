import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconZippedLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconZippedLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 160H480c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM480 1600V320h480v160h160V320h320l.08 1280H480zm640-1120h160v160h-160V480zM960 640h160v160H960V640zm160 160h160v160h-160V800zM960 960h160v160H960V960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}