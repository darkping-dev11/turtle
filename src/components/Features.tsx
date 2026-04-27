const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security for your data protection',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfect on every device, from mobile to desktop',
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Grows with your business needs seamlessly',
    },
  ];

  return (
    <section className="bg-dark py-20">
      <div className="container-custom">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
