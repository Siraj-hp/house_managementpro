"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface Tenant {
  id: string
  name: string
  email: string
  phone: string
  leaseStart: string
  leaseEnd: string
  rentAmount: string
  floor: number
  portion?: string
}

interface BuildingVisualizationProps {
  floors: number
  hasPortion: boolean
  tenants: Tenant[]
}

export default function BuildingVisualization({ floors, hasPortion, tenants }: BuildingVisualizationProps) {
  const [activeFloor, setActiveFloor] = useState<number | null>(null)
  const [activePortion, setActivePortion] = useState<string | null>(null)
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const [activeTenant, setActiveTenant] = useState<Tenant | null>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  // Calculate building dimensions
  const buildingWidth = 300
  const floorHeight = 60
  const buildingHeight = floors * floorHeight
  const portionWidth = hasPortion ? buildingWidth / 2 : buildingWidth

  // Generate floors array
  const floorsArray = Array.from({ length: floors }, (_, i) => floors - i)

  // Handle mouse enter on floor
  const handleMouseEnter = (floor: number, portion?: string) => {
    setActiveFloor(floor)
    setActivePortion(portion || null)

    // Find tenant for this floor/portion
    const tenant = tenants.find((t) => t.floor === floor && (portion ? t.portion === portion : true))

    if (tenant) {
      setActiveTenant(tenant)
      setPopupVisible(true)
    } else {
      setActiveTenant(null)
      setPopupVisible(false)
    }
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setActiveFloor(null)
    setActivePortion(null)
    setPopupVisible(false)
  }

  // Handle mouse move to update popup position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeTenant) {
      setPopupPosition({
        x: e.clientX + 10,
        y: e.clientY + 10,
      })
    }
  }

  // Update popup position when it becomes visible
  useEffect(() => {
    if (popupVisible && popupRef.current) {
      const popup = popupRef.current
      popup.style.left = `${popupPosition.x}px`
      popup.style.top = `${popupPosition.y}px`
      popup.classList.add("visible")
    }
  }, [popupVisible, popupPosition])

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <svg
        width={buildingWidth}
        height={buildingHeight + 20}
        viewBox={`0 0 ${buildingWidth} ${buildingHeight + 20}`}
        className="mx-auto"
      >
        {/* Building outline */}
        <rect x="0" y="0" width={buildingWidth} height={buildingHeight} fill="none" stroke="#333" strokeWidth="2" />

        {/* Floors */}
        {floorsArray.map((floor, index) => {
          const y = index * floorHeight

          if (hasPortion) {
            // Left portion
            return (
              <g key={`floor-${floor}`}>
                <rect
                  x="0"
                  y={y}
                  width={portionWidth}
                  height={floorHeight}
                  fill={activeFloor === floor && activePortion === "A" ? "#f87171" : "#e5e7eb"}
                  stroke="#333"
                  className="building-floor"
                  onMouseEnter={() => handleMouseEnter(floor, "A")}
                  onMouseLeave={handleMouseLeave}
                />
                <text
                  x={portionWidth / 2}
                  y={y + floorHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                >
                  {`Floor ${floor}A`}
                </text>

                {/* Right portion */}
                <rect
                  x={portionWidth}
                  y={y}
                  width={portionWidth}
                  height={floorHeight}
                  fill={activeFloor === floor && activePortion === "B" ? "#f87171" : "#e5e7eb"}
                  stroke="#333"
                  className="building-floor"
                  onMouseEnter={() => handleMouseEnter(floor, "B")}
                  onMouseLeave={handleMouseLeave}
                />
                <text
                  x={portionWidth + portionWidth / 2}
                  y={y + floorHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                >
                  {`Floor ${floor}B`}
                </text>
              </g>
            )
          } else {
            // No portions
            return (
              <g key={`floor-${floor}`}>
                <rect
                  x="0"
                  y={y}
                  width={buildingWidth}
                  height={floorHeight}
                  fill={activeFloor === floor ? "#f87171" : "#e5e7eb"}
                  stroke="#333"
                  className="building-floor"
                  onMouseEnter={() => handleMouseEnter(floor)}
                  onMouseLeave={handleMouseLeave}
                />
                <text
                  x={buildingWidth / 2}
                  y={y + floorHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                >
                  {`Floor ${floor}`}
                </text>
              </g>
            )
          }
        })}

        {/* Ground */}
        <rect x="-10" y={buildingHeight} width={buildingWidth + 20} height="20" fill="#6b7280" />
      </svg>

      {/* Tenant popup */}
      <div
        ref={popupRef}
        className={`tenant-popup ${popupVisible ? "visible" : ""}`}
        style={{
          left: popupPosition.x,
          top: popupPosition.y,
        }}
      >
        {activeTenant && (
          <div>
            <h3 className="font-bold text-lg">{activeTenant.name}</h3>
            <p>
              <strong>Email:</strong> {activeTenant.email}
            </p>
            <p>
              <strong>Phone:</strong> {activeTenant.phone}
            </p>
            <p>
              <strong>Lease:</strong> {activeTenant.leaseStart} to {activeTenant.leaseEnd}
            </p>
            <p>
              <strong>Rent:</strong> ${activeTenant.rentAmount}/month
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
