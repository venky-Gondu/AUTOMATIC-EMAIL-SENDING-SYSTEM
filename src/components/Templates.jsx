'use client'
import React, { useState } from "react";
import { Button, Textarea, Card, Text } from "@nextui-org/react";

const EmailTemplateEditor = () => {
  // Sample data for placeholders
  const sampleData = {
    companyName: "ABC Corp",
    location: "New York",
  };

  // Template data - a list of templates
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Welcome Email",
      content:
        "Hello {Company Name},\nWelcome to our service! We are glad to have you in {Location}.",
    },
    {
      id: 2,
      name: "Thank You Email",
      content:
        "Dear {Company Name},\nThank you for choosing us. We hope your experience in {Location} was great!",
    },
  ]);

  // Track the currently selected template
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  // Handle content change in the editor
  const handleInputChange = (e) => {
    setSelectedTemplate({ ...selectedTemplate, content: e.target.value });
  };

  // Replace placeholders with sample data for preview
  const generatePreview = (content) => {
    return content
      .replace(/{Company Name}/g, sampleData.companyName)
      .replace(/{Location}/g, sampleData.location);
  };

  // Add a new template
  const handleAddTemplate = () => {
    const newTemplate = {
      id: templates.length + 1,
      name: `Template ${templates.length + 1}`,
      content: "",
    };
    setTemplates([...templates, newTemplate]);
    setSelectedTemplate(newTemplate); // Automatically switch to the newly created template
  };

  return (
    <div className="email-editor-container p-6">
      <h1 className="text-2xl font-bold">Compose Your Email</h1>
      <p className="text-sm text-gray-500">
        Use placeholders like <strong>{`{Company Name}`}</strong> and{" "}
        <strong>{`{Location}`}</strong> to auto-fill data.
      </p>

      {/* Template Selector */}
      <div className="template-selector my-4">
        <select
          value={selectedTemplate.id}
          onChange={(e) =>
            setSelectedTemplate(
              templates.find((template) => template.id === +e.target.value)
            )
          }
          className="p-2 border rounded"
        >
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
        <Button
          onClick={handleAddTemplate}
          color="primary"
          auto
          className="ml-4"
        >
          Add Template
        </Button>
      </div>

      {/* Email Body Editor */}
      <Textarea
        value={selectedTemplate.content}
        onChange={handleInputChange}
        placeholder="Write your email body here"
        fullWidth
        minRows={6}
        maxRows={12}
        aria-label="Email Body"
        className="my-4"
      />

      <Button onClick={() => console.log("Saving template...")} color="primary">
        Save Template
      </Button>

      {/* Preview Section */}
      <div className="email-preview mt-4 p-4 border border-gray-300 rounded">
        <h2 className="text-xl font-bold">Preview</h2>
        <p>{generatePreview(selectedTemplate.content)}</p>
      </div>
    </div>
  );
};

export default EmailTemplateEditor;
