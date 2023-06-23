const sqlConnection = require("../database");

exports.CreateRegister = (data, callback) => {
  let values = Object.values(data);
  console.log(data);
  const sql = `INSERT INTO REGISTER ( 
    username,
    password,
    emailId,
    phone
    ) values (?,?,?,?)`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};




exports.CreateElection = (data, callback) => {
  let values = Object.values(data);
  console.log(data);
  const sql = `INSERT INTO ELECTION ( 
    election_name ,
  election_winner ,
  num_of_votes_polled
    ) values (?,?,?)`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
};


exports.AddCandidate = (data, callback) => {
  let values = Object.values(data);
  console.log(data);
  const sql = `INSERT INTO CANDIDATE ( 
    name ,
  num_votes ,
  election_id
    ) values (?,?,?)`;
  sqlConnection.executeQuery(sql, values, function (err, result) {
    callback(err, result);
  });
}


// exports.CreateElection = (data, callback) => {
//   let values = Object.values(data);
//   console.log(data);
//   const sql = `INSERT INTO ELECTION ( election_name ,
//   election_winner ,
//   num_of_votes_polled
//     ) values (?,?,?)`;
//   sqlConnection.executeQuery(sql, values, function (err, result) {
//     callback(err, result);
//   });
// }








