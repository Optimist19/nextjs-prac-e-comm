import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  openAccordion: string | undefined;
  setOpenAccordion: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function BreadcrumbCollapsed({
  openAccordion,
  setOpenAccordion
}: BreadcrumbProps) {
  const handleOpenAccordion = (id: string) => {
    setOpenAccordion(id);
  };

  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleOpenAccordion("item-1");
              }} className={`text-[16px] ${openAccordion === "item-1" ? "text-[#6366F1]" : ""}`}>
              Customer
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator /> */}
        {/* <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem> */}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleOpenAccordion("item-2");
              }} className={`text-[16px] ${openAccordion === "item-2" ? "text-[#6366F1]" : ""}`}>
              Delivery
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleOpenAccordion("item-3");
            }} className={`text-[16px] ${openAccordion === "item-3" ? "text-[#6366F1]" : ""}`}>
            Payment
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
