/* eslint max-classes-per-file: 0 */

declare module 'react-slideshow-image' {
  import * as React from 'react'

  export class Zoom extends React.Component<ZoomProps & any, any> {
    goBack(): void

    goNext(): void

    goTo(index: number): void
  }
  export class Fade extends React.Component<SlideshowProps & any, any> {
    goBack(): void

    goNext(): void

    goTo(index: number): void
  }
  export class Slide extends React.Component<SlideshowProps & any, any> {
    goBack(): void

    goNext(): void

    goTo(index: number): void
  }
  export interface SlideshowProps {
    duration?: number
    transitionDuration?: number
    defaultIndex?: number
    indicators?: boolean | function
    prevArrow?: object | function
    nextArrow?: object | function
    arrows?: boolean
    autoplay?: boolean
    infinite?: boolean
    onChange?(oldIndex: number, newIndex: number): void
    pauseOnHover?: boolean

    render(): JSX.Element
  }
  export interface ZoomProps extends SlideshowProps {
    scale: number
  }
}
