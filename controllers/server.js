class controller{
    static async page(req,res){
        let server = req.app.get("socket");
        server.on("connect",function(socket){
            socket.on("start",function(data){
                server.emit("start",{
                    start:true
                })
            });
            socket.on("send",function(data){
                server.emit("update",{
                    data:data
                });
            });
        });
        res.render("server");
    }

    static async addRoom(req,res){
        // STUFF TODO
    }
}

module.exports = controller;