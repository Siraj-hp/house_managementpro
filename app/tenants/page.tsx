import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TenantsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Tenants</h1>
        <Link href="/tenants/add">
          <Button className="bg-red-600 hover:bg-red-700">+ Add Tenant</Button>
        </Link>
      </div>

      {/* Tenants List */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Lease Start</th>
                  <th className="p-3 text-left">Lease End</th>
                  <th className="p-3 text-left">Rent Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">John Doe</td>
                  <td className="p-3">+1 234 567 890</td>
                  <td className="p-3">Jan 1, 2024</td>
                  <td className="p-3">Dec 31, 2024</td>
                  <td className="p-3 text-green-600">Paid</td>
                  <td className="p-3 flex space-x-2">
                    <Link href="/tenants/1">
                      <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                        View
                      </Button>
                    </Link>
                    <Link href="/tenants/1/edit">
                      <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      Remove
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Jane Smith</td>
                  <td className="p-3">+1 987 654 321</td>
                  <td className="p-3">Feb 15, 2024</td>
                  <td className="p-3">Feb 14, 2025</td>
                  <td className="p-3 text-yellow-600">Pending</td>
                  <td className="p-3 flex space-x-2">
                    <Link href="/tenants/2">
                      <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                        View
                      </Button>
                    </Link>
                    <Link href="/tenants/2/edit">
                      <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                        Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      Remove
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
