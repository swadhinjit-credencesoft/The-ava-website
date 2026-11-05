"use client";

import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { fetchHotelMateAvailability } from "@/lib/hotelmate";

export function useHotelMateRooms() {
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);
  const validDates = Boolean(checkIn && checkOut && checkOut > checkIn);

  return useQuery({
    queryKey: ["hotelmate-room-inventory", checkIn, checkOut, guests],
    queryFn: () => fetchHotelMateAvailability({
      fromDate: checkIn,
      toDate: checkOut,
      noOfRooms: 1,
      noOfPersons: guests,
    }),
    enabled: validDates,
    staleTime: 30_000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
}
