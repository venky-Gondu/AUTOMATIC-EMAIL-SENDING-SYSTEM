"use client";
import { Button, Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const sampleData = [
    {
      companyName: "ABC Corp",
      location: "New York",
      email: "abc@example.com",
      productService: "Software Solutions",
    },
    {
      companyName: "XYZ Ltd",
      location: "London",
      email: "xyz@example.com",
      productService: "Consulting",
    },
    {
      companyName: "Tech Innovate",
      location: "San Francisco",
      email: "tech@example.com",
      productService: "SaaS Products",
    },
    {
      companyName: "Global Enterprises",
      location: "Berlin",
      email: "global@example.com",
      productService: "Manufacturing",
    },
    {
      companyName: "Alpha Industries",
      location: "Toronto",
      email: "alpha@example.com",
      productService: "Logistics",
    },
    {
      companyName: "Beta Solutions",
      location: "Sydney",
      email: "beta@example.com",
      productService: "Marketing Automation",
    },
    {
      companyName: "Gamma Systems",
      location: "Paris",
      email: "gamma@example.com",
      productService: "AI Solutions",
    },
    {
      companyName: "Delta Innovations",
      location: "Tokyo",
      email: "delta@example.com",
      productService: "Cloud Computing",
    },
    {
      companyName: "Epsilon Technologies",
      location: "Berlin",
      email: "epsilon@example.com",
      productService: "Blockchain Development",
    },
    {
      companyName: "Zeta Enterprises",
      location: "London",
      email: "zeta@example.com",
      productService: "Mobile Apps",
    },
    {
      companyName: "Eta Corporation",
      location: "Toronto",
      email: "eta@example.com",
      productService: "Cybersecurity",
    },
    {
      companyName: "Theta Group",
      location: "New York",
      email: "theta@example.com",
      productService: "Consulting Services",
    },
    {
      companyName: "Iota Solutions",
      location: "San Francisco",
      email: "iota@example.com",
      productService: "E-Commerce",
    },
    {
      companyName: "Kappa Labs",
      location: "Chicago",
      email: "kappa@example.com",
      productService: "FinTech",
    },
    {
      companyName: "Lambda Systems",
      location: "Los Angeles",
      email: "lambda@example.com",
      productService: "Smart Home Tech",
    },
    {
      companyName: "Mu Innovations",
      location: "Madrid",
      email: "mu@example.com",
      productService: "EdTech",
    },
    {
      companyName: "Nu Technologies",
      location: "Rome",
      email: "nu@example.com",
      productService: "Big Data Analytics",
    },
    {
      companyName: "Xi Enterprises",
      location: "Hong Kong",
      email: "xi@example.com",
      productService: "Digital Marketing",
    },
    {
      companyName: "Omicron Solutions",
      location: "Dubai",
      email: "omicron@example.com",
      productService: "Automation Solutions",
    },
    {
      companyName: "Pi Technologies",
      location: "Singapore",
      email: "pi@example.com",
      productService: "Software Development",
    },
  ];

  const [csvData, setCsvData] = useState(sampleData);
  const [visibleItems, setVisibleItems] = useState(5); // Initially show 5 items
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 5); // Show 5 more items
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  };

  const hasMore = visibleItems < csvData.length;

  return (
    <div className="flex flex-col p-20 gap-10 text-center">
      <h1 className="text-7xl font-bold">Upload Your Data</h1>
      <p>
        Choose to upload a CSV file or link a Google Sheet containing recipient
        information. Ensure your file includes necessary columns like ‘Company
        Name,’ ‘Location,’ ‘Email Address,’ etc., for effective email
        personalization.
      </p>
      <Button className="h-40" color="primary" href="/templates" as={Link}>
        Upload CSV File
      </Button>
      <p>Accepted file types: .csv</p>

      <Table
        aria-label="Sample Data Table"
        bottomContent={
          hasMore ? (
            <div className="flex w-full justify-center">
              <Button isDisabled={isLoading} variant="flat" onPress={loadMore}>
                {isLoading && <Spinner color="primary" size="sm" />}
                Load More
              </Button>
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn>Company Name</TableColumn>
          <TableColumn>Location</TableColumn>
          <TableColumn>Email Address</TableColumn>
          <TableColumn>Product/Service</TableColumn>
        </TableHeader>
        <TableBody>
          {csvData.slice(0, visibleItems).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.productService}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
