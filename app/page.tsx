import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Rust"],
    frameworks: ["React.js", "Next.js", "Tauri", "React Native", "Express.js"],
    backend: ["Node.js", "REST APIs", "Rocket", "Shuttle"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Oracle-SQL"],
  }

  const experiences = [
    {
      title: "Software Engineer",
      company: "Sillicon Tech Nepal",
      period: "May 2023 - November 2023",
      description:
        "Leading development of high-performance mobile and web application systems using React-Native, TypeScript and NodeJs.",
      technologies: ["React-native", "TypeScript", "NodeJs"],
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-6xl mx-auto px-4 py-16 grid gap-16 md:grid-cols-[300px_1fr]">
        {/* Left Column - Profile */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0">
              <Image
                src=""
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Prashidha Rawal</h1>
              <p className="text-lg text-zinc-400">Full Stack Developer</p>
            </div>
            <p className="text-sm text-zinc-400">Building Real Products For Real Clients, Not Just More Projects</p>
          </div>

          <div className="flex gap-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                I'm a 22-year-old experienced Full Stack Developer with a knack for building products that make a
                difference. My expertise spans both frontend and backend technologies, enabling me to craft
                comprehensive solutions from the ground up.
              </p>
              <p>
                Throughout my career, I've been deeply involved in the startup ecosystem. I've worked with various
                startups, embracing the fast-paced, innovative nature of these environments. This journey led me to gain
                firsthand experience in every aspect of product development and business operations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-blue-950/50 text-blue-400 border-blue-900 hover:bg-blue-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-green-950/50 text-green-400 border-green-900 hover:bg-green-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-purple-950/50 text-purple-400 border-purple-900 hover:bg-purple-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-red-950/50 text-red-400 border-red-900 hover:bg-red-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium text-zinc-200">{exp.title}</h3>
                    <span className="text-sm text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-base font-medium text-zinc-400">{exp.company}</p>
                  <p className="text-sm text-zinc-400">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:bg-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Project One",
                  description: "A brief description of your first project goes here. Keep it concise and meaningful.",
                  technologies: ["Rust", "WebAssembly", "React"],
                  github: "https://github.com/yourusername/project-one",
                  live: "https://project-one.com",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Project Two",
                  description:
                    "Another project description. What problems did you solve? What technologies did you use?",
                  technologies: ["TypeScript", "Next.js", "PostgreSQL"],
                  github: "https://github.com/yourusername/project-two",
                  live: "https://project-two.com",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Project Three",
                  description: "Yet another amazing project you worked on. What makes this one special?",
                  technologies: ["Zig", "C++", "Systems Programming"],
                  github: "https://github.com/yourusername/project-three",
                  live: "https://project-three.com",
                  image: "/placeholder.svg?height=200&width=400",
                },
                {
                  title: "Project Four",
                  description: "A showcase of your backend expertise with high-performance systems.",
                  technologies: ["Node.js", "MongoDB", "Docker"],
                  github: "https://github.com/yourusername/project-four",
                  live: "https://project-four.com",
                  image: "/placeholder.svg?height=200&width=400",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:bg-zinc-900"
                >
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg bg-zinc-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-200">{project.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:bg-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Link
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

