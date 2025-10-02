import React from 'react';

const Home = () => {
    return (
        <div className='max-w-[800px] mx-auto mt-5'> 
              <section className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl p-10 mb-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Platform</h1>
        <p className="text-lg">
          Discover the best services and solutions tailored just for you. Our platform is designed to make your experience seamless and enjoyable, offering a wide range of features that cater to your needs.
        </p>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
            alt="Our Service" 
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. 
            Curabitur nisi. Donec vitae sapien ut libero venenatis faucibus. Praesent venenatis metus at tortor pulvinar varius.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Fast & Reliable</h3>
            <p className="text-gray-600">
              Experience high performance and reliable services that make your tasks easier and faster.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Our platform is intuitive and easy to navigate, ensuring a smooth experience for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Secure</h3>
            <p className="text-gray-600">
              Security is our top priority. Your data is protected with advanced security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section (300 words approx) */}
      <section className="text-gray-700 leading-relaxed">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <p>
          Our platform is built with the user in mind. We aim to provide a seamless and efficient experience for all our visitors. From the moment you land on our homepage, you are greeted with a visually appealing and responsive design that adapts perfectly to any device. The navigation is simple yet powerful, allowing you to access all features effortlessly. Our team has meticulously crafted each component to ensure both functionality and aesthetic appeal. The content is organized logically, making it easy to find information quickly. 
        </p>
        <p className="mt-4">
          We understand the importance of speed and reliability, which is why our platform is optimized for performance. Every section is designed to load quickly and deliver information instantly. Additionally, security is a fundamental aspect of our services. Your personal information and data are safeguarded with industry-standard encryption and protocols. Moreover, we offer a wide range of features tailored to your needs, ensuring a personalized experience. Our commitment to quality and innovation sets us apart from the competition. Whether you are here to explore, learn, or engage, our platform provides the tools and resources necessary for a productive and enjoyable experience. With continuous updates and improvements, we strive to exceed your expectations and maintain a high standard of excellence.
        </p>
      </section>
        </div>
    );
};

export default Home;