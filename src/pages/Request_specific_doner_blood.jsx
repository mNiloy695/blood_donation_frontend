import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../componets/Footer";
import Navbar from "../componets/Navbar";
import BloodImage from "../assets/images/blood_cell.jpg"
const RequestBloodForm = () => {
    const [bloodRequest, setBloodRequest] = useState(null);
    const [status, setStatus] = useState("Pending"); // Default status
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [token, setToken] = useState('');
    const navigator=useNavigate()

    useEffect(() => {
        // Ensure token is fetched only once and update state if needed
        const storedToken = localStorage.getItem('token');
        if (storedToken && storedToken !== 'undefined') {
            setToken(storedToken);
        }
    }, []); // Empty dependency array to run this only once on mount

    // Fetch the blood request data based on the URL param (ID)
    const fetchBloodRequest = async () => {
        try {
            const response = await axios.get(`https://blood-donation-backend-v3bp.vercel.app/donate/request/${id}/`);
            setBloodRequest(response.data);
            if (response.data.error) {
                console.error(response.data.error);
                alert("data not")
            } else {
                console.log(response.data);
                
            }
        } catch (error) {
            console.error("Error fetching blood request:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch the blood request when component mounts or when `id` changes
    useEffect(() => {
        fetchBloodRequest();
    }, [id]);
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token && token!=='undefined'){
            setToken(token);
        }
        if(!token){
            navigator("/login");
        }
    })

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "https://blood-donation-backend-v3bp.vercel.app/blood/specificRequest/",
                {
                    requester: localStorage.getItem('user_id'),
                    blood_request: id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`,
                    }
                }
            );
            alert("Blood request successfully submitted!");
            setStatus("Pending"); 
            navigator('/doners')
            // Reset the form status
        } catch (error) {
            console.log(id)
            console.error("Error submitting blood request:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    // If still loading the request data
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="container flex justify-center flex-col w-[80%] mx-auto m-6 p-6">
                <h1 className="mx-3 font-sans font-semibold">Blood {bloodRequest.blood}</h1>
               <div className="flex justify-center p-3 ">
               <img src={BloodImage} className="flex h-96 w-full  justify-center " alt="" />
               </div>
                <div className="bg-white w- p-6 rounded-lg shadow-md">
                    <div className="mb-4 px-2">
                        <strong>Blood Group:</strong> {bloodRequest.blood}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-red-600 text-black font-semibold rounded-lg shadow-md hover:bg-red-700"
                            >
                                Request for Blood
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RequestBloodForm;
