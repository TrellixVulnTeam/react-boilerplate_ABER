/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons4 extends Component {
    render() {
        return (
            <div className="body-buttons4">
              <div className="container-buttons4">
                {/* Base - Right */}
                <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                  <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ml-4">
                    Download
                  </span>
                </a>

                {/* Border - Right */}
                <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                  <span class="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ml-4">
                    Download
                  </span>
                </a>

                {/* Base - Left */}
                <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                  <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:mr-4">
                    Download
                  </span>
                </a>

                {/* Border - Left */}
                <a class="relative inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                  <span class="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:mr-4">
                    Download
                  </span>
                </a>
              </div>
            </div>
        );
    }
}

export default Buttons4;