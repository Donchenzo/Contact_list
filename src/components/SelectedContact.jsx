import React from 'react';
import { useState, useEffect } from 'react';
import { dummyContacts } from './ContactList';

export default function SelectedContact ({ selectedContactId, setSelectedContactId }){
   const [contact, setContact] = useState(null)
   
   useEffect(()=>{
    async function fetchContact(){
      try {
              //*****This website for the api was blocked-unaable to use it
        // const response = await fetch("https://jsonplace-univclone.herokuapp.com/users")
        // const result = await response.json();
        // console.log(result)
        // setContacts(result);
        setTimeout(() => {
          setContact(returnContact(selectedContactId))
        }, 500);
      } catch (error) {
        console.error(error)
      }
    }
    fetchContact()
    },[]);

  useEffect(() => {
    console.log(contact)
    }, [contact]); 
   
    //mocking this disfunctional API
    function returnContact (contactId) {
        let index = dummyContacts.findIndex((elementOnList) => {
            if (contactId === elementOnList.id) {
                return true
            } else {
                return false
            }
        })
        if (index !== false) {
            return dummyContacts[index]
        }
    }
   
   return(
        <>
        {
            contact ? (
                <h1>Your Contact {contact.name} was Selected </h1>
                
            ): (<h2>loading...</h2>)
        }
        </>
    )
}