import React from 'react';
import "../css/contact.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("")
    const [guest, setGuest] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/reservation/send",
                { firstName, lastName, email, phone, date, time, guest },
                { headers: { "Content-Type": "application/json", }, withCredentials: true, }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setGuest("");
            setEmail("");
            setPhone("");
            setTime("");
            setDate("");
            navigate("/success");
        }
        catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            <section id="contact">
                <div class="contact-container container">
                    <div class="contact-img">
                        <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
                    </div>

                    <div class="form-container">
                        <h2>Book a Reservation</h2>
                        <div className='parallel'>
                            <input type="text" placeholder="First Name" className='m-2' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className='parallel'>
                            <input type="date" placeholder="Date" className='m-2' value={date} onChange={(e) => setDate(e.target.value)} />
                            <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <div className='parallel'>
                            <input type="number" placeholder="Phone No" className='m-2' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input type="number" placeholder="No of Guest" value={guest} onChange={(e) => setGuest(e.target.value)} />
                        </div>
                        <div className='parallel'>
                            <input type="email" placeholder="E-Mail" className='' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="btn btn-primary reserve_btn" onClick={handleReservation}>
                            RESERVE NOW <HiOutlineArrowNarrowRight />
                        </button>
                        <div className='contact_no'><p>For any query, contact us at</p>+91 5863572383</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;