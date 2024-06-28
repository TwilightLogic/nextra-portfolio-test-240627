import { useRouter } from 'next/router'

export default {
  footer: <p>MIT 2023 © Nextra.</p>,
  head: ({ title, meta }) => {
    const router = useRouter()
    const isPhotosPage = router.pathname.includes('photos')

    console.log(isPhotosPage)

    return (
      <>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
        {isPhotosPage && meta.image && (
          <meta name="twitter:image" content={meta.image} />
        )}
      </>
    )
  },
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Nextra'
    }
  ]
}
