import React from 'react';

const MessageTextingForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        fetch('http://localhost:5000/message', {
            method: 'POST',
            body: data
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Enter your phone number</label>
                <input type="text" id="phonenumber" name="phoneNumber"/>
                <button>SEND</button>
            </form>
        </div>
    );
}

export default MessageTextingForm;