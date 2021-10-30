import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { SearchSelect } from '../src/components/SearchSelect';
import { SearchSelectProps } from '../src/types/layout';

export default {
  title: 'Components/SearchSelect',
  component: SearchSelect,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;
export const Default: Story<SearchSelectProps> = () => {
  const [selectedValue, setSelectedValue] = useState<any>('');
  const options = [
    { label: 'Label 01', value: 'Brand 01' },
    { label: 'Label 02', value: 'Brand 02' },
    { label: 'Label 03', value: 'Brand 03' },
  ];

  useEffect(() => {
    console.log('selectedValue', selectedValue);
  }, [selectedValue]);
  return (
    <div style={{ width: '300px' }}>
      <SearchSelect
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
        options={options}
        isDisabled={false}
        isLoading={false}
        name="test"
        placeholder="Search for something"
        label="Busque um produto"
        messageError="Nenhum produto encontrado"
      />
    </div>
  );
};
