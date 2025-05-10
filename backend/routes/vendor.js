const express = require("express");
const Vendor = require("../models/Vendor");
const router = express.Router();

router.post("/", async (req, res) => {
  const vendor = await Vendor.create(req.body);
  res.json(vendor);
});

router.get("/", async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  const vendors = await Vendor.find().skip((page - 1) * limit).limit(Number(limit));
  const count = await Vendor.countDocuments();
  res.json({ vendors, totalPages: Math.ceil(count / limit) });
});

router.get("/:id", async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);
  res.json(vendor);
});

router.put("/:id", async (req, res) => {
  const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vendor);
});

router.delete("/:id", async (req, res) => {
  await Vendor.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
