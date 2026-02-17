import sicklecellimg from './assets/projects/Sicklecell.jpg';
import wasteimg from './assets/projects/Wasteapp1.jpg';
import tidalwave from './assets/projects/Tidalwave.jpg';


export const projectdata = {
  'sickle-cell': {
    title: 'Sickle Cell Management App',
    subtitle: 'Better Care, Better Living',
    image: sicklecellimg,
    themeColor: '#800020',
    overview: { role: 'Lead Designer', duration: '6 months', platform: 'Mobile', year: '2025' },
    description:'AmbleVerse is a comprehensive mobile health and support platform designed to improve the daily lives of people living  with sickle cell disorder (often called warriors), as well as their guardians and caregivers. The app combines health management tools, education, and community support in one accessible digital environment, helping users better understand the condition and manage it more effectively.',
   problem: `Sickle cell disorder remains a major health challenge in developing countries, where patients and caregivers struggle with scattered medical records and inconsistent health monitoring.
Key challenges identified:
• Medication Adherence: Poor tracking of medication and hydration schedules.
• Crisis Response: Delayed emergency response due to inaccessible medical history.
• Resource Scarcity: Lack of a centralized platform for education and community.
• Caregiver Burden: Difficulty for guardians to monitor symptoms effectively.

There is a critical need for a mobile solution that integrates tracking, reminders, and emergency support to enhance the quality of life for "warriors" and their families.`,
aim: "The aim of AmbleVerse is to design and develop a mobile application that assists individuals living with sickle cell disorder, their guardians, and caregivers in effectively managing health through a unified digital platform.",
    
    objectives: [
        "Develop a mobile platform for tracking symptoms and pain episodes.",
        "Improve treatment adherence via medication and appointment reminders.",
        "Enable secure storage of medical records for emergency access.",
        "Provide centralized educational resources for better awareness.",
        "Create a support community for warriors and caregivers.",
        "Facilitate rapid crisis response with emergency support features."
    ],
    insights: [
      { stat: '85%', label: 'Patients forget daily tracking', color: '#800020' },
      { stat: '90%', label: 'Want digital medical IDs', color: '#9B5CFF' }
    ],
    personas: [
      { name: 'Amara', age: '22', role: 'Student', goal: 'Track triggers', pain: 'Forgetful' }
    ],
    userFlow: ['Dashboard', 'Log Crisis', 'Medical ID'],
    screens: [sicklecellimg, sicklecellimg],
    outcomes: [
      { metric: '30%', label: 'Crises reduction' }
    ],
    conclusion: 'The app successfully bridged the gap between daily tracking and emergency preparedness.'
  },
  'waste-management': {
    title: 'Waste Management App',
    subtitle: 'Smart Waste, Smarter Planet',
    image: wasteimg,
    themeColor: '#10B981',
    overview: { role: 'Lead UI/UX Designer', duration: '4 months', platform: 'iOS & Android', year: '2024' },
    description: 'WasteGrid is a mobile application designed to help citizens manage waste responsibly.',
    problem: 'Inefficient collection systems and low public awareness lead to poor waste management.',
    insights: [
      { stat: '73%', label: 'Find apps complex', color: '#10B981' },
      { stat: '68%', label: 'Want rewards', color: '#9B5CFF' }
    ],
    personas: [
      { name: 'Sarah', age: '28', role: 'Professional', goal: 'Easy recycling', pain: 'Bad schedules' }
    ],
    userFlow: ['Launch', 'Scan Waste', 'Earn Points'],
    screens: [wasteimg, wasteimg],
    outcomes: [
      { metric: '45%', label: 'Active users' }
    ],
    conclusion: 'Gamification turned a chore into a rewarding community habit.'
  },
  'tidal-wave': {
    title: 'Tidal Wave',
    subtitle: 'Smart IoT-Powered Waste Management',
    image: tidalwave,
    themeColor: '#00A8FF',
    overview: { role: 'Lead UI/UX Designer', duration: '4 months', platform: 'IoT & Mobile', year: '2024' },
    description: 'TidalWave is a smart IoT-powered waste management system.',
    problem: 'Lack of real-time communication between citizens and waste authorities.',
    insights: [
      { stat: '92%', label: 'Need bin notifications', color: '#00A8FF' },
      { stat: '70%', label: 'Cleanliness boost', color: '#9B5CFF' }
    ],
    personas: [
      { name: 'Michael', age: '42', role: 'Business Owner', goal: 'Monitor pickups', pain: 'Overflowing bins' }
    ],
    userFlow: ['Bin Status', 'Request Pickup', 'Feedback'],
    screens: [tidalwave, tidalwave],
    outcomes: [
      { metric: '50%', label: 'Faster collection' }
    ],
    conclusion: 'IoT integration modernized the urban waste infrastructure.'
  }
};