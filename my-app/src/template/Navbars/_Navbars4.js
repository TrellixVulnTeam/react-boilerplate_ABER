/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Navbars4 extends Component {
    render() {
        return (
            <>
                <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
                    <a
                        class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
                        href="/"
                    >
                        👋
                    </a>

                    <ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
                        <li class="hidden lg:block">
                        <a class="px-3 py-2 rounded-lg" href="/"> Home </a>
                        </li>

                        <li><a class="px-3 py-2 rounded-lg" href=""> Projects </a></li>

                        <li>
                        <a
                            class="inline-flex items-center px-3 py-2 rounded-lg"
                            href=""
                            target="_blank"
                        >
                            External
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="ml-1.5 w-4 h-4"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbars4;