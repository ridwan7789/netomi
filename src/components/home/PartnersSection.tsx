import { useEffect, useState } from 'react';

const partners = [
  { name: 'BSC Labs', category: 'Infrastructure' },
  { name: 'ZK Ventures', category: 'Investor' },
  { name: 'Privacy DAO', category: 'Partner' },
  { name: 'ChainLink', category: 'Infrastructure' },
  { name: 'Layer2 Capital', category: 'Investor' },
  { name: 'DeFi Alliance', category: 'Partner' },
  { name: 'Crypto Fund', category: 'Investor' },
  { name: 'Web3 Foundation', category: 'Partner' },
];

const PartnersSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (partners.length * 200));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-green text-sm font-medium tracking-wider uppercase mb-4 block">
            Ecosystem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partners & Backers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Supported by leading investors and partners in the blockchain ecosystem
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden py-8">
            <div 
              className="flex gap-8 transition-transform duration-100"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {/* Double the partners array for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm
                           flex flex-col items-center justify-center gap-2 hover:border-neon-green/50 
                           hover:bg-neon-green/5 transition-all duration-300 group"
                >
                  {/* Placeholder Logo */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-green/20 to-neon-green/5 
                                border border-neon-green/30 flex items-center justify-center
                                group-hover:border-neon-green/60 transition-colors">
                    <span className="text-neon-green font-bold text-lg">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{partner.name}</span>
                  <span className="text-muted-foreground text-xs">{partner.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Strategic Partners', count: '12+' },
            { label: 'Venture Backers', count: '8+' },
            { label: 'Infrastructure', count: '5+' },
            { label: 'Integrations', count: '20+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-border/20 bg-card/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-neon-green mb-2">{stat.count}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
