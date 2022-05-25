/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Stats1 extends Component {
    render() {
        return (
            <>
                <section class="text-white bg-blue-600">
                    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div class="max-w-xl">
                        <h2 class="text-4xl font-bold sm:text-6xl">
                            An amazing year
                        </h2>

                        <p class="mt-4 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tempore beatae facilis dignissimos rem praesentium
                            officia obcaecati quisquam iure recusandae!
                        </p>
                        </div>

                        <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">50</p>
                            <p class="mt-1 text-xl font-medium">Websites live</p>
                        </li>

                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">190k+</p>
                            <p class="mt-1 text-xl font-medium">Impressions</p>
                        </li>

                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">$150k+</p>
                            <p class="mt-1 text-xl font-medium">Client profits</p>
                        </li>

                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">10</p>
                            <p class="mt-1 text-xl font-medium">New staff</p>
                        </li>

                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">1</p>
                            <p class="mt-1 text-xl font-medium">New office</p>
                        </li>

                        <li class="p-8 shadow-xl rounded-xl">
                            <p class="text-3xl font-extrabold">6</p>
                            <p class="mt-1 text-xl font-medium">New tech stacks</p>
                        </li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Stats1;