import { graphql, useStaticQuery } from "gatsby"

const useMinimalBlogConfig = () => {
  const data = useStaticQuery(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
      }
    }
  `)

  return data.minimalBlogConfig
}

export default useMinimalBlogConfig
