var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var coupons = require("../models/businesscoupons");
// var coupons = require("../models/couponsinesscoupons");


router.post("/save", async (req, res) => {
    let body = req.body;
    let coupon = new coupons.Coupons();
    coupon.id = body.data.id;
    coupon.businessid = body.data.businessid;
    coupon.couponcode = body.data.couponcode.toString().toUpperCase().trim();
    coupon.startdate = body.data.startdate;
    coupon.enddate = body.data.enddate;
    coupon.status = body.data.status;
    coupon.description = body.data.description;
    
            
    coupon.save().then(result =>{
        console.log(result);

        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );

});


router.post("/get", async (req, res) => {
    let body = req.body;
    let coupon = new coupons.Coupons();
    coupon.id = body.data.id;

            
    coupon.get().then(result =>{
        console.log(result);

        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );

});

router.post("/list", async (req, res) => {
    let body = req.body;
    let coupon = new coupons.Coupons();
    // coupon.id = body.data.id;

            
    coupon.list().then(result =>{
        console.log(result);

        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );

});

router.post("/delete", async (req, res) => {
    let body = req.body;
    console.log(body);
    let coupon = new coupons.Coupons();
    coupon.id = body.data.id;

            
    coupon.delete().then(result =>{
        console.log(result);

        let data = 
        {
            "data":{
                "status":"success",
                "data":result
            }
        }
        res.end(JSON.stringify(data));
    },
    err =>{
        let data = {
            "data":{
                "status":"fail"
            }
        };
        res.end(JSON.stringify(data))
    }
    );

});



module.exports = router;