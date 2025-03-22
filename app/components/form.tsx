import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted({ name, email });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Submitted: {JSON.stringify(submitted)}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}
