/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface UcSideDrawer {
    'open': () => Promise<void>;
    'opened': boolean;
    'title': string;
  }
}

declare global {


  interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {}
  var HTMLUcSideDrawerElement: {
    prototype: HTMLUcSideDrawerElement;
    new (): HTMLUcSideDrawerElement;
  };
  interface HTMLElementTagNameMap {
    'uc-side-drawer': HTMLUcSideDrawerElement;
  }
}

declare namespace LocalJSX {
  interface UcSideDrawer extends JSXBase.HTMLAttributes<HTMLUcSideDrawerElement> {
    'opened'?: boolean;
    'title'?: string;
  }

  interface IntrinsicElements {
    'uc-side-drawer': UcSideDrawer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


