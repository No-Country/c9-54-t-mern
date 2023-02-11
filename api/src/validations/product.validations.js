import { check } from "express-validator";
import validateResult from "../middlewares/validator.middleware.js";

export const validateDataUpdateProduct = [
  check("title").optional().exists().notEmpty().isString(),
  check("country").optional().exists().notEmpty().isString(),
  check("city").optional().exists().notEmpty().isString(),
  check("address").optional().exists().notEmpty().isString(),
  check("image").optional().exists().notEmpty().isString(),
  check("unAvailable").optional().exists().notEmpty().isNumeric(),
  check("description").optional().exists().notEmpty().isString(),
  check("maxPeople").optional().exists().notEmpty().isNumeric(),
  check("image").optional().exists().notEmpty().isString(),
  check("unAvailable").optional().exists().notEmpty().isNumeric(),
  check("description").optional().exists().notEmpty().isString(),
  check("maxPeople").optional().exists().notEmpty().isNumeric(),
  check("price").optional().exists().notEmpty().isNumeric(),
  check("numberBedrom").optional().exists().notEmpty().isNumeric(),
  check("numberBathroom").optional().exists().notEmpty().isNumeric(),
  check("productType").optional().exists().notEmpty().isNumeric(),
  check("gym").optional().exists().notEmpty().isBoolean(),
  check("swimmingPool").optional().exists().notEmpty().isBoolean(),
  (req, resp, next) => validateResult(req, resp, next),
];
