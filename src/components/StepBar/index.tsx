import React from 'react';

import { StepBarProps } from '../../types/layout';
import Style from './styles';

export const StepBar: React.FC<StepBarProps> = ({ currentStep, total }) => {
  const steps = Array.from(Array(total));

  return (
    <Style.Wrapper>
      <Style.LineWrapper>
        {steps.map((_, i) =>
          i >= 1 ? <Style.Line active={i <= currentStep} total={total} /> : null
        )}
      </Style.LineWrapper>
      {steps.map((_, i) => (
        <Style.Bullet
          key={i}
          state={
            i < currentStep
              ? 'previous'
              : i === currentStep
              ? 'current'
              : 'next'
          }
        >
          {i + 1}
        </Style.Bullet>
      ))}
    </Style.Wrapper>
  );
};
