import React from "react";
import { useState } from "react";

const SearchModal = ({ isOpen, onClose, data }) => {
const [search, setSearch] = useState("");


  if (!isOpen) return null;
  
const filteredUsers = data.filter((user) => {
 return  user.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h4>Search Modal</h4>
       <input placeholder="Search..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
       <br />
  {search.trim() !== "" && (
  filteredUsers.map((user) => (
    <div key={user.id}>
      {user.name}
    </div>
  ))
)}
       
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default SearchModal;