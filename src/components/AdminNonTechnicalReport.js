// src/AdminNonTechnicalReport.js
import React, { useState } from 'react';

const AdminNonTechnicalReport = () => {
    const [reports, setReports] = useState([
        {
            id: 1,
            state: "Pending",
            priority: "Medium",
            shortDescription: "Non-technical task",
            fullDescription: "Detailed description of the non-technical task",
            remarks: "Awaiting review",
            studentName: "Alice Doe",
            supervisorName: "Mr. Brown",
        },
        // Add more report data as needed
    ]);

    const [changes, setChanges] = useState({});
    const [editMode, setEditMode] = useState({});

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

    const handleEdit = (id) => {
        setEditMode(prevMode => ({ ...prevMode, [id]: true }));
    };

    const handleUpdate = (id) => {
        setReports(prevReports =>
            prevReports.map(report =>
                report.id === id
                    ? { ...report, ...changes[id] }
                    : report
            )
        );
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            delete updatedChanges[id];
            return updatedChanges;
        });
        setEditMode(prevMode => ({ ...prevMode, [id]: false }));
    };

    const handleDelete = (id) => {
        setReports(reports.filter(report => report.id !== id));
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            delete updatedChanges[id];
            return updatedChanges;
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Non-Technical Report</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300" style={{ width: "1200px" }}>
                    <thead>
                        <tr>
                            {["State", "Priority", "Short Description", "Full Description", "Remarks", "Student Name", "Supervisor Name", "Edit", "Delete"].map((col, index) => (
                                <th key={index} className="border px-4 py-2 bg-blue-500 text-white">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map(report => (
                            <tr key={report.id}>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.state}
                                            onChange={(e) => handleInputChange(e, report.id, 'state')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.state
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.priority}
                                            onChange={(e) => handleInputChange(e, report.id, 'priority')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.priority
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.shortDescription}
                                            onChange={(e) => handleInputChange(e, report.id, 'shortDescription')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.shortDescription
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.fullDescription}
                                            onChange={(e) => handleInputChange(e, report.id, 'fullDescription')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.fullDescription
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.remarks}
                                            onChange={(e) => handleInputChange(e, report.id, 'remarks')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.remarks
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.studentName}
                                            onChange={(e) => handleInputChange(e, report.id, 'studentName')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.studentName
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <input
                                            type="text"
                                            defaultValue={report.supervisorName}
                                            onChange={(e) => handleInputChange(e, report.id, 'supervisorName')}
                                            className="border p-1 w-full"
                                        />
                                    ) : (
                                        report.supervisorName
                                    )}
                                </td>
                                <td className="border px-2 py-2">
                                    {editMode[report.id] ? (
                                        <button
                                            onClick={() => handleUpdate(report.id)}
                                            className="bg-yellow-500 text-white px-2 py-1 rounded"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleEdit(report.id)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
                                        >
                                            Edit
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

export default AdminNonTechnicalReport;