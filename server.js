const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve todos los archivos estáticos desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// Cualquier ruta no encontrada regresa al index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`FlashEnglish corriendo en http://localhost:${PORT}`);
});
