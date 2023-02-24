/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["anasayfa.html"],
  theme: {
    extend: {
      colors: {
        'vivid-red': '#cf2e2e',
        'border-color': 'rgba(255,255,255,.2)',
        'text-gray' : '#181818',
        'sub-menu-border' : 'rgba(0,0,0,.1)',
        'mobile-menu-bg' : 'rgb(19,19,21)',
        'flag-red': '#E62B34',
        'bg-gray': '#DBDBEA',
        'secondary-gray': '#efefef'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(.230,1,.320,1)',
      },
    },
    fontSize: {
      'medium' : '15px',
      'big': '61px',
      '2xl': '2em',
      'xl': '0.9em',
      'large': '0.85em'
    },
    screens: {
      'tablet': {'max': '1200px'},
      'bigger-phone': {'max': '800px'},
      'phone' : {'max': '650px'}
    },
  },
  plugins: [],
}
