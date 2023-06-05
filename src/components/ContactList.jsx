import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([])


  useEffect(()=>{
    async function fetchContacts(){
      try {
              //*****This website for the api was blocked-unaable to use it
        // const response = await fetch("https://jsonplace-univclone.herokuapp.com/users")
        // const result = await response.json();
        // console.log(result)
        // setContacts(result);
        setTimeout(() => {
          setContacts(dummyContacts)
        }, 500);
      } catch (error) {
        console.error(error)
      }
    }
    fetchContacts()
  },[]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name </td>
          <td>Email </td>
          <td>Phone </td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
        })}
      </tbody>
    </table>
  );
}
