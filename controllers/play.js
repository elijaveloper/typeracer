var rword = require("rword").rword;

class controller{
    static async page(req,res){
        let test = rword.generate(100,{length:'3-5'});
        res.render("play",{
            data_words: test
        });
    }

    static async addRoom(req,res){
        // STUFF TODO
    }
}

module.exports = controller;