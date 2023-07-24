const express = require('express');
const authenticateApiKey = require('../config/authMiddleware');
const { getList, addList, updateList, deleteList, getListbyID } = require('../controllers/admin');
const { GetMainsSubjectList, AddMainsSubject, EditMainsSubject, DeleteMainsSubject, GetMainsPYQsList, GetMainsPYQsListbyID, AddMainsPYQ, EditMainsPYQ, DeleteMainsPYQ, GetMainsSubjectSyllabusList, AddMainsSubjectSyllabus, EditMainsSubjectSyllabus, DeleteMainsSubjectSyllabus}= require("../controllers/Mains");
const { GetOptionalSubjectsList, AddOptionalSubject, EditOptionalSubject, DeleteOptionalSubject, GetOptionalSubjectSyllabusList, AddOptionalSubjectSyllabus, EditOptionalSubjectSyllabus, DeleteOptionalSubjectSyllabus } = require('../controllers/Optional');

const router = express.Router();

// Apply the authenticateApiKey middleware to all routes in this router
router.use(authenticateApiKey);

// Define the routes and their handlers
router.get("/getlistbyID", getListbyID);
router.post("/addList", addList);
router.post("/updateList", updateList);
router.post("/deleteList", deleteList);
router.get("/getlist", getList);
//Mains route
router.post("/Mains/GetMainsSubjectList",GetMainsSubjectList);
router.post("/Mains/AddMainsSubject",AddMainsSubject);
router.post("/Mains/EditMainsSubject",EditMainsSubject);
router.post("/Mains/DeleteMainsSubject",DeleteMainsSubject);
router.post("/Mains/GetMainsPYQsList",GetMainsPYQsList);
router.post("/Mains/GetMainsPYQsListbyID",GetMainsPYQsListbyID);
router.post("/Mains/AddMainsPYQ",AddMainsPYQ);
router.post("/Mains/EditMainsPYQ",EditMainsPYQ);
router.post("/Mains/DeleteMainsPYQ",DeleteMainsPYQ);
router.post("/Mains/GetMainsSubjectSyllabusList",GetMainsSubjectSyllabusList);
router.post("/Mains/AddMainsSubjectSyllabus",AddMainsSubjectSyllabus);
router.post("/Mains/EditMainsSubjectSyllabus",EditMainsSubjectSyllabus);
router.post("/Mains/DeleteMainsSubjectSyllabus",DeleteMainsSubjectSyllabus);
//Optional route
router.post("/Optional/GetOptionalSubjectsList",GetOptionalSubjectsList);
router.post("/Optional/AddOptionalSubject",AddOptionalSubject);
router.post("/Optional/EditOptionalSubject",EditOptionalSubject);
router.post("/Optional/DeleteOptionalSubject",DeleteOptionalSubject);
router.post("/Optional/GetOptionalSubjectSyllabusList",GetOptionalSubjectSyllabusList);
router.post("/Optional/AddOptionalSubjectSyllabus",AddOptionalSubjectSyllabus);
router.post("/Optional/EditOptionalSubjectSyllabus",EditOptionalSubjectSyllabus);
router.post("/Optional/DeleteOptionalSubjectSyllabus",DeleteOptionalSubjectSyllabus);

module.exports = router;
