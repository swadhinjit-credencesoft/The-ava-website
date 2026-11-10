"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCheckIn, setCheckOut, setGuests } from "@/store/slices/bookingSlice";
import { RoomDetailClient } from "@/components/RoomDetailClient";

function RoomFromQuery() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  const roomId = searchParams.get("room") ?? undefined;
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");

  useEffect(() => {
    if (checkIn) dispatch(setCheckIn(checkIn));
    if (checkOut) dispatch(setCheckOut(checkOut));
    if (guests) {
      const g = parseInt(guests, 10);
      if (g > 0) dispatch(setGuests(g));
    }
  }, [checkIn, checkOut, guests, dispatch]);

  return <RoomDetailClient roomId={roomId} />;
}

export default function RoomDetailByIdPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <RoomFromQuery />
    </Suspense>
  );
}
