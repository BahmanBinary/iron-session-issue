import { withSession } from "../../../helpers/with-session";

export default withSession(async function (req, res) {
  req.session.set("user", "WTF!!!");
  await req.session.save();
  return res.send();
});
