import React from 'react'
import styled, { css } from 'styled-components'

const width = '16'
const height = '16'
const viewBox = '0 0 16 16'

const getDimensions = () => ({
  height,
  width
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({ noStyles }) => (!noStyles ? getDimensionsCss() : null)};
`

const defaultProps = {
  children: [
    <path
      key="xlsx-icon-path-1"
      d="M15.556 6.222h-1.334v-3.11a.445.445 0 0 0-.13-.315L11.425.13a.445.445 0 0 0-.314-.13H2.222a.444.444 0 0 0-.444.444v5.778H.444A.444.444 0 0 0 0 6.667v6.222c0 .245.199.444.444.444h1.334v2.223c0 .245.199.444.444.444h11.556a.444.444 0 0 0 .444-.444v-2.223h1.334A.444.444 0 0 0 16 12.89V6.667a.444.444 0 0 0-.444-.445zm-4-4.705l1.149 1.15h-1.15v-1.15zM2.666.89h8v2.667h2.667v2.666H2.667V.89zm10.668 14.22H2.667v-1.778h10.666v1.778zm1.778-2.667H.89V7.111h14.22v5.333z"
    />,
    <path
      key="xlsx-icon-path-2"
      d="M3.111 11.111c0-.338.168-.644.445-.827.276.183.444.49.444.827v.445h.889v-.445a1.87 1.87 0 0 0-.557-1.333c.35-.347.557-.82.557-1.334V8H4v.444a.987.987 0 0 1-.444.827.987.987 0 0 1-.445-.827V8h-.889v.444c0 .513.207.987.557 1.334a1.87 1.87 0 0 0-.557 1.333v.445h.89v-.445zm4.445-.444H6.222V8h-.889v3.556h2.223zm3.111-.445a.89.89 0 0 0-.89-.889H8.89c0-.245.2-.444.444-.444h1.334V8H9.333C8.598 8 8 8.598 8 9.333c0 .49.399.89.889.89h.889c0 .244-.2.444-.445.444H8v.889h1.333c.736 0 1.334-.598 1.334-1.334zm1.333.889c0-.338.168-.644.444-.827.277.183.445.49.445.827v.445h.889v-.445a1.87 1.87 0 0 0-.557-1.333c.35-.347.557-.82.557-1.334V8h-.89v.444a.987.987 0 0 1-.444.827.987.987 0 0 1-.444-.827V8h-.889v.444c0 .513.207.987.557 1.334a1.87 1.87 0 0 0-.557 1.333v.445H12v-.445z"
    />
  ],

  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'XlsxIcon'
})
