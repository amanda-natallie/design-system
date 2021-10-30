import { Meta, Story } from '@storybook/react';
import React from 'react';

import * as Icons from '../src/icons';
import { IconProps } from '../src/icons/types';

export default {
  title: 'Icons/Icons',
  argTypes: {
    color: { control: 'color' },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const FEMSABrand: Story<IconProps> = () => <Icons.FEMSABrand />;
export const ArrowLeft: Story<IconProps> = (args) => (
  <Icons.IconArrowLeft {...args} />
);
export const Bell: Story<IconProps> = (args) => <Icons.IconBell {...args} />;
export const Calendar: Story<IconProps> = (args) => (
  <Icons.IconCalendar {...args} />
);
export const Check: Story<IconProps> = (args) => <Icons.IconCheck {...args} />;
export const CheckIlustration: Story<IconProps> = (args) => (
  <Icons.IconCheckIlustration {...args} />
);
export const ChevronDown: Story<IconProps> = (args) => (
  <Icons.IconChevronDown {...args} />
);
export const Close: Story<IconProps> = (args) => <Icons.IconClose {...args} />;
export const Credit: Story<IconProps> = (args) => (
  <Icons.IconCredit {...args} />
);
export const Dashboard: Story<IconProps> = (args) => (
  <Icons.IconDashboard {...args} />
);
export const Edit: Story<IconProps> = (args) => <Icons.IconEdit {...args} />;
export const EyeHide: Story<IconProps> = (args) => (
  <Icons.IconEyeHide {...args} />
);
export const EyeShow: Story<IconProps> = (args) => (
  <Icons.IconEyeShow {...args} />
);
export const Filter: Story<IconProps> = (args) => (
  <Icons.IconFilter {...args} />
);
export const Lock: Story<IconProps> = (args) => <Icons.IconLock {...args} />;
export const Mail: Story<IconProps> = (args) => <Icons.IconMail {...args} />;
export const Print: Story<IconProps> = (args) => <Icons.IconPrint {...args} />;
export const Profits: Story<IconProps> = (args) => (
  <Icons.IconProfits {...args} />
);
export const Search: Story<IconProps> = (args) => (
  <Icons.IconSearch {...args} />
);
export const Send: Story<IconProps> = (args) => <Icons.IconSend {...args} />;
export const Stocks: Story<IconProps> = (args) => (
  <Icons.IconStocks {...args} />
);
export const ThreeDots: Story<IconProps> = (args) => (
  <Icons.IconThreeDots {...args} />
);
export const Ticket: Story<IconProps> = (args) => (
  <Icons.IconTicket {...args} />
);
export const Truck: Story<IconProps> = (args) => <Icons.IconTruck {...args} />;
export const Warning: Story<IconProps> = (args) => (
  <Icons.IconWarning {...args} />
);
