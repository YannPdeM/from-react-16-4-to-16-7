import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: '"lucida grande", "lucida sans unicode", arial, geneva, helvetica, sans-serif',
  padding: '11%',

  // custom colors
  colors: {
    text: '#fff',
    background: '#333',
    link: '#ccf',
  },

  prism: {
    style: okaidia
  },

  css: {
    textAlign: 'left',
  },
  ul: {
    marginLeft: '22%'
  }
}