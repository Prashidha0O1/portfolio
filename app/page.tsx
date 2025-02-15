import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const skills = {
    languages: ["TypeScript", "JavaScript", "Python", "Rust", "Zig"],
    frameworks: ["React.js", "Next.js", "Tauri", "React Native", "Express.js", "Flask", "Django"],
    backend: ["Node.js"],
    databases: ["PostgreSQL", "MongoDB", "Elasticsearch", "SQL"],
  }

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading development of high-performance systems using Rust and TypeScript. Implementing WebAssembly solutions for improved performance.",
      technologies: ["Rust", "TypeScript", "WebAssembly"],
    },
    {
      title: "Software Engineer",
      company: "Innovation Labs",
      period: "2020 - 2022",
      description:
        "Developed scalable backend services and modern web applications. Contributed to open-source projects.",
      technologies: ["TypeScript", "Node.js", "React"],
    },
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
              <p className="text-lg text-zinc-400">📍 Kathmandu, Nepal</p>

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
              I'm a 19-year-old Full Stack Developer who builds practical solutions from start to finish. 
              I work with both frontend and backend technologies and have experience in Web3 development on Solana using the Anchor Framework. 
              I focus on writing smart contracts, integrating blockchain features, and making Web3 applications more accessible.
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
        </div>
      </main>
    </div>
  )
}

