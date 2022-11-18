import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const width = '44'
const height = '52'
const viewBox = '0 0 44 52'

const sizes = {}

// somehow sizes is ending up in markup, even if it is not a valid svg attribute
// until we have a better solution, just render it empty, instead to '[Object object]'
Object.defineProperty(sizes, 'toString', { value: () => '', enumerable: false })

const getDimensions = (size, sizes) => {
  if (size && typeof size.width === 'number' && typeof size.height === 'number') {
    return size
  }
  return size && sizes[size]
    ? sizes[size]
    : { width, height }
}

const getCss = (size, sizes, fillColor, fillColorRule, noStyles) => {
  if (noStyles) { return '' }
  const dimensions = getDimensions(size, sizes)
  const fillRule = fillColor && fillColorRule ? `${fillColorRule}{ fill: ${fillColor}; }` : ''
  return css`
    width: ${dimensions.width}px;
    height: ${dimensions.height}px;
    ${fillRule}
  `
}

const propsToCss = ({
  size,
  sizes,
  fillColor,
  fillColorRule,
  noStyles
}) => getCss(size, sizes, fillColor, fillColorRule, noStyles)

const Image = styled.svg`${propsToCss}`

const children = (
  <Fragment>
    <g
      fill='none'
      fillRule='evenodd'
      key='key-0'
    >
      <path
        fill='#FEC008'
        fillRule='nonzero'
        d='M0 0h44v52H0z'
      />
      <path
        fill='#000'
        d='M9.97 14a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11v-6.7c0-.047.013-.083.04-.11A.149.149 0 0 1 9.97 7h.66c.047 0 .083.013.11.04.027.027.04.063.04.11v6.7a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66zm4.8-5.16c.547 0 .98.158 1.3.475.32.317.48.745.48 1.285v3.25a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11v-3.06c0-.333-.097-.603-.29-.81-.193-.207-.45-.31-.77-.31a1.07 1.07 0 0 0-.725.255c-.197.17-.312.398-.345.685v3.24a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11V9.06c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.66c.047 0 .083.013.11.04.027.027.04.063.04.11v.28c0 .02.007.033.02.04.013.007.023.003.03-.01.28-.353.7-.53 1.26-.53zm3.91-.69a.663.663 0 0 1-.475-.175.598.598 0 0 1-.185-.455c0-.187.062-.338.185-.455a.663.663 0 0 1 .475-.175c.193 0 .35.058.47.175.12.117.18.268.18.455s-.06.338-.18.455a.646.646 0 0 1-.47.175zM18.35 14a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11V9.06c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.66c.047 0 .083.013.11.04.027.027.04.063.04.11v4.79a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66zm4.99-4.45a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-1.02c-.033 0-.05.017-.05.05v2.61c0 .287.062.49.185.61s.322.18.595.18h.24c.047 0 .083.013.11.04.027.027.04.063.04.11v.52c0 .093-.05.147-.15.16l-.41.01c-.513 0-.897-.09-1.15-.27-.253-.18-.38-.517-.38-1.01V9.75c0-.033-.017-.05-.05-.05h-.55a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11v-.49c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.55c.033 0 .05-.017.05-.05V7.74c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.62c.047 0 .083.013.11.04.027.027.04.063.04.11v1.12c0 .033.017.05.05.05h1.02c.047 0 .083.013.11.04.027.027.04.063.04.11v.49zm1.94-1.4a.663.663 0 0 1-.475-.175.598.598 0 0 1-.185-.455c0-.187.062-.338.185-.455a.663.663 0 0 1 .475-.175c.193 0 .35.058.47.175.12.117.18.268.18.455s-.06.338-.18.455a.646.646 0 0 1-.47.175zM24.95 14a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11V9.06c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.66c.047 0 .083.013.11.04.027.027.04.063.04.11v4.79a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66zm4.35-5.17c.407 0 .762.072 1.065.215.303.143.537.343.7.6.163.257.245.548.245.875v3.33a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11v-.28c0-.02-.007-.033-.02-.04-.013-.007-.027-.003-.04.01a1.937 1.937 0 0 1-.665.4c-.257.093-.535.14-.835.14-.487 0-.887-.125-1.2-.375-.313-.25-.47-.628-.47-1.135 0-.52.182-.928.545-1.225.363-.297.872-.445 1.525-.445h1.11c.033 0 .05-.017.05-.05v-.26c0-.293-.085-.522-.255-.685-.17-.163-.428-.245-.775-.245-.273 0-.495.05-.665.15-.17.1-.282.24-.335.42-.027.087-.083.127-.17.12l-.72-.09a.208.208 0 0 1-.11-.045.084.084 0 0 1-.03-.085c.06-.38.275-.692.645-.935.37-.243.825-.365 1.365-.365zm-.27 4.44c.353 0 .662-.093.925-.28.263-.187.395-.423.395-.71v-.58c0-.033-.017-.05-.05-.05h-.93c-.393 0-.707.077-.94.23a.725.725 0 0 0-.35.64c0 .247.088.433.265.56.177.127.405.19.685.19zm3.93.73a.149.149 0 0 1-.11-.04.149.149 0 0 1-.04-.11v-6.7c0-.047.013-.083.04-.11a.149.149 0 0 1 .11-.04h.66c.047 0 .083.013.11.04.027.027.04.063.04.11v6.7a.149.149 0 0 1-.04.11.149.149 0 0 1-.11.04h-.66z'
      />
      <path
        fill='#000'
        fillRule='nonzero'
        d='M19 19h6v11h3l-6 8-6-8h3zM8 40h28v1H8z'
      />
    </g>
  </Fragment>
)

const defaultProps = {
  children,
  viewBox,
  fillColor: null,
  fillColorRule: '&&& path, &&& use, &&& g',
  sizes,
  size: null
}

const propTypes = {
  fillColor: PropTypes.string,
  fillColorRule: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ]),
  sizes: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  })
}

export default Object.assign(Image, {
  getDimensions,
  getCss,
  defaultProps,
  propTypes,
  displayName: 'Initial'
})
