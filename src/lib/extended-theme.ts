export const extendedTheme = {
  colors: {
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    bgColor: {
      default: 'var(--bgColor-default)',
      disabled: '--bgColor-disabled',
      white: 'var(--bgColor-white)',
      black: 'var(--bgColor-black)',
      muted: 'var(--bgColor-muted)',
      inset: 'var(--bgColor-inset)',
      emphasis: 'var(--bgColor-emphasis)',
      inverse: 'var(--bgColor-inverse)',
      transparent: 'var(--bgColor-transparent)',
      'accent-muted': 'var(--bgColor-accent-muted)',
      'accent-emphasis': 'var(--bgColor-accent-emphasis)',
      'danger-muted': 'var(--bgColor-danger-muted)',
      'danger-emphasis': 'var(--bgColor-danger-emphasis)',
      'success-muted': 'var(--bgColor-success-muted)',
      'success-emphasis': 'var(--bgColor-success-emphasis)',
      'attention-muted': 'var(--bgColor-attention-muted)',
      'attention-emphasis': 'var(--bgColor-attention-emphasis)',
    },
    fgColor: {
      default: 'var(--fgColor-default)',
      muted: 'var(--fgColor-muted)',
      emphasis: 'var(--fgColor-onEmphasis)',
      white: 'var(--fgColor-white)',
      black: 'var(--fgColor-black)',
      disabled: 'var(--fgColor-disabled)',
      link: 'var(--fgColor-link)',
      accent: 'var(--fgColor-accent)',
      danger: 'var(--fgColor-danger)',
      success: 'var(--fgColor-success)',
      attention: 'var(--fgColor-attention)',
    },
    border: {
      default: 'var(--borderColor-default)',
      muted: 'var(--borderColor-muted)',
      emphasis: 'var(--borderColor-emphasis)',
      disabled: 'var(--borderColor-disabled)',
      transparent: 'var(--borderColor-transparent)',
      'accent-muted': 'var(--borderColor-accent-muted)',
      'accent-emphasis': 'var(--borderColor-accent-emphasis)',
      'danger-muted': 'var(--borderColor-danger-muted)',
      'danger-emphasis': 'var(--borderColor-danger-emphasis)',
      'success-muted': 'var(--borderColor-success-muted)',
      'success-emphasis': 'var(--borderColor-success-emphasis)',
      'attention-muted': 'var(--borderColor-attention-muted)',
      'attention-emphasis': 'var(--borderColor-attention-emphasis)',
    },
    control: {
      bgColor: {
        DEFAULT: 'var(--control-bgColor-rest)',
        hover: 'var(--control-bgColor-hover)',
        active: 'var(--control-bgColor-active)',
        disabled: 'var(--control-bgColor-disabled)',
      },
      fgColor: {
        DEFAULT: 'var(--control-fgColor-rest)',
        placeholder: 'var(--control-fgColor-placeholder)',
        disabled: 'var(--control-bgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--control-borderColor-rest)',
        emphasis: 'var(--control-borderColor-emphasis)',
        disabled: 'var(--control-borderColor-disabled)',
        selected: 'var(--control-bgColor-selected)',
        success: 'var(--control-borderColor-success)',
        danger: 'var(--control-borderColor-danger)',
        attention: 'var(--control-borderColor-attention)',
      },
      iconColor: 'var(--control-iconColor-rest)',
    },
    'control-danger': {
      fgColor: {
        DEFAULT: 'var(--control-danger-fgColor-rest)',
        hover: 'var(--control-danger-fgColor-hover)',
      },
      bgColor: {
        hover: 'var(--control-danger-bgColor-hover)',
        active: 'var(--control-danger-bgColor-active)',
      },
    },
    'control-checked': {
      bgColor: {
        DEFAULT: 'var(--control-checked-bgColor-rest)',
        hover: 'var(--control-checked-bgColor-rest)',
        active: 'var(--control-checked-bgColor-rest)',
        disabled: 'var(--control-checked-bgColor-rest)',
      },
      fgColor: {
        DEFAULT: '--control-checked-fgColor-rest',
        disabled: '--control-checked-fgColor-disabled',
      },
      border: {
        DEFAULT: 'var(--control-checked-borderColor-rest)',
        hover: 'var(--control-checked-borderColor-hover)',
        active: 'var(--control-checked-borderColor-active)',
        disabled: 'var(--control-checked-borderColor-disabled)',
      },
    },
    'control-transparent': {
      bgColor: {
        DEFAULT: 'var(--control-transparent-bgColor-rest)',
        hover: 'var(--control-transparent-bgColor-hover)',
        selected: 'var(--control-transparent-bgColor-selected)',
        active: 'var(--control-transparent-bgColor-active)',
        disabled: 'var(--control-transparent-bgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--control-transparent-borderColor-rest)',
        hover: 'var(--control-transparent-borderColor-hover)',
        active: 'var(--control-transparent-borderColor-active)',
      },
    },
    'button-danger': {
      fgColor: {
        DEFAULT: 'var(--button-danger-fgColor-rest)',
        hover: 'var(--button-danger-fgColor-hover)',
        active: 'var(--button-danger-fgColor-active)',
        disabled: 'var(--button-danger-fgColor-disabled)',
      },
      iconColor: {
        DEFAULT: 'var(--button-danger-iconColor-rest)',
        hover: 'var(--button-danger-iconColor-hover)',
      },
      bgColor: {
        DEFAULT: 'var(--button-danger-bgColor-rest)',
        hover: 'var(--button-danger-bgColor-hover)',
        active: 'var(--button-danger-bgColor-active)',
        disabled: 'var(--button-danger-bgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--button-danger-borderColor-rest)',
        hover: 'var(--button-danger-borderColor-hover)',
        active: 'var(--button-danger-borderColor-active)',
      },
    },
    'button-inactive': {
      bgColor: 'var(--button-inactive-bgColor)',
      fgColor: 'var(--button-inactive-fgColor)',
      border: 'var(--button-inactive-bgColor)',
    },
    'button-primary': {
      fgColor: {
        DEFAULT: 'var(--button-primary-fgColor-rest)',
        disabled: 'var(--button-primary-fgColor-disabled)',
      },
      iconColor: 'var(--button-primary-iconColor-rest)',
      bgColor: {
        DEFAULT: 'var(--button-primary-bgColor-rest)',
        hover: 'var(--button-primary-bgColor-hover)',
        active: 'var(--button-primary-bgColor-active)',
        disabled: 'var(--button-primary-bgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--button-primary-borderColor-rest)',
        hover: 'var(--button-primary-borderColor-hover)',
        active: 'var(--button-primary-borderColor-active)',
        disabled: 'var(--button-primary-borderColor-disabled)',
      },
    },
    'button-ghost': {
      fgColor: {
        DEFAULT: 'var(--button-ghost-fgColor-rest)',
        hover: 'var(--button-ghost-fgColor-hover)',
        disabled: 'var(--button-ghost-fgColor-disabled)',
      },
      iconColor: {
        DEFAULT: 'var(--button-ghost-iconColor-rest)',
        hover: 'var(--button-ghost-iconColor-hover)',
        active: 'var(--button-ghost-iconColor-active)',
        disabled: 'var(--button-ghost-iconColor-disabled)',
      },
      bgColor: {
        DEFAULT: 'var(--button-ghost-bgColor-rest)',
        hover: 'var(--button-ghost-bgColor-hover)',
        active: 'var(--button-ghost-bgColor-active)',
        disabled: 'var(--button-ghost-fgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--button-ghost-borderColor-rest)',
        hover: 'var(--button-ghost-borderColor-hover)',
        disabled: 'var(--button-ghost-borderColor-disabled)',
      },
    },
    button: {
      fgColor: '--button-default-fgColor-rest',
      bgColor: {
        DEFAULT: 'var(--button-default-bgColor-rest)',
        hover: 'var(--button-default-bgColor-hover)',
        active: 'var(--button-default-bgColor-active)',
        selected: 'var(--button-default-bgColor-selected)',
        disabled: 'var(--button-default-bgColor-disabled)',
      },
      border: {
        DEFAULT: 'var(--button-default-borderColor-rest)',
        hover: 'var(--button-default-borderColor-hover)',
        active: 'var(--button-default-borderColor-active)',
        disabled: 'var(--button-default-borderColor-disabled)',
      },
    },
  },
  fontWeight: {
    thin: '200',
    extralight: '300',
    light: '400',
    normal: '500',
    medium: '600',
    semibold: '700',
    bold: '800',
    extrabold: '900',
    black: '900',
  },
  fontSize: {
    base: [
      'var(--text-body-size-medium)',
      {
        lineHeight: 'var(--text-body-lineHeight-medium)',
      },
    ],
    display: [
      'var(--text-display-size)',
      {
        lineHeight: 'var(--text-display-lineHeight)',
        fontWeight: 'var(--text-display-weight)',
      },
    ],
    'title-large': [
      'var(--text-title-size-large)',
      {
        lineHeight: 'var(--text-title-lineHeight-large)',
        fontWeight: 'var(--text-title-weight-large)',
      },
    ],
    'title-medium': [
      'var(--text-title-size-medium)',
      {
        lineHeight: 'var(--text-title-lineHeight-medium)',
        fontWeight: 'var(--text-title-weight-medium)',
      },
    ],
    'title-small': [
      'var(--text-title-size-small)',
      {
        lineHeight: 'var(--text-title-lineHeight-small)',
        fontWeight: 'var(--text-title-weight-small)',
      },
    ],
    subtitle: [
      'var(--text-subtitle-size)',
      {
        lineHeight: 'var(--text-subtitle-lineHeight)',
        fontWeight: 'var(--text-subtitle-weight)',
      },
    ],
    'body-large': [
      'var(--text-body-size-large)',
      {
        lineHeight: 'var(--text-body-lineHeight-large)',
      },
    ],
    'body-medium': [
      'var(--text-body-size-medium)',
      {
        lineHeight: 'var(--text-body-lineHeight-medium)',
      },
    ],
    'body-small': [
      'var(--text-body-size-small)',
      {
        lineHeight: 'var(--text-body-lineHeight-small)',
      },
    ],
    caption: [
      'var(--text-caption-size)',
      {
        lineHeight: 'var(--text-caption-lineHeight)',
        fontWeight: 'var(--text-caption-weight)',
      },
    ],
    'code-block': [
      'var(--text-codeBlock-size)',
      {
        lineHeight: 'var(--text-codeBlock-lineHeight)',
        fontWeight: 'var(--text-codeBlock-weight)',
      },
    ],
    'code-inline': [
      'var(--text-codeBlock-size)',
      {
        lineHeight: 'var(--text-codeInline-lineHeight)',
        fontWeight: 'var(--text-codeInline-weight)',
      },
    ],
  } satisfies Record<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>,
      ]
  >,
  containers: {
    xxl: '16rem',
  },
  borderRadius: {
    lg: '0.5rem',
    md: 'calc(0.5rem - 2px)',
    sm: 'calc(0.5rem - 4px)',
  },

  keyframes: {
    'accordion-down': {
      from: {height: '0'},
      to: {height: 'var(--radix-accordion-content-height)'},
    },
    'accordion-up': {
      from: {height: 'var(--radix-accordion-content-height)'},
      to: {height: '0'},
    },
    'collapsible-down': {
      from: {height: '0'},
      to: {height: 'var(--radix-collapsible-content-height)'},
    },
    'collapsible-up': {
      from: {height: 'var(--radix-collapsible-content-height)'},
      to: {height: '0'},
    },
    shimmer: {
      '100%': {
        transform: 'translateX(100%)',
      },
    },
    'caret-blink': {
      '0%,70%,100%': {opacity: '1'},
      '20%,50%': {opacity: '0'},
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'collapsible-down': 'collapsible-down 0.2s ease-out',
    'collapsible-up': 'collapsible-up 0.2s ease-out',
    'caret-blink': 'caret-blink 1.25s ease-out infinite',
  },
};
