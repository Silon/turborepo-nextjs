export const ROUTES = {
  /**
   * Here we can add more routes as we go along with the project like so:
   *
   * about: () => `/about`,
   * blog: () => `/blog`,
   * etc.
   *
   * You can also add dynamic routes:
   *
   * blogPost: (slug: string) => `/blog/${slug}`,
   *
   *
   * Routes can also take search params:
   *
   * search: (params: Record<string,string>) => {
   *  const query = new URLSearchParams(params).toString();
   *  return `/search?${query}`;
   * }
   *
   */
  home: () => `/`,
}
