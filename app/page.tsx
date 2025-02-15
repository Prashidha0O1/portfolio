import { Github, Mail } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project goes here. Keep it concise and meaningful.",
      link: "#",
      year: "2024",
    },
    {
      title: "Project Two",
      description: "Another project description. What problems did you solve? What technologies did you use?",
      link: "#",
      year: "2023",
    },
    {
      title: "Project Three",
      description: "Yet another amazing project you worked on. What makes this one special?",
      link: "#",
      year: "2023",
    },
  ]

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-8">Why is this page so simple?</h1>
        <p className="text-lg text-muted-foreground">
        An ode to elegance and a fierce rebellion against cluttered, ad-infested web experiences.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-muted-foreground">
          I build things for the web. My focus is on creating fast, accessible, and user-friendly experiences without
          unnecessary complexity.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={index} className="group">
              <div className="flex items-baseline justify-between mb-1">
                <Link href={project.link} className="text-lg font-medium hover:underline underline-offset-4">
                  {project.title}
                </Link>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex items-center space-x-4">
        <Link
          href="https://github.com"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="mailto:your@email.com"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </footer>
    </main>
  )
}

