import seduceCodeImg from '../src/assets/seduce-code.png'

export const portfolioContent = {
    personal: {
      name: "Ammar Idrees",
      title: "Software Engineer",
      bio: "Passionate developer creating beautiful, functional web experiences with modern technologies. I love turning complex problems into simple, elegant solutions.",
      location: "Islamabad, Pakistan",
      email: "ammaridrees.ai@gmail.com",
      github: "https://github.com/ammaridreesai/",
      linkedin: "https://www.linkedin.com/in/ammar-idrees-ai/",
      resume: "/resume.pdf",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces"
    },
    
    about: {
      description: "I'm a creative developer with 2+ years of experience building scalable web applications. I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me exploring new design trends, contributing to open source, or hiking in the beautiful Pakistan mountains.",
      skills: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "React.js / Next.js", level: 92 },
        { name: "Node.js / Express", level: 88 },
        { name: "ASP.NET Core", level: 82 },
        { name: "MongoDB / SQL", level: 80 },
        { name: "Tailwind CSS / Framer Motion", level: 85 },
        { name: "Git / GitHub & CI", level: 88 }
      ]
    },
  
    experience: [
      {
        id: 1,
        title: "Junior Software Engineer",
        company: "Meraki IT Solution",
        period: "July 2023 - Present",
        description: "Led development of microservices architecture serving 100K+ users. Built responsive web applications with React and Node.js. ",
        technologies: ["React.js", "Next.js", "ASP.NET", "SQL Server", "Azure DevOps", "MERN Stack"]
      },
     
    ],
  
    projects: [
      {
        id: 1,
        title: "Seduce Code",
        description: "Interactive UI playground built with React, Framer Motion animations, and Tailwind CSS components.",
        image: seduceCodeImg,
        technologies: ["React", "Framer Motion", "Tailwind CSS", "MERN Stack"] ,
        github: "https://github.com/ammaridreesai/seduce-code",
        demo: "https://seducecode.vercel.app/",
        featured: true
      },
      {
        id: 2,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "ASP.NET Core"],
        github: "https://github.com/alexjohnson/ecommerce",
        demo: "https://ecommerce-demo.com",
        featured: true
      },
      {
        id: 3,
        title: "AI Chat Interface",
        description: "Modern chat interface with AI integration, real-time messaging, and beautiful animations.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        technologies: ["React", "OpenAI API", "WebSocket", "Framer Motion"],
        github: "https://github.com/alexjohnson/ai-chat",
        demo: "https://ai-chat-demo.com",
        featured: false
      }
    ]
  }