const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Finding = new Schema({
    finding_clause: {
        type: String
    },
    finding_description: {
        type: String
    },
    finding_responsible: {
        type: String
    },
    finding_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Finding', Finding);