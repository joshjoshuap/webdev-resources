import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

let navItemList = [
  { title: "FRONT END", link: "#front-end" },
  { title: "BACK END", link: "#back-end" },
  { title: "DEVELOPMENT", link: "#development" },
  { title: "ONLINE COMPILER", link: "#online-compiler" },
  { title: "COLORS", link: "#colors" },
  { title: "TYPOGRAPHY", link: "#typography" },
  { title: "ICONS", link: "#icons" },
  { title: "IMAGES", link: "#images" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="font-bold mx-auto flex max-w-7xl items-center justify-start md:justify-center p-10 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex md:gap-x-8">
          {navItemList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-xl leading-6 text-black hover:text-gray hover:underline transition-all duration-100"
            >
              {item.title}
            </a>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-2 py-6">
                {navItemList.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-xl leading-6 text-gray"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
