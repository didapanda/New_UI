import en from 'vuetify/es5/locale/en'
import el from 'vuetify/es5/locale/el'

export default function () {
  return {
    lang: {
      locales: { en, el },
      current: 'en',
    },
    treeShake: true,
    theme: {
      themes: {
        dark: {
          primary: '#33A4DC',
          accent: '#FF4081',
          secondary: '#ffe18d',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
        },
        light: {
          primary: '#33A4DC',
          accent: '#e91e63',
          secondary: '#30b1dc',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
        },
      },
    },
  }
}
