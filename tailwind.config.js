module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B2951", // deep-navy
          50: "#F1F3F7", // deep-navy-50
          100: "#E2E7F0", // deep-navy-100
          200: "#C5CFE1", // deep-navy-200
          300: "#A8B7D2", // deep-navy-300
          400: "#8B9FC3", // deep-navy-400
          500: "#6E87B4", // deep-navy-500
          600: "#516FA5", // deep-navy-600
          700: "#345796", // deep-navy-700
          800: "#1B2951", // deep-navy-800
          900: "#151F3E", // deep-navy-900
        },
        secondary: {
          DEFAULT: "#D4AF37", // refined-gold
          50: "#FDFBF4", // refined-gold-50
          100: "#FBF7E9", // refined-gold-100
          200: "#F7EFD3", // refined-gold-200
          300: "#F3E7BD", // refined-gold-300
          400: "#EFDFA7", // refined-gold-400
          500: "#EBD791", // refined-gold-500
          600: "#E7CF7B", // refined-gold-600
          700: "#E3C765", // refined-gold-700
          800: "#DFBF4F", // refined-gold-800
          900: "#D4AF37", // refined-gold-900
        },
        accent: {
          DEFAULT: "#4A90E2", // professional-blue
          50: "#F2F7FE", // professional-blue-50
          100: "#E5EFFD", // professional-blue-100
          200: "#CBDFFA", // professional-blue-200
          300: "#B1CFF7", // professional-blue-300
          400: "#97BFF4", // professional-blue-400
          500: "#7DAFF1", // professional-blue-500
          600: "#639FEE", // professional-blue-600
          700: "#4A90E2", // professional-blue-700
          800: "#3A73B8", // professional-blue-800
          900: "#2A568E", // professional-blue-900
        },
        background: "#FAFBFC", // warm-white
        surface: "#FFFFFF", // pure-white
        text: {
          primary: "#2C3E50", // dark-slate
          secondary: "#6B7280", // medium-gray
        },
        success: {
          DEFAULT: "#10B981", // professional-green
          50: "#ECFDF5", // professional-green-50
          100: "#D1FAE5", // professional-green-100
          200: "#A7F3D0", // professional-green-200
          300: "#6EE7B7", // professional-green-300
          400: "#34D399", // professional-green-400
          500: "#10B981", // professional-green-500
          600: "#059669", // professional-green-600
          700: "#047857", // professional-green-700
          800: "#065F46", // professional-green-800
          900: "#064E3B", // professional-green-900
        },
        warning: {
          DEFAULT: "#F59E0B", // sophisticated-amber
          50: "#FFFBEB", // sophisticated-amber-50
          100: "#FEF3C7", // sophisticated-amber-100
          200: "#FDE68A", // sophisticated-amber-200
          300: "#FCD34D", // sophisticated-amber-300
          400: "#FBBF24", // sophisticated-amber-400
          500: "#F59E0B", // sophisticated-amber-500
          600: "#D97706", // sophisticated-amber-600
          700: "#B45309", // sophisticated-amber-700
          800: "#92400E", // sophisticated-amber-800
          900: "#78350F", // sophisticated-amber-900
        },
        error: {
          DEFAULT: "#DC2626", // clear-red
          50: "#FEF2F2", // clear-red-50
          100: "#FEE2E2", // clear-red-100
          200: "#FECACA", // clear-red-200
          300: "#FCA5A5", // clear-red-300
          400: "#F87171", // clear-red-400
          500: "#EF4444", // clear-red-500
          600: "#DC2626", // clear-red-600
          700: "#B91C1C", // clear-red-700
          800: "#991B1B", // clear-red-800
          900: "#7F1D1D", // clear-red-900
        },
        border: {
          DEFAULT: "rgba(203, 213, 225, 0.5)", // subtle-border
          light: "rgba(203, 213, 225, 0.3)", // subtle-border-light
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // sophisticated-serif
        body: ['Inter', 'sans-serif'], // modern-sans-serif
        caption: ['Source Sans Pro', 'sans-serif'], // clean-professional
        mono: ['JetBrains Mono', 'monospace'], // financial-data
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'container': '8px', // professional-container
        'input': '6px', // form-input
        'full': '9999px',
      },
      boxShadow: {
        'layered': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      transitionDuration: {
        '150': '150ms', // micro-interaction
        '200': '200ms', // state-change
        '300': '300ms', // page-transition
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'ambient': 'ambient-gradient 8s ease infinite',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        'ambient-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}