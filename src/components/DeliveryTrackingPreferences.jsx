"use client";
import { Card, Switch, Select, SelectItem, Spacer } from "@nextui-org/react";
import { useState } from "react";

export default function DeliveryTrackingPreferences() {
  const [trackDelivered, setTrackDelivered] = useState(true);
  const [trackOpened, setTrackOpened] = useState(true);
  const [trackBounced, setTrackBounced] = useState(true);
  const [trackingProvider, setTrackingProvider] = useState("");

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">Configure Tracking</h1>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label>Track Delivered</label>
          <Switch
            checked={trackDelivered}
            onChange={(e) => setTrackDelivered(e.target.checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label>Track Opened</label>
          <Switch
            checked={trackOpened}
            onChange={(e) => setTrackOpened(e.target.checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label>Track Bounced</label>
          <Switch
            checked={trackBounced}
            onChange={(e) => setTrackBounced(e.target.checked)}
          />
        </div>

        <Spacer y={1} />

        <div className="flex flex-col">
          <label>Select Your Tracking Provider</label>
          <Select
            placeholder="Choose ESP"
            value={trackingProvider}
            onChange={(value) => setTrackingProvider(value)}
          >
            <SelectItem value="sendgrid">SendGrid</SelectItem>
            <SelectItem value="mailgun">Mailgun</SelectItem>
            <SelectItem value="postmark">Postmark</SelectItem>
            <SelectItem value="amazon-ses">Amazon SES</SelectItem>
          </Select>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Choose which metrics you want to monitor for each email campaign.
        </p>
      </div>
    </Card>
  );
}
