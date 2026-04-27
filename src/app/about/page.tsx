export const metadata = {
  title: 'About Us - XYZE',
  description: 'Learn about XYZE and our mission to build the future web',
};

export default function About() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-5xl font-bold mb-8">About XYZE</h1>
        <p className="text-xl text-slate-400 mb-6">
          We are a team of passionate developers, designers, and innovators dedicated to creating exceptional web experiences.
        </p>
        <p className="text-lg text-slate-400 mb-6">
          Founded with the mission to empower businesses with cutting-edge technology, XYZE has been helping companies transform their digital presence since day one.
        </p>
        <h2 className="text-3xl font-bold mb-4 mt-12">Our Values</h2>
        <ul className="space-y-4 text-slate-400">
          <li className="flex gap-4">
            <span className="text-primary">✓</span>
            <span><strong>Innovation:</strong> Always pushing boundaries and exploring new possibilities</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary">✓</span>
            <span><strong>Quality:</strong> Delivering excellence in every project</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary">✓</span>
            <span><strong>Partnership:</strong> Working closely with our clients as true partners</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary">✓</span>
            <span><strong>Integrity:</strong> Building trust through transparency and honesty</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
