const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models");
const responseShaper = require("../middlewares/response-shaper");

const BASE_ROUTE = "/";
const BASE_ROUTE_ID = `${BASE_ROUTE}:id`;

// // create new Models entry
router.post(
  BASE_ROUTE,
  async (req, res, next) => {
    try {
      res.data = await db.expenses.create(req.body);

      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

// get all Models controllers
router.get(
  BASE_ROUTE,
  async (req, res, next) => {
    try {
      res.data = await db.expenses.findAll();
      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

// // get single Models entry (by id)
router.patch(
  BASE_ROUTE_ID,
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const day = await db.expenses.findOne({ where: { id } });

      if (!day) return next({ msg: "Not found" });

      res.data = await day.update({ ...req.body });

      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

// destroy Models entry (by id)
router.delete(
  BASE_ROUTE_ID,
  async (req, res, next) => {
    try {
      const { id } = req.params;

      await db.expenses.destroy({ where: { id } });

      res.data = { success: true };

      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

module.exports = router;
