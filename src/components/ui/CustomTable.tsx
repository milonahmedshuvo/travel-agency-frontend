/* eslint-disable @typescript-eslint/no-empty-object-type */
import type React from "react"
import { cn } from "../lib/utils"


interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

export function CustomTable({ className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function CustomTableHeader({ className, ...props }: TableHeaderProps) {
  return <thead className={cn("[&_tr]:border-b", className)} {...props} />
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function CustomTableBody({ className, ...props }: TableBodyProps) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export function CustomTableRow({ className, ...props }: TableRowProps) {
  return (
    <tr className={cn("border-b border-gray-100 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50", className)} {...props} />
  )
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export function CustomTableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  )
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export function CustomTableCell({ className, ...props }: TableCellProps) {
  return <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
}
