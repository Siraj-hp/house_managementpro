"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Building2, Users, CreditCard, Settings } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "bg-red-700" : "hover:bg-red-700"
  }

  return (
    <div className="w-64 bg-red-600 text-white p-5 min-h-screen">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <ul className="mt-6 space-y-2">
        <li className={`py-2 px-4 rounded ${isActive("/")}`}>
          <Link href="/" className="flex items-center gap-3">
            <Home size={18} />
            <span>Home</span>
          </Link>
        </li>
        <li className={`py-2 px-4 rounded ${isActive("/properties")}`}>
          <Link href="/properties" className="flex items-center gap-3">
            <Building2 size={18} />
            <span>Properties</span>
          </Link>
        </li>
        <li className={`py-2 px-4 rounded ${isActive("/tenants")}`}>
          <Link href="/tenants" className="flex items-center gap-3">
            <Users size={18} />
            <span>Tenants</span>
          </Link>
        </li>
        <li className={`py-2 px-4 rounded ${isActive("/payments")}`}>
          <Link href="/payments" className="flex items-center gap-3">
            <CreditCard size={18} />
            <span>Payments</span>
          </Link>
        </li>
        <li className={`py-2 px-4 rounded ${isActive("/settings")}`}>
          <Link href="/settings" className="flex items-center gap-3">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
