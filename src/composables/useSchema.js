// composables/useSchema.js
export function useSchema() {
  const siteUrl = import.meta.env.VITE_APP_URL || `https://${window.location.host}`;
  const siteName = 'Invictus Hub';

  // Generate page-specific schema
  const generatePageSchema = (route) => {
    const routeMeta = route?.meta || {};
    const path = route?.path || '/';

    const breadcrumbItems = routeMeta.schema?.breadcrumb || [];
    const breadcrumbList = breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }));

    const fullSchema = {
      '@context': 'https://schema.org',
      '@type': routeMeta.schema?.type || 'WebPage',
      name: routeMeta.title || siteName,
      description: routeMeta.description || 'Professional digital solutions company in Pakistan.',
      url: `${siteUrl}${path}`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl
      }
    };

    if (breadcrumbList.length > 0) {
      fullSchema.breadcrumb = {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbList
      };
    }

    return fullSchema;
  };

  return {
    siteUrl,
    siteName,
    generatePageSchema
  };
}