/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Popups6 extends Component {
    render() {
        return (
            <>
                <div class="fixed inset-x-0 bottom-0 p-4">
                    <div class="relative max-w-xl p-6 bg-gray-100 rounded-lg shadow-sm">
                        <button
                        type="button"
                        class="absolute p-1 text-gray-400 bg-white border border-gray-200 rounded-full -top-1 -right-1"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                            />
                        </svg>
                        </button>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <img
                            class="object-cover w-full h-full rounded-xl"
                            src="https://www.hyperui.dev/photos/laptop-1.jpeg"
                            alt=""
                        />

                        <div>
                            <h2 class="text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </h2>

                            <p class="mt-4 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                            eos. Inventore dolor delectus commodi laudantium adipisci, illum amet
                            itaque optio!
                            </p>

                            <div class="mt-6 sm:text-right">
                            <a
                                class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg "
                                href=""
                            >
                                Find out more
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Popups6;