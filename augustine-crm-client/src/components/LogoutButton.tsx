'use client';

import { SignOutButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

interface LogoutButtonProps {
  label?: string;
  fullWidth?: boolean;
}

export const LogoutButton = ({ label = 'Logout', fullWidth = true }: LogoutButtonProps) => {
  return (
    <SignOutButton>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white 
          bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 transition-all duration-300 
          shadow-lg hover:shadow-red-500/30 group ${fullWidth ? 'w-full' : ''}`}
        aria-label={label}
      >
        <ArrowRightOnRectangleIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        <span>{label}</span>
      </motion.button>
    </SignOutButton>
  );
};
