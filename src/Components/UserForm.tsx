import { useState } from 'react';

// Define the UserForm component
function UserForm({ handleSubmit }: any) {
    // Define the locations array
    const locations = ["East Midlands", "West Midlands", "Northen Ireland", "Isle of Man", "Wales", "Scotland"];
    // Define the state for form data
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        location: '',
        jobTitle: '',
    });

    // Function to validate the form data
    const validateForm = () => {
        let isValid = true;

        if (formData.name.trim() === '') {
            isValid = false;
            alert('Name is required')
        }
        // Validate Date of Birth
        if (formData.dob.trim() === '') {
            isValid = false;
            alert('Dob invalid')
        } else {
            const dobDate = new Date(formData.dob);
            const currentDate = new Date();
            if (dobDate >= currentDate) {
                isValid = false;
                alert('Dob should be in past')
            }
        }
        // Validate Email
        if (formData.email.trim() === '') {
            isValid = false;
            alert('Email is required')
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            alert('Email is not valid')
        }
        // Validate Location
        if (formData.location.trim() === '') {
            isValid = false;
            alert('Location is required')
        }
        // Validate Job Title
        if (formData.jobTitle.trim() === '') {
            isValid = false;
            alert('Job Title Required')
        }

        return isValid;
    };

    // Function to handle form submission
    const submitted = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(formData);
        }
    };

    // Function to handle form input changes
    const onChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Return the JSX for the UserForm component
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form onSubmit={(e) => submitted(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* Name input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input id="name" name="name" type="text" value={formData.name} onChange={onChange} className="form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {/* Date of Birth input */}
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
                        <input id="dob" name="dob" type="date" value={formData.dob} onChange={onChange} className="form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {/* Email input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input id="email" name="email" type="text" value={formData.email} onChange={onChange} className="form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {/* Location input */}
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                        <select id="location" name="location" value={formData.location} onChange={onChange} className="form-select appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Select Location</option>
                            {/* Mapping locations array to options */}
                            {locations.map(location => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    {/* Job Title input */}
                    <div className="mb-4">
                        <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">Job Title:</label>
                        <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={onChange} className="form-select appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Select Job Title</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Web Designer">Web Designer</option>
                            <option value="Data Analyst">Data Analyst</option>
                        </select>
                    </div>
                    {/* Submit button */}
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserForm; // Export the UserForm component
