"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { toggleMobileMenu, setMobileMenuOpen } from "@/store/slices/navigationSlice";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const location = usePathname();
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state: RootState) => state.navigation.mobileMenuOpen);
  const hotel = useSelector((state: RootState) => state.data.hotel);
  const isHome = location === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    setScrolled(window.scrollY > 80 || !isHome);
  }, [isHome]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80 || !isHome);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const handleLinkClick = () => {
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full flex flex-col transition-all duration-500 h-20 ${
        scrolled ? "bg-white border-b border-[#cacacb] shadow-sm" : "backdrop-blur-md bg-white/10 border-b border-white/10"
      }`}
    >
      <div className="flex-1 flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className={`font-display text-[24px] tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1 ${scrolled ? "text-[#111111]" : "text-white"}`} data-testid="link-home-logo">
          THE AVA <span className="text-[#C9A84C]">♔</span>
        </Link>

        {/* Desktop Center Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {hotel.nav.map((item) => {
            const isExternal = item.href.startsWith("http");
            const linkClass = `h-full flex items-center text-[16px] font-medium transition-colors border-b-2 ${
              location === item.href 
                ? "border-[#C9A84C]" 
                : "border-transparent hover:border-[#C9A84C]/50"
            } ${scrolled ? "text-[#111] hover:text-[#C9A84C]" : "text-white hover:text-[#C9A84C]"}`;
            const testId = `link-nav-${item.label.toLowerCase().replace(/[\s&]/g, '-')}`;
            return isExternal ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass} data-testid={testId}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={linkClass} data-testid={testId}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Nav / Mobile Right */}
        <div className="flex items-center gap-6">
          <a href={`tel:${hotel.phone.replace(/\s/g, '')}`} className={`hidden lg:flex items-center gap-2 font-medium text-sm hover:opacity-80 transition-opacity ${scrolled ? "text-[#111111]" : "text-white"}`} data-testid="link-phone">
            {hotel.phone}
          </a>
          <a href={hotel.bookingEngineUrl} target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-[#111111] text-white px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#333333] transition-colors" data-testid="button-book-now">
            Book Now
          </a>
          
          <button 
            className={`md:hidden p-2 -mr-2 ${scrolled ? "text-[#111111]" : "text-white"}`}
            onClick={() => dispatch(toggleMobileMenu())}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[80px] bg-[#111111] z-40 overflow-y-auto">
          <nav className="flex flex-col px-8 py-12 gap-8">
            {hotel.nav.map((item, i) => {
              const isExternal = item.href.startsWith("http");
              const linkClass = `font-display text-[32px] leading-none uppercase tracking-wider ${
                location === item.href ? "text-[#C9A84C]" : "text-white hover:text-[#C9A84C]"
              }`;
              const testId = `link-mobile-nav-${item.label.toLowerCase().replace(/[\s&]/g, '-')}`;
              return isExternal ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className={linkClass} style={{ animationDelay: `${i * 0.1}s` }} data-testid={testId}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} onClick={handleLinkClick} className={linkClass} style={{ animationDelay: `${i * 0.1}s` }} data-testid={testId}>
                  {item.label}
                </Link>
              );
            })}
            <div className="h-px bg-white/10 w-full my-4" />
            <a
              href={hotel.bookingEngineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="bg-[#C9A84C] text-[#111111] px-8 py-4 rounded-full font-medium text-lg text-center w-full uppercase block"
              data-testid="button-mobile-book-now"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}