export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              NANCHANG <span className="font-semibold text-primary">CJ6</span>
            </h3>
            <p className="text-sm font-light opacity-80 leading-relaxed">
              China&apos;s first indigenously designed and mass-produced trainer aircraft. Operated by Nanchang Yaohu
              Flight Base.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-light">Contact</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>Nanchang Yaohu Airport</li>
              <li>Jiangxi Province, China</li>
              <li>
                <a href="mailto:cj6s@qq.com" className="hover:opacity-100 transition-opacity">
                  cj6s@qq.com
                </a>
              </li>
              <li>
                <a href="tel:+8617710928576" className="hover:opacity-100 transition-opacity">
                  +86 177 1092 8576
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-light">Explore</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>
                <a href="#aircraft" className="hover:opacity-100 transition-opacity">
                  The Aircraft
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:opacity-100 transition-opacity">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:opacity-100 transition-opacity">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:opacity-100 transition-opacity">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-light">Services</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  Aerobatic Airshow
                </a>
              </li>
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  PPL Training
                </a>
              </li>
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  Experience Flight
                </a>
              </li>
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  Simulator Training
                </a>
              </li>
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  Youth Academy
                </a>
              </li>
              <li>
                <a href="#base" className="hover:opacity-100 transition-opacity">
                  Spare Parts Supply
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light opacity-60">
            © 2025 Nanchang Yaohu Flight Base Management Co., Ltd. All rights reserved.
          </p>
          <p className="text-sm font-light opacity-60">Manufactured by AVIC Hongdu Aviation Industry Group</p>
          <div className="flex gap-6 text-sm font-light opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
