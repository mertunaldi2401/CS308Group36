const pool = require('../config/db');

const createUser = async (username, hashedPassword) => {
    const queryText = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
    const result = await pool.query(queryText, [username, hashedPassword]);
    return result.rows[0];
};

const getUserByUsername = async (username) => {
    const queryText = 'SELECT * FROM users WHERE username = $1';
    const result = await pool.query(queryText, [username]);
    return result.rows[0];
};

module.exports = { createUser, getUserByUsername };
