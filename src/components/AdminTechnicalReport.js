// src/TechnicalReport.js
import React, { useState } from 'react';

const AdminTechnicalReport = () => {
    const [reports, setReports] = useState([
        {
            id: 1,
            state: "Complete",
            priority: "High",
            labName: "Lab A",
            taskNo: "T1",
            labNo: "L1",
            shortDescription: "Sample Task",
            fullDescription: "Detailed description of the task",
            remarks: "On Time",
            studentName: "John Doe",
            supervisorName: "Dr. Smith",
            skillBadges: 5,
            arcadeDone: "Yes"
        },
        // Add more report data as needed
    ]);

    const [editMode, setEditMode] = useState({});
    const [changes, setChanges] = useState({});

    const handleEditClick = (id, field) => {
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [id]: { ...prevEditMode[id], [field]: true }
        }));
    };

    const handleSaveClick = (id, field) => {
        setReports(prevReports =>
            prevReports.map(report =>
                report.id === id
                    ? { ...report, [field]: changes[id]?.[field] || report[field] }
                    : report
            )
        );
        setEditMode(prevEditMode => ({
            ...prevEditMode,
            [id]: { ...prevEditMode[id], [field]: false }
        }));
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            if (updatedChanges[id]) delete updatedChanges[id][field];
            return updatedChanges;
        });
    };

    const handleInputChange = (e, id, field) => {
        const value = e.target.value;
        setChanges(prevChanges => ({
            ...prevChanges,
            [id]: {
                ...prevChanges[id],
                [field]: value,
            },
        }));
    };

    const handleDelete = (id) => {
        setReports(reports.filter(report => report.id !== id));
        setEditMode(prevEditMode => {
            const updatedEditMode = { ...prevEditMode };
            delete updatedEditMode[id];
            return updatedEditMode;
        });
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            delete updatedChanges[id];
            return updatedChanges;
        });
    };

    const columns = [
        { key: "state", label: "State" },
        { key: "priority", label: "Priority" },
        { key: "labName", label: "Lab Name" },
        { key: "taskNo", label: "Task No" },
        { key: "labNo", label: "Lab No" },
        { key: "shortDescription", label: "Short Description" },
        { key: "fullDescription", label: "Full Description" },
        { key: "remarks", label: "Remarks" },
        { key: "studentName", label: "Student Name" },
        { key: "supervisorName", label: "Supervisor Name" },
        { key: "skillBadges", label: "No. of Skill Badges", type: "number" },
        { key: "arcadeDone", label: "Arcade Done", type: "select" },
    ];

    return (
        <div className="m-18 p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Technical Report</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{ width: "1200px" }}>
                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th key={col.key} className="border px-4 py-2 bg-blue-500 text-white">{col.label}</th>
                            ))}
                            <th className="border px-4 py-2 bg-blue-500 text-white">Edit</th>
                            <th className="border px-4 py-2 bg-blue-500 text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map(report => (
                            <tr key={report.id}>
                                {columns.map(col => (
                                    <td key={col.key} className="border px-2 py-2">
                                        {editMode[report.id]?.[col.key] ? (
                                            col.type === "select" ? (
                                                <select
                                                    value={changes[report.id]?.[col.key] || report[col.key]}
                                                    onChange={(e) => handleInputChange(e, report.id, col.key)}
                                                    className="border p-1 w-full"
                                                >
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            ) : (
                                                <input
                                                    type={col.type || "text"}
                                                    value={changes[report.id]?.[col.key] || report[col.key]}
                                                    onChange={(e) => handleInputChange(e, report.id, col.key)}
                                                    className="border p-1 w-full"
                                                />
                                            )
                                        ) : (
                                            <span>{report[col.key]}</span>
                                        )}
                                    </td>
                                ))}
                                <td className="border px-2 py-2">
                                    {Object.keys(editMode[report.id] || {}).some(field => editMode[report.id][field]) ? (
                                        <button
                                            onClick={() => columns.forEach(col => handleSaveClick(report.id, col.key))}
                                            className="bg-green-500 text-white px-2 py-1 rounded"
                                        >
                                            Save All
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => columns.forEach(col => handleEditClick(report.id, col.key))}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                                        >
                                            Edit All
                                        </button>
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    <button
                                        onClick={() => handleDelete(report.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTechnicalReport;