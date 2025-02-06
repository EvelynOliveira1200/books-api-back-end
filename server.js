const express = require('express');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes);

app.get('/', (req, res) => {
    res.send('Servidor Rodando');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


