import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold">Total Properties</h2>
            <p className="text-2xl text-red-600 font-semibold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold">Total Tenants</h2>
            <p className="text-2xl text-red-600 font-semibold">30</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold">Pending Payments</h2>
            <p className="text-2xl text-red-600 font-semibold">$1,200</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <ul className="mt-4">
            <li className="py-2 border-b">
              Tenant <strong>John Doe</strong> paid rent for <strong>Apt 101</strong>
            </li>
            <li className="py-2 border-b">
              New property <strong>Villa 5</strong> added
            </li>
            <li className="py-2 border-b">
              Payment of <strong>$500</strong> received from <strong>Jane Smith</strong>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
