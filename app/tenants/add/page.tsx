"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddTenantPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    leaseStart: "",
    leaseEnd: "",
    rentAmount: "",
    propertyId: "",
    floor: "",
    portion: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically save the data to your database
    // For now, we'll just redirect back to the tenants page
    router.push("/tenants")
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">Add New Tenant</h1>

      <Card className="mt-6">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              {/* Lease Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="leaseStart">Lease Start Date</Label>
                  <Input
                    id="leaseStart"
                    name="leaseStart"
                    type="date"
                    value={formData.leaseStart}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="leaseEnd">Lease End Date</Label>
                  <Input
                    id="leaseEnd"
                    name="leaseEnd"
                    type="date"
                    value={formData.leaseEnd}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="rentAmount">Monthly Rent Amount</Label>
                  <Input
                    id="rentAmount"
                    name="rentAmount"
                    type="number"
                    value={formData.rentAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="propertyId">Property</Label>
                <Select onValueChange={(value) => handleSelectChange("propertyId", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Luxury Apartment</SelectItem>
                    <SelectItem value="2">Cozy Studio</SelectItem>
                    <SelectItem value="3">Beachside Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="floor">Floor</Label>
                <Input id="floor" name="floor" type="number" value={formData.floor} onChange={handleChange} required />
              </div>

              <div>
                <Label htmlFor="portion">Portion (optional)</Label>
                <Input id="portion" name="portion" value={formData.portion} onChange={handleChange} />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-6">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={4} />
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-end">
              <Button type="submit" className="bg-red-600 hover:bg-red-700">
                Add Tenant
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
