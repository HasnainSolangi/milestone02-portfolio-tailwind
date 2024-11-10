import ProfileImage from './components/ProfileImage';

export default function Home() {
  return (
    <div className="hero text-center py-10">
      <ProfileImage />
      <h1 className="text-4xl font-bold mt-4 text-primary">Hasnain Ahmed</h1>
      <p className="text-lg mt-2">Web Developer</p>
      <div className="social-links mt-4 space-x-4">
        <a href="https://github.com/HasnainSolangi" target="_blank" rel="noopener noreferrer" className="text-accent">GitHub</a>
        <a href="https://www.linkedin.com/in/hasnainahmed90s/" target="_blank" rel="noopener noreferrer" className="text-accent">LinkedIn</a>
      </div>
    </div>
  );
}
