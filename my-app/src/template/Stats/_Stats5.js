/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Stats5 extends Component {
    render() {
        return (
            <>
                <article class="relative px-6 pt-12 pb-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <p class="text-sm font-medium text-gray-500">Profit</p>

                    <p class="inline-flex items-end mt-1">
                        <span class="text-2xl font-medium leading-none">$240.94</span>
                        <span class="ml-1 text-xs text-gray-500">from $404.32</span>
                    </p>

                    <p class="absolute inline-flex p-1 text-red-600 bg-red-100 rounded top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>

                        <span class="ml-1.5 text-xs font-medium">
                        67.81%
                        </span>
                    </p>
                    </article>

                    <article class="relative px-6 pt-12 pb-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <p class="text-sm font-medium text-gray-500">Profit</p>

                    <p class="inline-flex items-end mt-1">
                        <span class="text-2xl font-medium leading-none">$404.32</span>
                        <span class="ml-1 text-xs text-gray-500">from $240.94</span>
                    </p>

                    <p class="absolute inline-flex p-1 text-green-600 bg-green-100 rounded top-4 right-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>

                        <span class="ml-1.5 text-xs font-medium">
                        67.81%
                        </span>
                    </p>
                </article>
            </>
        );
    }
}

export default Stats5;