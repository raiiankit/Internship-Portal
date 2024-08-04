const express = require("express");
const router = express.Router();


const { createUser } = require("../controller/createUser");
const { getUser, getOne} = require("../controller/getUsers");
const { deleteuser} = require("../controller/Deleteuser");
const {updateOne} = require("../controller/Deleteuser")




router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.delete("/deleteuser/:id",deleteuser);
router.put("/updateuser/:id",updateOne);


module.exports = router;
