const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie() {
  return (req, res, next) => {
    let token = req.headers?.authorization;
    if (token === "null" || !token)
      return next();
  
    token = token.split(" ")[1];

    try {
      const userPayload = validateToken(token);
      req.user = userPayload;
    } catch (error) {}
    return next();
  };
}

module.exports = { checkForAuthenticationCookie };
