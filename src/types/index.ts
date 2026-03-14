export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  liveUrlLabel?: string
  image?: string
}

export interface Skill {
  name: string
  category: 'programming' | 'frontend' | 'backend' | 'frameworks' | 'databases' | 'cloud'
  level?: number
}
