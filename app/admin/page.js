"use client";
import { supabase } from "../../lib/supabase";

export default function Admin() {

  async function createCustomer() {
    await supabase.from("customers").insert({
      company_name: "New Client",
      contact_person: "Contact"
    });

    alert("Customer created");
  }

  return (
    <div>
      <h2>Admin Panel</h2>

      <div className="card">
        <button className="btn" onClick={createCustomer}>
          Create Customer
        </button>
      </div>
    </div>
  );
}