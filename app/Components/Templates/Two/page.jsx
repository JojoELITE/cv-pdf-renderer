import React from 'react';
import Image from 'next/image';

const imageUrl1 = "/assets/2.png";
const imageUrl2 = "/assets/3.png";
const imageUrl3 = "/assets/4.png";
const imageUrl4 = "/assets/5.png";
const imageUrl5 = "/assets/alter.png";
const imageUrl6 = "/assets/main.png";
const imageUrl7 = "/assets/diamant.png";

const Pdf = () => (
  <div className="flex flex-row">
    <div className="w-1/3 text-white bg-teal-800">
      <div className="h-10 bg-teal-700"></div>
      <div className="flex flex-col items-start p-6">
        <div className="text-2xl font-bold mb-6">
          <h1>TIMOTHY</h1>
          <h1>DUNCAN</h1>
        </div>

        <div className="mb-6">
          <h2 className="text-lg mb-2">SKILLS</h2>
          <div className="h-0.5  bg-white mb-2"></div>
          <div className="text-sm space-y-2">
            <p>Communication - Customer-Oriented -</p>
            <p>Leadership - Team Coordination -</p>
            <p>Negotiation - Business Intelligence -</p>
            <p>Critical Thinking - Creativity -</p>
            <p>Sales & Marketing - Pricing Strategy -</p>
            <p>Time Management - Hubspot -</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg mb-2">INDUSTRY EXPERTISE</h2>
          <div className="h-0.5 w-[120%] bg-white mb-2"></div>
          <div className="text-sm space-y-2">
            <div>
              <p>Sales training</p>
              <div className="h-1 w-32 bg-white mb-2"></div>
            </div>
            <div>
              <p>Product-led growth</p>
              <div className="h-1 w-32 bg-white mb-2"></div>
            </div>
            <div>
              <p>Partnerships</p>
              <div className="h-1 w-32 bg-white mb-2"></div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg mb-2">LANGUAGES</h2>
          <div className="h-0.5 w-[140%] bg-white mb-2"></div>
          <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
              <p>English</p>
              <div className="flex items-center">
                <p>Native</p>
                <div className="flex ml-2">
                  <div className="h-1 w-4 bg-white"></div>
                  <div className="h-1 w-4 bg-white ml-1"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Spanish</p>
              <div className="flex items-center">
                <p>Advanced</p>
                <div className="flex ml-2">
                  <div className="h-1 w-4 bg-white"></div>
                  <div className="h-1 w-4 bg-teal-300 ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg mb-2">TOOLS</h2>
          <div className="h-0.5 w-[180%] bg-white mb-2"></div>
          <div className="text-sm space-y-2">
            <p>Figma</p>
            <p>Git</p>
            <p>Visual Studio Code</p>
            <p>Adobe XD</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg mb-2">CERTIFICATES</h2>
          <div className="h-0.5 w-[102%] bg-white mb-2"></div>
          <div className="text-sm space-y-2">
            <p>Certified Web Developer (CWD)</p>
            <p>Front-End Web Developer Nanodegree (Udacity)</p>
            <p>Certified Data Scientist (CDS)</p>
            <p>Docker Certified Associate</p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-2/3 p-6">
      <h2 className="text-lg text-teal-800 mt-10">Director of Business Development</h2>

      <div className="mt-4">
        <div className="flex items-center mb-2">
          <Image src={imageUrl1} alt="Phone" width={20} height={20} />
          <p className="ml-2">(+241) 00000000</p>
        </div>
        <div className="flex items-center mb-2">
          <Image src={imageUrl2} alt="Email" width={20} height={20} />
          <p className="ml-2">timithy.duncan@gmail.com</p>
        </div>
        <div className="flex items-center mb-2">
          <Image src={imageUrl3} alt="LinkedIn" width={20} height={20} />
          <p className="ml-2">linkedin.com/timothy-duncan-jr</p>
        </div>
        <div className="flex items-center">
          <Image src={imageUrl3} alt="Location" width={20} height={20} />
          <p className="ml-2">Paterson, New Jersey</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg mb-2">SUMMARY</h2>
        <div className="h-0.5 bg-black mb-2"></div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg mt-6">KEY ACHIEVEMENTS</h2>
        <div className="h-0.5 bg-black mb-2"></div>
        <div className="flex items-center mb-2">
          <Image src={imageUrl5} alt="Achievement" width={20} height={20} />
          <p className="ml-2 font-bold">Sales Training Expert</p>
        </div>
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center mb-2">
          <Image src={imageUrl6} alt="Achievement" width={20} height={20} />
          <p className="ml-2 font-bold">Product-Led Growth</p>
        </div>
        <p className="text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center mb-2">
          <Image src={imageUrl7} alt="Achievement" width={20} height={20} />
          <p className="ml-2 font-bold">Partnerships</p>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg mb-2">WORK EXPERIENCE</h2>
        <div className="h-0.5 bg-black mb-2"></div>
        <h3 className="font-bold text-sm mb-1">Company Name</h3>
        <p className="text-xs mb-2">Location - Year</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg mb-2">EDUCATION</h2>
        <div className="h-0.5 bg-black mb-2"></div>
        <h3 className="font-bold text-sm mb-1">Degree</h3>
        <p className="text-xs mb-2">Institution Name - Year</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
);

export default Pdf;
