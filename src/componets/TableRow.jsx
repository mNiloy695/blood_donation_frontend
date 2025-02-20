import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Corrected import for useNavigate

const TableRow = (props) => {
    const [status, setStatus] = useState(props.status);
    const [token, setToken] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && token !== 'undefined') {
            setToken(token);
        }
    }, []);

    const Update = async () => {
        if (!props.id) {
            console.error("ID is missing");
            return;
        }

        console.log('ID:', props.id);
        console.log('Current status:', status);

        // Check if the token is valid before proceeding
        if (!token) {
            console.error("Token is missing or invalid");
            return;
        }

        try {
            const url = props.track === "recive" 
                ? `https://blood-donation-backend-v3bp.vercel.app/recive/request/${props.id}/`
                : props.track === "donate" 
                ? `https://blood-donation-backend-v3bp.vercel.app/donate/request/${props.id}/` 
                : null;

            if (!url) {
                console.error("Invalid track type");
                return;
            }

            const response = await axios.patch(
                url,
                {
                    "status": "Cancelled",
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Token ${token}`,
                    }
                }
            );

            console.log('Response:', response);
            
           if(props.track==="recive"){
            navigate('/request');
           }
           else if(props.track==='donate'){
            navigate('/donate');
           }

        } catch (error) {
            console.error('Error updating the request:', error);
        }
    };

    return (
        <tr key={props.id} className='text-left'>
            <td className="py-3 px-4 border-b">{props.address}</td>
            <td className="py-3 px-4 border-b">{props.phone}</td>
            {props.status !== 'Cancelled' ? (
                <td className="py-3 px-4 border-b">{props.status}</td>
            ) : (
                <td onClick={Update} className="py-3 px-4 border-b btn bg-red-400">Cancel</td>
            )}
            <td className="py-3 px-4 border-b">{props.blood}</td>
            <td className="py-3 px-4 border-b">{props.unit}</td>
        </tr>
    );
};

export default TableRow;
