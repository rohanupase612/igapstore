const database = require("./Database");


class Coupons{
    id = 0;
    businessid=0;
    couponcode = "";
    startdate = "";
    enddate = "";
    status = "";
    description = "";
    db = new database.Database();

    constructor(){
        this.id = 0;
        this.businessid = 0;
        this.couponcode = "";
        this.startdate = "";
        this.enddate = "";
        this.status = "";
        this.description = "";
        this.query = "";
        
    }

    save =()=>{
        if(this.id==0){

          
            this.query = "INSERT INTO  businesscoupons(businessid, couponcode, startdate, enddate, status, description) " 
            this.query += " VALUES ('" + this.businessid + "','" + this.couponcode + "','" + this.startdate + "','" + this.enddate + "','" + this.status + "','" + this.description + "')";
        }
        else {

            this.query = "UPDATE businesscoupons SET  businessid='" + this.businessid + "', couponcode='" + this.couponcode + "' , startdate = '" + this.startdate + "', enddate = '" + this.enddate + "',status ='" + this.status + "',description = '" + this.description + "'";
            this.query += " WHERE id =" + this.id ;
        }
        console.log(this.query);

        return new Promise((resolve,reject)=>{
            this.db.query(this.query, (err,result)=>{
                this.db.close();
                    if(err){
                       return reject(err);
                       
                    };
                    resolve(result);
                });
            });
    }


    get = ()=>{
        this.query = "SELECT * FROM  businesscoupons"; 
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

    
    list = ()=>{
        this.query = "SELECT * FROM  businesscoupons"; 
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

    delete = ()=>{
        this.query = "DELETE FROM  businesscoupons"; 
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

    Coupons: Coupons

}