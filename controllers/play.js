var rword = require("random-words");

class controller{
    static async page(req,res){
        let words = rword({exactly:100,maxLength:5});
        res.render("play",{
            data: words
        });
    }

    static async addRoom(req,res){
        // STUFF TODO
    }
}

module.exports = controller;