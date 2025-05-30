import React from "react";

export default function TokenPost() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        text="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        text="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{ wordBreak: "break-all" }}>{token}</p>
    </form>
  );
}
