import { ProfileData, ResearchProject, Publication, Course, PresentationEvent } from '../types';

export const profileData: ProfileData = {
  name: "Dr. Alex Morgan",
  title: "AI & Computer Vision Researcher",
  bio: "I'm a computer vision researcher focusing on deep learning approaches to medical image analysis and autonomous perception systems. My work explores the intersection of neural networks and 3D reconstruction techniques to enhance decision-making in critical applications.",
  email: "alex.morgan@research.edu",
  profileImage: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  socialLinks: {
    googleScholar: "https://scholar.google.com",
    researchGate: "https://researchgate.net",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    orcid: "https://orcid.org"
  },
  interests: [
    "Computer Vision",
    "Deep Learning",
    "Medical Imaging",
    "3D Reconstruction",
    "Autonomous Systems"
  ],
  education: [
    {
      degree: "Ph.D.",
      institution: "Stanford University",
      field: "Computer Science, AI Specialization",
      year: "2020",
      description: "Thesis: Neural Network Approaches to Multi-modal Medical Image Analysis"
    },
    {
      degree: "M.S.",
      institution: "MIT",
      field: "Electrical Engineering & Computer Science",
      year: "2016",
      description: "Focus on Computer Vision and Machine Learning"
    },
    {
      degree: "B.S.",
      institution: "University of California, Berkeley",
      field: "Computer Science",
      year: "2014",
      description: "Minor in Mathematics"
    }
  ]
};

export const researchProjects: ResearchProject[] = [
  {
    id: "neuronet-3d",
    title: "NeuroNet-3D",
    description: "A novel deep learning architecture for real-time 3D reconstruction from monocular video with applications in robotic navigation.",
    thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Computer Vision",
    technologies: ["PyTorch", "CUDA", "C++", "Python"],
    date: "2022",
    links: {
      demo: "https://example.com/neuronet-demo",
      paper: "https://example.com/neuronet-paper",
      github: "https://github.com/example/neuronet"
    }
  },
  {
    id: "medvision",
    title: "MedVision",
    description: "An adaptive segmentation system for medical imaging that combines attention mechanisms with traditional computer vision techniques.",
    thumbnail: "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Medical Imaging",
    technologies: ["TensorFlow", "Python", "DICOM", "OpenCV"],
    date: "2021",
    links: {
      paper: "https://example.com/medvision-paper",
      github: "https://github.com/example/medvision"
    }
  },
  {
    id: "autonomous-perception",
    title: "Autonomous Perception Framework",
    description: "A comprehensive framework for sensor fusion and scene understanding in autonomous vehicles operating in adverse weather conditions.",
    thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Autonomous Systems",
    technologies: ["ROS", "Python", "C++", "LIDAR", "Radar"],
    date: "2020",
    links: {
      demo: "https://example.com/perception-demo",
      paper: "https://example.com/perception-paper"
    }
  },
  {
    id: "neural-compression",
    title: "Neural Compression",
    description: "A novel approach to image and video compression using neural networks that outperforms traditional codecs while preserving visual quality.",
    thumbnail: "https://images.pexels.com/photos/7775638/pexels-photo-7775638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Computer Vision",
    technologies: ["PyTorch", "Python", "FFMPEG", "CUDA"],
    date: "2019",
    links: {
      demo: "https://example.com/compression-demo",
      paper: "https://example.com/compression-paper",
      github: "https://github.com/example/neural-compression"
    }
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Real-time 3D Scene Reconstruction from Monocular Video Using Neural Radiance Fields",
    authors: ["Morgan, A.", "Zhang, L.", "Patel, S."],
    journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2023,
    doi: "10.1109/TPAMI.2023.1234567",
    abstract: "This paper introduces a novel approach to real-time 3D reconstruction from monocular video utilizing neural radiance fields (NeRF) with significant optimizations for latency reduction and accuracy improvement.",
    citations: 42,
    pdfUrl: "https://example.com/paper1.pdf",
    tags: ["3D Reconstruction", "Neural Radiance Fields", "Real-time Systems"]
  },
  {
    id: "pub2",
    title: "Attention-Based Medical Image Segmentation with Limited Annotated Data",
    authors: ["Morgan, A.", "Chen, H.", "Gupta, R."],
    journal: "Medical Image Analysis",
    year: 2022,
    doi: "10.1016/j.media.2022.7654321",
    abstract: "We present an attention mechanism-based approach to medical image segmentation that significantly reduces the requirement for annotated training data while maintaining high accuracy.",
    citations: 36,
    pdfUrl: "https://example.com/paper2.pdf",
    tags: ["Medical Imaging", "Segmentation", "Attention Mechanisms", "Semi-supervised Learning"]
  },
  {
    id: "pub3",
    title: "Robust Sensor Fusion for Autonomous Driving in Adverse Weather Conditions",
    authors: ["Morgan, A.", "Lee, K.", "Williams, J."],
    journal: "Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2021,
    doi: "10.1109/CVPR.2021.9876543",
    abstract: "This paper addresses the challenge of sensor fusion for autonomous vehicles operating in adverse weather conditions, presenting a novel approach that combines physical models with deep learning.",
    citations: 85,
    pdfUrl: "https://example.com/paper3.pdf",
    tags: ["Autonomous Driving", "Sensor Fusion", "Adverse Weather", "Deep Learning"]
  },
  {
    id: "pub4",
    title: "Neural Network-Based Video Compression: Surpassing Traditional Codecs",
    authors: ["Morgan, A.", "Singh, P."],
    journal: "International Conference on Computer Vision (ICCV)",
    year: 2020,
    doi: "10.1109/ICCV.2020.1357924",
    abstract: "We introduce a novel neural network architecture for video compression that outperforms traditional codecs in both objective metrics and subjective quality assessments.",
    citations: 128,
    pdfUrl: "https://example.com/paper4.pdf",
    tags: ["Video Compression", "Neural Networks", "Deep Learning"]
  },
  {
    id: "pub5",
    title: "Efficient Training of Deep Neural Networks for 3D Medical Image Analysis",
    authors: ["Morgan, A.", "Kumar, R.", "Thompson, E."],
    journal: "Nature Machine Intelligence",
    year: 2019,
    doi: "10.1038/s42256-019-12345-6",
    abstract: "This paper presents novel techniques for efficient training of deep neural networks for 3D medical image analysis, significantly reducing computational requirements while improving accuracy.",
    citations: 197,
    pdfUrl: "https://example.com/paper5.pdf",
    tags: ["Medical Imaging", "Deep Learning", "3D Analysis", "Efficient Training"]
  }
];

export const courses: Course[] = [
  {
    id: "course1",
    title: "Advanced Computer Vision",
    institution: "Stanford University",
    description: "Graduate-level course covering the latest research and techniques in computer vision and deep learning approaches to visual understanding.",
    year: 2022,
    semester: "Fall",
    materials: "https://example.com/course-materials"
  },
  {
    id: "course2",
    title: "Neural Networks for Medical Imaging",
    institution: "Stanford University",
    description: "Specialized course on the application of neural networks to medical imaging problems, including segmentation, classification, and reconstruction.",
    year: 2021,
    semester: "Spring",
    materials: "https://example.com/course-materials"
  },
  {
    id: "course3",
    title: "Introduction to AI for Computer Science",
    institution: "Online Learning Platform",
    description: "Introductory course on artificial intelligence fundamentals designed for computer science undergraduates.",
    year: 2020,
    semester: "Summer"
  }
];

export const presentations: PresentationEvent[] = [
  {
    id: "pres1",
    title: "The Future of 3D Reconstruction from 2D Imagery",
    event: "CVPR Workshop on 3D Vision",
    location: "Virtual",
    date: "June 2023",
    description: "Keynote presentation on emerging techniques for 3D reconstruction from 2D images and videos, with focus on neural radiance fields and implicit representations.",
    slidesUrl: "https://example.com/slides1",
    videoUrl: "https://example.com/video1"
  },
  {
    id: "pres2",
    title: "Medical AI: Challenges and Opportunities",
    event: "Medical Imaging Conference",
    location: "Boston, MA",
    date: "March 2022",
    description: "Panel discussion on the current challenges and future opportunities in the application of AI to medical imaging.",
    slidesUrl: "https://example.com/slides2"
  },
  {
    id: "pres3",
    title: "Sensor Fusion Techniques for Autonomous Systems",
    event: "International Conference on Robotics and Automation",
    location: "Singapore",
    date: "May 2021",
    description: "Workshop on advanced sensor fusion techniques for autonomous systems operating in challenging environments.",
    slidesUrl: "https://example.com/slides3",
    videoUrl: "https://example.com/video3"
  }
];