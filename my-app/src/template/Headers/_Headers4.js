/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Headers4 extends Component {
    render() {
        return (
            <>
                <header class="bg-gray-50">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                        <div class="flex items-center sm:justify-between sm:gap-4">
                        <div class="relative hidden sm:block">
                            <label class="sr-only" for="search"> Search </label>

                            <input
                            class="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-lg shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                            />

                            <button
                            class="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-md hover:text-gray-700 bg-gray-50 top-1/2 right-1"
                            type="button"
                            aria-label="Submit Search"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            </button>
                        </div>

                        <div
                            class="flex items-center justify-between flex-1 gap-8 sm:justify-end"
                        >
                            <div class="flex gap-4">
                            <button
                                type="button"
                                class="block sm:hidden p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                                </svg>
                            </button>

                            <a
                                href=""
                                class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                                </svg>
                            </a>

                            <a
                                href=""
                                class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                                </svg>
                            </a>
                            </div>

                            <button
                            type="button"
                            class="flex items-center transition rounded-lg group shrink-0"
                            >
                            <img
                                class="object-cover w-10 h-10 rounded-full"
                                src="https://www.hyperui.dev/photos/man-4.jpeg"
                                alt="Simon Lewis"
                            />

                            <p class="hidden ml-2 text-xs text-left sm:block">
                                <strong class="block font-medium">Simon Lewis</strong>

                                <span class="text-gray-500"> simonlewis@fakemail.com </span>
                            </p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="hidden w-5 h-5 ml-4 text-gray-500 transition sm:block group-hover:text-gray-700"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>

                        <div class="mt-8">
                        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back, Barry!
                        </h1>

                        <p class="mt-1.5 text-sm text-gray-500">
                            Your website has seen a 52% increase in traffic in the last month. Keep
                            it up! 🚀
                        </p>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Headers4;