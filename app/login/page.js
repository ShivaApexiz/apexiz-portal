"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}