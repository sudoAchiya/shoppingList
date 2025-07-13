import { createContext, useContext } from 'react';
import { SectionType } from '@/components/forms/Milestone';

export interface MilestoneContextType {
  sections: SectionType[];
  goToSection: (index: number) => void;
  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
}

export const MilestoneContext = createContext<MilestoneContextType | null>(
  null,
);

export const useMilestoneContext = () => {
  const context = useContext(MilestoneContext);
  if (!context) {
    throw new Error(
      'useMilestoneContext must be used within a MilestoneProvider',
    );
  }

  return context;
};
