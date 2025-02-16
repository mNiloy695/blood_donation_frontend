import React, { useState, useEffect } from 'react';
import axios from 'axios'
import profileImage from '../assets/images/avater.png'
const Profile = () => {
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        blood_group: '',
    });
    const [token, setToken] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    // Fetch user profile data when component mounts
    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem('token');
            const user_id = localStorage.getItem('user_id');
            
            try {
                const response = await axios.get(`http://127.0.0.1:8000/account/register/${user_id}/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`,
                    },
                });
                setProfile(response.data);  // Assuming response contains the user data
            } catch (err) {
                setError('Error fetching profile data');
                console.error("Error fetching profile data:", err);
            }
        };

        fetchProfileData();
    }, []);  // Empty dependency array to run only once when the component mounts

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Toggle between editing and viewing profile
    const toggleEdit = () => {
        setIsEditing((prevState) => !prevState);
    };

    // Submit the updated profile data
    const handleSave = async () => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('user_id');
      

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/account/register/${user_id}/`,profile, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });
            localStorage.setItem('token',profile.blood_group)
            console.log('Profile updated successfully:', response.data);
            setError('')
            setIsEditing(false);  // Exit edit mode after saving
        } catch (error) {
            setError('Error saving profile');
            console.error('Error saving profile:', error);
        }
    };

    return (
        <div className="max-w-3xl p-8 mx-auto md:mx-6  shadow-lg flex md:justify-between items-center flex-col md:flex-row flex-wrap">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl w-[100%] font-semibold mb-4">{isEditing ? 'Edit Profile' : 'Your Profile'}</h2>
                {error && <p className="text-red-500">{error}</p>}
                <div className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="first_name"
                                value={profile.first_name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-lg">{profile.first_name}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="last_name"
                                value={profile.last_name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-lg">{profile.last_name}</p>
                        )}
                    </div>

                

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-lg">{profile.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-lg">{profile.phone}</p>
                        )}
                    </div>

                    {/* Blood Group */}
                    <div>
    <label className="block text-sm font-medium">Blood Group</label>
    {isEditing ? (
        <select
            name="blood_group"
            value={profile.blood_group}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
        >
            <option value="" disabled>Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
    ) : (
        <p className="mt-1 text-lg">{profile.blood_group}</p>
    )}
</div>

                </div>

                {/* Edit / Save Button */}
                <div className="mt-6 flex justify-between">
                    <button
                        onClick={isEditing ? handleSave : toggleEdit}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                    </button>
                </div>
            </div>
            <div className='w-[45%]'> 
                <img src={profileImage} alt="profile image" />
            </div>
        </div>
    );
};

export default Profile;
