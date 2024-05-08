import React, { ReactNode } from 'react';
import * as S from '../wrapper/wrapper.style';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <S.WrapperBlock>{children}</S.WrapperBlock>;
};

export default Wrapper;
