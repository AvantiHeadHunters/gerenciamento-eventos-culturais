import jwt from "jsonwebtoken";

export const isAutenticated = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: "Token Missing" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const { user_id } = jwt.verify(token, process.env.SECRET_JWT);

    if (!user_id) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
};

export const hasAuthorization = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: "Token Missing" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const { isAdmin } = jwt.verify(token, process.env.SECRET_JWT);

    if (!isAdmin) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Forbidden" });
  }
};
