// Products
const db = require("../Config");

class Products {
    // Fetch All Products
    fetchProducts(req, res) {
        const query = `
              SELECT prodID, prodTitle, prodAmount, prodImg, prodContent
              FROM Products;
              `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results,
          });
        });
      }

 // Fetch One Product
  fetchProduct(req, res) {
    const id = req.params.id;
    const query = `
          SELECT prodID, prodTitle, prodAmount, prodImg, prodContent
          FROM Products
          WHERE prodID = ?
          `;
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  //   Add Product
  async addProduct(req, res) {
    const data = req.body;
    // Query
    const query = `
            INSERT INTO Products
            SET ?;
            `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Product has been added.",
      });
    });
  }

  // Update Product Info
  updateProduct(req, res) {
    const data = req.body;
    const query = `
            UPDATE Products
            SET ?
            WHERE prodID = ?;   
            `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The product record has been updated.",
      });
    });
  }

  //   Delete Product
  deleteProduct(req, res) {
    const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id};   
            `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The product record has been deleted.",
      });
    });
  }
}

module.exports = Products;