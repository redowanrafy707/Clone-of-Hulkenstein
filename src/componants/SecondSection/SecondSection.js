import React from 'react';
import "./SecondSection.css"
const SecondSection = () => {
    return (
        <div className="full-section">
            <h1> <span className="lakh">১ লক্ষ + </span>সদ্যসের ইউটিউব পরিবারে</h1>
            <h1>তোমাকেও স্বাগতম! </h1>
        <div className="section">
            <div className="part1">
                <h1 className="lakh part1">120,00</h1>
                <p className="part1 paragraph">Total Students</p>
            </div>
            <div className="part1">
                <h1 className="lakh part1">4,000</h1>
                <p className="part1 paragraph">YouTube Videos</p>
            </div>
            <div className="part1">
                <h1 className="lakh part1">40</h1>
                <p className="part1 paragraph">Available Courses</p>
            </div>

        </div>
        </div>
    );
};

export default SecondSection;