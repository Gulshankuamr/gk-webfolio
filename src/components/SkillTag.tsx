// components/SkillTag.tsx
import { FC, ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
}

export const SkillTag: FC<SkillTagProps> = ({ children }) => {
  return (
    <span className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md">
      {children}
    </span>
  );
};