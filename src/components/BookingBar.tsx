"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RootState } from "@/store";
import { setCheckIn, setCheckOut, setGuests } from "@/store/slices/bookingSlice";
import { Calendar, Users } from "lucide-react";
import { format, parse, differenceInDays } from "date-fns";

interface BookingBarProps {
  dark?: boolean;
}

function parseYmd(ymd: string) {
  const [y, m, d] = ymd.split("-");
  return { year: y, month: String(Number(m)), day: String(Number(d)) };
}

export function BookingBar({ dark }: BookingBarProps) {
  const dispatch = useDispatch();
  const { checkIn, checkOut, guests } = useSelector((state: RootState) => state.booking);
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const [error, setError] = useState("");

  const checkInDate = checkIn ? parse(checkIn, "yyyy-MM-dd", new Date()) : null;
  const checkOutDate = checkOut ? parse(checkOut, "yyyy-MM-dd", new Date()) : null;

  const handleSearch = () => {
    setError("");

    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    const diff = differenceInDays(checkOutDate!, checkInDate!);
    if (diff <= 0) {
      setError("Check-out must be after check-in.");
      return;
    }

    const ci = parseYmd(checkIn);
    const co = parseYmd(checkOut);

    const params = new URLSearchParams({
      bookingEngine: "true",
      checkinDay: ci.day,
      checkinMonth: ci.month,
      checkinYear: ci.year,
      checkoutDay: co.day,
      checkoutMonth: co.month,
      checkoutYear: co.year,
      checkOut: checkOut,
      toDate: checkOut,
      date_to: checkOut,
      nights: String(diff),
      numGuests: String(guests),
      numAdults: String(guests),
      Children: "0",
      rooms: "1",
    });

    window.open(`${hotel.bookingEngineUrl}&${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  const handleCheckInChange = (date: Date | null) => {
    setError("");
    dispatch(setCheckIn(date ? format(date, "yyyy-MM-dd") : ""));
  };

  const handleCheckOutChange = (date: Date | null) => {
    setError("");
    dispatch(setCheckOut(date ? format(date, "yyyy-MM-dd") : ""));
  };

  const labelColor = dark ? "text-white/40" : "text-[#707072]";
  const inputColor = dark ? "text-white" : "text-[#111111]";
  const iconColor = dark ? "text-white/60" : "text-[#111111]";
  const borderColor = dark ? "border-white/20" : "border-[#cacacb]";
  const bg = dark ? "bg-[#111111]" : "bg-[#f5f5f5]";

  return (
    <>
      <style>{`
        .booking-datepicker .react-datepicker-wrapper,
        .booking-datepicker .react-datepicker__input-container {
          width: 100%;
          display: block;
        }
        .react-datepicker {
          font-family: inherit;
          border: 1px solid ${dark ? "#333" : "#e5e7eb"};
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          padding: 12px;
          background: ${dark ? "#1a1a1a" : "#ffffff"};
        }
        .react-datepicker__header {
          background: transparent;
          border-bottom: 1px solid ${dark ? "#333" : "#e5e7eb"};
          padding: 8px 0 12px;
        }
        .react-datepicker__current-month,
        .react-datepicker__day-name {
          color: ${dark ? "#ffffff" : "#111111"};
          font-weight: 600;
        }
        .react-datepicker__day-name {
          text-transform: uppercase;
          font-size: 12px;
          color: ${dark ? "#999" : "#707072"};
          width: 36px;
          line-height: 36px;
        }
        .react-datepicker__day {
          color: ${dark ? "#e0e0e0" : "#111111"};
          border-radius: 8px;
          width: 36px;
          line-height: 36px;
          font-size: 14px;
          transition: all 0.15s;
        }
        .react-datepicker__day:hover {
          background: ${dark ? "#333" : "#f0f0f0"};
          border-radius: 8px;
        }
        .react-datepicker__day--selected {
          background: #C9A84C !important;
          color: #111111 !important;
          font-weight: 600;
        }
        .react-datepicker__day--keyboard-selected {
          background: ${dark ? "#333" : "#e8e8e8"};
          color: ${dark ? "#fff" : "#111"};
        }
        .react-datepicker__day--in-range {
          background: ${dark ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.15)"};
          color: ${dark ? "#e0e0e0" : "#111111"};
        }
        .react-datepicker__day--in-selecting-range {
          background: ${dark ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.1)"};
          color: ${dark ? "#e0e0e0" : "#111111"};
        }
        .react-datepicker__day--range-start,
        .react-datepicker__day--range-end {
          background: #C9A84C !important;
          color: #111111 !important;
          font-weight: 600;
        }
        .react-datepicker__day--disabled {
          color: ${dark ? "#555" : "#ccc"} !important;
        }
        .react-datepicker__navigation-icon::before {
          border-color: ${dark ? "#ccc" : "#111"};
        }
        .react-datepicker__navigation:hover *::before {
          border-color: #C9A84C;
        }
        .react-datepicker__triangle {
          display: none;
        }
        .react-datepicker-popper {
          z-index: 50 !important;
          padding-top: 8px;
        }
      `}</style>
      <div className={`w-full ${bg} py-6 px-4 md:px-8 hidden md:block`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex flex-1 items-center gap-8 w-full md:w-auto">
            <div className="flex-1 flex flex-col gap-2 relative">
              <label className={`text-[12px] font-medium ${labelColor} uppercase tracking-wider`}>Check In</label>
              <div className={`flex items-center gap-3 border-b ${borderColor} pb-2 booking-datepicker`}>
                <Calendar size={18} className={iconColor} />
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInChange}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  placeholderText="Select date"
                  dateFormat="dd/MM/yyyy"
                  className={`bg-transparent w-full outline-none text-[16px] font-medium ${inputColor}`}
                  wrapperClassName="w-full"
                  popperPlacement="bottom-start"
                  data-testid="input-check-in"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2 relative">
              <label className={`text-[12px] font-medium ${labelColor} uppercase tracking-wider`}>Check Out</label>
              <div className={`flex items-center gap-3 border-b ${borderColor} pb-2 booking-datepicker`}>
                <Calendar size={18} className={iconColor} />
                <DatePicker
                  selected={checkOutDate}
                  onChange={handleCheckOutChange}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  placeholderText="Select date"
                  dateFormat="dd/MM/yyyy"
                  className={`bg-transparent w-full outline-none text-[16px] font-medium ${inputColor}`}
                  wrapperClassName="w-full"
                  popperPlacement="bottom-start"
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

          <div className="flex flex-col items-end gap-2">
            <button
              onClick={handleSearch}
              className="bg-[#C9A84C] text-[#111111] px-10 py-4 rounded-full font-medium text-[16px] hover:bg-[#b8943f] transition-colors whitespace-nowrap w-full md:w-auto"
              data-testid="button-check-availability"
            >
              Check Availability
            </button>
            {error && (
              <p className="text-red-500 text-[12px] font-medium text-right" data-testid="text-booking-error">{error}</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
