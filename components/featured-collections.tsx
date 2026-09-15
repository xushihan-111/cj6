"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plane, GraduationCap, Hand, Monitor, Sprout, Wrench, X, type LucideIcon } from "lucide-react"

interface ServiceDetail {
  description: string
  images: string[]
}

interface ProductDetail {
  name: string
  image: string
  price: string
  description: string
}

interface Service {
  icon: LucideIcon
  title: string
  description: string
  detail?: ServiceDetail
  products?: ProductDetail[]
}

const services: Service[] = [
  {
    icon: Plane,
    title: "Aerobatic Airshow",
    description:
      "The Red Star Aerobatic Team performs thrilling dual and multi-ship aerobatic routines in the CJ6.",
    detail: {
      description:
        'The Red Star Aerobatic Team is mainly composed of retired flight instructors from the Air Force Aviation University\'s "Wings of the Sky" and other aerobatic teams. They boast exquisite flying skills and superb aerobatic performance capabilities, with each member having accumulated over 5,000 hours of in-flight teaching time. At present, the team\'s primary aircraft is the civil-variant CJ6 (Primary Trainer-6).',
      images: ["/16.jpg", "/17.jpg", "/18.jpg"],
    },
  },
  {
    icon: GraduationCap,
    title: "PPL Training",
    description: "A complete training pathway from zero experience to your Private Pilot License.",
    products: [
      {
        name: "40-Hour Training Program for CJ6 Aircraft",
        image: "/31.jpg",
        price: "CNY ¥419,800.00  |  USD $57,932.40",
        description:
          "This course is developed in accordance with relevant requirements of CCAR-61.\n\nIt consists of 40-hour ground training and 40-hour flight training, complying with the requirements for Private Pilot License (PPL) curriculum specified in Chapter F of CCAR-61.\n\nIts training syllabus has been filed with the Civil Aviation Authority and is subject to authority supervision.",
      },
      {
        name: "15-Hour Type Conversion Training Program for CJ6 Aircraft",
        image: "/30.jpg",
        price: "CNY ¥165,000.00  |  USD $22,770.00",
        description:
          "This training is the type conversion for the CJ6 aircraft (15 flight hours), operated in compliance with CCAR-91, and consists of ground training and flight training.",
      },
    ],
  },
  {
    icon: Hand,
    title: "Experience Flight",
    description: "A hands-on 30-minute flight where you take the controls — no prior experience needed.",
    products: [
      {
        name: "Wing-to-Wing Flight — Dual-aircraft Training Flight on CJ6 Aircraft (Approx. 25 mins)\n(Nanchang, Jiangxi · Oriental Flight Valley, Wuhu)",
        image: "/32.jpg",
        price: "CNY ¥19,800.00  |  USD $2,732.40",
        description:
          "CJ6 Aircraft (The Cradle of Military Aviators, Aerial Safety Cockpit)\n• Aircraft passenger seat insurance\n• Flight helmet provided (military-style flight training)\n• Static group photos with the aircraft\n• On-board panoramic camera access\n• Veteran Retired Air Force Pilots (Average 4,000 flight hours per pilot)\n• Group photos with pilots\n• Instruction on cockpit equipment operation\n• Briefing of flight procedures\n• Safety briefing\n\nFlight Syllabus Content\n• Dual-aircraft take-off\n• Basic formation\n• Close formation\n• Lead-wingman role swap\n• Level flight\n• Climb\n• Descent\n• Turn (orbit)\n• Dual-aircraft manoeuvres\n• Landing\n\nNote: Take-off duration includes engine start-up and taxiing time.",
      },
      {
        name: "Cloud-Top Rite of Passage — CJ6 Dual-Aircraft Formation Training Flight (35 mins + 20 mins)",
        image: "/33.jpg",
        price: "CNY ¥23,800.00  |  USD $3,284.40",
        description:
          "Group Package Details\n\nIn-Flight & Ceremony Services\n• Fresh flower presentation\n• Flight Honor Certificate\n• Ceremony address\n• Professional photography & videography\n• Access to official flight suit and flight helmet\n• Access to cinematic panoramic camera\n\nProfessional In-Air Instructors\n• One-on-one coaching by seasoned retired Air Force pilots\n• Simulated military-style flight experience\n• Each flight instructor has over 4,000 flight hours\n\nGround Preparation\n• Operation guidance for cockpit equipment\n• Basic flight operation essentials\n• Flight-procedure briefing\n• Safety briefing\n\nFlight Syllabus Content\n• Dual-aircraft take-off\n• Basic formation\n• Close formation\n• Lead-wingman role swap\n• Formation flight\n• Level flight\n• Climb\n• Descent\n• Turn (orbit)\n• Dual-aircraft manoeuvring flight\n• Single-aircraft manoeuvring flight\n• Landing\n\nNote: Take-off duration includes engine start-up and taxiing time.",
      },
      {
        name: "Cloud-High Contest — CJ6 Training Flight (Approx. 60 mins)",
        image: "/34.jpg",
        price: "CNY ¥19,800.00  |  USD $2,732.40",
        description:
          "Group Package Details\n\nCJ6 Aircraft (Cradle of Military-Aviation Pilots, A-Sky Safety Vault)\n• Aircraft seat-based insurance\n• Flight helmet access (quasi-military flight training)\n• Static photo session with the aircraft\n• Access to in-cockpit panoramic camera\n• Seasoned Retired Air Force Pilots (Average over 4,000 flight hours)\n• Group photo with pilots\n• Operation guidance for cockpit equipment\n• Flight-procedure briefing\n• Safety briefing\n\nFlight Syllabus Content\n• Take-off\n• Level flight\n• Climb\n• Descent\n• Turn (Orbit)\n• Single-aircraft aerobatic manoeuvres\n• Landing\n\nNote: Take-off duration includes engine start-up and ground taxi time.",
      },
      {
        name: "Wing of the Foundation — CJ6 20-Minute Flight",
        image: "/35.jpg",
        price: "CNY ¥6,600.00  |  USD $910.80",
        description:
          "Group Package Details\n\nCJ6 Aircraft (Cradle of Military-Aviation Pilots, A-Sky Safety Vault)\n• Aircraft seat-based insurance\n• Flight helmet access (quasi-military flight training)\n• Static photo session with the aircraft\n• Access to in-cockpit panoramic camera\n• Seasoned Retired Air Force Pilots (Average over 4,000 flight hours)\n• Group photo with pilots\n• Operation guidance for cockpit equipment\n• Flight-procedure briefing\n• Safety briefing\n\nFlight Syllabus Content\n• Take-off\n• Level flight\n• Climb\n• Descent\n• Turn (Orbit)\n• Low-level pass\n• Landing\n\nNote: Take-off duration includes engine start-up and ground taxi time.",
      },
    ],
  },
  {
    icon: Monitor,
    title: "Simulator Training",
    description: "Professional flight training devices for safe, efficient mastery of flight fundamentals.",
    products: [
      {
        name: "CJ6 Flight Simulator Training (60 Minutes)",
        image: "/36.jpg",
        price: "CNY ¥1,500.00  |  USD $207.00",
        description:
          "Group Package Details\n\nCJ6 Aircraft (Cradle of Military-Aviation Pilots, A-Sky Safety Vault)\n• Aircraft seat-based insurance\n• Flight helmet access (quasi-military flight training)\n• Static photo session with the aircraft\n• Access to in-cockpit panoramic camera\n• Seasoned Retired Air Force Pilots (Average over 4,000 flight hours)\n• Group photo with pilots\n• Operation guidance for cockpit equipment\n• Flight-procedure briefing\n• Safety briefing\n\nFlight Syllabus Content\n• Take-off\n• Level flight\n• Climb\n• Descent\n• Turn (Orbit)\n• Low-level pass\n• Landing\n\nNote: Take-off duration includes engine start-up and ground taxi time.",
      },
    ],
  },
  {
    icon: Sprout,
    title: "Youth Aviation Academy",
    description: "Aviation education programs for young enthusiasts, planting the seeds of future dreams.",
    products: [
      {
        name: "Youth Student Simulated Military-Style Flight Training",
        image: "/37.jpg",
        price: "CNY ¥36,000.00  |  USD $4,968.00",
        description:
          "Product Details\n\nYouth Simulated Military-Style Flight Training (Ages 16+)\n• Operated at dual bases: Nanchang, Jiangxi and Hengdian, Zhejiang.\n• Hengdian site valid from Dec 2025 to Apr 2026.\n\nCJ6\n• Safe trainer aircraft\n• Cradle of Chinese pilots\n• Tens of thousands of safe flight hours accumulated\n• All-metal semi-monocoque structure\n\nProfessional Flight Instructors\n• Seasoned retired Air Force pilots\n• Simulated military-style flight training\n• Instructors with over 4,000 flight hours for dual-pilot instruction\n\nTraining Syllabus\n• Theoretical instruction (5.5 hours)\n• Flight procedure practice (5.5 hours)\n• Simulator flight (60 minutes)\n• Actual airborne flight (80 minutes)",
      },
      {
        name: "CJ6 Simulated Military-Style Flight Training Course (3 Days & 2 Nights)",
        image: "/38.png",
        price: "CNY ¥12,600.00  |  USD $1,738.80",
        description:
          "This course adopts the civilian-version CJ6 aircraft, the same model used by the military, alongside high-precision 1:1 simulation equipment. One-on-one dual-flight instruction is delivered by seasoned retired flight instructors, supplemented by 15.5-hour systematic professional practical training.\n\nParticipants can immerse themselves in the growth journey of military pilots, acquire professional aviation knowledge, master hands-on operational skills, and foster a resolute, robust temperament. It helps turn aviation passion into a potential career path, enabling rewarding learning experiences as they chase their dreams of the blue sky.",
      },
      {
        name: "CJ6 Simulated Military-Style Flight Training Course (6 Days & 5 Nights)",
        image: "/39.jpg",
        price: "CNY ¥23,700.00  |  USD $3,270.60",
        description:
          "This course utilizes the civilian-version CJ6 aircraft, identical to the military model, together with high-precision 1:1 simulation equipment. One-on-one dual-flight instruction is provided by seasoned retired flight instructors, alongside 40 hours of systematic professional practical training.\n\nParticipants gain an immersive experience of how military pilots develop. They learn specialized aviation knowledge, master hands-on operational skills, and build a strong, resolute character. The program helps turn aviation passion into a potential career, delivering tangible learning outcomes as participants pursue their blue-sky dreams.",
      },
    ],
  },
  {
    icon: Wrench,
    title: "Spare Parts Support Supply",
    description: "Genuine CJ6 spare parts and maintenance support to keep your aircraft airworthy.",
    detail: {
      description:
        "Yaohu Flight Base provides a comprehensive spare parts supply chain and technical support network for CJ6 operators worldwide. From routine consumables to major structural components, we offer genuine parts with full traceability and export documentation. Our team of seasoned maintenance specialists is available for on-site technical assistance and remote troubleshooting, ensuring your aircraft stays airworthy and safe.",
      images: ["/222.png", "/40.jpg", "/41.jpg"],
    },
  },
]

export function FeaturedCollections() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [activeProducts, setActiveProducts] = useState<ProductDetail[] | null>(null)

  return (
    <section id="base" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-light">
            Yaohu Flight Base
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">Experience the Legend</h2>
          <p className="text-lg font-light text-muted-foreground mt-4 max-w-2xl mx-auto">
            Beyond preserving history, Nanchang Yaohu Flight Base lets you live it. Explore our six core programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors"
              >
                <Icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-light mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">{service.description}</p>
                {service.detail ? (
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="text-sm font-light text-primary hover:underline text-left"
                  >
                    Learn More →
                  </button>
                ) : service.products ? (
                  <button
                    type="button"
                    onClick={() => setActiveProducts(service.products!)}
                    className="text-sm font-light text-primary hover:underline text-left"
                  >
                    Learn More →
                  </button>
                ) : (
                  <a href="#contact" className="text-sm font-light text-primary hover:underline">
                    Learn More →
                  </a>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Plan Your Visit
          </Button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeService?.detail && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 md:p-10">
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-3 font-light">
                Yaohu Flight Base · Service
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
                {activeService.title}
              </h2>

              <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground mb-8 whitespace-pre-line">
                {activeService.detail.description}
              </p>

              {activeService.detail.images.length > 0 && (
                <div className="space-y-2 mb-6">
                  <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-light">
                    Gallery
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeService.detail.images.map((src, i) => (
                      <div key={src} className="aspect-[4/3] overflow-hidden rounded-md border border-border">
                        <img
                          src={src}
                          alt={`${activeService.title} ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveService(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Detail Modal */}
      {activeProducts && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveProducts(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-background rounded-lg shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProducts(null)}
              className="absolute top-4 right-4 z-20 rounded-full bg-background/80 backdrop-blur p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 md:p-8 pb-4 flex-shrink-0">
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-2 font-light">
                Yaohu Flight Base · Training Programs
              </p>
              <p className="text-xs text-muted-foreground/60 font-light">
                ← Swipe to explore →
              </p>
            </div>

            {/* Horizontal scrollable products */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-8 pb-8 flex-1">
              {activeProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80 sm:w-96 snap-center overflow-y-auto"
                >
                  {/* Product Image */}
                  <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Name (bold) */}
                  <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-3 whitespace-pre-line">
                    {product.name}
                  </h2>

                  {/* Price (red) */}
                  <p className="text-lg md:text-xl font-semibold text-red-600 mb-4">
                    {product.price}
                  </p>

                  {/* Description */}
                  <p className="text-sm font-light leading-relaxed text-muted-foreground whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end px-6 md:px-8 py-4 border-t border-border flex-shrink-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => setActiveProducts(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
