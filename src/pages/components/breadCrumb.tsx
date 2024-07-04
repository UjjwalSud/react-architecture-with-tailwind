import React from "react";
interface IBreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: IBreadcrumbItem[];
  heading: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, heading }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white ">
      <h1 className="text-lg font-semibold text-gray-900">{heading}</h1>
      <nav className="flex items-center space-x-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-400">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-500">/</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;
