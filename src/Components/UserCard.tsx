import { UserData } from '../models/Profile';

// Define props for the UserCard component
type UserCardProps = {
    user: UserData | undefined; // User data or undefined
    Button: any; // Button component
}

// Define the UserCard component
function UserCard({ user, Button }: UserCardProps) {
    // Render the UserCard component
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                    {/* Display user name */}
                    <h2 className="text-xl font-semibold mb-2">{user?.name}</h2>
                    {/* Horizontal line */}
                    <hr className="border-t-2 border-gray-300 mb-4" />
                    <div className="grid grid-cols-2 gap-4">
                        {/* Date of Birth */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                            <input type='date' value={user?.dob} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <input value={user?.email} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {/* Location */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Location:</label>
                            <input value={user?.location} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {/* Job Title */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Job Title:</label>
                            <input value={user?.jobTitle} readOnly className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        {/* Render the provided Button component */}
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the UserCard component
export default UserCard;
