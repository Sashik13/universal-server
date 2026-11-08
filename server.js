const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Разрешаем запросы с любых доменов
app.use(express.json()); // Парсим JSON в запросах

// Базовый эндпоинт - проверка работы сервера
app.get('/', (req, res) => {
  res.json({ 
    status: 'Сервер работает!', 
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Эндпоинт для получения данных
app.get('/api/data', (req, res) => {
  // Здесь потом будет логика получения данных
  res.json({ 
    success: true, 
    data: { message: 'Данные получены' } 
  });
});

// Эндпоинт для отправки данных
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Получены данные:', receivedData);
  
  // Здесь потом будет логика обработки данных
  res.json({ 
    success: true, 
    message: 'Данные получены сервером',
    received: receivedData
  });
});

// Эндпоинт для отправки файлов (заготовка)
app.post('/api/upload', (req, res) => {
  // Потом добавим multer для работы с файлами
  res.json({ 
    success: true, 
    message: 'Эндпоинт для файлов готов к расширению' 
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});
