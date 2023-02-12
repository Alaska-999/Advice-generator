import {createGlobalStyle} from "styled-components";
import ManropeWoff from "../fonts/Manrope-Medium.woff";
import ManropeWoff2 from "../fonts/Manrope-Medium.woff2";
import ManropeTtf from "../fonts/Manrope-Medium.ttf";

import ManropeWoffB from "../fonts/Manrope-ExtraBold.woff";
import ManropeWoff2B from "../fonts/Manrope-ExtraBold.woff2";
import ManropeTtfB from "../fonts/Manrope-ExtraBold.ttf";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Manrope Bold";
    src: url(${ManropeWoffB}) format('woff'),
    url(${ManropeWoff2B}) format('woff2'),
    url(${ManropeTtfB}) format('truetype')
  }
  @font-face {
    font-family: "Manrope";
    src: url(${ManropeWoff}) format('woff'),
    url(${ManropeWoff2}) format('woff2'),
    url(${ManropeTtf}) format('truetype')
  }
`

export default FontStyles