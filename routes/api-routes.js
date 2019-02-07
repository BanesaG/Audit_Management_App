// const Note = require('../models/Note');
const Finding = require('../models/Findings');

module.exports = function (app) {

  app.get('/api/findings', function (req, res) {
    Finding.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/findings', function (req, res) {
    Finding.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/findings/:id', function (req, res) {
    Finding.findOneAndUpdate({_id: req.params.id}, req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/findings/:id', function (req, res) {
    Finding.findOneAndDelete({_id: req.params.id})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}