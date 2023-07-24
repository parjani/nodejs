const asyncHandler = require("express-async-handler");
const connection = require("../config/dbConnection");
const getList = asyncHandler(async (req, res) => {
    const query = 'SELECT * FROM tbllogins';
    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Error executing the query:', err);
            connection.end();
            return;
        }
        if (results.length === 0) {
            // No records found, send a custom message
            res.status(200).json({ message: 'No records found' ,status: 'null'});
          } else {
            // Records found, send them in the response
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', results});
          }
    });
});
const getListbyID = asyncHandler(async (req, res) => {
    const{ ID }= req.body;
    const query = "SELECT * FROM tbllogins where ID = " + ID;
    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Error executing the query:', err);
            connection.end();
            return;
        }
        if (results.length === 0) {
            // No records found, send a custom message
            res.status(200).json({ message: 'No records found' ,status: 'null'});
          } else {
            // Records found, send them in the response
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', Record:results[0]});
          }
    });
});
const addList = asyncHandler(async (req, res) => {
    const {FName, LName, Mobile } = req.body;
    const query = "INSERT INTO tbllogins (FName, LName, Mobile) VALUES ('" + FName + "','" + LName + "','" + Mobile + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            console.error('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Data inserted", status: "success" });
    });
});
const updateList = asyncHandler(async (req, res) => {
    const { ID, FName, LName, Mobile } = req.body;
    const query = "update tbllogins set  FName= '" + FName+ "', LName= '" + LName + "', Mobile= '" + Mobile + "' where ID= '" + ID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            console.error('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const deleteList = asyncHandler(async (req, res) => {
    const { ID } = req.body;
    const query = "Delete from tbllogins where ID = " + ID;
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            console.error('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});
module.exports = { getList,getListbyID, addList , updateList, deleteList};

