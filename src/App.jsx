import "./App.css";
import data from "./contacts.json";
import { useState } from "react";

function App() {
  // const [contacts, setContact] = useState(contacts)
  const [contacts, setContact] = useState(data.slice(0, 5));

  const deleteContact = (id) => {
    let deleted = contacts.filter((elem) => elem.id !== id)
    setContact(deleted)
  }

  // const sortByPopularity
  const sortByPopularity = () => {
    let sorted = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContact(sorted)
  }
  const sortByName = () => {
    let sorted = [...contacts].sort((a,b) => b.name.localeCompare(a.name))
    setContact(sorted)
  }
  const addRandomContact = () => {
    let remaining = data.filter((elem) => !contacts.includes(elem));
    console.log(remaining.length === data.length);
    if (!(remaining.length === data.length)) {
      setContact([remaining[Math.floor(Math.random() * remaining.length)], ...contacts]);
     } 
     else {
      setContact(contacts);
    }
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td><p>{contact.name}</p></td>
                <td><p>{contact.popularity}</p></td>
                <td>{contact.wonOscar && <p>🏆</p>}</td>
                <td>{contact.wonEmmy && <p>🏆</p>}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
