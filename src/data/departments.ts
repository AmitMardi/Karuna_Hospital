// TODO: confirm actual departments offered
import { Stethoscope, Baby, Bone, Activity, Ear, Microscope, Cross, Pill } from 'lucide-react';

export const departments = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'Comprehensive care for adults, focusing on the prevention, diagnosis, and treatment of adult diseases.',
    icon: Stethoscope,
  },
  {
    id: 'gynecology-obstetrics',
    name: 'Gynecology & Obstetrics',
    slug: 'gynecology-obstetrics',
    description: 'Expert care for women\'s health, including maternity services and reproductive health.',
    icon: Baby, // Close enough for maternity/OBGYN
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    slug: 'pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    icon: Baby,
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Treatment of conditions involving the musculoskeletal system, including bones, joints, and ligaments.',
    icon: Bone,
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Surgical management of a broad spectrum of diseases and conditions.',
    icon: Activity,
  },
  {
    id: 'ent',
    name: 'ENT (Ear, Nose, Throat)',
    slug: 'ent',
    description: 'Diagnosis and treatment of disorders of the head and neck, including the ears, nose, and throat.',
    icon: Ear,
  },
  {
    id: 'pathology-diagnostics',
    name: 'Pathology & Diagnostics',
    slug: 'pathology-diagnostics',
    description: 'Advanced laboratory and imaging services for accurate diagnosis.',
    icon: Microscope,
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency & Trauma Care',
    slug: 'emergency-trauma',
    description: '24/7 life-saving emergency medical services and trauma care.',
    icon: Cross,
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    slug: 'pharmacy',
    description: 'In-house pharmacy providing a wide range of medicines and medical supplies.',
    icon: Pill,
  }
];
