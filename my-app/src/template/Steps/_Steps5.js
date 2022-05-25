/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Steps5 extends Component {
    render() {
        return (
            <>
                <div>
                    <h2 class="sr-only">Steps</h2>

                    <div>
                        <ol
                        class="grid grid-cols-1 overflow-hidden text-sm text-gray-500 border border-gray-100 divide-x divide-gray-100 rounded-lg sm:grid-cols-3"
                        >
                        <li class="flex items-center justify-center p-4">
                            <svg
                            class="flex-shrink-0 mr-2 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                            </svg>

                            <p class="leading-none">
                            <strong class="block font-medium"> Details </strong>
                            <small class="mt-1"> Some info about you. </small>
                            </p>
                        </li>

                        <li class="relative flex items-center justify-center p-4 bg-gray-50">
                            <span
                            class="absolute hidden w-4 h-4 rotate-45 -translate-y-1/2 bg-white border border-b-0 border-l-0 border-gray-100 sm:block -left-2 top-1/2"
                            >
                            </span>

                            <span
                            class="absolute hidden w-4 h-4 rotate-45 -translate-y-1/2 border border-b-0 border-l-0 border-gray-100 sm:block bg-gray-50 -right-2 top-1/2"
                            >
                            </span>

                            <svg
                            class="flex-shrink-0 mr-2 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            </svg>

                            <p class="leading-none">
                            <strong class="block font-medium"> Address </strong>
                            <small class="mt-1"> Where we sending it? </small>
                            </p>
                        </li>

                        <li class="flex items-center justify-center p-4">
                            <svg
                            class="flex-shrink-0 mr-2 w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                            </svg>

                            <p class="leading-none">
                            <strong class="block font-medium"> Payment </strong>
                            <small class="mt-1"> Show us the money. </small>
                            </p>
                        </li>
                        </ol>
                    </div>
                </div>
            </>
        );
    }
}

export default Steps5;