import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PaymentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">Transactions</h1>

      <Card className="mt-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Tenant</th>
                  <th className="border border-gray-300 p-2">Property</th>
                  <th className="border border-gray-300 p-2">Amount</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 p-2">Feb 1, 2025</td>
                  <td className="border border-gray-300 p-2">John Doe</td>
                  <td className="border border-gray-300 p-2">Luxury Apartment</td>
                  <td className="border border-gray-300 p-2">$2,500</td>
                  <td className="border border-gray-300 p-2 text-green-600">Paid</td>
                  <td className="border border-gray-300 p-2">
                    <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 mr-2">
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                      Refund
                    </Button>
                  </td>
                </tr>
                <tr className="text-center bg-gray-100">
                  <td className="border border-gray-300 p-2">Feb 1, 2025</td>
                  <td className="border border-gray-300 p-2">Alice Smith</td>
                  <td className="border border-gray-300 p-2">Cozy Studio</td>
                  <td className="border border-gray-300 p-2">$1,800</td>
                  <td className="border border-gray-300 p-2 text-yellow-600">Pending</td>
                  <td className="border border-gray-300 p-2">
                    <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700 mr-2">
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                      Mark Paid
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
