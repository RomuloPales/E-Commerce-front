import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  HomeModernIcon,
  ShoppingCartIcon,
  UsersIcon,
  TagIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { icon: HomeModernIcon, name: "Dashboard", href: "#", current: true },
  { icon: ShoppingCartIcon, name: "Produtos", href: "#", current: false },
  { icon: TagIcon, name: "Categorias", href: "#", current: false },
  { icon: UsersIcon, name: "Clientes", href: "#", current: false },
  { icon: ArrowRightOnRectangleIcon, name: "Sair", href: "#", current: false },  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <>
      <nav className="bg-gray-800 w-72 p-3 rounded-r-2xl fixed top-0 left-0 h-screen">
        <div className="flex items-center justify-center mb-4">
          <img
            className="h-28 w-28 rounded-full mt-5"
            src="https://ideogram.ai/api/images/direct/jOR4uaLeQRKpcPnhrFIQ-Q"
            alt="Your Company"
          />
        </div>
        <ul className="space-y-4  mt-32">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white text-xl"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white text-xl",
                  "block px-4 py-2 text-sm font-medium rounded-md"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <div className="flex">
                  <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                  {item.name}
                </div>
              </a>
            </li>
          ))}
        </ul>
        
      </nav>
    </>
  );
}
