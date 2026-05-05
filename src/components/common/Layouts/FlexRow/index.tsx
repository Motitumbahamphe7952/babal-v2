
import { cn } from '@/lib/utils';
import { IFlexContainerProps } from '../types';

export default function FlexRow({
  className = '',
  children,
  ...rest
}: IFlexContainerProps) {
  return (
    <div
      className={cn(
        `flex flex-row
      ${className}`,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
