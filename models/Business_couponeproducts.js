const database = require("../models/Database");

class Coupon{
    id = "";
    couponid = 0;
    productid = 0;  
    query = "";
    db = new database.Database();

    constructor(){
        this.id = "";
        this.couponid = 0;
        this.productid = 0; 
       


    }

    save = () =>{
        if(this.id == 0){
            this.query = "INSERT INTO business_couponproducts (couponid,productid)";
            this.query += " VALUES ( '" + this.couponid + "','" + this.productid + "')";
        }

        else {

            this.query = "UPDATE business_couponproducts SET  couponid='" + this.couponid + "', productid='" + this.productid + "' ";
            this.query += " WHERE id =" + this.id ;
        }

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err){
                    return reject(err); 
                };
                    resolve(result);
            });
        });

    }

    list = ()=>{
        this.query = "SELECT * FROM business_couponproducts "; 
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM business_couponproducts ";
        this.query += " WHERE id = '"+ this.id + "' "; 
        console.log(this.query);               
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }


    get=()=>{
        this.query = "SELECT * FROM business_couponproducts ";
        this.query += " WHERE id = '"+ this.id + "' ";                
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });  

    }

    


    

   



}

module.exports = {
    Coupon:Coupon
}































