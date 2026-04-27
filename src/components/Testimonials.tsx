const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO, TechCorp',
      text: 'XYZE transformed our web presence. Their team delivered exceptional results beyond our expectations.',
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Product Manager, StartupXY',
      text: 'Professional, reliable, and innovative. The best investment we made for our digital transformation.',
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'Founder, WebAgency',
      text: 'Outstanding service and support. They really understand what it takes to build a successful web product.',
      avatar: '👨‍💻',
    },
  ];

  return (
    <section className="bg-dark py-20">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-slate-900 rounded-lg border border-slate-800">
              <p className="text-slate-300 mb-4 italic">\"{testimonial.text}\"</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
