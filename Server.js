const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');
const cors = require('cors');

const findingRoutes = express.Router();

const PORT = process.env.PORT || 3001;

// Let Finding = require('./finding.model');

app.use(cors());
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://auditmgmt:1234am@ds137483.mlab.com:37483/heroku_78t5nvpt"); 

findingRoutes.route('/').get(function(req, res) {
  Finding.find(function(err, findings) {
    if (err) {
      console.log(err)
    }else {
      res.json(findings);
    }
  });
});

todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id
  Finding.findById(id, function(err, finding) {
    res.json(finding);
  });
});

findingRoutes.route('/add').post(function(req, res) {
  let todo = new Finding(req.body);
  finding.save()
    .then(finding => {
      res.status(200).json({'finding': 'finding added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new finding failed')
    });
});

findingRoutes.route('/update/:id').post(function(req, res) {
  Finding.findById(req.params.id, function(er, finding) {
    if (!finding)
        res.status(404).send('data is not found');
    else
        finding.finding_clause = req.body.finding_clause;
        finding.finding_description = req.body.finding_description;
        finding.finding_responsible = req.body.finding_responsible;
        finding.finding_priority = req.body.finding_priority;
        finding.finding_completed = req.body.finding_completed;

        finding.save().then(finding => {
          res.json('Finding updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible")        
        });
  });
});

app.use('/findings', findingRoutes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});