import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Angel Heredia - Software Developer';
  hideProfileImage = false;

  socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/herediafangel', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/angelheredia138', label: 'GitHub' },
    { icon: 'fas fa-envelope', url: 'mailto:herediafangel@gmail.com', label: 'Email' },
    { icon: 'fas fa-phone', url: 'tel:+16025785421', label: 'Phone' },
  ];

  education = {
    institution: 'Arizona State University',
    location: 'Tempe, AZ',
    degree: 'Bachelor of Science in Computer Science',
    graduation: 'May 2025',
    coursework: [
      { name: 'Data Structures and Algorithms', icon: 'fas fa-project-diagram' },
      { name: 'Machine Learning', icon: 'fas fa-robot' },
      { name: 'Cybersecurity', icon: 'fas fa-shield-alt' },
      { name: 'Web Development', icon: 'fas fa-globe' },
    ],
  };

  experience = [
    {
      title: 'Software Developer',
      company: 'AstreaX',
      location: 'Phoenix, AZ',
      period: 'September 2025 -- Present',
      icon: 'fas fa-building',
      stack: [
        { name: 'C#' },
        { name: '.NET', icon: 'fas fa-code' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'SQL Server', icon: 'fas fa-database' },
      ],
      summary: [
        'Building a government printing management system that serves multiple states, making sure ADOT documents like towing notifications and official correspondence get printed properly across jurisdictions.',
        'Working with the full stack from Angular frontend to .NET APIs and SQL databases, focusing on clean architecture and enterprise patterns.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Progress Residential',
      location: 'Tempe, AZ',
      period: 'June 2025 -- August 2025',
      icon: 'fas fa-home',
      stack: [
        { name: 'AWS Lambda', icon: 'fab fa-aws' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'GraphQL', icon: 'fas fa-exchange-alt' },
        { name: 'MongoDB', icon: 'fas fa-leaf' },
      ],
      summary: [
        'Created a real-time notification system that handles 15,000+ events monthly for property management, helping notify users of application updates and important information.',
        'Built it completely serverless on AWS with Lambda functions, WebSocket subscriptions, and React frontend with Redux state management.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Mobile AR Application - Cal Poly',
      location: 'Tempe, AZ',
      period: 'August 2024 -- May 2025',
      icon: 'fas fa-university',
      stack: [
        { name: 'Unity', icon: 'fab fa-unity' },
        { name: 'AR', icon: 'fas fa-cube' },
        { name: 'C#' },
      ],
      summary: [
        'Led development of a mobile augmented reality application using Unity and AR frameworks.',
      ],
    },
  ];

  projects = [
    {
      name: 'Valorant Franchising Database',
      tech: [
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: '.NET 8', icon: 'fas fa-code' },
        { name: 'REST API', icon: 'fas fa-exchange-alt' },
      ],
      year: '2024',
      github: 'https://github.com/angelheredia138/ValorantFranchisingDatabaseProject',
      description:
        'A full-stack web app for exploring Valorant esports teams and players with filtering and pagination.',
      summary: [
        "I wanted to create a personal project that combined the tech I'm most interested in for my career with one of my favorite video games, so I could get experience building something and have fun while doing it.",
        'Full-stack app with Vue.js frontend talking to a .NET 8 API for fast data retrieval and smooth filtering.',
      ],
    },
    {
      name: 'Spotify Data Visualization Platform',
      tech: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'D3.js', icon: 'fas fa-chart-bar' },
        { name: 'Spotify API', icon: 'fab fa-spotify' },
        { name: 'OAuth', icon: 'fas fa-key' },
      ],
      year: '2024',
      github: 'https://github.com/angelheredia138/data-visualizer',
      description:
        'Interactive platform that analyzes your Spotify listening patterns with beautiful visualizations.',
      summary: [
        'Ever wondered what your music taste actually looks like? This app connects to your Spotify and creates cool charts and graphs.',
        'Built with React and D3.js for interactive visualizations, plus OAuth so it can securely access your listening data.',
      ],
    },
  ];

  skills = {
    languages: [
      { name: 'C#' },
      { name: 'TypeScript', icon: 'fab fa-js-square' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C++', icon: 'fas fa-code' },
    ],
    frameworks: [
      { name: '.NET 8', icon: 'fas fa-code' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
    ],
    cloud: [
      { name: 'Azure', icon: 'fab fa-microsoft' },
      { name: 'AWS Lambda', icon: 'fab fa-aws' },
      { name: 'Terraform', icon: 'fas fa-cloud' },
      { name: 'CI/CD', icon: 'fas fa-sync' },
    ],
    databases: [
      { name: 'SQL Server', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'PostgreSQL', icon: 'fas fa-elephant' },
    ],
    tools: [
      { name: 'Visual Studio', icon: 'fas fa-code' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'REST/GraphQL', icon: 'fas fa-exchange-alt' },
      { name: 'Agile/Scrum', icon: 'fas fa-users' },
    ],
  };
}
