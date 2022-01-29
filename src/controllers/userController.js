export const join = (req, res) => res.send("Join");
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit User");
};
export const remove = (req, res) => {
  console.log(req.params);
  return res.send("Remove User");
};
export const login = (req, res) => {
  console.log(req.params);
  return res.send("Login");
};
export const logout = (req, res) => {
  console.log(req.params);
  return res.send("Log out");
};
export const see = (req, res) => {
  console.log(req.params);
  return res.send("See User");
};
