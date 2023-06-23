const userModel = require("../models/user.model");
exports.CreateRegister = (req, res) => {
  const data = req.body;
  console.log("from create User Controller \n", data);
  userModel.CreateRegister(data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ err });
    }
    return res.status(200).send({ result });
  });
};



exports.AddCandidate= (req, res) => {
  
    const data = req.body;
    console.log("from create User Controller \n", data);
    userModel.CreateCandidate(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ err });
      }
      return res.status(200).send({ result });
    });

}

exports.CreateElection= (req, res) => {
  
    const data = req.body;
    console.log("from create User Controller \n", data);
    userModel.CreateElection(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ err });
      }
      return res.status(200).send({ result });
    });

}

// exports.GetElectionResultByElectionId= (req, res) => {


// }

exports.UserLogin= (req, res) => {
  const data = req.body;
    //console.log("from create User Controller \n", data);
    userModel.UserLogin(data, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ err });
      }
      return res.status(200).send({ result });
    });


}

