const asyncHandler = require("express-async-handler");
const connection = require("../config/dbConnection");

const GetMainsSubjectList = asyncHandler(async (req, res) => {
    const query = 'SELECT * FROM assets_MainsSubject';
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
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', MainsSubjectList:results});
          }
    });
});
const AddMainsSubject = asyncHandler(async (req, res) => {
    const {ParentSubject, SubjectName, ShortDesc } = req.body;
    const query = "INSERT INTO assets_MainsSubject (ParentSubject, SubjectName, ShortDesc) VALUES ('" + ParentSubject + "','" + SubjectName + "','" + ShortDesc + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "MainsSubject details Added successfully.", status: "success" });
    });
});
const EditMainsSubject = asyncHandler(async (req, res) => {
    const {SubjectID, ParentSubject, SubjectName, ShortDesc } = req.body;
    const query = "update assets_MainsSubject set  ParentSubject= '" + ParentSubject+ "', SubjectName= '" + SubjectName + "', ShortDesc= '" + ShortDesc + "' where SubjectID= '" + SubjectID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const DeleteMainsSubject = asyncHandler(async (req, res) => {
    const {SubjectID} = req.body;
    const query = "update assets_MainsSubject set  IsDeleted = 1 where SubjectID= '" + SubjectID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const GetMainsPYQsList = asyncHandler(async (req, res) => {
    const query = "SELECT * FROM assets_MainsPYQs P INNER JOIN assets_MainsSubject S ON P.SubjectID = S.SubjectID WHERE P.IsDeleted = 0";
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
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', MainsPYQList:results});
          }
    });
});
const GetMainsPYQsListbyID = asyncHandler(async (req, res) => {
    const { PYQID } = req.body;
    const query = "SELECT * FROM assets_MainsPYQs P INNER JOIN assets_MainsSubject S ON P.SubjectID = S.SubjectID WHERE P.PYQID = '" + PYQID + "' AND P.IsDeleted = 0";
  
    connection.query(query, (err, results, fields) => {
      if (err) {
        console.error('Error executing the query:', err);
        res.status(500).json({ error: 'Error executing the query' });
        return;
      }
  
      if (results.length === 0) {
        // No records found, send a custom message
        res.status(200).json({ message: 'No records found', status: 'null' });
      } else {
        // Records found, send them in the response
        res.status(200).json({ message: 'Data fetched successfully', status: 'success', Record: results[0] });
      }
    });
});
const AddMainsPYQ = asyncHandler(async (req, res) => {
    const {SubjectID, Questions , PYQYear } = req.body;
    const query = "INSERT INTO assets_MainsPYQs (SubjectID, Questions , PYQYear) VALUES ('" + SubjectID + "','" + Questions + "','" + PYQYear + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "MainsPYQ details Added successfully.", status: "success" });
    });
}); 
const EditMainsPYQ = asyncHandler(async (req, res) => {
    const {PYQID, SubjectID, Questions , PYQYear } = req.body;
    const query = "update assets_MainsPYQs set  SubjectID= '" + SubjectID+ "', Questions= '" + Questions + "', PYQYear= '" + PYQYear + "' where PYQID= '" + PYQID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const DeleteMainsPYQ = asyncHandler(async (req, res) => {
    const {PYQID} = req.body;
    const query = "update assets_MainsPYQs set  IsDeleted = 1 where PYQID= '" + PYQID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const GetMainsSubjectSyllabusList = asyncHandler(async (req, res) => {
    const query = "SELECT h.*, s.SubjectName ,s.ParentSubject FROM assets_MainsSubjectSyllabus h INNER JOIN assets_MainsSubject AS s ON h.SubjectID = s.SubjectID WHERE h.IsDeleted = 0";
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
            res.status(200).json({ message: 'Data fetched sucessfully' ,status: 'success', MainsSubjectSyllabusList:results});
          }
    });
});
const AddMainsSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SubjectID, Syllabus, SyllabusPDF} = req.body;
    const query = "INSERT INTO assets_MainsSubjectSyllabus (SubjectID, Syllabus, SyllabusPDF) VALUES ('" + SubjectID + "','" + Syllabus + "','" + SyllabusPDF + "')";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "MainsSyllabus details Added successfully.", status: "success" });
    });
}); 
const EditMainsSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SyllabusID, SubjectID, Syllabus, SyllabusPDF} = req.body;
    const query = "update assets_MainsSubjectSyllabus set  SubjectID= '" + SubjectID+ "', Syllabus= '" + Syllabus + "', SyllabusPDF= '" + SyllabusPDF + "' where SyllabusID= '" + SyllabusID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Edited sucessfully", status: "success" });
    });
});
const DeleteMainsSubjectSyllabus = asyncHandler(async (req, res) => {
    const {SyllabusID} = req.body;
    const query = "update assets_MainsSubjectSyllabus set  IsDeleted = 1 where SyllabusID= '" + SyllabusID + "'";
    connection.query(query, (err, status, message, fields) => {
        if (err) {
            res.status(200).json('Error executing the query:', err);
            connection.end();
            return;
        }
        res.status(200).json({ message: "Deleted sucessfully", status: "success" });
    });
});
module.exports = {GetMainsSubjectList,AddMainsSubject,EditMainsSubject,DeleteMainsSubject,GetMainsPYQsList,GetMainsPYQsListbyID,AddMainsPYQ,EditMainsPYQ,DeleteMainsPYQ,GetMainsSubjectSyllabusList,AddMainsSubjectSyllabus,EditMainsSubjectSyllabus,DeleteMainsSubjectSyllabus}
