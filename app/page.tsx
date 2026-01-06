"use client";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Blog', href: '#' },
    { name: 'Contact us', href: '#' },
]

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
//     <main className="min-h-screen bg-slate">
      
//    <div className="bg-white relative">
//       <header className="container mx-auto sticky  inset-x-0 top-0 z-50 scroll-mt-6">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <Button variant="secondary" className="text-sm/6 font-semibold text-gray-900">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </Button>
//           </div>
//         </nav>
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>

//       <div className="relative px-6 pt-14 lg:px-8 bg-linear-(--my-gradients) from-transparent to-black/20 after:ml-0.5 after:text-red-500 before:w-full before:h-full before:max-w-[868px] before:max-h-[661px] before:absolute before:top-0 before:left-0 before:bg-linear-(--my-gradients) before:z-10">
//         <div className="container mx-auto pb-32 ">
//           <div className="flex">
//           <div className="hidden sm:mb-8 sm:flex flex-col sm:justify-center basis-1/2 mr-10">
//             <div className="relative text-secondary-foreground ">
//               Announcing our next round of funding.{' '}
//               <Link href="#" className="font-semibold ">
             
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </Link>
//             </div>
//                <div className="space-y-6 sm:space-y-10 basis-1/2">
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-6xl leading-tight">
//               Reach Your Business
// Goals in Record Time
//             </h1>
//             <p className="mt-8 text-lg text-pretty  sm:text-xl/8">
//            Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.
//             </p>
//             <div className="mt-10 flex items-center justify-start gap-x-6">
//               <Button size="lg" variant="primary" className='rounded-full'>
//                 Get Started
//               </Button>
//               <Button href="#" leftIcon={<Link />} size='lg' variant="link">
//                 Learn more <span aria-hidden="true">&rarr;</span>
//               </Button>
//             </div>
//           </div>
//           </div>
//           <div className="basis-1/2">
//           <img src="/test.png" alt="" width={596} height={625} className='ms-auto -mr-20'/>
//          </div>
        
//           </div>
//         </div>
       
//       </div>
//     </div>
//     </main>
<h1></h1>
  );
}
