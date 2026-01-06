import React from 'react'

export default function Header() {
  return (
 <header className="relative">
    <nav className="container mx-auto px-6 py-6 lg:py-8">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">Features</a>
          <a href="#" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#" className="hover:text-gray-900 transition">Testimonials</a>
          <a href="#" className="hover:text-gray-900 transition">Resources</a>
        </div>

        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">○</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Circle</span>
          </a>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900 transition">Company</a>
            <a href="#" className="hover:text-gray-900 transition">Contact</a>
          </div>
          <a href="#" className="px-5 py-2 text-sm font-medium text-teal-500 border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white transition">
            Login
          </a>
        </div>

        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-white pb-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 pt-10 lg:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            A powerful online engagement tool<br />
            that's intuitive and simple to use.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.
          </p>
          <button className="mt-10 px-8 py-4 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition shadow-lg">
            Get started free →
          </button>
        </div>

       
        <div className="relative mt-16 lg:mt-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:-space-x-12 lg:-space-x-20">
       
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800" alt="Team member" className="w-full h-full object-cover" />
            </div>
         
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1519389951293-5fe2f521f096?w=800" alt="Laptop screen" className="w-full h-full object-cover" />
            </div>
           
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Team meeting" className="w-full h-full object-cover" />
            </div>
           
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Person working" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a6?w=800" alt="Team member" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-transparent to-transparent"></div>
      </div>
    </section>
  </header>
  )
}
