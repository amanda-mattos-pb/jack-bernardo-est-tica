import React, { createContext, useContext, useState, ReactNode } from "react";
import { Treatment, treatmentsData } from "../data/treatments";

interface TreatmentContextType {
  selectedTreatment: Treatment | null;
  isModalOpen: boolean;
  openTreatmentDetails: (treatmentIdOrName: string) => void;
  closeModal: () => void;
}

const TreatmentContext = createContext<TreatmentContextType | undefined>(undefined);

export function TreatmentProvider({ children }: { children: ReactNode }) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTreatmentDetails = (treatmentIdOrName: string) => {
    // Tries to find by ID first, then by exact Name
    let treatment = treatmentsData.find((t) => t.id === treatmentIdOrName);
    if (!treatment) {
      treatment = treatmentsData.find((t) => t.name.toLowerCase() === treatmentIdOrName.toLowerCase());
    }
    
    // If we find it, open the modal
    if (treatment) {
      setSelectedTreatment(treatment);
      setIsModalOpen(true);
    } else {
      console.warn(`Treatment not found: ${treatmentIdOrName}`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a slight delay before clearing data to allow exit animation to play smoothly
    setTimeout(() => setSelectedTreatment(null), 300);
  };

  return (
    <TreatmentContext.Provider
      value={{ selectedTreatment, isModalOpen, openTreatmentDetails, closeModal }}
    >
      {children}
    </TreatmentContext.Provider>
  );
}

export function useTreatment() {
  const context = useContext(TreatmentContext);
  if (context === undefined) {
    throw new Error("useTreatment must be used within a TreatmentProvider");
  }
  return context;
}
