import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'customer-analytics-etl',
    title: 'Azure Databricks ETL Pipeline for Customer Analytics',
    description:
      'UTA 2025 — Built a near real-time customer analytics pipeline in Azure Databricks to process login, session, and user activity data. Used Apache Kafka and Spark Structured Streaming to ingest and transform events with checkpointing for reliable processing. Stored cleansed and aggregated data in Delta Lake tables, created PySpark and Spark SQL logic for active users, session trends, and engagement patterns, and applied Spark optimization techniques such as partitioning and caching with dashboards for key activity metrics.',
    tags: [
      'Azure Databricks',
      'PySpark',
      'Spark Structured Streaming',
      'Apache Kafka',
      'Delta Lake',
      'ADLS Gen2',
      'SQL',
    ],
    githubUrl: 'https://github.com/vemuyash-debug/customer-analytics-etl',
  },
  {
    id: 'customer-activity-monitoring',
    title: 'Customer Activity Monitoring System',
    description:
      'UTA 2025 — Developed Databricks notebooks using PySpark to process and monitor customer activity datasets. Implemented Structured Streaming with sample Kafka events for near real-time processing, used checkpointing and Delta Lake for reliable pipelines and historical data, performed cleaning, transformations, and aggregations with Spark DataFrames and Spark SQL, and created notebook-based visualizations to track customer engagement and processed event trends.',
    tags: [
      'Azure Databricks',
      'Apache Kafka',
      'PySpark',
      'Spark Structured Streaming',
      'Delta Lake',
    ],
    githubUrl: 'https://github.com/vemuyash-debug/customer-activity-monitoring-system',
  },
  {
    id: 'fraud-scoring',
    title: 'Fraud Risk Scoring API',
    description:
      'Designed an ML fraud-scoring service with feature pipelines, versioned models, and REST inference via FastAPI. Built an analyst review dashboard with SHAP-based “why flagged” explanations for suspicious transactions, evaluated with ROC-AUC/PR-AUC, and added population drift checks for production-style monitoring.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'SHAP', 'Docker', 'ML'],
    githubUrl: 'https://github.com/vemuyash-debug/fraud-risk-scoring',
    liveUrl: 'https://fraud-risk-scoring.onrender.com',
    liveUrlLabel: 'Live Demo',
  },
  {
    id: 'mavpath',
    title: 'MavPath – Smart Campus Navigation System',
    description: 'Web-based campus navigation application developed as part of Master\'s coursework at UTA. Helps users discover campus buildings and routes through an interactive map interface, improving navigation and accessibility across the university campus.',
    tags: ['React', 'JavaScript', 'Google Maps API', 'Web UI'],
    liveUrl: 'https://mavpath.vercel.app',
  },
  {
    id: '1',
    title: 'Visual Question Answering System',
    description:
      'UTA | Spring 2025 — Developed multimodal deep learning models combining CNN and LSTM architectures for image-based question answering. Performed training, hyperparameter tuning, and validation with structured evaluation pipelines.',
    tags: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'NLP'],
  },
  {
    id: '2',
    title: 'Neural Network and CNN Implementation on CIFAR-10',
    description: 'Built image classifiers from scratch using NumPy and PyTorch on the CIFAR-10 dataset. Experimented with neural network and CNN architectures to achieve over 70% validation accuracy.',
    tags: ['Python', 'NumPy', 'PyTorch', 'Deep Learning'],
  },
  {
    id: '3',
    title: 'AthletaAI – Distributed E-commerce Platform',
    description: 'Designed a distributed e-commerce platform using Java Spring Boot microservices and React for product browsing, auth, and order processing — built for horizontal scalability and fault isolation. Implemented event-driven order workflows with AWS SQS for async order/payment/inventory communication; RESTful APIs backed by DynamoDB and containerized with Docker; achieved 99.9% availability under load.',
    tags: ['Java', 'Spring Boot', 'React', 'AWS SQS', 'DynamoDB', 'Docker'],
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
    id: '7',
    title: 'Large Language Model Training & Optimization',
    description: 'Experimented with supervised fine-tuning workflows to improve task-specific LLM performance. Built structured training datasets and preprocessing pipelines for alignment, and designed evaluation metrics to benchmark output quality across iterations.',
    tags: ['LLMs', 'SFT', 'Prompt Engineering', 'Embeddings', 'Model Evaluation'],
  },
]
