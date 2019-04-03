'use strict';
const moment = require('moment');
const db = require('../helpers').getDbData;

module.exports = {
    statusDateGET,
    statusGET
};

function statusDateGET (req, res, next) {
    const date = req.swagger.params.date.value.replace(/-/g, '/');
    db().then( (db) => {
        db.get({"target_date": date}).then( (content) => {
            if (content.length) {
                res.json({data: content});
            } else {
                res.status(404).json({message: "Event not found"});
            }
        })
    });
}

function statusGET (req, res, next) {
    const now = moment().format("DD/MM/YYYY");
    db().then( (db) => {
        db.get({"target_date": now}).then( (content) => {
            if (content.length) {
                res.json({data: content});
            } else {
                res.status(404).json({message: "Event not found"});
            }
        })
    });
}