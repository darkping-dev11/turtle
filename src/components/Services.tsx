const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that engage and convert',
    },
    {
      id: 3,
      title: 'API Development',
      description: 'Robust APIs for seamless integration and scalability',
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications on the cloud',
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 bg-dark rounded-lg border border-slate-800 hover:border-secondary/50 transition">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <a href="#" className="text-primary hover:text-secondary transition font-semibold">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
