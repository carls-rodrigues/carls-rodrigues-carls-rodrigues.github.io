export interface AppConfig {
  name: string
  description: string
  menu: Menu
  "about-page": AboutPage
}

export interface Menu {
  home: string
  "about me": string
  blog: string
  "curriculum vitae": string
}

export interface AboutPage {
  name: string
  short_biography: string
  user_info: UserInfo[]
  education: Education[]
  experience: Experience[]
  publications: Publication[]
  awards: Award[]
  teaching: Teaching[]
  service_and_leadership: ServiceAndLeadership[]
  skills: Skill[]
}

export interface UserInfo {
  title: string
  content?: string
  link?: string
}

export interface Education {
  title: string
  bullets: string[]
}

export interface Experience {
  title: string
  bullets: string[]
}

export interface Publication {
  title: string
  bullets: string[]
}

export interface Award {
  title: string
  bullets: string[]
}

export interface Teaching {
  title: string
  bullets: string[]
}

export interface ServiceAndLeadership {
  title: string
  bullets: string[]
}

export interface Skill {
  title: string
  bullets: string[]
}
