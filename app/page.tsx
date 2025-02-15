import {
  Github,
  Mail,
  ExternalLink,
  Twitter,
  Linkedin,
  MessageSquare,
  Globe,
  Twitch,
  Youtube,
  DogIcon as Mastodon,
  Hash,
} from "lucide-react"
import Link from "next/link"

export default function Page() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project goes here. Keep it concise and meaningful.",
      github: "https://github.com/yourusername/project-one",
      live: "https://project-one.com",
      year: "2024",
    },
    {
      title: "Project Two",
      description: "Another project description. What problems did you solve? What technologies did you use?",
      github: "https://github.com/yourusername/project-two",
      live: "https://project-two.com",
      year: "2023",
    },
    {
      title: "Project Three",
      description: "Yet another amazing project you worked on. What makes this one special?",
      github: "https://github.com/yourusername/project-three",
      live: "https://project-three.com",
      year: "2023",
    },
  ]

  const socials = {
    github: "https://github.com/yourusername",
    email: "mailto:your@email.com",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    mastodon: "https://mastodon.social/@yourusername",
    twitch: "https://twitch.tv/yourusername",
    youtube: "https://youtube.com/@yourusername",
    website: "https://yourwebsite.com",
    irc: {
      network: "libera.chat",
      nickname: "yournick",
    },
  }

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-16 font-mono">
      <header className="mb-16">
        <h1 className="text-3xl font-bold mb-8">Why is this page so simple?</h1>
        <p className="text-lg text-muted-foreground">
          A love letter to simplicity and a declaration of war against bloated advertisement-ridden websites.
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
                <h3 className="text-lg font-medium">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex items-center space-x-4">
                <Link
                  href={project.github}
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Source</span>
                </Link>
                <Link
                  href={project.live}
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Live</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Connect</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Code */}
            <Link
              href={socials.github}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>

            {/* Social */}
            <Link
              href={socials.twitter}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </Link>

            <Link
              href={socials.linkedin}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>

            <Link
              href={socials.mastodon}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mastodon className="h-5 w-5" />
              <span>Mastodon</span>
            </Link>

            {/* Content */}
            <Link
              href={socials.youtube}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>YouTube</span>
            </Link>

            <Link
              href={socials.twitch}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitch className="h-5 w-5" />
              <span>Twitch</span>
            </Link>

            {/* Contact */}
            <Link
              href={socials.email}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </Link>

            <Link
              href={socials.website}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span>Website</span>
            </Link>

            {/* IRC */}
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <MessageSquare className="h-5 w-5" />
              <span>
                IRC: <span className="font-medium">{socials.irc.nickname}</span>
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <Hash className="h-5 w-5" />
              <span>{socials.irc.network}</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} • Built with simplicity in mind
          </p>
        </div>
      </footer>
    </main>
  )
}

