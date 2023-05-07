//tabela principal: creditsV2
//user: my_credit
//db: cswapdb

const { Pool } = require('pg');

const pool = new Pool({
  user: 'my_credit',
  host: 'localhost',
  database: 'cswapdb',
  password: 'olaf',
  port: 1234,
});

const getcredits = async () => {
  try {
    const results = await pool.query('SELECT * FROM creditsV2 ORDER BY id ASC');
    return results.rows;
  } catch (error) {
    throw error;
  }
};

const createcredit = async (body) => {
  const { creditAddress, owner, price, quantity, deadline, v, r, s } = body;
  try {
    const results = await pool.query(
      'INSERT INTO creditsV2 (creditAddress, owner, price, quantity, deadline, v, r, s) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [creditAddress, owner, price, quantity, deadline, v, r, s]
    );
    return `A new credit has been added: ${JSON.stringify(results.rows[0])}`;
  } catch (error) {
    throw error;
  }
};

//feito pela resenha
const deletecredit = async (id) => {
  try {
    const results = await pool.query('DELETE FROM creditsV2 WHERE id = $1', [id]);
    return `credit deleted with ID: ${id}`;
  } catch (error) {
    throw error;
  }
};

//retorna os dados com creditos de mesmo valor (endereco)
const getcredit = async (adrs) => {
  try {
    const results = await pool.query('SELECT * FROM creditsV2 WHERE creditAddress = $1', [adrs]);
    if (results.rows.length === 0) {
      return `No credit found with Address: ${adrs}`;
    } else {
      return results.rows;
    }
  } catch (error) {
    throw error;
  }
};

//dados da tabela tokens
const gettokens = async () => {
  try {
    const results = await pool.query('SELECT * FROM tokens ORDER BY id ASC');
    return results.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getcredits,
  getcredit,
  createcredit,
  deletecredit,
  gettokens,
};
