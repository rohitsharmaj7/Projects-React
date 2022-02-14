import React, { useState } from "react";
import Wrapper from "./dropdown.styles";
import onClickOutside from "react-onclickoutside";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    console.log(item);
  }

  return (
    <Wrapper>
      <div className="dd-wrapper">
        <div
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dd-header__title">
            <p className="dd-header__title--bold">{title}</p>
          </div>
          <div className="dd-header__action">
            <p>{open ? "Close" : "Open"}</p>
          </div>
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li className="" key={item.id}>
                <div
                  className="dd-list-item"
                  type="button"
                  onClick={() => handleOnClick(item)}
                >
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
