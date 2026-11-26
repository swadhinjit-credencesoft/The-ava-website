"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setRooms, setRoomsLoading, setRoomsError } from "@/store/slices/dataSlice";
import { fetchLiveRooms } from "@/lib/roomApi";

export function LiveRoomsSync() {
  const dispatch = useDispatch();
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);

  useEffect(() => {
    let isCancelled = false;

    async function syncRooms() {
      try {
        dispatch(setRoomsLoading(true));
        const liveRooms = await fetchLiveRooms({
          fromDate: checkIn || undefined,
          toDate: checkOut || undefined,
          noOfPersons: guests || 1,
        });

        if (!isCancelled && liveRooms.length > 0) {
          dispatch(setRooms(liveRooms));
        }
      } catch (err: unknown) {
        if (!isCancelled) {
          const msg = err instanceof Error ? err.message : "Failed to load live rooms";
          // Gracefully record error without disrupting the fallback data
          dispatch(setRoomsError(msg));
        }
      }
    }

    // Run on initial mount and whenever booking dates or guests change
    syncRooms();

    return () => {
      isCancelled = true;
    };
  }, [checkIn, checkOut, guests, dispatch]);

  return null;
}
