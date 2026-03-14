import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'mavpath',
    title: 'MavPath – Smart Campus Navigation System',
    description: 'Web-based campus navigation application developed as part of Master\'s coursework at UTA. Helps users discover campus buildings and routes through an interactive map interface, improving navigation and accessibility across the university campus.',
    tags: ['React', 'JavaScript', 'Google Maps API', 'Web UI'],
    liveUrl: 'https://mavpath.vercel.app',
  },
  {
    id: '1',
    title: 'Visual Question Answering using Deep Learning',
    description: 'Developed a Visual Question Answering system using CNNs, LSTMs, and attention mechanisms on the VQA dataset. Integrated image and text features to predict answers with visual interpretability through heatmaps.',
    tags: ['Python', 'PyTorch', 'CNN', 'LSTM', 'Attention'],
  },
  {
    id: '2',
    title: 'Neural Network and CNN Implementation on CIFAR-10',
    description: 'Built image classifiers from scratch using NumPy and PyTorch on the CIFAR-10 dataset. Experimented with neural network and CNN architectures to achieve over 70% validation accuracy.',
    tags: ['Python', 'NumPy', 'PyTorch', 'Deep Learning'],
  },
  {
    id: '3',
    title: 'AthletaAI - E-commerce Platform',
    description: 'Created a complete e-commerce platform using React.js for the frontend and Node.js/Express with MySQL for the backend, including secure login and product search.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    liveUrl: 'https://athletaai.netlify.app/login',
    liveUrlLabel: 'Live Website',
  },
  {
    id: '4',
    title: "Patient's Health Surveillance System",
    description: 'Built a real-time health monitoring system using Arduino and GSM/Wi-Fi modules to track patient vitals remotely. Enables alerts and data communication for faster response and better remote healthcare.',
    tags: ['Arduino', 'IoT', 'GSM', 'Wi-Fi'],
  },
  {
    id: '5',
    title: 'Comparative Analysis of ML Models for Multiple Disease Prediction',
    description: 'Developed a machine learning model using multiple sensors data (TH 11, Spo2, pulse, MQ2) to predict diseases like cardiovascular conditions and diabetes, focusing on early diagnosis and preventive healthcare.',
    tags: ['Python', 'Machine Learning', 'Data Analytics'],
  },
  {
    id: '6',
    title: 'ServiceNow Upgrade Console',
    description: 'Worked on the design and development of the ServiceNow Upgrade Console. Built UI Builder components, developed Advanced Search UI with ReactJS, and integrated REST APIs.',
    tags: ['React', 'JavaScript', 'REST API', 'ServiceNow'],
  },
]
