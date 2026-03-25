const MarqueeStrip = () => {
  const items = [
    "🔥 ALL YOU CAN EAT",
    "✦ BAKSO URAT",
    "✦ BAKSO TELUR",
    "✦ BAKSO KEJU",
    "✦ BAKSO IKAN",
    "✦ BAKSO ACI",
    "✦ PENTOL PEDAS",
    "✦ FREE TETELAN",
    "✦ LIVE COOKING",
    "🔥 PAY ONCE EAT UNLIMITED",
    "✦ MIE & BIHUN",
    "✦ TAHU GORENG",
    "✦ NEON VIBES",
    "✦ BAMBOO CULTURE",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden bg-primary py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-bold tracking-widest uppercase text-primary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
