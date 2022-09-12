tailwind.config = {
    darkMode: 'class', // тёмная тема
      theme: {
        extend: {
          colors: {
            mainColor: '#050C2A'
          },
          padding: {
            bigPadding: '40px'
          },
          screens: { //для адаптивности
            small: '480px',
            middle: '768px',
            large: '1024px',
            xl: '1440px'
          }
        }
      },
      plugins: []
    }