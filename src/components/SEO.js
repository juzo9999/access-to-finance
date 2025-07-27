// File: src/components/SEO.js

import React from "react"; import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => { return ( <Helmet> <title>{title || "Access to Finance Program"}</title> <meta name="description" content={description || "Unlock sustainable agricultural financing through the Prime Anchor Model."} /> <meta name="keywords" content={keywords || "agriculture, finance, Nigeria, loans, cooperatives, agro-processing, privatization"} /> <meta name="viewport" content="width=device-width, initial-scale=1" />

{/* Open Graph (Facebook) */}
  <meta property="og:title" content={title || "Access to Finance Program"} />
  <meta property="og:description" content={description || "Unlock sustainable agricultural financing through the Prime Anchor Model."} />
  <meta property="og:image" content={image || "https://i.postimg.cc/nrbGkkvv/image.png"} />
  <meta property="og:url" content={url || "https://accesstofinance.com.ng/"} />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title || "Access to Finance Program"} />
  <meta name="twitter:description" content={description || "Unlock sustainable agricultural financing through the Prime Anchor Model."} />
  <meta name="twitter:image" content={image || "https://i.postimg.cc/nrbGkkvv/image.png"} />
  
  <link rel="canonical" href={url || "https://accesstofinance.com.ng/"} />
</Helmet>


); };
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Access to Finance Program",
    "url": "https://accesstofinance.com.ng",
    "logo": "https://i.postimg.cc/nrbGkkvv/image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348037013655",
      "contactType": "Customer Service",
      "areaServed": "NG"
    }
  }
`}
</script>

export default SEO;

