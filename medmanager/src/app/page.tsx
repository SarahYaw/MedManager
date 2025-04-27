import Table from "./components/Table";
import { medicationObject } from "./types/medication";

const rows:medicationObject[] = [
  {
      'id':1,
      'name':'Anti-Inflammatory',
      'refilled':new Date('2025-02-27'),
      'quantity':90,
      'dosage':'500 Mg',
      'morning':1,
      'afternoon':0,
      'evening':0.5,
      'description':'large orange tablet',
      'provider':'Rhumatologist'
  },
  {
      'id':2,
      'name':'Anti-Depressant',
      'refilled': new Date('02-27-2025'),
      'quantity':90,
      'dosage':'60 Mg',
      'morning':1,
      'afternoon':0,
      'evening':0,
      'description':'orange and green capsule',
      'provider':'Primary'
  },
  {
      'id':3,
      'name':'Anti-Depressant (supplemental)',
      'refilled': new Date('03-04-2025'),
      'quantity':90,
      'dosage':'30 Mg',
      'morning':1,
      'afternoon':0,
      'evening':0,
      'description':'white and green capsule',
      'provider':'Primary'
  },
  {
      'id':4,
      'name':'Diuretic',
      'refilled': new Date('02-27-2025'),
      'quantity':90,
      'dosage':'50 Mg',
      'morning':1,
      'afternoon':0,
      'evening':0,
      'description':'small white tablet',
      'provider':'Gynocologist'
  },
  {
      'id':5,
      'name':'Hormone Regulator',
      'refilled':new Date('02-27-2025'),
      'quantity':90,
      'dosage':'N/A',
      'morning':1,
      'afternoon':0,
      'evening':0,
      'description':'full dose is small blue tablet; partial dose is small white tablet, placebo dose is brown tablet',
      'provider':'Gynocologist'
  },
  {
      'id':6,
      'name':'Rescue Inhailer',
      'refilled': new Date('11-26-2024'),
      'quantity':180,
      'dosage':'2.5 Mg/3Ml Soln',
      'morning':0,
      'afternoon':0,
      'evening':0,
      'description':'take as needed',
      'provider':'Primary'
  },
  {
      'id':7,
      'name':'Anti-Fungal Cream',
      'refilled': new Date('02-02-2025'),
      'quantity':0,
      'dosage':'N/A',
      'morning':0,
      'afternoon':0,
      'evening':0,
      'description':'use as needed',
      'provider':'Dermatologist'
  }
]

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
