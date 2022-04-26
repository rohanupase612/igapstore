var express = require("express");
var bodyparser = require("body-parser");
var jsonparser = bodyparser.json();
const router = express.Router();
var Coupons = require("../models/Business_couponeproducts");


router.post("/save", async (req, res) => {
    let body = req.body;
    let coupon = new Coupons.Coupon();
    coupon.id = body.data.id;
    coupon.couponid = body.data.couponid;
    coupon.productid = body.data.productid;



            
    coupon.save().then(result =>{
        // console.log(result);

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
    let coupon = new Coupons.Coupon();
   
            
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
    let coupon = new Coupons.Coupon();
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

router.post("/get", async (req, res) => {
    let body = req.body;
    let coupon = new Coupons.Coupon();
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






module.exports = router;