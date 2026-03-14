import { Helmet } from 'react-helmet-async'

const DEFAULT_TITLE = 'Yashaswi Vemu | Portfolio | Software Engineer & MS Computer Science'
const DEFAULT_DESCRIPTION =
  'Portfolio of Yashaswi Vemu - MS Computer Science at UT Arlington, former Software Engineer at ServiceNow. Full-stack development, AI/ML, and cloud computing.'
const DEFAULT_IMAGE = '/profile.png'
const SITE_URL = 'https://your-portfolio.vercel.app' // Update with your deployment URL

interface SeoHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function SeoHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
}: SeoHeadProps) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Yashaswi Vemu, software engineer, UT Arlington, ServiceNow, full-stack, React, Node.js, machine learning, computer science" />
      <meta name="author" content="Yashaswi Vemu" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}
