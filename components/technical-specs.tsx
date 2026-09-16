"use client"

import { useState } from "react"
import { Plane, Gauge, Ruler, X, type LucideIcon } from "lucide-react"

interface SpecRow {
  label: string
  value: string
}

interface SpecCard {
  icon: LucideIcon
  title: string
  specs: SpecRow[]
  gallery: string[]
}

export function TechnicalSpecs() {
  const [activeGallery, setActiveGallery] = useState<SpecCard | null>(null)

  const cards: SpecCard[] = [
    {
      icon: Plane,
      title: "Overall Design",
      specs: [
        { label: "Layout", value: "Tandem Two-Seat" },
        { label: "Wing Configuration", value: "Low-Wing, Straight Wing" },
        { label: "Landing Gear", value: "Tricycle Retractable" },
        { label: "Structure", value: "Semi-Monocoque All-Metal" },
        { label: "Max G-Limit", value: "+6g / -3g" },
        { label: "Stall Characteristics", value: "Excellent Anti-Stall" },
      ],
      gallery: ["/888.png", "/2.jpg", "/3.jpg"],
    },
    {
      icon: Ruler,
      title: "Airframe & Structure",
      specs: [
        { label: "Wingspan", value: "10.22 m" },
        { label: "Length", value: "8.46 m" },
        { label: "Height", value: "3.25 m" },
        { label: "Wing Area", value: "17.0 m²" },
        { label: "Empty Weight", value: "1105 kg" },
        { label: "Max Takeoff Weight", value: "1418 kg" },
        { label: "Fuel Capacity", value: "162 l" },
      ],
      gallery: ["/4..jpg", "/777.png", "/6..jpg"],
    },
    {
      icon: Gauge,
      title: "Powerplant & Performance",
      specs: [
        { label: "Engine", value: "HS-6A 9-Cylinder Radial" },
        { label: "Rated Power", value: "199 kw (2,250 rpm)" },
        { label: "Propeller", value: "2-Blade Constant-Speed Metal" },
        { label: "Maneuvering Speed (Va)", value: "310 km/h" },
        { label: "Cruise Speed", value: "170 km/h" },
        { label: "Service Ceiling", value: "4,000 m" },
        { label: "Range", value: "690 km" },
        { label: "Endurance", value: "3.6 h" },
        { label: "Takeoff Roll", value: "240 m" },
      ],
      gallery: ["/15.jpg", "/8.jpg", "/9.jpg"],
    },
  ]

  return (
    <section id="specs" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Technical Specifications
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">Engineering Excellence</h2>
          <p className="text-lg font-light text-muted-foreground mt-4">68 years of refinement behind every rivet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="relative overflow-hidden border border-border rounded-lg p-6">
                <div className="absolute inset-0 -z-10">
                  <img src="/2.jpg" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background/90" />
                </div>
                <Icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-light text-foreground mb-4">{card.title}</h3>
                <div>
                  {card.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-center py-2 border-b border-border/50"
                    >
                      <span className="text-sm text-muted-foreground font-light">{spec.label}</span>
                      <span className="text-sm font-mono text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActiveGallery(card)}
                  className="mt-6 text-sm font-light text-primary hover:underline flex items-center gap-1"
                >
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveGallery(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-light text-white mb-6 text-center">{activeGallery.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeGallery.gallery.map((src, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`${activeGallery.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
