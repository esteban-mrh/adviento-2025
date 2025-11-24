/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pink: {
          primary: '#E8B4BE',
          light: '#F5D7DC',
          lighter: '#FAE6EA',
          lightest: '#FDF2F4',
          bg: '#FEF9FA',
          pale: '#FFF5F7',
        },
        gold: {
          DEFAULT: '#E5D4C1',
          light: '#F0E8DC',
          lighter: '#F7F2EA',
          dark: '#D4C4AE',
          darker: '#C2B29C',
          shimmer: '#F5EDE0',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
        sway: 'sway 2s ease-in-out infinite',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
        float: 'float 3s ease-in-out infinite',
        slideUp: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        modalSlideUp: 'modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
        twinkle: 'twinkle 2s ease-in-out infinite',
        rotate: 'rotate 4s linear infinite',
        'musical-note': 'musicalNote 3s ease-in-out infinite',
        'fade-pulse': 'fadePulse 2s ease-in-out infinite',
        ripple: 'ripple 2s linear infinite',
        slideIn: 'slideIn 0.5s ease-out forwards',
        'spin-sparkle': 'spinSparkle 4s linear infinite',
        'sparkle-bg': 'sparkleBg 20s linear infinite',
        'envelope-open': 'envelopeOpen 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'gift-unwrap': 'giftUnwrap 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'letter-unfold': 'letterUnfold 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'golden-shimmer': 'goldenShimmer 2.5s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 1s ease-in-out',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'card-open': 'cardOpen 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'box-lid-open': 'boxLidOpen 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'content-reveal': 'contentReveal 0.5s ease-out 0.5s forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        modalSlideUp: {
          '0%': { opacity: '0', transform: 'scale(0) translateY(50px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        musicalNote: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg)' },
          '50%': { transform: 'translateY(0) rotate(-5deg)' },
          '75%': { transform: 'translateY(-10px) rotate(0deg)' },
        },
        fadePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        ripple: {
          '0%': { boxShadow: '0 0 0 0 rgba(212, 87, 109, 0.5)' },
          '100%': { boxShadow: '0 0 0 20px rgba(212, 87, 109, 0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        spinSparkle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
        },
        sparkleBg: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(50px, 50px) rotate(360deg)' },
        },
        envelopeOpen: {
          '0%': { 
            transform: 'scale(0.3) rotateX(0deg)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scale(1.1) rotateX(-15deg)',
          },
          '100%': { 
            transform: 'scale(1) rotateX(0deg)',
            opacity: '1',
          },
        },
        giftUnwrap: {
          '0%': { 
            transform: 'scale(0.5) rotate(-10deg)',
            opacity: '0',
          },
          '60%': { 
            transform: 'scale(1.15) rotate(5deg)',
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
          },
        },
        letterUnfold: {
          '0%': { 
            transform: 'scale(0.8) translateY(30px)',
            opacity: '0',
          },
          '60%': { 
            transform: 'scale(1.05) translateY(-10px)',
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1',
          },
        },
        goldenShimmer: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
          },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scale(1.1)',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        cardOpen: {
          '0%': {
            transform: 'perspective(1000px) rotateY(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'perspective(1000px) rotateY(-165deg)',
            opacity: '0.8',
          },
        },
        boxLidOpen: {
          '0%': {
            transform: 'translateY(0) translateZ(0) rotateX(0deg)',
          },
          '50%': {
            transform: 'translateY(-60px) translateZ(20px) rotateX(-15deg)',
          },
          '100%': {
            transform: 'translateY(-100px) translateZ(30px) rotateX(-30deg)',
          },
        },
        contentReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px) scale(0.3)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-10px) scale(1)',
          },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      animationDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
