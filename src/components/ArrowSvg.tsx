import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const ArrowSvg=(props:any)=> {
  return (
    <Svg
      width={250}
      height={43}
      viewBox="0 0 250 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#D9D9D9" d="M0 14H229.091V28H0z" />
      <Path d="M250 21.5l-21.136 18.62V2.88L250 21.5z" fill="#D9D9D9" />
      <Path d="M247.273 22l-16.364 12.99V9.01L247.273 22z" fill="#7B7B7B" />
      <Path
        fill="url(#paint0_linear_1_243)"
        d="M19.0909 16H237.2729V26H19.0909z"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_243"
          x1={27.7273}
          y1={26}
          x2={245}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D9D9D9" />
          <Stop offset={1} stopColor="#767575" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default ArrowSvg;