const express = require("express");
const router = express.Router();
const {
  getAllStartups,
  getSingleStartup,
  createStartup,
  updateStartup,
  deleteStartup,
} = require("../controllers/startups");

router.route("/").get(getAllStartups).post(createStartup);
router
  .route("/:id")
  .get(getSingleStartup)
  .put(updateStartup)
  .delete(deleteStartup);

module.exports = router;
