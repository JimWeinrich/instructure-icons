import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconStudentViewLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconStudentViewLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-320H600c-88.24 0-160-71.76-160-160V440c0-88.32 71.76-160 160-160h1040c88.24 0 160 71.68 160 160v720c0 88.24-71.76 160-160 160zM600 440v720h1040.08l-.08-720H600zm960 320h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240s240 92.72 240 240H680zm400-400c0 88.32-71.68 160-160 160s-160-71.68-160-160 71.68-160 160-160 160 71.68 160 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}