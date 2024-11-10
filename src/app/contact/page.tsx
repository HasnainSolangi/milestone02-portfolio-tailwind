export default function Contact() {
  return (
    <div className="section contact py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Contact Me</h1>
      <form className="contact-form space-y-4 max-w-md mx-auto">
        <div className="form-group">
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded" required></textarea>
        </div>
        <button type="submit" className="button bg-accent text-white py-2 px-4 rounded hover:bg-primary">Send Message</button>
      </form>
    </div>
  );
}
