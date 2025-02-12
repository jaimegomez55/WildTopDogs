import HeroSection from "@/components/ui/hero-section";

export function HeroSectionDemo() {
    return (
        <div>
            <HeroSection />
            <div className="relative mt-auto sm:mt-16">
                <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                        <iframe 
                            src="https://fast.wistia.net/embed/iframe/wazb9o313z"
                            title="VSL Wildtopdogs"
                            allow="autoplay; fullscreen"
                            allowTransparency={true}
                            frameBorder="0"
                            scrolling="no"
                            className="wistia_embed"
                            name="wistia_embed"
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </div>
                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
            </div>
        </div>
    )
}