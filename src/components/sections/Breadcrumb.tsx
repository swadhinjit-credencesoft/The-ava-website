"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { RootState } from "@/store";

export function Breadcrumb() {
  const pathname = usePathname();
  const pages = useSelector((state: RootState) => state.data.pages);
  const page = pages[pathname];
  const items = page?.breadcrumb || [{ label: "Home", href: "/" }];
  return (
    <div className="px-8 py-4 bg-[#f5f5f5] border-b border-[#e5e5e5]">
      <p className="text-[#707072] text-[13px] font-medium">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#111111] transition-colors" data-testid={`breadcrumb-${item.label.toLowerCase()}`}>{item.label}</Link>
            ) : (
              <span className="text-[#111111]">{item.label}</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
