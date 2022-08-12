import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"


export default function LineIconComponent(props) {
    return (
        <Svg
            width={3}
            height={41}
            viewBox="0 0 3 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                stroke="url(#paint0_linear_61_5746)"
                strokeWidth={3}
                strokeLinecap="round"
                d="M1.5 39.5L1.5 1.5"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_61_5746"
                    x1={2.99999}
                    y1={3}
                    x2={1.49999}
                    y2={33}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#521280" />
                    <Stop offset={1} stopColor="#C40B83" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

