import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (
        <SelectedContact 
          selectedContactId = {selectedContactId}
          setSelectedContactId = {setSelectedContactId}
        />
        ) : (
          <ContactList
            setSelectedContactId = {setSelectedContactId}
          />
          )}
    </>
  );
}

