import '@numeric-text/core/ssr.css'

export { default } from './NumericText'
export type * from '@numeric-text/core'

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'numeric-text': JSX.HTMLAttributes<HTMLElement>
    }
  }
}
