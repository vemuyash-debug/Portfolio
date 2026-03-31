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
  category: 'languages' | 'frameworks' | 'cloud' | 'devops' | 'databases' | 'architecture' | 'ai' | 'practices'
  level?: number
}
