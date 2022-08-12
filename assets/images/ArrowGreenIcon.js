import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ArrrowGreenIconComponent(props) {
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
        d="M5 13V1m0 0L1 5.91M5 1l4 4.91"
        stroke="#2FB600"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
