"use client";
import { useParams } from "next/navigation";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = () => {
  const { workspaceId } = useParams();

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {/* Workspace Breadcrumb */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/workspace" className="text-2xl">
              <div>Workspace</div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* HRD Breadcrumb */}
          <BreadcrumbItem>
            <BreadcrumbLink href={`#`} className="text-2xl">
              <div>HRD</div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
