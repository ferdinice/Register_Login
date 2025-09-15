import React from "react";
import Navbar from "./assets/Navbar";
import LandingPage from "./assets/LandingPage";

const Home = ({ setToken }) => {
  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-4">
              Transform Your Body Today
            </h1>
            <p className="text-xl mb-8">
              Join our gym and start your fitness journey with expert trainers.
            </p>
            <a
              href="#membership"
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Join Now
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4">Expert Trainers</h3>
                <p>
                  Our certified trainers provide personalized workout plans to
                  help you achieve your goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4">
                  Modern Equipment
                </h3>
                <p>
                  State-of-the-art machines and free weights for all fitness
                  levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4">
                  Flexible Memberships
                </h3>
                <p>
                  Choose from various membership plans that fit your schedule
                  and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section
          id="membership"
          className="py-24 bg-green-600 text-white text-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Become a Member Today</h2>
            <p className="mb-8 text-lg">
              Sign up now and get access to all our classes and facilities.
            </p>
            <button
              onClick={() => setToken("")}
              className="bg-white text-green-600 font-semibold px-8 py-3
            rounded-full hover:bg-gray-100 transition"
            >
              Log Out
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} GymName. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="hover:text-green-500">
                Facebook
              </a>
              <a href="#" className="hover:text-green-500">
                Instagram
              </a>
              <a href="#" className="hover:text-green-500">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
