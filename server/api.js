"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

// 创建请假记录
router.post('/api/createRecord',(req,res) => {
	let newRecord = new models.absenceLogs({
        member: req.body.member,
        absenceType:req.body.absenceType,
        absenceDateRange:req.body.absenceDateRange,
        absenceCount:req.body.absenceCount,
        state:0 
    });
    console.log(newRecord);
    // 保存数据newRecord数据进mongoDB
    newRecord.save((err,data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(newRecord);
        }
    });
});

module.exports = router;