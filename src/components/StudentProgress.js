// src/StudentProgress.js
import React, { useState } from 'react';

const StudentProgress = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Harsh Vardhan', skillBadges: 14, arcadeDone: 'Yes', remarks: 'Good' },
        // Add more student data as needed
    ]);

    // Track the changes in student details before update
    const [changes, setChanges] = useState({});

    const handleInputChange = (e, id, field) => {
        const value = e.target.value;
        // Store previous values in case of rollback
        setChanges(prevChanges => ({
            ...prevChanges,
            [id]: {
                ...prevChanges[id],
                [field]: value,
            },
        }));
    };

    const handleUpdate = (id) => {
        // Apply the updates to the main students state
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id
                    ? { ...student, ...changes[id] }
                    : student
            )
        );
        // Clear the changes for the updated student
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            delete updatedChanges[id];
            return updatedChanges;
        });
    };

    const handleDelete = (id) => {
        setStudents(students.filter(student => student.id !== id));
        // Remove any unsaved changes related to this student
        setChanges(prevChanges => {
            const updatedChanges = { ...prevChanges };
            delete updatedChanges[id];
            return updatedChanges;
        });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Students under Supervisor</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Student ID</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Student Name</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Skill Badges</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Arcade Done</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Remarks</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2">{student.id}</td>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">
                                <input
                                    type="number"
                                    defaultValue={student.skillBadges}
                                    onChange={(e) => handleInputChange(e, student.id, 'skillBadges')}
                                    className="border p-1"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <select
                                    defaultValue={student.arcadeDone}
                                    onChange={(e) => handleInputChange(e, student.id, 'arcadeDone')}
                                    className="border p-1"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    defaultValue={student.remarks}
                                    onChange={(e) => handleInputChange(e, student.id, 'remarks')}
                                    className="border p-1"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleUpdate(student.id)}
                                    className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(student.id)}
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
    );
};

export default StudentProgress;