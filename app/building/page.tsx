"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import BuildingVisualization from "@/components/building-visualization"

// Sample tenant data
const sampleTenants = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    leaseStart: "2024-01-01",
    leaseEnd: "2024-12-31",
    rentAmount: "2500",
    floor: 3,
    portion: "A",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 987 654 321",
    leaseStart: "2024-02-15",
    leaseEnd: "2025-02-14",
    rentAmount: "1800",
    floor: 2,
    portion: "B",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1 555 123 4567",
    leaseStart: "2024-03-01",
    leaseEnd: "2025-02-28",
    rentAmount: "2200",
    floor: 1,
  },
]

export default function BuildingPage() {
  const [floors, setFloors] = useState(4)
  const [hasPortion, setHasPortion] = useState(true)
  const [tenants, setTenants] = useState(sampleTenants)

  const handleFloorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setFloors(value)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">Building Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Building Configuration</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="floors">Number of Floors</Label>
                <Input id="floors" type="number" min="1" value={floors} onChange={handleFloorsChange} />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="hasPortion" checked={hasPortion} onCheckedChange={setHasPortion} />
                <Label htmlFor="hasPortion">Building has portions (A/B)</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Building Visualization</h2>
            <p className="text-gray-600 mb-4">Hover over a floor to see tenant details</p>

            <BuildingVisualization floors={floors} hasPortion={hasPortion} tenants={tenants} />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Tenant Assignments</h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Floor</th>
                <th className="p-3 text-left">Portion</th>
                <th className="p-3 text-left">Rent</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="border-b">
                  <td className="p-3">{tenant.name}</td>
                  <td className="p-3">{tenant.floor}</td>
                  <td className="p-3">{tenant.portion || "N/A"}</td>
                  <td className="p-3">${tenant.rentAmount}/month</td>
                  <td className="p-3">
                    <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 mr-2">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
