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
    {
      icon: 'fas fa-file-alt',
      url: 'https://drive.google.com/file/d/1-uh3FkAnt4V6OIoMSKsc5OrfeyKKhykS/view?usp=sharing',
      label: 'Resume',
    },
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
        { name: 'Azure', icon: 'fab fa-microsoft' },
      ],
      summary: [
        "Building features for Arizona Mobile ID, the state's digital driver license for Apple and Google Wallet, across the MVD's internal system of record and the AZ MVD Now customer portal.",
        'Working with Angular for frontend work, .NET services for business logic, and SQL Server for data on features like mobile appointment integration, digital vehicle document copies, mobile credential locking and unlocking, plus security hardening for wallet integrations.',
        'Previously built a multi-state government print management system, creating admin tools for print stock and document types with clean architecture and enterprise patterns.',
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
        'Led technical design sessions with senior engineers and managed the AWS infrastructure as code with Terraform.',
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
        'Led development of a mobile augmented reality application using Unity and AR frameworks, following Agile practices.',
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
        'Ever wondered what your music taste actually looks like? This app connects to your Spotify and creates cool charts and graphs (invite only though, Spotify API restrictions).',
        'Built with React and D3.js for interactive visualizations, plus OAuth so it can securely access your listening data.',
      ],
    },
  ];

  skills = {
    languages: [
      { name: 'C#' },
      { name: 'TypeScript', icon: 'fab fa-js-square' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'KQL', icon: 'fas fa-magnifying-glass-chart' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C++', icon: 'fas fa-code' },
    ],
    frameworks: [
      { name: '.NET 8', icon: 'fas fa-code' },
      { name: 'ASP.NET Core', icon: 'fas fa-server' },
      { name: 'Entity Framework Core', icon: 'fas fa-layer-group' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'PrimeNG', icon: 'fas fa-puzzle-piece' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
    ],
    cloud: [
      { name: 'Azure', icon: 'fab fa-microsoft' },
      { name: 'Azure Log Analytics', icon: 'fas fa-chart-line' },
      { name: 'Azure DevOps', icon: 'fas fa-list-check' },
      { name: 'AWS Lambda', icon: 'fab fa-aws' },
      { name: 'AWS AppSync', icon: 'fab fa-aws' },
      { name: 'Terraform', icon: 'fas fa-cloud' },
      { name: 'CI/CD', icon: 'fas fa-sync' },
    ],
    databases: [
      { name: 'SQL Server', icon: 'fas fa-database' },
      { name: 'Stored Procedures', icon: 'fas fa-scroll' },
      { name: 'SSMS', icon: 'fas fa-terminal' },
      { name: 'MongoDB', icon: 'fas fa-leaf' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
    ],
    security: [
      { name: 'ISO 18013-5 (mDL)', icon: 'fas fa-id-card' },
      { name: 'Mobile Wallets', icon: 'fas fa-wallet' },
      { name: 'mTLS', icon: 'fas fa-lock' },
      { name: 'PII Redaction', icon: 'fas fa-user-shield' },
    ],
    tools: [
      { name: 'Visual Studio', icon: 'fas fa-code' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Postman', icon: 'fas fa-paper-plane' },
      { name: 'Swagger/OpenAPI', icon: 'fas fa-file-code' },
      { name: 'Claude Code', icon: 'fas fa-robot' },
      { name: 'GitHub Copilot', icon: 'fab fa-github' },
      { name: 'REST/GraphQL', icon: 'fas fa-exchange-alt' },
      { name: 'Agile/Scrum', icon: 'fas fa-users' },
      { name: 'Clean Architecture', icon: 'fas fa-sitemap' },
      { name: 'Code Review', icon: 'fas fa-code-pull-request' },
      { name: 'Repository Pattern', icon: 'fas fa-box-archive' },
      { name: 'Dependency Injection', icon: 'fas fa-syringe' },
    ],
  };
}
