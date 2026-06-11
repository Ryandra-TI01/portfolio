import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description?: string;
    ogImage?: string;
    ogType?: string;
}

const SITE_NAME = "Ryandra Athaya Saleh";
const DEFAULT_DESCRIPTION =
    "Full Stack Developer specializing in Laravel and React. Building scalable web applications with modern technologies.";
const DEFAULT_OG_IMAGE = "/og-image.png";
const BASE_URL = "https://ryandra.dev";

const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
}: SEOProps) => {
    const fullTitle = `${title} — ${SITE_NAME}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={BASE_URL} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={BASE_URL} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Canonical */}
            <link rel="canonical" href={BASE_URL} />
        </Helmet>
    );
};

export default SEO;
