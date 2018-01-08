// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  if (type === 'server') {
    return './serverRender.js';
  }

  const entry = {
    main: []
  };

  if (isDevelopment) {
    entry.main.push(
      //Hacer que al refrescar un archivo sin reiniciar servidor
      'webpack-hot-middleware/client',
      'react-hot-loader/patch'
    );
  }

  entry.main.push('./client.js');

  return entry;
};
