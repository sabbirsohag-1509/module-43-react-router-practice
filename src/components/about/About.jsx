import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        About Us
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 leading-relaxed mb-10 text-justify">
        Welcome to our platform! We are passionate about creating meaningful
        digital experiences that connect people, ideas, and opportunities. Our
        journey started with a simple vision: to build a community where
        technology makes life easier and more enjoyable for everyone. Over the
        years, we have grown into a dedicated team of developers, designers, and
        thinkers who believe in continuous learning and innovation. <br /> <br />
        We focus on building modern web applications using the latest tools and
        technologies. Our mission is not only to deliver high-quality solutions
        but also to inspire others by sharing knowledge and promoting
        collaboration. We believe that success comes when creativity meets
        consistency, and that is what drives us every single day. <br /> <br />
        Our team values transparency, responsibility, and user-centric design.
        Whether we are developing a small project or a large-scale application,
        we approach each challenge with the same level of dedication. We also
        prioritize sustainability and scalability in our work, ensuring that our
        projects continue to grow and evolve with time. <br /> <br />
        Thank you for being a part of our journey. We are excited to have you
        here, and we look forward to exploring new possibilities together. Let’s
        keep learning, growing, and creating a better future through technology.
      </p>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-indigo-50 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To empower individuals and businesses by providing innovative and
            reliable tech solutions that make an impact.
          </p>
        </div>

        <div className="p-6 bg-indigo-50 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become a global leader in digital innovation, where technology
            creates opportunities for everyone.
          </p>
        </div>

        <div className="p-6 bg-indigo-50 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-indigo-700">
            Our Values
          </h2>
          <p className="text-gray-600">
            We believe in integrity, teamwork, innovation, and delivering value
            that lasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
