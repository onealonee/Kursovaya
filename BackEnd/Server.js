const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Замените параметры подключения на свои
const pool = new Pool({
    user: 'ваш_пользователь',
    host: 'localhost',
    database: 'ваша_бд',
    password: 'ваш_пароль',
    port: 5432,
});

// Пример простого запроса к базе данных
app.get('/users', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const users = result.rows;
        res.json(users);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
