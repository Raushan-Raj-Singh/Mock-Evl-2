import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../redux/actions";
import "./Tracker.css"; // Import CSS file for styling

const Tracker = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    type: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://mock-evl-2.onrender.com/transactions`,
        formData
      );
      dispatch(addTransaction(response.data));
      alert("Transaction created successfully!");
      setFormData({
        type: "",
        category: "",
        amount: "",
        date: "",
      });
    } catch (error) {
      console.error("Error creating transaction:", error);
      alert("Failed to create transaction. Please try again.");
    }
  };

  return (
    <div className="tracker-container">
      <h3>Tracker Component</h3>
      <form onSubmit={handleSubmit} className="tracker-form">
        <div className="form-group">
          <label>Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {formData.type === "Income" ? (
              <optgroup label="Income">
                <option value="Salary">Salary</option>
                <option value="Gifts">Gifts</option>
                <option value="Refunds">Refunds</option>
                <option value="Other">Other</option>
              </optgroup>
            ) : (
              <optgroup label="Expense">
                <option value="Food & Drinks">Food & Drinks</option>
                <option value="Shopping">Shopping</option>
                <option value="Housing">Housing</option>
                <option value="Bills">Bills</option>
                <option value="Vehicle & Transport">Vehicle & Transport</option>
                <option value="Lifestyle">Lifestyle</option>
              </optgroup>
            )}
          </select>
        </div>
        <div className="form-group">
          <label>Amount in Rupees:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
};

export default Tracker;
