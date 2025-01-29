// components/Button.tsx
import Link from 'next/link';
import React from 'react';

// Define the props interface
interface ButtonProps {
  href?: string; // Optional href for links
  text: string; // Button text
  className?: string; // Optional custom class names
  icon?: React.ReactNode; // Optional icon (React node)
  target?: string; // Optional target for links (e.g., "_blank")
  rel?: string; // Optional rel for links
  onClick?: () => void; // Optional click handler
  disabled?: boolean; // Optional disabled state
  type?: 'button' | 'submit' | 'reset'; // Optional button type
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className = '',
  icon,
  target = '_self',
  rel = 'noopener noreferrer',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  // Render the button content (text + optional icon)
  const renderContent = () => (
    <>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  // If href is provided, render a Link component
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a
          className={`btn ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          target={target}
          rel={rel}
          onClick={onClick}
        >
          {renderContent()}
        </a>
      </Link>
    );
  }

  // If no href is provided, render a regular button
  return (
    <button
      className={`btn ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {renderContent()}
    </button>
  );
};

export default Button;