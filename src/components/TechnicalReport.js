import React, { useState } from 'react';

const TechnicalReport = () => {
    const [reports, setReports] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReport, setNewReport] = useState({
        labName: '',
        labNo: '',
        taskNo: '',
        shortDescription: '',
        fullDescription: '',
        studentName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReport(prevReport => ({
            ...prevReport,
            [name]: value,
        }));
    };

    const handleAddTicket = () => {
        setShowForm(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setReports([...reports, newReport]);
        setNewReport({
            labName: '',
            labNo: '',
            taskNo: '',
            shortDescription: '',
            fullDescription: '',
            studentName: '',
        });
        setShowForm(false);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Technical Report</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 bg-blue-500 text-white">State</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Priority</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Lab Name</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Lab No.</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Task No.</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Short Description</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Full Description</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Remarks</th>
                        <th className="border px-4 py-2 bg-blue-500 text-white">Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{report.state || '-'}</td>
                            <td className="border px-4 py-2">{report.priority || '-'}</td>
                            <td className="border px-4 py-2">{report.labName}</td>
                            <td className="border px-4 py-2">{report.labNo}</td>
                            <td className="border px-4 py-2">{report.taskNo}</td>
                            <td className="border px-4 py-2">{report.shortDescription}</td>
                            <td className="border px-4 py-2">{report.fullDescription}</td>
                            <td className="border px-4 py-2">{report.remarks || '-'}</td>
                            <td className="border px-4 py-2">{report.studentName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleAddTicket}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
                Add Ticket
            </button>

            {showForm && (
                <form onSubmit={handleFormSubmit} className="mt-4 bg-white p-4 border border-gray-300 rounded">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Lab Name:</label>
                            <input
                                type="text"
                                name="labName"
                                value={newReport.labName}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div>
                            <label>Lab No.:</label>
                            <input
                                type="number"
                                name="labNo"
                                value={newReport.labNo}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div>
                            <label>Task No.:</label>
                            <input
                                type="number"
                                name="taskNo"
                                value={newReport.taskNo}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div>
                            <label>Short Description:</label>
                            <input
                                type="text"
                                name="shortDescription"
                                value={newReport.shortDescription}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div>
                            <label>Full Description:</label>
                            <input
                                type="text"
                                name="fullDescription"
                                value={newReport.fullDescription}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div>
                            <label>Student Name:</label>
                            <input
                                type="text"
                                name="studentName"
                                value={newReport.studentName}
                                onChange={handleInputChange}
                                className="border p-1 w-full"
                            />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Add
                    </button>
                </form>
            )}
        </div>
    );
};

export default TechnicalReport;