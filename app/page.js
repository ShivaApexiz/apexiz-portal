"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [contract, setContract] = useState({ total_hours: 100 });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase.from("time_logs").select("*");
    setLogs(data || []);
  }

  const used = logs.reduce((s, l) => s + (l.hours || 0), 0);
  const total = contract.total_hours;
  const remaining = total - used;
  const percent = (used / total) * 100;

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{display:"flex", gap:"20px"}}>
        <div className="card">Total: {total}</div>
        <div className="card">Used: {used}</div>
        <div className="card">Remaining: {remaining}</div>
      </div>

      <div className="card">
        <div style={{background:"#eee", height:"20px"}}>
          <div style={{width:`${percent}%`, background:"#FF5500", height:"100%"}}></div>
        </div>
      </div>

      {percent >= 75 && <p style={{color:"orange"}}>⚠️ 75% Used</p>}
      {percent >= 90 && <p style={{color:"red"}}>⚠️ 90% Used</p>}
      {percent >= 100 && <p style={{color:"darkred"}}>🚨 Over Used</p>}
    </div>
  );
}