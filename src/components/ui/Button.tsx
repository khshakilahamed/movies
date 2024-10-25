import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonPropsType = {
      children: ReactNode;
      className?: string;
      title?: string;
      onClick?: () => void;
}

const Button = ({ className, title, children, onClick, ...rest }: ButtonPropsType) => {
      const style = twMerge('', className)
      return (
            <button
                  className={style}
                  title={title}
                  onClick={onClick}
                  {...rest}
            >
                  {children}
            </button>
      );
};

export default Button;