import React from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal';

// --- E-COMMERCE PLATFORM DATA ---
const ECOMMERCE_PLATFORMS = [
    {
        name: "WooCommerce",
        description: "The most customizable open-source e-commerce platform built on WordPress. Perfect for businesses that need complete control over their online store with unlimited flexibility.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/512px-WooCommerce_logo.svg.png",
        accent: "text-purple-400",
        bgAccent: "from-purple-500/20 to-purple-900/10",
        features: [
            "Full WordPress integration",
            "Unlimited customization",
            "Extensive plugin ecosystem",
            "Self-hosted control"
        ],
        workflowImage: "https://developer.woocommerce.com/wp-content/uploads/2023/12/woocommerce-REST-API-onboarding.png",
        workflowDescription: "WooCommerce REST API integration workflow - connecting your store with external systems, payment gateways, and inventory management tools."
    },
    {
        name: "Shopify",
        description: "An all-in-one commerce platform that helps businesses start, grow, and manage their retail operations. Ideal for entrepreneurs who want a reliable, scalable solution without technical complexity.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        accent: "text-green-400",
        bgAccent: "from-green-500/20 to-green-900/10",
        features: [
            "Hosted solution",
            "Built-in payment processing",
            "App store marketplace",
            "24/7 support"
        ],
        workflowImage: "https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-dropshipping-business.png",
        workflowDescription: "Shopify storefront and order management flow - from product listing to checkout and fulfillment automation."
    },
    {
        name: "BigCommerce",
        description: "Enterprise-level e-commerce platform designed for high-volume merchants. Offers powerful built-in features and seamless integrations for businesses ready to scale.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BigCommerce-logo-dark.svg/512px-BigCommerce-logo-dark.svg.png",
        accent: "text-blue-400",
        bgAccent: "from-blue-500/20 to-blue-900/10",
        features: [
            "Enterprise-grade security",
            "Multi-channel selling",
            "Advanced SEO tools",
            "No transaction fees"
        ],
        workflowImage: "https://images.ctfassets.net/wowgx05xsdrr/4HdVK3fA0bDN2eKPYuKQ0E/1b2b39ecd0e27e1c89b9c5d42bf2e2e1/article-header-bigcommerce-vs-shopify-comparison.png",
        workflowDescription: "BigCommerce multi-channel architecture - managing sales across web, mobile, social media, and marketplaces from a single dashboard."
    },
    {
        name: "Squarespace Commerce",
        description: "Beautiful, design-forward e-commerce solution integrated with Squarespace's award-winning website builder. Perfect for creative businesses and brands focused on visual storytelling.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Squarespace_Logo_2019.svg/512px-Squarespace_Logo_2019.svg.png",
        accent: "text-white",
        bgAccent: "from-gray-500/20 to-gray-900/10",
        features: [
            "Award-winning templates",
            "Built-in analytics",
            "Integrated marketing tools",
            "Appointment scheduling"
        ],
        workflowImage: "https://images.squarespace-cdn.com/content/v1/5134cbefe4b0c6fb04df8065/1605808237294-QHN74E6VW2YFHJF6HV7Q/commerce-extensions.png",
        workflowDescription: "Squarespace Commerce extensions and integrations - connecting inventory, shipping, and marketing tools seamlessly."
    },
    {
        name: "Wix eCommerce",
        description: "User-friendly platform that combines powerful e-commerce capabilities with intuitive drag-and-drop design. Ideal for small to medium businesses seeking quick setup without coding.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/512px-Wix.com_website_logo.svg.png",
        accent: "text-yellow-400",
        bgAccent: "from-yellow-500/20 to-yellow-900/10",
        features: [
            "Drag-and-drop editor",
            "500+ designer templates",
            "Built-in marketing suite",
            "Mobile optimization"
        ],
        workflowImage: "https://static.wixstatic.com/media/0784b1_54c80f38c3cc4a7a8f8c0c9f7c5ed27a~mv2.png",
        workflowDescription: "Wix eCommerce dashboard - managing products, orders, and customer relationships from a unified interface."
    },
    {
        name: "Ecwid",
        description: "Lightweight, embeddable e-commerce solution that can be added to any existing website or social media presence. Perfect for businesses that want to sell everywhere.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ecwid_logo.svg/512px-Ecwid_logo.svg.png",
        accent: "text-orange-400",
        bgAccent: "from-orange-500/20 to-orange-900/10",
        features: [
            "Multi-platform selling",
            "Embed anywhere",
            "Automatic sync",
            "Free starter plan"
        ],
        workflowImage: "https://static.ecwid.com/images/landing/ecwid-lightspeed/ecwid-integration.png",
        workflowDescription: "Ecwid multi-channel integration - selling on websites, social media, and marketplaces with synchronized inventory."
    },
    {
        name: "Volusion",
        description: "Veteran e-commerce platform with over 20 years of experience. Provides comprehensive tools for inventory management, marketing, and customer engagement.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Volusion_Logo.svg/512px-Volusion_Logo.svg.png",
        accent: "text-teal-400",
        bgAccent: "from-teal-500/20 to-teal-900/10",
        features: [
            "Built-in CRM",
            "Inventory management",
            "SEO optimization",
            "Responsive themes"
        ],
        workflowImage: "https://www.volusion.com/blog/content/images/2023/03/volusion-dashboard.png",
        workflowDescription: "Volusion merchant dashboard - comprehensive view of sales, inventory, and customer analytics."
    },
    {
        name: "Big Cartel",
        description: "Simple, affordable e-commerce platform designed specifically for artists, makers, and creators. Focus on what you create while Big Cartel handles the selling.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Big_Cartel_Logo.svg/512px-Big_Cartel_Logo.svg.png",
        accent: "text-pink-400",
        bgAccent: "from-pink-500/20 to-pink-900/10",
        features: [
            "Built for creators",
            "Simple pricing",
            "Custom domains",
            "Google Analytics"
        ],
        workflowImage: "https://images.bigcartel.com/product_images/homepage/big-cartel-themes.jpg",
        workflowDescription: "Big Cartel storefront themes - designed specifically for artists and makers to showcase their work beautifully."
    },
    {
        name: "Shift4Shop",
        description: "Feature-rich e-commerce platform (formerly 3dcart) offering enterprise-level tools with no monthly fees when using Shift4 payments. Ideal for growing businesses.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Shift4Shop_Logo.svg/512px-Shift4Shop_Logo.svg.png",
        accent: "text-indigo-400",
        bgAccent: "from-indigo-500/20 to-indigo-900/10",
        features: [
            "No monthly fees",
            "200+ built-in features",
            "Unlimited products",
            "PCI compliance"
        ],
        workflowImage: "https://www.shift4shop.com/images/ecommerce-features/shift4shop-order-management.png",
        workflowDescription: "Shift4Shop order management system - streamlined processing from order receipt to fulfillment."
    }
];

// --- INTEGRATION WORKFLOW DATA ---
const INTEGRATION_WORKFLOWS = [
    {
        title: "Payment Gateway Integration",
        description: "Seamless connection with major payment processors including Stripe, PayPal, Square, and regional payment methods. We ensure PCI-compliant transactions with minimal cart abandonment.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        )
    },
    {
        title: "Inventory Management",
        description: "Real-time inventory synchronization across all sales channels. Automated stock alerts, multi-warehouse support, and integration with suppliers for efficient supply chain management.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    },
    {
        title: "Shipping & Fulfillment",
        description: "Integration with major carriers (FedEx, UPS, DHL, USPS) for automated rate calculation, label generation, and tracking. Support for dropshipping and third-party fulfillment centers.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        )
    },
    {
        title: "CRM & Marketing Automation",
        description: "Connect your store with email marketing platforms, CRM systems, and marketing automation tools. Personalized customer journeys, abandoned cart recovery, and loyalty programs.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Analytics & Reporting",
        description: "Custom dashboards integrating data from all platforms. Sales analytics, customer behavior tracking, inventory forecasting, and ROI measurement for marketing campaigns.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        title: "Multi-Channel Synchronization",
        description: "Unified management of your presence across Amazon, eBay, Etsy, social media shops, and your own website. Consistent pricing, inventory, and branding everywhere you sell.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    }
];

// --- COMPONENT ---
const CustomSolutionsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedPlatform, setSelectedPlatform] = React.useState<typeof ECOMMERCE_PLATFORMS[0] | null>(null);

    return (
        <div className="pt-32 pb-20 min-h-screen">

            {/* SECTION 1: HERO / OPENING STATEMENT */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-syncopate font-bold text-white mb-6 leading-tight">
                        Custom E-Commerce<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Solutions</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        We help local businesses and e-commerce brands build, integrate, and scale their online presence
                        using industry-leading platforms. From setup to optimization, we deliver solutions that drive growth.
                    </p>
                </motion.div>
            </section>

            {/* SECTION 2: WHY LOCAL BUSINESSES */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white mb-6">
                                Empowering <span className="text-cyan-400">Local Businesses</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We believe every local business deserves enterprise-grade e-commerce capabilities.
                                Our mission is to bridge the technology gap, providing small and medium businesses
                                with the same powerful tools that drive success for major retailers.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Custom store development tailored to your brand",
                                    "Seamless integration with existing business systems",
                                    "Ongoing support and optimization",
                                    "Training and knowledge transfer"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                                    alt="Local business e-commerce"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* SECTION 3: PLATFORMS WE WORK WITH */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-syncopate font-bold text-white mb-4">
                        Platforms We <span className="text-cyan-400">Specialize In</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From open-source solutions to hosted platforms, we have expertise across the entire e-commerce ecosystem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ECOMMERCE_PLATFORMS.map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedPlatform(platform)}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            {/* Logo Area */}
                            <div className={`p-8 bg-gradient-to-br ${platform.bgAccent} border-b border-white/5`}>
                                <div className="h-12 flex items-center justify-center">
                                    <img
                                        src={platform.logo}
                                        alt={`${platform.name} logo`}
                                        className="max-h-full max-w-[180px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = `<span class="font-syncopate font-bold text-xl ${platform.accent}">${platform.name}</span>`;
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 space-y-4">
                                <h3 className={`text-lg font-syncopate font-bold ${platform.accent} group-hover:brightness-125 transition-all`}>
                                    {platform.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                    {platform.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {platform.features.slice(0, 2).map((feature, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-2">
                                    <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click to learn more
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: INTEGRATION WORKFLOWS */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-syncopate font-bold text-white mb-4">
                        Integration <span className="text-cyan-400">Workflows</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We build comprehensive integrations that connect your e-commerce platform with essential business systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INTEGRATION_WORKFLOWS.map((workflow, index) => (
                        <motion.div
                            key={workflow.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 mb-4 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                {workflow.icon}
                            </div>
                            <h3 className="text-lg font-syncopate font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                                {workflow.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {workflow.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 5: WORKFLOW VISUALIZATION */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-white/10 bg-white/[0.01] rounded-3xl p-8 md:p-12"
                >
                    <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white mb-8 text-center">
                        How We <span className="text-cyan-400">Implement</span>
                    </h2>

                    {/* Process Flow */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Discovery", desc: "Understanding your business needs, goals, and existing systems" },
                                { step: "02", title: "Architecture", desc: "Designing the optimal platform and integration strategy" },
                                { step: "03", title: "Implementation", desc: "Building, configuring, and connecting all components" },
                                { step: "04", title: "Launch & Support", desc: "Going live with ongoing optimization and support" }
                            ].map((phase, index) => (
                                <motion.div
                                    key={phase.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="relative"
                                >
                                    <div className="text-6xl font-syncopate font-bold text-white/5 mb-2">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-lg font-syncopate font-bold text-cyan-400 mb-2">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {phase.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                    </div>
                </motion.div>
            </section>

            {/* SECTION 6: PLATFORM SHOWCASE */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-syncopate font-bold text-white mb-4">
                        Platform <span className="text-cyan-400">Workflows</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See how we implement real solutions across different e-commerce platforms.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {ECOMMERCE_PLATFORMS.slice(0, 4).map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={platform.logo}
                                        alt={`${platform.name} logo`}
                                        className="h-8 object-contain brightness-0 invert opacity-80"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <h3 className={`text-xl font-syncopate font-bold ${platform.accent}`}>
                                        {platform.name}
                                    </h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {platform.workflowDescription}
                                </p>
                                <ul className="space-y-2">
                                    {platform.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className={`w-1.5 h-1.5 rounded-full ${platform.accent.replace('text-', 'bg-')}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                    <img
                                        src={platform.workflowImage}
                                        alt={`${platform.name} workflow`}
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://via.placeholder.com/800x450/1a1a2e/00bcd4?text=${platform.name}+Workflow`;
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 7: CTA */}
            <section className="py-24 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white max-w-4xl mx-auto leading-normal mb-6">
                        Ready to transform your<br />
                        <span className="text-cyan-400">e-commerce presence?</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-12">
                        Let us help you choose the right platform and build integrations that scale with your business.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-colors rounded-full"
                    >
                        Get Started
                    </button>
                </motion.div>
            </section>

            {/* PLATFORM DETAIL MODAL */}
            {selectedPlatform && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedPlatform(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="bg-[#0a0a0f] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className={`p-8 bg-gradient-to-br ${selectedPlatform.bgAccent} border-b border-white/10`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={selectedPlatform.logo}
                                        alt={`${selectedPlatform.name} logo`}
                                        className="h-10 object-contain brightness-0 invert opacity-90"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <h2 className={`text-2xl font-syncopate font-bold ${selectedPlatform.accent}`}>
                                        {selectedPlatform.name}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setSelectedPlatform(null)}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 space-y-8">
                            <div>
                                <h3 className="text-lg font-syncopate font-bold text-white mb-3">Overview</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {selectedPlatform.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-syncopate font-bold text-white mb-3">Key Features</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {selectedPlatform.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-300">
                                            <span className={`w-2 h-2 rounded-full ${selectedPlatform.accent.replace('text-', 'bg-')}`} />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-syncopate font-bold text-white mb-3">Workflow Example</h3>
                                <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                    <img
                                        src={selectedPlatform.workflowImage}
                                        alt={`${selectedPlatform.name} workflow`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://via.placeholder.com/800x450/1a1a2e/00bcd4?text=${selectedPlatform.name}+Workflow`;
                                        }}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm mt-3">
                                    {selectedPlatform.workflowDescription}
                                </p>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={() => {
                                        setSelectedPlatform(null);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-full"
                                >
                                    Discuss {selectedPlatform.name} Solution
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default CustomSolutionsPage;
