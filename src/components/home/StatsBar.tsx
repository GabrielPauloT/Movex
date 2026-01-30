export default function StatsBar() {
  const stats = [
    { number: '15+', label: 'Years in Business' },
    { number: '6,000+', label: 'Successful Moves' },
    { number: '100%', label: 'Fully Insured' },
    { number: '4.9★', label: 'Customer Rating' },
  ];

  return (
    <section className="bg-secondary text-white py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-[3rem] lg:text-[3.5rem] font-black text-primary leading-none mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-base lg:text-lg font-semibold opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
