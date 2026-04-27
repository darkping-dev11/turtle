'use client';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-dark via-slate-900 to-dark py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Building the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Future</span> Web
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            We create modern, scalable web solutions that transform your ideas into reality. Cutting-edge technology meets exceptional design.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
