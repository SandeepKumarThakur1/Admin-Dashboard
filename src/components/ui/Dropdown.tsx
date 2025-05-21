import { useState } from "react";

const Dropdown = ({ label, items }: { label: any; items: { name: any; onClick: () => void }[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <button onClick={() => setOpen(!open)} className="px-3 py-4 bg-gray-200 dark:bg-[#383838] rounded-md">
        {label}
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-[var(--sideBarColor)] shadow-lg rounded-md p-2">
          {items.map((item, index) => (
            <li key={index} onClick={item.onClick} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#383838] cursor-pointer rounded-md">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
