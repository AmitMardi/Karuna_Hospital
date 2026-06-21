// TODO: mark unconfirmed items as placeholders
import { Clock, Ambulance, Pill, Microscope, Accessibility, BedDouble, Stethoscope } from 'lucide-react';

export const facilities = [
  {
    id: 'emergency-24x7',
    name: '24×7 Emergency',
    description: 'Round-the-clock emergency medical services ready to handle critical situations.',
    icon: Clock,
  },
  {
    id: 'ambulance',
    name: 'Ambulance Service',
    description: 'Quick response ambulance service available for critical patient transport.',
    icon: Ambulance,
  },
  {
    id: 'pharmacy',
    name: 'In-house Pharmacy',
    description: 'Fully stocked pharmacy available on-site for immediate medication needs.',
    icon: Pill,
  },
  {
    id: 'diagnostics',
    name: 'Diagnostic Lab',
    description: 'Advanced pathology and diagnostic services for accurate testing.',
    icon: Microscope,
  },
  {
    id: 'wheelchair',
    name: 'Wheelchair Accessible',
    description: 'Accessible entrances, exits, and parking for differently-abled patients.',
    icon: Accessibility,
  },
  {
    id: 'in-patient',
    name: 'In-patient Wards',
    description: 'Clean and comfortable wards with dedicated nursing care.',
    icon: BedDouble,
  },
  {
    id: 'operation-theatre',
    name: 'Operation Theatre', // [PLACEHOLDER - Unconfirmed]
    description: 'Equipped with modern surgical facilities.',
    icon: Stethoscope,
  }
];
