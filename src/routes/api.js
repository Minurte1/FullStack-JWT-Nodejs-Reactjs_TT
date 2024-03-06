import express from "express";
import userController from "../controller/userController";
import apiController from "../controller/apiController";
import groupController from "../controller/groupController";
const router = express.Router();
/**
 *
 * @param {*} app
 */

const testMiddleware = (req, res, next) => {
  console.log("test middleware");
  if (true) {
    return res.send("reject");
  }
  next();
};

const initapiRoutes = (app) => {
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.handleRegister);
  router.post("/login", testMiddleware, apiController.handleLogin);

  router.get("/user/read", userController.readFucn);
  router.post("/user/create", userController.createFucn);
  router.put("/user/update", userController.updateFucn);
  router.delete("/user/delete", userController.deleteFucn);

  router.get("/group/read", groupController.readFucn);

  return app.use("/api/v1/", router);
};

export default initapiRoutes;
