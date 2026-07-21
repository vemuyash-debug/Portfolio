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
  category:
    | 'languages'
    | 'frameworks'
    | 'automation'
    | 'databases'
    | 'cloud'
    | 'ml'
    | 'ai'
    | 'dataengineering'
    | 'bigdata'
    | 'sql'
    | 'databricks'
    | 'reporting'
    | 'mlops'
    | 'devops'
    | 'practices'
    | 'llms'
  level?: number
}
