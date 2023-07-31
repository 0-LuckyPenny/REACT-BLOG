import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'


const About: React.FC = () => {

  return (
    <div>

    <div className="mx-auto max-w-2xl py-3 sm:py-10 lg:py-18 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight sm:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
                    About
                </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Personal information and application
            </p>
          </div>
     </div>


    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Seydina GUEYE</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Developer</dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">dina3903@gmail.com</dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          Hello! My name is Seydina GUEYE. I am an experienced Software Engineer with a strong background in software development and testing. My professional journey has allowed me to develop a strong level of autonomy and excellent teamwork skills. I have also successfully completed end-to-end software development projects. I am confident that my skills and experience will be an asset to your company.
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">resume_developer(en).pdf</span>
                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 underline">
                  <a href="https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/blogs%2FSeydina%20GUEYE%20(en).pdf?alt=media&token=72a1dd3f-5c0e-424d-902e-6044641346f2" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                <div className="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">resume_developer(fr).pdf</span>
                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 underline ">
                  <a href="https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/blogs%2FSeydina%20GUEYE.pdf?alt=media&token=ef143c69-2e59-43c5-8cec-21a3ae7a44bc" target="_blank" rel="noreferrer" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
  );
};

export default About;
