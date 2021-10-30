/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ReactNode, RefObject } from 'react';
import { SingleValue } from 'react-select';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { breakpointsType } from '../utils/grid';

export interface DropdownItemProps {
  title: string;
  onClick: () => void;
  active?: boolean;
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isDropdown?: boolean;
  dropdownItems?: DropdownItemProps[];
  active?: boolean;
}

export interface MenuItemsProps {
  menuItems: MenuItemProps[];
  collapsed?: boolean;
}

export interface HeaderProps {
  searchTerm?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  notifications?: any[];
  messages?: any[];
  user: any;
  searchPlaceholder?: string;
  collapsed?: boolean;
}

export type LayoutWrapperProps = MenuItemsProps & HeaderProps;

export interface AccordionProps {
  isExpanded?: boolean;
  active?: boolean;
  disabled?: boolean;
  label: string;
  icon: React.ReactNode;
  onClick?: React.DOMAttributes<HTMLLIElement>['onClick'];
  children: React.ReactNode;
  collapsed?: boolean;
}

export interface DropdownProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
  threeDots?: boolean;
  disabled?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export type ColProps = {
  children?: ReactNode;
  collapse?: keyof breakpointsType;
  size?: number;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
};

export type RowProps = {
  children: ReactNode;
  fluid?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
};

export interface FlexBoxProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  isCard?: boolean;
  verticalAlign?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | false
    | string;
  horizontalAlign?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | false
    | string;
  direction?: 'row' | 'column' | string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullScreen?: boolean;
  noPadding?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export interface CardProps extends FlexBoxProps {
  noRound?: boolean;
  bordered?: boolean;
  noShadow?: boolean;
}
export interface AccordionItemProps {
  action?: () => void;
  disabled?: boolean;
  active?: boolean;
  label: string;
}
export interface TableProps {
  topToolbar?: React.ReactNode;
  bottomToolbar?: React.ReactNode;
  emptyComponent?: React.FC;
  cardCustomStyles?: CSSObject | FlattenSimpleInterpolation;
}
export enum BadgeColors {
  blue,
  green,
  light_blue,
  yellow,
  red,
  gray,
}
export interface BadgeProps extends StyledComponentProps {
  variant: keyof typeof BadgeColors;
  label: string;
  bordered?: boolean;
  secondary?: boolean;
}
export interface StyledComponentProps {
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'fluid' | 'full';
  type?: 'button' | 'submit' | 'reset';
  buttonWidth?: number;
  icon?: ReactNode;
  children?: ReactNode | string | undefined;
  small?: boolean;
  ghost?: boolean;
  active?: boolean;
  dropdownItem?: boolean;
  forwardRef?: React.Ref<HTMLButtonElement>;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
  iconButton?: boolean;
}

export interface AvatarProps {
  size?: string;
  imageUrl?: string;
  alt?: string;
}

export interface Options {
  id: number | string;
  name: string;
}

export interface SelectProps {
  disabled?: boolean;
  label: string;
  placeholder: string;
  value: number | string;
  setValue: (value: number | string) => void;
  options: Options[];
  messageError?: string;
  inputError?: boolean;
  name?: string;
  popupCustomStyles?: CSSObject | FlattenSimpleInterpolation;
  bgWhenSelected?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export interface TypographyProps extends StyledComponentProps {
  variant?: 'primary' | 'secondary' | 'disabled' | 'white';
  as:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'small'
    | 'label';
  children: React.ReactNode | string;
  [key: string]: any;
}

export interface StepBarProps {
  currentStep: number;
  total: number;
}

export interface InputProps {
  id?: string;
  name?: string;
  noLabel?: boolean;
  label?: string;
  maxLength?: number;
  type?:
    | 'password'
    | 'Typography'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | 'text'
    | 'textarea'
    | Date
    | DateConstructor
    | undefined;
  value: string | string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  placeholder: string;
  disabled?: boolean;
  checked?: boolean;
  customIcon?: React.ReactNode;
  showIconPassword?: boolean;
  messageError?: string | null;
  inputError?: boolean | null;
  onClick?: () => void;
  forwardRef?: RefObject<HTMLDivElement>;
  readonly?: boolean;
  customInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  badge?: string | number;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export interface TableCellProps extends StyledComponentProps {
  component?: 'th' | 'td';
  align?: 'center' | 'left' | 'right';
  checkbox?: React.ReactNode;
  order?: 'ASC' | 'DESC';
  orderBy?: string;
  orderByCb?: (key: string) => void;
  width?: string;
  actionCell?: boolean;
  colSpan?: number;
  hasBadge?: boolean;
}
export interface OrderStatusBadgesProps {
  [key: string]: {
    color: keyof typeof BadgeColors;
    label: string;
  };
}

export interface DividerProps extends StyledComponentProps {
  margin?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

export interface DialogProps extends FlexBoxProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  disableBackdropClick?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  info: {
    title: string;
    subtitle: string;
    cancelButton?: {
      title: string;
      action?: () => void;
    };
    confirmButton?: {
      title: string;
      action?: () => void;
    };
  };
}

export interface TextareaProps extends StyledComponentProps {
  limit?: number;
  messageError?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
}

export interface SearchSelectProps {
  isLoading: boolean;
  options: any[];
  selectedValue: string;
  setSelectedValue: (value: SingleValue<SearchSelectOptions>) => void;
  isDisabled?: boolean;
  name?: string;
  className?: string;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
  label?: string;
  id?: string;
  messageError?: string;
  placeholder?: string;
}

export interface SearchSelectOptions {
  label: string;
  value: string;
}
