import React, { useEffect, useState } from 'react';

import { MenuItemsProps } from '../../../../types/layout';
import Accordion from '../Accordion';
import { AccordionItem } from '../AccordionItem';
import { StyledMenuItem } from './styles';

export const MenuItems: React.FC<MenuItemsProps> = ({
  menuItems,
  collapsed,
}): JSX.Element => {
  const [show, setShow] = useState(collapsed);
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleClick = (selected: number) => (): void => {
    setActiveAccordion(selected);
  };

  useEffect(() => {
    collapsed
      ? setShow(false)
      : setTimeout(() => {
          setShow(true);
        }, 1000);
  }, [collapsed]);

  return (
    <>
      {menuItems.map((menuItem, index) => {
        if (menuItem.dropdownItems && menuItem.dropdownItems?.length > 0) {
          return (
            <Accordion
              key={index}
              isExpanded={activeAccordion === index}
              active={menuItem.active}
              onClick={handleClick(index)}
              label={show ? menuItem.title : ''}
              icon={menuItem.icon}
              collapsed={!show}
            >
              {menuItem?.dropdownItems?.map((dropdownItem, index) => (
                <AccordionItem
                  active={dropdownItem.active}
                  label={show ? dropdownItem.title : ''}
                  key={index}
                  action={dropdownItem.onClick}
                >
                  {show ? dropdownItem.title : ''}
                </AccordionItem>
              ))}
            </Accordion>
          );
        }
        return (
          <StyledMenuItem
            active={menuItem.active}
            key={index}
            onClick={menuItem.onClick}
          >
            {menuItem.icon}
            {show ? menuItem.title : ''}
          </StyledMenuItem>
        );
      })}
    </>
  );
};

export default MenuItems;
