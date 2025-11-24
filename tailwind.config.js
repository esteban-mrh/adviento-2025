/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#d4576d',
          light: '#ffc4d6',
          lighter: '#ffd4e5',
          lightest: '#ffe4f0',
          bg: '#fff5f8',
          pale: '#ffeef5',
        },
        gold: {
          DEFAULT: '#ffd700',
        }
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
      },
    },
  },
  plugins: [],
}
