import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SidebarDropdown = ({
  title,
  items,
  icon,
}: {
  title: string;
  icon: any;
  items: { name: string; href: string; icons: any }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 text-white"
      >
        <div className="flex gap-2 items-center">
          {icon}
          {title}
        </div>{" "}
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && (
        <ul className="">
          {items.map((item, index) => (
            <li key={index} className="py-2 mt-1">
              <a
                href={item.href}
                className="px-4 text-gray-600 flex gap-2 items-center text-white"
              >
                {item.icons}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarDropdown;
