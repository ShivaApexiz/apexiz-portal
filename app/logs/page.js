"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase.from("time_logs").select("*");
    setLogs(data || []);
  }

  async function addLog(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    await supabase.from("time_logs").insert({
      project: form.get("project"),
      hours: Number(form.get("hours")),
      description: form.get("desc"),
      work_date: form.get("date")
    });

    load();
  }

  return (
    <div>
      <h2>Time Logs</h2>

      <form onSubmit={addLog} className="card">
        <input name="project" placeholder="Project"/><br/><br/>
        <input name="hours" type="number"/><br/><br/>
        <input name="date" type="date"/><br/><br/>
        <textarea name="desc"></textarea><br/><br/>
        <button className="btn">Add</button>
      </form>

      <div className="card">
        {logs.map(l => (
          <div key={l.id}>
            {l.project} - {l.hours}
          </div>
        ))}
      </div>
    </div>
  );
}