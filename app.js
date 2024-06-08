/**
 * @file main.js
 * @description This is the main server file for the Express.js application. It serves static files and provides various API endpoints.
 */

const express = require("express");
const app = express();
const port = process.env.PORT || 4444;

// Middleware to serve static files
app.use(express.static("public"));
app.use("/node_modules", express.static("node_modules"));
app.use("/public", express.static("public"));
app.use("/favico.ico", express.static("public/assets/favicons/favico.ico"));

/**
 * @api {get} /test Test Endpoint
 * @apiName GetTest
 * @apiGroup Test
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "It works!"
 *     }
 */
app.get("/test", (req, res) => {
  res.status(200).send({ message: "It works!" });
});

/**
 * @api {post} /ifttt-webhook IFTTT Webhook Endpoint
 * @apiName PostIFTTTWebhook
 * @apiGroup Webhook
 * @apiParam {String} event Event name.
 * @apiParam {String} value1 Value 1.
 * @apiParam {String} value2 Value 2.
 * @apiParam {String} value3 Value 3.
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "IFTTT Webhook received!"
 *     }
 */
app.post("/ifttt-webhook", (req, res) => {
  const { event, value1, value2, value3 } = req.body;
  // Process the webhook data here
  res.status(200).send({ message: "IFTTT Webhook received!" });
});

/**
 * @api {post} /build-hook Build Hook Endpoint
 * @apiName PostBuildHook
 * @apiGroup Webhook
 * @apiParam {String} repository Repository name.
 * @apiParam {String} branch Branch name.
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Build Hook received!"
 *     }
 */
app.post("/build-hook", (req, res) => {
  const { repository, branch } = req.body;
  // Trigger build process here
  res.status(200).send({ message: "Build Hook received!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
