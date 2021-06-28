import { withSession } from "../../../helpers/with-session";

export default withSession(async function (req, res) {
  req.session.destroy();
  return res.send();
});
