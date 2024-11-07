'use client'
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col p-20 gap-10 text-center">
      <h1 className="text-7xl font-bold">Upload Your Data</h1>
      <p>
        Choose to upload a CSV file or link a Google Sheet containing recipient
        information. Ensure your file includes necessary columns like ‘Company
        Name,’ ‘Location,’ ‘Email Address,’ etc., for effective email
        personalization.
      </p>
      <Button className="h-40" color="primary">
        Upload CSV File
      </Button>
      <p>Accepted file types: .csv</p>
    </div>
  );
}
