import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ArrowRedIconComponent(props) {
  return (
    <Svg
      width={10}
      height={14}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5 1v12m0 0L1 8.09M5 13l4-4.91"
        stroke="#EC0A0A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
