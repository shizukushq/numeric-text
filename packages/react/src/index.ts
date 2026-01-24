import '@numeric-text/core/ssr.css';

export { default } from './NumericText';
export type * from '@numeric-text/core';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'numeric-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
}
