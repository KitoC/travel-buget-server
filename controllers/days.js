const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models");
const responseShaper = require("../middlewares/response-shaper");

const MODEL = "days";
const BASE_ROUTE = "/";
const BASE_ROUTE_ID = `${BASE_ROUTE}:id`;

// // create new Models entry
router.post(
  BASE_ROUTE,
  async (req, res, next) => {
    try {
      res.data = await db.days.create(req.body, {
        include: db.days.getIncluded(db)
      });

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
      res.data = await db.days.findAll({ include: db.days.getIncluded(db) });
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

      const day = await db.days.findOne({
        where: { id },
        include: db.days.getIncluded(db)
      });

      if (!day) return next({ msg: "Not found" });

      res.data = await day.update({ ...req.body });

      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

router.patch(
  BASE_ROUTE,
  async (req, res, next) => {
    try {
      await db.days.bulkCreate(req.body || [], {
        updateOnDuplicate: [
          "id",
          "date",
          "budget",
          "past",
          "currencyRate",
          "currencyType",
          "name"
        ],
        include: db.days.getIncluded(db)
      });

      res.data = await db.days.findAll();

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

      await db.days.destroy({ where: { id } });

      res.data = { success: true };

      next();
    } catch (error) {
      console.log(error);
    }
  },
  responseShaper
);

module.exports = router;
