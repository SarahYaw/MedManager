import React from 'react';
import { medicationObject } from "../types/medication";
import Table from './Table.tsx';
import axios from 'axios';


const rows:medicationObject[] = await axios.get('http://localhost:4000/api/read',
  {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    withCredentials: false,
  }
  ).then((response) => {
    if (!response) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  }).then((data) => {
    return data;
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

      
  function createMed() {
    // route user to the create page
    window.location.href = '/create/';
  }

  // if rows is empty, return a "you have no meds saved"
  // else return the table with rows
  function checkRows(rows: medicationObject[]) {
    if ( rows === undefined || rows.length === 0) {
      return (
        <div className="empty-meds">
          <h1>You have no meds saved</h1>
          <p>Click the button below to add a medication</p>
          <button onClick={createMed}>Add Medication</button>
          <p><small>If you are seeing this message in error, please contact your local nerd</small></p>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-3xl font-bold">Your Medications</h1>
          <Table rows={rows} />
        </div>
      )
    }
  }


export default function Home() {
  return (
    <div>
      <main>
        {checkRows(rows)}
      </main>
      <footer className="footer">
        <p>Made By <a href="https://github.com/SarahYaw">Sarah Yaw</a> 2025</p>
      </footer>
    </div>
  );
}
