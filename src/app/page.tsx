'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AnimatedTitle = () => {
  const titles = [
    "Backend Developer",
    "DevOps Engineer",
    "3rd Year UG at IIT Kharagpur",
    "Founder & CEO of SkillShodh",
    "Udemy Instructor",
    "Flutter Developer"
  ];
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.h2
      key={titleIndex}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold mb-4 text-purple-300"
    >
      {titles[titleIndex]}
    </motion.h2>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "BiteLink",
      description: "A free URL shortener website, with complete click analytics",
      details: [
        "Built with Next.js and MongoDB.",
        "Features cookie-based authentication.",
        "Includes analytics with bar and pie charts.",
        "Optimized for SEO.",
        "Hosted on EC2 with CI/CD using GitHub Actions."
      ],
      tags: ["Next.js", "MongoDB", "GitHub Actions", "AWS EC2", "AWS ROute 53", "NGINX", "SEO", "Google Adscene"],
      link: "https://bitelink.com"
    },
    {
      title: "SkillShodh",
      description: "Community platform connecting students with internships and job opportunities.",
      details: [
        "Led the development of the platform.",
        "Managed backend development using Node.js and MongoDB.",
        "Oversaw VPS hosting and security.",
        "Collaborated with designers for UI/UX."
      ],
      tags: ["Node.js", "MongoDB", "VPS Hosting", "SEO", "ReactJS", "NGINX",],
      link: "https://skillshodh.in"
    }
  ];
  

  const experiences = [
    {
      title: "Flutter Developer Intern",
      company: "Build With Innovation",
      period: "November 2023 - April 2024",
      details: [
        "Worked on backend services for various applications using Flutter, enhancing overall functionality.",
        "Gained hands-on experience with Firebase for backend integration.",
        "Utilized Typesense for implementing fast and efficient search features.",
        "Collaborated with cross-functional teams to gather requirements.",
        "Participated in daily stand-up meetings to track progress and address challenges.",
        "Contributed to debugging and optimizing application performance."
      ],
      tags: ["Flutter", "Firebase", "Typesense", "Remote Work"]
    },
    {
      title: "Marketing Intern",
      company: "Fiitoz",
      period: "February 2023 - April 2023",
      details: [
        "Contributed to the promotion of mushroom chips through social media marketing.",
        "Developed promotional materials and campaigns to increase product visibility.",
        "Conducted market research to identify potential customer segments.",
        "Assisted in organizing product tasting events and gathering customer feedback.",
        "Collaborated with the marketing team to analyze campaign effectiveness."
      ],
      tags: ["Marketing", "Startup"]
    },
    {
      title: "Udemy Instructor",
      company: "Udemy",
      period: "January 2021 - Present",
      details: [
          "Created and taught a course on building a Tic Tac Toe game using Python.",
          "Achieved over 250 enrollments in the course, enhancing teaching skills.",
          "Developed course content and learning materials to aid student understanding.",
          "Engaged with students through Q&A sessions and feedback surveys.",
          "Continuously updated course materials to reflect the latest programming practices."
      ],
      tags: ["Teaching", "Online Education", "Python"]
  }
  
  ];

  const freelanceProjects = [
    {
      title: "Foodcription",
      description: "Freelance project involving website setup and management.",
      details: [
        "Implemented auto deployment on EC2 using GitHub Actions.",
        "Managed DNS records and ensured website security.",
        "Connected domains to enhance user accessibility."
      ],
      link: "https://foodcription.com",
      tags: ["EC2", "GitHub Actions", "Freelance", "Web Development"]
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", color: "bg-amber-400 text-gray-900" },
        { name: "Python", color: "bg-blue-500 text-white" },
        { name: "Dart", color: "bg-sky-400 text-gray-900" },
        { name: "C++", color: "bg-indigo-600 text-white" },
        { name: "TypeScript", color: "bg-blue-600 text-white" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "Node.js", color: "bg-emerald-500 text-white" },
        { name: "Express", color: "bg-gray-600 text-white" },
        { name: "Flutter", color: "bg-cyan-500 text-white" },
        { name: "Next.js", color: "bg-gray-900 text-white" },
        { name: "React", color: "bg-sky-400 text-gray-900" },
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", color: "bg-orange-500 text-white" },
        { name: "GitHub Actions", color: "bg-violet-500 text-white" },
        { name: "VPS Management", color: "bg-teal-600 text-white" },
        { name: "DNS Management", color: "bg-amber-600 text-white" },
        { name: "Docker", color: "bg-blue-600 text-white" },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", color: "bg-green-600 text-white" },
        { name: "Supabase", color: "bg-emerald-600 text-white" },
        { name: "PostgreSQL", color: "bg-blue-700 text-white" },
        { name: "Amazon DocumentDB", color: "bg-yellow-600 text-white" },
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "API Development", color: "bg-teal-500 text-white" },
        { name: "Web Sockets", color: "bg-fuchsia-600 text-white" },
        { name: "REST", color: "bg-indigo-500 text-white" },
        { name: "Progressive Web Apps", color: "bg-purple-600 text-white" },
        { name: "Serverless Functions", color: "bg-amber-500 text-gray-900" }
      ]
    },
    {
      category: "Collaboration Tools",
      items: [
        { name: "Figma", color: "bg-purple-500 text-white" },
        { name: "ClickUp", color: "bg-pink-500 text-white" },
        { name: "Notion", color: "bg-gray-800 text-white" },
        { name: "Jira", color: "bg-blue-500 text-white" },
        { name: "Slack", color: "bg-emerald-500 text-white" }
      ]
    }
  ];



  const achievements = [
    "Cracked JEE Advanced and secured admission to IIT Kharagpur 🎓",
    "Udemy Instructor for Python Course with 250+ Enrollments 🎓",
    "Founded SkillShodh, Connecting Students with Internships 🌐",
    "Executed Freelance DevOps Projects with Successful Outcomes 💼",
];


  const certifications = [
    {
      name: "DevOps Beginners to Advanced with Projects",
      issuer: "Udemy",
      date: "October 2024",
      certificateUrl: "/certificates/devops.jpg"
    },
    {
      name: "Python for beginners - Learn all the basics of python",
      issuer: "Udemy",
      date: "January 2021",
      certificateUrl: "/certificates/python.jpg"
    }
  ]

  const contactInfo = {
    email: "jsdeshmukh2020@gmail.com",
    github: "https://github.com/JayeshKGP",
    linkedin: "https://www.linkedin.com/in/jayesh-deshmukh-kgp",
    upwork: "https://www.upwork.com/freelancers/~018d554618099d70b3",
    udemy: "https://www.udemy.com/user/jayesh-deshmukh-14"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-mono">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Fira Code', monospace;
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full border-b border-purple-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
        <div className="container flex h-14 items-center justify-between">
          <Link className="flex items-center space-x-2 pl-4" href="/">
            <span className="text-xl font-bold text-purple-400">JD</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium pr-4">
          <Button variant="ghost" onClick={() => scrollTo('about')} className="text-gray-300 hover:text-gray-800">About</Button>
            <Button variant="ghost" onClick={() => scrollTo('projects')} className="text-gray-300 hover:text-gray-800">Projects</Button>
            <Button variant="ghost" onClick={() => scrollTo('freelance')} className="text-gray-300 hover:text-gray-800">Freelance</Button>
            <Button variant="ghost" onClick={() => scrollTo('experience')} className="text-gray-300 hover:text-gray-800">Experience</Button>
            <Button variant="ghost" onClick={() => scrollTo('skills')} className="text-gray-300 hover:text-gray-800">Skills</Button>
            <Button variant="ghost" onClick={() => scrollTo('certifications')} className="text-gray-300 hover:text-gray-800">Certifications</Button>
            <Button variant="ghost" onClick={() => scrollTo('achievements')} className="text-gray-300 hover:text-gray-800">Achievements</Button>
            <Button variant="ghost" onClick={() => scrollTo('contact')} className="text-gray-300 hover:text-gray-800">Contact</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:bg-gray-200 hover:text-gray-800 mr-4" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-gray-900 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <div className="text-2xl font-bold text-purple-400 mb-8">JD</div>
              <Button variant="ghost" onClick={() => scrollTo('about')} className="text-gray-300 hover:text-gray-800">About</Button>
              <Button variant="ghost" onClick={() => scrollTo('projects')} className="text-gray-300 hover:text-gray-800">Projects</Button>
              <Button variant="ghost" onClick={() => scrollTo('freelance')} className="text-gray-300 hover:text-gray-800">Freelance</Button>
              <Button variant="ghost" onClick={() => scrollTo('experience')} className="text-gray-300 hover:text-gray-800">Experience</Button>
              <Button variant="ghost" onClick={() => scrollTo('skills')} className="text-gray-300 hover:text-gray-800">Skills</Button>
              <Button variant="ghost" onClick={() => scrollTo('certifications')} className="text-gray-300 hover:text-gray-800">Certifications</Button>
              <Button variant="ghost" onClick={() => scrollTo('achievements')} className="text-gray-300 hover:text-gray-800">Achievements</Button>
              <Button variant="ghost" onClick={() => scrollTo('contact')} className="text-gray-300 hover:text-gray-800">Contact</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="about"
          className="mb-16 pt-20 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-cyan-400">Jayesh Deshmukh 👨‍💻</h1>
            <AnimatedTitle />
            <p className="text-lg text-gray-300 mb-4">
            I am a backend developer and DevOps engineer with expertise in various frameworks and a passion for building real-world applications. I have hands-on experience in Flutter development, server management, CI/CD, Node.js, and database management.
            </p>
            <Button onClick={() => window.open('/resume.pdf', '_blank')} className="bg-purple-600 hover:bg-purple-700 text-white">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/photo.jpg"
                alt="Jayesh Deshmukh"
                
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="projects"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Projects 🚀</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gray-800 border-purple-700 hover:border-cyan-400 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-300">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence>
                      {expandedProject === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="list-disc list-inside mb-4 text-gray-300"
                        >
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => {
                        const colors = [
                          "bg-blue-500 text-white",
                          "bg-green-500 text-white",
                          "bg-yellow-500 text-black",
                          "bg-red-500 text-white",
                          "bg-purple-500 text-white"
                        ]
                        return (
                          <Badge key={tagIndex} className={colors[tagIndex % colors.length]}>
                            {tag}
                          </Badge>
                        )
                      })}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        variant="link"
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {expandedProject === index ? "View Less" : "View More"}
                      </Button>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900 transition-colors duration-300">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View Project</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          id="freelance"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Freelance Work 💼</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freelanceProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gray-800 border-purple-700 hover:border-cyan-400 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-300">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence>
                      {expandedProject === index + projects.length && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="list-disc list-inside mb-4 text-gray-300"
                        >
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => {
                        const colors = [
                          "bg-blue-500 text-white",
                          "bg-green-500 text-white",
                          "bg-yellow-500 text-black",
                          "bg-red-500 text-white",
                          "bg-purple-500 text-white"
                        ]
                        return (
                          <Badge key={tagIndex} className={colors[tagIndex % colors.length]}>
                            {tag}
                          </Badge>
                        )
                      })}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button
                        variant="link"
                        onClick={() => setExpandedProject(expandedProject === index + projects.length ? null : index + projects.length)}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {expandedProject === index + projects.length ? "View Less" : "View More"}
                      </Button>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900 transition-colors duration-300">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View Project</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="experience"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Experience 💼</h2>
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6 bg-gray-800 border-purple-700">
              <CardHeader>
                <CardTitle className="text-purple-300">{exp.title}</CardTitle>
                <CardDescription className="text-gray-400">{exp.company} | {exp.period}</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="list-disc list-inside">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          id="skills"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Skills 🛠️</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="bg-gray-800 border-purple-700">
                <CardHeader>
                  <CardTitle className="text-purple-300">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className={skill.color}>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          id="certifications"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Certifications 🏅</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gray-800 border-purple-700 hover:border-cyan-400 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-purple-300">{cert.name}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {cert.issuer} | {cert.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          id="achievements"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Achievements 🏆</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          id="contact"
          className="mb-16 pt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact 📬</h2>
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`mailto:${contactInfo.email}`}>
                <Button variant="outline" size="icon" className="bg-purple-700 text-white hover:bg-purple-600">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-gray-800 text-white hover:bg-gray-700">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-blue-700 text-white hover:bg-blue-600">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={contactInfo.upwork} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-green-600 text-white hover:bg-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                  <span className="sr-only">Upwork</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={contactInfo.udemy} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-red-600 text-white hover:bg-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.108 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.384 1.768-4.234v-8.144l-6.189 3.574z"/>
                  </svg>
                  <span className="sr-only">Udemy</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}