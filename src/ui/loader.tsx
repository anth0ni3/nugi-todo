import React from 'react';

import {cn} from '~/utils/cn';

const loaderStyles = {
  base: 'h-auto',
  sizes: {
    xs: 'icon-sm',
    sm: 'icon-sm',
    default: 'icon-md',
    lg: 'icon-md',
    xl: 'icon-lg',
  },
  colors: {
    current: 'text-current',
    primary: 'text-primary',
    secondary: 'text-secondary',
    danger: 'text-red',
    info: 'text-blue',
    success: 'text-green',
    warning: 'text-orange',
  },
};

export type LoaderSizeTypes = keyof typeof loaderStyles.sizes;
export type LoaderColorTypes = keyof typeof loaderStyles.colors;
export interface LoaderTypes extends React.SVGProps<SVGSVGElement> {
  size?: LoaderSizeTypes;
  color?: LoaderColorTypes;
  className?: string;
}

const Loader = React.forwardRef<SVGSVGElement, LoaderTypes>(
  ({size = 'default', color = 'current', className, ...props}, ref) => {
    const SVGComponent = Spinner;
    return (
      <SVGComponent
        ref={ref}
        data-testid="loader"
        className={cn(
          loaderStyles.base,
          loaderStyles.sizes[size],
          loaderStyles.colors[color],
          className
        )}
        {...props}
      />
    );
  }
);

Loader.displayName = 'Loader';

export {Loader};

//Bars Spinner

export function BarsSpinner({fill, ...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ?? 'currentColor'}
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path d="M11 1h2v5h-2z" opacity={0.14} />
        <path d="m16.634 1.974 1.732 1-2.5 4.33-1.732-1z" opacity={0.29} />
        <path d="m21.026 5.634 1 1.732-4.33 2.5-1-1.732z" opacity={0.43} />
        <path d="M23 11v2h-5v-2z" opacity={0.57} />
        <path d="m22.026 16.634-1 1.732-4.33-2.5 1-1.732z" opacity={0.71} />
        <path d="m18.366 21.026-1.732 1-2.5-4.33 1.732-1z" opacity={0.86} />
        <path d="M13 23h-2v-5h2z" />
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        />
      </g>
    </svg>
  );
}

BarsSpinner.displayName = 'BarsSpinner';

export function Spinner({...props}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g stroke="currentColor">
        <circle
          cx={12}
          cy={12}
          r={9.5}
          fill="none"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <animate
            attributeName="stroke-dasharray"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0 150;42 150;42 150;42 150"
          />
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0;-16;-59;-59"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="2s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  );
}
