'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { Clock, ExternalLinkIcon, Users, Zap, GitBranch } from "lucide-react"
import ReactPlayer from 'react-player';
import PlayButton from '../../components/video/play-button';


// Progress Component
const Progress = ({ value, className }:{value:number,className:string}) => (
    <motion.div
      className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}
      initial={{ width: 0 }}
      animate={{ width: `${value || 0}%` }}
      transition={{ duration: 0.1}}
    >
      <motion.div
        className="h-full w-full flex-1 bg-primary transition-all bg-cyan-500 "
        initial={{ width: 0 }}
        transition={{ duration: 0.8 , ease: 'easeInOut', delay: 0.2}}
        whileInView={{ width: `${value || 0}%` }}
      />
    </motion.div>
  )
Progress.displayName = "Progress"

// Badge Component
const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ${className}`}
      {...props}
    />
  )
)
Badge.displayName = "Badge"

// Avatar Component
const Avatar = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  )
)
Avatar.displayName = "Avatar"

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
      {...props}
    />
  )
)
AvatarFallback.displayName = "AvatarFallback"

// Card Component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`p-6 ${className}`} {...props} />
  )
)
CardContent.displayName = "CardContent"



// Main Component
export default function ProjectDetailPage() {
  const [played, setPlayed] = useState(0);
  const [mounted, setMounted] = useState(false);  // This will ensure client-side rendering

  useEffect(() => {
    setMounted(true);  // Set to true when the client-side is ready
  }, []);

  const handleProgress = (progress: { played: number }) => {
    setPlayed(progress.played);
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-primary-foreground py-12 px-4 md:px-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-lg"
      >
        <div className="container mx-auto flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-zinc-100"
          >
            Project Aurora
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl text-zinc-200"
          >
            A revolutionary AI-powered platform designed to transform the way businesses interact with their customers,
            enhancing engagement and driving growth through intelligent automation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            className="flex gap-4 mt-8"
          >
            <motion.a
              href="https://github.com/abhishek-ruby/project-aurora"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-200 rounded-lg shadow-lg text-neutral-800 text-base font-medium px-4 md:px-8 py-3 flex items-center gap-2 flex-wrap md:flex-nowrap"
            >
              <GitBranch size={32} className='w-5 h-5' />
              <span className="font-semibold">
                GitHub
              </span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/posts/abhishek-ruby_project-aurora-revolutionizing-ai-activity-6983116515716453120-IT5Q"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-600 text-zinc-200 text-base font-medium px-4 md:px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 flex-wrap md:flex-nowrap"
            >
              <ExternalLinkIcon size={32} className='w-5 h-5' />
              Live Preview
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12 px-4 md:px-6"
      >
        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-2xl whitespace-nowrap font-semibold mb-4 text-zinc-200"
          >
            Project Preview
          </motion.h2>
          <motion.div
            className="relative aspect-video"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <ReactPlayer
              url="https://file-examples.com/storage/fee0ddbaf066ed3199cfa16/2017/04/file_example_MP4_480_1_5MG.mp4"
              playing={true}
              controls={true}
              muted={false}
              width="100%"
              height="100%"
              onProgress={handleProgress}
              className="rounded-lg overflow-hidden"
              light="/profile.png"
              fallback={
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary">
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-25" />
                  </div>
                </div>
              }
              playIcon={<PlayButton/>}
            />
            <div className="absolute top-4 right-4 text-zinc-200 flex items-center space-x-4">
              <p className="text-zinc-300">{Math.round(played * 100)}% watched</p>
            </div>
          </motion.div>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-zinc-200 text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <span className="block text-center">Gallery of Work</span>
            <span className="block text-center text-lg font-light">A glimpse into my project</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8"
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                key={index}
                className="w-full h-64"
              >
                <Image
                  height={600}
                  width={600}
                  src={`/experience1.png`}
                  alt={`Project Aurora image ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-2xl font-semibold mb-5 text-zinc-200">Key Features</motion.h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              "Advanced natural language processing for human-like interactions",
              "Real-time sentiment analysis for improved customer satisfaction",
              "Seamless integration with existing CRM systems",
              "Customizable AI models tailored to specific industry needs",
              "Multi-language support for global businesses",
              "Comprehensive analytics dashboard for actionable insights",
            ].map((feature, index) => (
              <motion.li
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                key={index} className="flex items-start">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                >
                  <Zap className="mr-2 h-5 w-5 text-primary text-amber-400" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: '100%' }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                  className='text-zinc-300 text-base md:text-lg'
                >
                  {feature}
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-2xl font-semibold mb-5 text-zinc-200"
            >
              Project Progress
          </motion.h2>
          <Progress value={75} className="w-full bg-neutral-500" />
          <motion.p className="text-sm md:text-lg mt-2 text-zinc-300">75% Complete</motion.p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-2xl text-zinc-200 font-semibold mb-4"
          >
            Summary Quotes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              {
                quote: "Project Aurora is set to revolutionize customer engagement in the digital age.",
                author: "Tech Innovators Magazine",
              },
              {
                quote: "The potential impact of this AI platform on business efficiency is immense.",
                author: "Global Business Review",
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={index}
              >
                <Card>
                  <CardContent className="">
                    <blockquote className="text-lg text-zinc-300 font-medium italic mb-2">&quot; {item.quote} &quot;</blockquote>
                    <p className="text-base text-muted-foreground text-amber-500">- {item.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-4 text-zinc-200"
          >
            Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { name: "Alex Johnson", role: "Project Lead", bg: 'bg-zinc-200' },
              { name: "Samantha Lee", role: "AI Specialist", bg: 'bg-amber-200' },
              { name: "Michael Chen", role: "Full-stack Developer", bg: 'bg-red-200' },
              { name: "Emily Taylor", role: "UX Designer", bg: 'bg-orange-200' },
            ].map((member, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={index}
                className="flex items-center bg- gap-2"
              >
                <Avatar className={member.bg}>
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-zinc-300 ">{member.name}</p>
                  <p className="text-sm text-muted-foreground text-zinc-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-zinc-200 font-semibold mb-4"
          >
            Insights
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-5"
          >
            {[
              {
                icon: <Clock className="h-5 w-5 text-primary" />,
                title: 'Duration',
                description: '18 months',
              },
              {
                icon: <Users className="h-5 w-5 text-primary" />,
                title: 'Team Size',
                description: '12 members',
              },
              {
                icon: <Zap className="h-5 w-5 text-primary" />,
                title: 'Technology',
                description: 'AI, ML, Cloud',
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={index}
                className="flex items-center bg-zinc-200 p-4 rounded-lg"
              >
                {item.icon}
                <div className="ml-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-medium"
                  >
                    {item.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm text-muted-foreground"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-1 text-zinc-200"
            >
              Related Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border-b border-zinc-600 w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              { name: "Project Nexus", description: "Blockchain-based supply chain solution" },
              { name: "Project Quantum", description: "Quantum computing research initiative" },
              { name: "Project Gaia", description: "Sustainable energy management platform" },
            ].map((project, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={index}
                className="flex flex-col items-center bg-slate-800 p-4 rounded-lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    key={index}
                    height={600}
                    width={600}
                    src={`/experience1.png`}
                    alt={`Project Aurora image ${index}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold mb-2 text-zinc-200"
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-muted-foreground text-zinc-200"
                >
                  {project.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-200 p-8 rounded-lg text-center"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-4"
            >
              Interested in Project Aurora?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              Get in touch with our team to learn more about how we can transform your business.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 text-sm bg-neutral-800 text-zinc-200"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.section>
      </motion.main>
    </motion.div>
  )
}
