import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en)/:path*"],
};
