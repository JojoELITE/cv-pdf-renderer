// components/Resume.js
import Image from 'next/image';

const Resume = () => (
  <div className="flex flex-row p-10 bg-white">
    {/* Left Column */}
    <div className="w-1/3 bg-gray-800 text-white p-4 space-y-6">
      <div className="flex flex-col items-center">
        <Image src="/assets/1.png" alt="Profile Image" width={180} height={220} className="rounded" />
      </div>

      <div className="mt-6">
        {/* Education */}
        <div>
          <h2 className="text-xl font-bold mb-2">EDUCATION</h2>
          <hr className="border-yellow-500 mb-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold">ENTER YOUR MAJOR</h3>
            <p className="text-sm">Name Of Your University</p>
            <p className="text-xs text-gray-300">2009-2011</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">ENTER YOUR MAJOR</h3>
            <p className="text-sm">Name Of Your University</p>
            <p className="text-xs text-gray-300">2011-2015</p>
          </div>
        </div>

        {/* Reference */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">REFERENCE</h2>
          <hr className="border-yellow-500 mb-4" />
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Sara Taylor</h3>
            <p className="text-sm">Director | Company Name</p>
            <p className="text-xs text-gray-300">T: +241 00000000</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Mike Anderson</h3>
            <p className="text-sm">Web Developer | Company</p>
            <p className="text-xs text-gray-300">T: +241 00000000</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-5 bg-yellow-500 mr-3" /> {/* Placeholder for icon */}
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm">T: +241 00000000</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-5 bg-yellow-500 mr-3" /> {/* Placeholder for icon */}
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm">abcde@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-5 bg-yellow-500 mr-3" /> {/* Placeholder for icon */}
            <div>
              <h3 className="font-semibold">Website</h3>
              <p className="text-sm">www.site.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-5 bg-yellow-500 mr-3" /> {/* Placeholder for icon */}
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-sm">Your street address</p>
              <p className="text-sm">SS Street City Zip Code-456</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-2/3 p-8">
      <div className="bg-yellow-500 p-6 mb-8">
        <h1 className="text-3xl font-bold">
          KABEN <span className="text-2xl">RICHARDS</span>
        </h1>
        <p className="text-sm">PROFESSIONAL TITLE</p>
      </div>

      {/* About */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">ABOUT</h2>
        <hr className="border-gray-800 mb-4" />
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">WORK EXPERIENCE</h2>
        <hr className="border-gray-800 mb-4" />
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-6">
            <p className="text-xs text-gray-600 mb-1">sept 20xx - jul 20xx</p>
            <div>
              <h3 className="text-lg font-semibold">JOB POSITION HERE</h3>
              <p className="text-sm text-gray-700">Company name/California USA</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Software Skills */}
      <div>
        <h2 className="text-xl font-bold mb-2">SOFTWARE SKILLS</h2>
        <hr className="border-gray-800 mb-4" />
        <div className="flex space-x-6">
          <div className="flex-1 space-y-4">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'].map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 bg-gray-800 mr-3" /> {/* Placeholder for icon */}
                <p className="text-sm text-gray-700">{skill}</p>
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-4">
            {['Microsoft Word', 'Microsoft PowerPoint', 'HTML/CSS'].map((skill, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 bg-gray-800 mr-3" /> {/* Placeholder for icon */}
                <p className="text-sm text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
