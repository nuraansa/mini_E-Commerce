// Users
const db = require("../Config");
const { hash, compare, hasSync } = require("bcrypt");
const { createToken } = require("../Middleware/AuthenticateUser");

class Users {

    // Fetch All Users
  fetchUsers(req, res) {
    const query = `
          SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
          FROM Users;
          `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

//   Fetch One User
  fetchUser(req, res) {
    const id = req.params.id;
    const query = `
          SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
          FROM Users
          WHERE userID = ?
          `;
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

//   Login User
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    // query
    const query = `
      SELECT firstName, lastName,
      gender, userDOB, emailAdd, userPass,
      profileUrl
      FROM Users
      WHERE emailAdd = ?;
      `;
    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
      } else {
        await compare(userPass, result[0].userPass, (Err, cResult) => {
          if (Err) throw Err;
          // Create a token
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered",
            });
          }
        });
      }
    });
  }

//   Register User
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    // Query
    const query = `
            INSERT INTO Users
            SET ?;
            `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      //   Create token
      let token = createToken(user);
      res.json({
        status: res.statusCode,
        token,
        msg: "You are now registered.",
      });
    });
  }

//   Update User
  updateUser(req, res) {
    const data = rew.body;
    if (data.userPass) {
      data.userPass = hasSync(data.userPass, 15);
    }
    const query = `
            UPDATE FROM Users
            SET ?
            WHERE userID = ?;   
            `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record has been updated.",
      });
    });
  }
//   Delete User
  deleteUser(req, res) {
    const query = `
            DELETE FROM Users
            SET ?
            WHERE userID = ${req.params.id};   
            `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record has been deleted.",
      });
    });
  }
}

module.exports = Users;
