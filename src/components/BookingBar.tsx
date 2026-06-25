"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setCheckIn, setCheckOut, setGuests } from "@/store/slices/bookingSlice";
import { hotelData } from "@/data/siteData";
import { Calendar, Users } from "lucide-react";

interface BookingBarProps {
  dark?: boolean;
}

export function BookingBar({ dark }: BookingBarProps) {
  const dispatch = useDispatch();
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);

  const handleSearch = () => {
    const params = new URLSearchParams({ bookingEngine: "true" });

    if (checkIn) {
      const [y, m, d] = checkIn.split("-");
      params.set("checkinDay", d);
      params.set("checkinMonth", m);
      params.set("checkinYear", y);
    }
    if (checkOut) {
      const [y, m, d] = checkOut.split("-");
      params.set("checkoutDay", d);
      params.set("checkoutMonth", m);
      params.set("checkoutYear", y);
      params.set("checkOut", checkOut);
      params.set("toDate", checkOut);
      params.set("date_to", checkOut);
    }
    if (checkIn && checkOut) {
      const msPerDay = 86400000;
      const diff = Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / msPerDay);
      if (diff > 0) params.set("nights", String(diff));
    }
    params.set("numGuests", String(guests));
    params.set("numAdults", String(guests));
    params.set("Children", "0");
    params.set("rooms", "1");

    window.open(`${hotelData.bookingEngineUrl}&${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  const labelColor = dark ? "text-white/40" : "text-[#707072]";
  const inputColor = dark ? "text-white" : "text-[#111111]";
  const iconColor = dark ? "text-white/60" : "text-[#111111]";
  const borderColor = dark ? "border-white/20" : "border-[#cacacb]";
  const bg = dark ? "bg-[#111111]" : "bg-[#f5f5f5]";

  return (
    <div className={`w-full ${bg} py-6 px-4 md:px-8 hidden md:block`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-1 items-center gap-8 w-full md:w-auto">
          <div className="flex-1 flex flex-col gap-2 relative">
            <label className={`text-[12px] font-medium ${labelColor} uppercase tracking-wider`}>Check In</label>
            <div className={`flex items-center gap-3 border-b ${borderColor} pb-2`}>
              <Calendar size={18} className={iconColor} />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => dispatch(setCheckIn(e.target.value))}
                className={`bg-transparent w-full outline-none text-[16px] font-medium ${inputColor} placeholder:text-[#707072]`}
                data-testid="input-check-in"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 relative">
            <label className={`text-[12px] font-medium ${labelColor} uppercase tracking-wider`}>Check Out</label>
            <div className={`flex items-center gap-3 border-b ${borderColor} pb-2`}>
              <Calendar size={18} className={iconColor} />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => dispatch(setCheckOut(e.target.value))}
                className={`bg-transparent w-full outline-none text-[16px] font-medium ${inputColor} placeholder:text-[#707072]`}
                data-testid="input-check-out"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 relative">
            <label className={`text-[12px] font-medium ${labelColor} uppercase tracking-wider`}>Guests</label>
            <div className={`flex items-center gap-3 border-b ${borderColor} pb-2`}>
              <Users size={18} className={iconColor} />
              <select
                value={guests}
                onChange={(e) => dispatch(setGuests(Number(e.target.value)))}
                className={`bg-transparent w-full outline-none text-[16px] font-medium ${inputColor} cursor-pointer appearance-none`}
                data-testid="select-guests"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className="bg-white text-[#111111]">{num} {num === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[16px] hover:bg-[#b8943f] transition-colors whitespace-nowrap w-full md:w-auto"
          data-testid="button-check-availability"
        >
          Check Availability
        </button>

      </div>
    </div>
  );
}
