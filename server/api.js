"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

// 创建请假记录
router.post('/api/createRecord',(req,res) => {
	let newRecord = new models.absenceLogs({
        member: req.body.member,
        absenceTypeValue:req.body.absenceTypeValue,
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
            res.json(true);
        }
    });
});

//获取请假列表
router.get('/api/getList',(req,res) => {  
    // 通过模型去查找数据库
    models.workLogs.find({},(err,data) => {
        if (err) {
            res.json(err);
            console.log(err);
        } else {
        	if(!!data){
        		res.json(data);
        	}else{
        		res.json('none');
        	}
        }
    });
})

module.exports = router;