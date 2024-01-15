import React, { Fragment } from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ pages }) => {

  return (
    <div className="flex flex-row items-center">
      {pages.map(({ label, url, name }, index) => {
        const ultimo = index === pages.length - 1;
        return (
          <Fragment key={name}>
            <a
              className={`text-xl cursor-pointer ${ultimo ? "font-normal" : " font-bold"}`}
              href={url ? url : ""}
            >
              {label}
            </a>
            {!ultimo ? <FiChevronRight /> : ""}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
