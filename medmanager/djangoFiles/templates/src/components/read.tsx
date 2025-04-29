import Table from './Table.tsx';
import { medicationObject } from "../../../types/medication.ts";

const rows:medicationObject[] = await fetch('http://localhost:8000/read/', {
    method: 'GET'
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then((data) => {
    console.log('data',data);
    return data;
  }).catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
console.log('temp',rows);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Table rows={rows} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Made By <a href="https://github.com/SarahYaw">Sarah Yaw</a> 2025</p>
      </footer>
    </div>
  );
}
