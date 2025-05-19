import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PropertiesPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Properties</h1>
        <Link href="/properties/add">
          <Button className="bg-red-600 hover:bg-red-700">+ Add Property</Button>
        </Link>
      </div>

      {/* Properties List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Property Card */}
        <Card>
          <CardContent className="p-4">
            <div className="relative w-full h-40">
              <Image
                src="/placeholder.svg?height=160&width=320"
                alt="Property Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">Luxury Apartment</h2>
            <p className="text-gray-600">Location: New York</p>
            <p className="text-gray-600">Price: $2,500/month</p>
            <div className="mt-4 flex justify-between">
              <Link href="/properties/1">
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  View
                </Button>
              </Link>
              <Link href="/properties/1/edit">
                <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative w-full h-40">
              <Image
                src="/placeholder.svg?height=160&width=320"
                alt="Property Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">Cozy Studio</h2>
            <p className="text-gray-600">Location: Los Angeles</p>
            <p className="text-gray-600">Price: $1,800/month</p>
            <div className="mt-4 flex justify-between">
              <Link href="/properties/2">
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  View
                </Button>
              </Link>
              <Link href="/properties/2/edit">
                <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="relative w-full h-40">
              <Image
                src="/placeholder.svg?height=160&width=320"
                alt="Property Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mt-4">Beachside Villa</h2>
            <p className="text-gray-600">Location: Miami</p>
            <p className="text-gray-600">Price: $3,200/month</p>
            <div className="mt-4 flex justify-between">
              <Link href="/properties/3">
                <Button variant="outline" size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                  View
                </Button>
              </Link>
              <Link href="/properties/3/edit">
                <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
