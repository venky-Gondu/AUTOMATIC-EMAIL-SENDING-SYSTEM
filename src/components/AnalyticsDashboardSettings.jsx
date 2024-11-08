"use client";
import {
  Card,
  Checkbox,
  Select,
  SelectItem,
  Button,
  Tooltip,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info"; // MUI replacement for InformationCircleIcon
import BarChartIcon from "@mui/icons-material/BarChart";

export default function AnalyticsDashboardSettings() {
  const [showTotalEmails, setShowTotalEmails] = useState(false);
  const [displayResponseRate, setDisplayResponseRate] = useState(false);
  const [includeOpenRate, setIncludeOpenRate] = useState(false);
  const [refreshRate, setRefreshRate] = useState("Every minute");

  const handleUpdateDashboard = () => {
    // Add functionality to update the dashboard
    alert("Dashboard updated with current settings.");
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChartIcon className="text-gray-500" fontSize="large" />
        <h1 className="text-2xl font-bold">Analytics and Dashboard</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Tooltip content="Show the total number of emails sent during the campaign.">
            <InfoIcon className="text-gray-500" />
          </Tooltip>
          <Checkbox
            isSelected={showTotalEmails}
            onChange={(e) => setShowTotalEmails(e.target.checked)}
          >
            Show Total Emails Sent
          </Checkbox>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip content="Display the percentage of responses received.">
            <InfoIcon className="text-gray-500" />
          </Tooltip>
          <Checkbox
            isSelected={displayResponseRate}
            onChange={(e) => setDisplayResponseRate(e.target.checked)}
          >
            Display Response Rate
          </Checkbox>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip content="Include the open rate of emails for better insights.">
            <InfoIcon className="text-gray-500" />
          </Tooltip>
          <Checkbox
            isSelected={includeOpenRate}
            onChange={(e) => setIncludeOpenRate(e.target.checked)}
          >
            Include Open Rate Metrics
          </Checkbox>
        </div>

        <Spacer y={1} />

        <div className="flex flex-col">
          <label className="flex items-center gap-2">
            <Tooltip content="Choose how often the analytics should refresh.">
              <InfoIcon className="text-gray-500" />
            </Tooltip>
            Refresh Rate
          </label>
          <Select
            placeholder="Select Refresh Rate"
            value={refreshRate}
            onChange={(value) => setRefreshRate(value)}
          >
            <SelectItem value="Every 5 sec">Every 5 sec</SelectItem>
            <SelectItem value="Every 15 sec">Every 15 sec</SelectItem>
            <SelectItem value="Every minute">Every minute</SelectItem>
          </Select>
        </div>

        <Spacer y={1} />

        <Button color="primary" onClick={handleUpdateDashboard}>
          Update Dashboard
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        See real-time updates on campaign progress.
      </p>
    </Card>
  );
}
