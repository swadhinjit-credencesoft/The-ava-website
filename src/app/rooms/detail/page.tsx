"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { RoomDetailClient } from "@/components/RoomDetailClient";

function RoomFromQuery() {
  const searchParams = useSearchParams();
  return <RoomDetailClient roomId={searchParams.get("room") ?? undefined} />;
}

export default function RoomDetailByIdPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <RoomFromQuery />
    </Suspense>
  );
}
