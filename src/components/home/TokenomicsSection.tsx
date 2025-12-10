const tokenomicsData = [
  { label: "Ecosystem", percentage: 20, color: "hsl(147, 71%, 44%)" },
  { label: "Community", percentage: 20, color: "hsl(147, 71%, 35%)" },
  { label: "Team", percentage: 15, color: "hsl(147, 71%, 55%)" },
  { label: "Treasury", percentage: 15, color: "hsl(147, 71%, 28%)" },
  { label: "Private Sale", percentage: 10, color: "hsl(200, 50%, 40%)" },
  { label: "Public Sale", percentage: 10, color: "hsl(200, 50%, 50%)" },
  { label: "Liquidity", percentage: 10, color: "hsl(200, 50%, 60%)" },
];

const TokenomicsSection = () => {
  // Calculate cumulative angles for pie chart
  let cumulativeAngle = 0;
  const pieSlices = tokenomicsData.map((item) => {
    const startAngle = cumulativeAngle;
    cumulativeAngle += (item.percentage / 100) * 360;
    return { ...item, startAngle, endAngle: cumulativeAngle };
  });

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      x,
      y,
      "Z",
    ].join(" ");
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
            Token
          </p>
          <h2 className="section-title mb-4">Tokenomics</h2>
          <p className="section-subtitle mx-auto">
            Total Supply: <span className="text-primary font-bold">10,000,000 NTM</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Pie Chart */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform -rotate-90"
              >
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="hsl(0 0% 15%)"
                  strokeWidth="2"
                />
                
                {/* Pie Slices */}
                {pieSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={describeArc(100, 100, 80, slice.startAngle, slice.endAngle - 1)}
                    fill={slice.color}
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    style={{ filter: "drop-shadow(0 0 10px rgba(33, 193, 107, 0.3))" }}
                  />
                ))}
                
                {/* Inner Circle */}
                <circle cx="100" cy="100" r="50" fill="hsl(0 0% 0%)" />
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="hsl(147 71% 44% / 0.3)"
                  strokeWidth="1"
                />
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary neon-text">10M</p>
                  <p className="text-xs text-muted-foreground">NTM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Allocation List */}
          <div className="space-y-4">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">
                    {((item.percentage / 100) * 10000000).toLocaleString()} NTM
                  </span>
                  <span className="text-primary font-bold">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
