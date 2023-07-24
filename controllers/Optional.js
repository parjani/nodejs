const asyncHandler = require("express-async-handler");
const connection = require("../config/dbConnection");

const GetOptionalSubjectsList = asyncHandler(async (req, res) => {
    const query = "SELECT * FROM assets_OptionalSubjects WHERE IsDeleted = 0";
    connection.query(query, (err, results, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        if (results.length === 0) {
            // No records found, send a custom message
            res.status(200).json({ message: 'No records found' ,status: 'null'});
          } else {
            // Records found, send them in the response
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', OptionalSubjectList:results});
          }
    });
});
const AddOptionalSubject = asyncHandler(async (req, res) => {
    const {SubjectName, ShortDesc} = req.body;
    const query = "INSERT INTO assets_OptionalSubjects (SubjectName, ShortDesc) VALUES ('" + SubjectName + "','" + ShortDesc + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "OptionalSubject details Added successfully.", status: "success" });
    });
});
const EditOptionalSubject = asyncHandler(async (req, res) => {
    const {SubjectID, SubjectName, ShortDesc } = req.body;
    const query = "update assets_OptionalSubjects set  SubjectName= '" + SubjectName+ "', ShortDesc= '" + ShortDesc + "' where SubjectID= '" + SubjectID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const DeleteOptionalSubject = asyncHandler(async (req, res) => {
    const {SubjectID} = req.body;
    const query = "update assets_OptionalSubjects set  IsDeleted = 1 where SubjectID= '" + SubjectID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});
const GetOptionalSubjectSyllabusList = asyncHandler(async (req, res) => {
    const query = "SELECT h.*, s.SubjectName FROM assets_OptionalSubjectSyllabus AS h INNER JOIN assets_OptionalSubjects AS s ON h.SubjectID = s.SubjectID WHERE h.IsDeleted = 0";
    connection.query(query, (err, results, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        if (results.length === 0) {
            // No records found, send a custom message
            res.status(200).json({ message: 'No records found' ,status: 'null'});
          } else {
            // Records found, send them in the response
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', OptionalSyllabusList:results});
          }
    });
});
const AddOptionalSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SubjectID, Syllabus, SyllabusPDF} = req.body;
    const query = "INSERT INTO assets_OptionalSubjectSyllabus (SubjectID, Syllabus, SyllabusPDF) VALUES ('" + SubjectID + "','" + Syllabus + "','" + SyllabusPDF + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "OptionalSyllabus details Added successfully.", status: "success" });
    });
});
const EditOptionalSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SyllabusID, SubjectID, Syllabus, SyllabusPDF} = req.body;
    const query = "update assets_OptionalSubjectSyllabus set  SubjectID= '" + SubjectID+ "', Syllabus= '" + Syllabus + "', SyllabusPDF= '" + SyllabusPDF + "' where SyllabusID= '" + SyllabusID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const DeleteOptionalSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SyllabusID} = req.body;
    const query = "update assets_OptionalSubjectSyllabus set  IsDeleted = 1 where SyllabusID= '" + SyllabusID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});
module.exports = {GetOptionalSubjectsList,AddOptionalSubject,EditOptionalSubject,DeleteOptionalSubject,GetOptionalSubjectSyllabusList,AddOptionalSubjectSyllabus,EditOptionalSubjectSyllabus,DeleteOptionalSubjectSyllabus}