localStorage.setItem('theme', 'dark')
localStorage.setItem('theme', 'dark')

const currentTheme = localStorage.getItem('theme')

// localStorage.setItem('object', { name: 'stefano' })

localStorage.setItem('object-correct', JSON.stringify({ name: 'stefano' }))

const object = JSON.parse(localStorage.getItem('object-correct'))
