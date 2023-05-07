const Pool = require("pg").Pool;

const pool = new Pool({
  user: "my_credit",
  host: "localhost",
  database: "cswapdb",
  password: "olaf",
  port: 1234,
});

const getcredits = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM creditsV2 ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createcredit = (body) => {
  return new Promise(function (resolve, reject) {
    const { creditAddress,owner,price, quantity, deadline,v,r,s  } = body;
    pool.query(
      // esse insert com `` n deu bom aqui nao .-.
      // `INSERT INTO creditsV2 ("creditAddress",owner,price, quantity, deadline,v,r,s ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      "INSERT INTO creditsV2 (creditAddress,owner,price, quantity, deadline,v,r,s ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [creditAddress,owner,price, quantity, deadline,v,r,s ],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new credit has been added: ${results}`);
      }
    );
  });
};

const deletecredit = (id) => {
  return new Promise(function (resolve, reject) {
    //const id = parseInt(request.params.id);
    pool.query("DELETE FROM creditsV2 WHERE id = $1", [id], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(`credit deleted with ID: ${id}`);
    });
  });
};

const getcredit = (adrs) => {
  return new Promise(function (resolve, reject) {
    // esse insert com `` n deu bom aqui nao .-.
    //pool.query(`SELECT * FROM creditsV2 WHERE "creditAddress" = $1`, [adrs], (error, results) => {
    pool.query("SELECT * FROM creditsV2 WHERE creditAddress = $1", [adrs], (error, results) => {
      if (error) {
        reject(error);
      }
      if (results.rows.length === 0) {
        resolve(`No credit found with Address: ${adrs}`);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const gettokens = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM tokens ORDER BY id ASC", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getcredits,
  getcredit,
  createcredit,
  deletecredit,
  gettokens
};
