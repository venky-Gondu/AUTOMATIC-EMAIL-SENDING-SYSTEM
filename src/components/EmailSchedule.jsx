'use client'

import React, { useState } from "react";
import {
  Button,
  Slider,
  Input,
  DatePicker,
  Textarea,
  TimeInput,
} from "@nextui-org/react";

const EmailScheduler = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [emailsPerBatch, setEmailsPerBatch] = useState(10);
  const [batchInterval, setBatchInterval] = useState(30); // in minutes

  return (
    <div className="flex flex-col email-scheduler-container gap-10 p-6">
      <h1 className="text-2xl font-bold">Schedule and Send</h1>

      <div className="flex flex-col schedule-section gap-5 my-4">
        <h2>Select Date and Time to Start Sending</h2>
        <DatePicker value={startDate} onChange={setStartDate} />
        <TimeInput value={startTime} onChange={setStartTime} />
      </div>

      <div className="throttling-options my-4">
        <h2>Emails per Batch</h2>
        <Slider
          value={emailsPerBatch}
          min={10}
          max={100}
          step={10}
          onChange={setEmailsPerBatch}
          aria-label="Set number of emails per batch"
        />
        <div className="value-display">{emailsPerBatch} emails per batch</div>
      </div>

      <div className="interval-section my-4">
        <h2>Batch Sending Interval (in minutes)</h2>
        <Input
          type="number"
          value={batchInterval}
          onChange={(e) => setBatchInterval(Number(e.target.value))}
          aria-label="Set interval between batches"
        />
        <div className="value-display">Send every {batchInterval} minutes</div>
      </div>

      <h2 className="my-4">
        Helper Note: Throttling ensures your emails are sent gradually to avoid
        spam filters.
      </h2>

      <Button color="primary" auto>
        Start Sending
      </Button>
    </div>
  );
};

export default EmailScheduler;
