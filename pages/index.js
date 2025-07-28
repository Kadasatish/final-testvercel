import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // ఖాళీగా ఉంచండి, రియల్ సెటప్‌లో GET API జోడించవచ్చు
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.msg} - {msg.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
