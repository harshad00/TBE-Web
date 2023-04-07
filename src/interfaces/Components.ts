import { MouseEventHandler } from 'react';

export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export interface TextProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  className?: string;
}

export interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export interface LogoProps {
  className?: string;
}

export interface LinkButtonProps {
  buttonProps: ButtonProps;
  href: string;
  className?: string;
}

export interface ButtonProps {
  variant: 'PRIMARY' | 'OUTLINE';
  className?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ProgramCardProps {
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  buttonText: string;
}
