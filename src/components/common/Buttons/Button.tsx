import { LoadingSpinner } from '@/components';
import { ButtonProps } from '@/interfaces';

const Button = ({
  variant,
  className = '',
  text,
  active = true,
  isLoading = false,
  onClick,
}: ButtonProps) => {
  let baseClasses = 'button bg-light px-2 py-1 text-white';
  if (variant === 'PRIMARY')
    baseClasses =
      'button bg-primary px-2 py-1 shadow-lg text-white hover:bg-transparent hover:text-primary border-2 border-primary hover:scale-105 transition-all';
  else if (variant === 'OUTLINE')
    baseClasses =
      'button bg-light-bg border-2 shadow-lg border-primary px-2 py-1 text-primary hover:scale-105 transition-all';
  else if (variant === 'GHOST')
    baseClasses =
      'button bg-accent px-2 py-1 text-greyDark hover:bg-transparent hover:text-black border-2 hover:border-black transition-all';
  if (!active) baseClasses = 'button bg-greyDark text-contentLight px-2 py-1';

  const loadingContainer = isLoading && <LoadingSpinner />;

  return (
    <button
      className={`${baseClasses} ${className}`}
      disabled={!active}
      onClick={onClick}
    >
      {text}
      {loadingContainer}
    </button>
  );
};

export default Button;
