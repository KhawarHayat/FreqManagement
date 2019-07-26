const User = require('../Model/user.js')
const AuthForbid = require('../Model/AuthForbid')
const Communication = require('../Model/communication')
const Radio = require('../Model/radio')
const Antenna = require('../Model/antenna')
const Network = require('../Model/network')
const jwt = require('jsonwebtoken')

let control = {
    main : (req,res) => {
     res.send('Khawar Hayat Bhatti')
    },
    addUser : (req, res) => {

    User.encryptPassword(req.body.password, (err, hash) => {
      if(err) {
        res.send('Duplicate')
      }
      else{
        let password = hash 
        const app = User.build({
         name : req.body.fname +' '+ req.body.lname,
         email : req.body.email,
         password : password,
         PAno: req.body.PAno,
         cnic: req.body.cnic,
         phone: req.body.phone,
         rank: req.body.rank
     })
     app.save().then(() => {
      res.send('ok')
     }).catch((err) => {
      res.send('Dublicate')
     })
      }
    })
  },
   login : (req, res) => {
     
      User.findOne(
        {
          where:{email: req.body.username}
        }
      ).then((data) => {
      if(data == null){
        res.json('Invalid Username')
      }
      else{
        User.comparePassword(req.body.password, data.dataValues['password'], (err, match) => {
        if(match == false){
          res.json('Invalid Password')
        }
        else{
          jwt.sign({ id: data.dataValues['id'], email: data.dataValues['email'], password: data.dataValues['password']}, "privateKey",{ expiresIn: '1h' }, function(err, token) {
          res.json({
            token,
            id: data.dataValues['id']
          });
          });
        }
        })
      }
     })
   },     
  main : (req, res) => {
    
   jwt.verify(req.token, 'privateKey', (err, authData) => {
    if(err) {
      res.json("403");
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
  },
  check : (req, res) => {
    
    jwt.verify(req.body.token, 'privateKey', (err, authData) => {
      if(err) {
        res.json(false);
      } else {
        res.json(authData);
      }
    });
  },
  authforbid: (req, res) => {
    jwt.verify(req.token, 'privateKey', (err, authData) => {
      if(err) {
        res.json(false);
      } else {
        const authforbid = AuthForbid.build({
          authFrom : req.body.Afrom,
          authTo : req.body.Ato,
          forbidFrom: req.body.Ffrom,
          forbidTo: req.body.Fto,
          userID : authData.id
        })
        authforbid.save().then(() => {
          res.json('save')
        }).catch((err) => {
          res.json('error')
         })
      }
    });
  },
  communication : (req, res) => {
    console.log('req.token')
    jwt.verify(req.token, 'privateKey', (err, authData) => {
      if(err) {
        res.json('error');
      } else {
        const communication = Communication.build({
          band : req.body.band,
          channel : req.body.channel,
          freq: req.body.freq,
          userID : authData.id
        })
        communication.save().then(() => {
          res.json('save')
        }).catch((err) => {
          res.json('error')
         })
      }
    });
  },
  radio : (req, res) => {
    jwt.verify(req.token, 'privateKey', (err, authData) => {
      if(err) {
        res.json('error');
      } else {
        const radio = Radio.build({
          model : req.body.model,
          antenna : req.body.antenna,
          freq: req.body.freq,
          comMode: req.body.comMode,
          deployment: req.body.deployment,
          data: req.body.data,
          userID : authData.id
        })
        radio.save().then(() => {
          res.json('save')
        }).catch((err) => {
          res.json('error')
         })
      }
    });
  } ,
  antenna: (req, res) => {
    jwt.verify(req.token, 'privateKey', (err, authData) => {
      if(err) {
        res.json('error');
      } else {
        const antenna = Antenna.build({
          model : req.body.model,
          number : req.body.number,
          power: req.body.power,
          AEG: req.body.AEG,
          userID : authData.id
        })
        antenna.save().then(() => {
          res.json('save')
        }).catch((err) => {
          res.json('error')
         })
      }
    });
  },
  network : (req, res) => {
    jwt.verify(req.token, 'privateKey', (err, authData) => {
      if(err) {
        console.log('mmmm')
        res.json('error');
      } else {
        const network = Network.build({
          networkschemes : req.body.networkschemes,
          networkpriority : req.body.networkpriority,
          netType: req.body.netType,
          service: req.body.service,
          comMode: req.body.comMode,
          radio: req.body.radio,
          antenna: req.body.antenna,
          deployment: req.body.deployment,
          latitude: req.body.lat,
          longitude: req.body.long,
          area: req.body.area,
          userID : authData.id
        })
        network.save().then(() => {
          res.json('save')
        }).catch((err) => {
          console.log('hhhh')
          res.json('error')
         })
      }
    });
  }
  }
  module.exports = control