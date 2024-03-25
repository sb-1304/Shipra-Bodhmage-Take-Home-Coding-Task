// Importing necessary dependencies
import { useState } from 'react';
import './index'; // Assuming this is where your styles are imported
import UserCard from './Components/UserCard'; // Importing UserCard component
import UserForm from './Components/UserForm'; // Importing UserForm component

// Define the App component
export default function App() {
  // State to manage whether to show the form or user card
  const [showForm, setForm] = useState<boolean>(true);
  // State to store user data
  const [userData, setUserData] = useState<any>(); // Adjust the type as per your UserData type

  // Function to handle form submission
  const handleSubmit = (data: any) => {
    setForm(false); // Hide the form
    setUserData(data); // Set user data
  }

  // Function to handle resetting the form
  const handleReset = () => {
    setForm(true); // Show the form
    setUserData(undefined); // Clear user data
  }

  // Button component to reset the form
  const Button = () => (
    <button onClick={handleReset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Reset
    </button>
  );

  // Render the App component
  return (
    <div>
      {/* Conditional rendering to show either the form or user card */}
      {showForm ? (
        // If showForm is true, render UserForm component
        <UserForm handleSubmit={handleSubmit} />
      ) : (
        // If showForm is false, render UserCard component
        <UserCard user={userData} Button={Button} />
      )}
    </div>
  );
}
