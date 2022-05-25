/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Stats4 extends Component {
    render() {
        return (
            <>
                <section class="text-center">
                    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <ul class="grid grid-cols-2 gap-4 border-2 border-teal-600 rounded-xl lg:grid-cols-4">
                        <li class="p-8">
                            <p class="text-2xl font-extrabold text-teal-500">50</p>
                            <p class="mt-1 text-lg font-medium">Websites</p>
                        </li>

                        <li class="p-8">
                            <p class="text-2xl font-extrabold text-teal-500">190k+</p>
                            <p class="mt-1 text-lg font-medium">Impressions</p>
                        </li>

                        <li class="p-8">
                            <p class="text-2xl font-extrabold text-teal-500">$150k+</p>
                            <p class="mt-1 text-lg font-medium">Profits</p>
                        </li>

                        <li class="p-8">
                            <p class="text-2xl font-extrabold text-teal-500">10+</p>
                            <p class="mt-1 text-lg font-medium">Staff</p>
                        </li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }
}

export default Stats4;