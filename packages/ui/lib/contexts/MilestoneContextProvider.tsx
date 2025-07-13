import { useEffect, useRef, useState } from 'react';
import { SectionType } from '@/components/forms/Milestone';
import { MilestoneStatus } from '@/components/forms/Milestone/MilestoneStatus';
import {
  MilestoneContext,
  MilestoneContextType,
} from '@/contexts/MilestoneContext';

interface MilestoneProviderProps {
  children: React.ReactNode;
  initialSections?: SectionType[];
  onMilestoneChange?: (index: number) => void;
}

export const MilestoneProvider = ({
  children,
  initialSections,
  onMilestoneChange,
}: MilestoneProviderProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [sections, setSections] = useState<SectionType[]>(
    initialSections ?? [],
  );
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && initialSections && initialSections.length > 0) {
      setSections(initialSections);
      const index = initialSections.findIndex(
        s => s.status === MilestoneStatus.CURRENT,
      );
      setCurrentSectionIndex(index !== -1 ? index : 0);
      initialized.current = true;
    }
  }, [initialSections]);

  const goToSection = (index: number) => {
    setSections(prevSections => {
      const newSections = [...(prevSections ?? [])];

      if (index < 0 || index >= newSections.length) {
        return prevSections;
      }

      newSections[currentSectionIndex].status = MilestoneStatus.COMPLETED;
      newSections[index].status = MilestoneStatus.CURRENT;

      return newSections;
    });

    setCurrentSectionIndex(index);

    onMilestoneChange?.(index);
  };

  const value: MilestoneContextType = {
    sections,
    goToSection,
    currentSectionIndex,
    setCurrentSectionIndex,
  };

  return (
    <MilestoneContext.Provider value={value}>
      {children}
    </MilestoneContext.Provider>
  );
};
