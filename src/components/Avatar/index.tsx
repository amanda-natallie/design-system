import React, { useState } from 'react';

import { AvatarProps } from '../../types/layout';
import Style from './styles';

export const Avatar: React.FC<AvatarProps> = ({ size = 'md', ...rest }) => {
  const [showAlt, setShowAlt] = useState(false);
  return (
    <Style.Wrapper size={size}>
      {showAlt ? (
        <Style.Image
          src={rest.imageUrl}
          alt={rest.alt ?? 'avatar'}
          onError={(): void => setShowAlt(true)}
        />
      ) : (
        <Style.Alt>
          {rest.alt ? rest.alt.substring(0, 2).toUpperCase() : 'Av'}
        </Style.Alt>
      )}
    </Style.Wrapper>
  );
};
