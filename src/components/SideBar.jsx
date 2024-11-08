"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen p-2">
      <Tabs
        variant="underlined"
        color="primary"
        selectedKey={pathname}
        aria-label="Options"
        isVertical
        classNames={{
          tab: "flex w-full text-left h-12",
          tabContent: "w-full text-left",
          cursor: "w-full",
        }}
      >
        <Tab key="/" href="/" title=<div className="">Home</div> as={Link} />
        <Tab key="/templates" href="/templates" title="Templates" as={Link} />
        <Tab
          key="/emailschedule"
          href="/emailschedule"
          title="Emailschedule"
          as={Link}
        />
        <Tab
          key="/deliverytrackingpreferences"
          href="/deliverytrackingpreferences"
          title="DeliveryTrackingPreferences"
          as={Link}
        />
        <Tab
          key="/analyticsdashboardsettings"
          href="/analyticsdashboardsettings"
          title="AnalyticsDashboardSettings"
          as={Link}
        />
      </Tabs>
    </div>
  );
}
