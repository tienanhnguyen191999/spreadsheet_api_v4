const Pusher = require("pusher");

const appId = "1428573";
const key = "ded5041fb98b0734a8cf";
const secret = "98faa35b224a20255be3";
const cluster = "ap1";

var pusher = new Pusher({
  appId,
  key,
  secret,
  cluster,
});


module.exports = (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  // res.json({ auth: "$2a$14$dKlTzyT/GtxOO9m.fIDOEeuoGDgZ29y9FNjeX9VCT329UpKmqQlEO", user_info: "my_user_info" })
  const user = {
    id: + new Date(),
    name: + new Date()
  }; // Replace this with code to retrieve the actual user id
  const authResponse = pusher.authorizeChannel(socketId, channel, user);
  res.send(authResponse);
}
