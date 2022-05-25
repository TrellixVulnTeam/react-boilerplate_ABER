/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Popups1 extends Component {
    render() {
        return (
            <>
                <section class="relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0">
                    <div class="p-8 ml-auto text-center lg:w-2/3 sm:p-12">
                        <p class="text-sm font-semibold tracking-widest uppercase">
                        Run with the pack
                        </p>

                        <h5 class="mt-6 font-black uppercase">
                        <span class="text-5xl font-black sm:text-6xl">Get 20% off</span>
                        <span class="block mt-2 text-sm">On your next order over $50</span>
                        </h5>

                        <a
                        class="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black "
                        href=""
                        >
                        Get Discount
                        </a>

                        <p class="mt-12 text-xs font-medium text-gray-400 uppercase">
                        Offer valid until 24th March, 2021 *
                        </p>
                    </div>

                    <div class="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
                        <img
                        alt=""
                        class="absolute inset-0 object-cover w-full h-full"
                        src="https://www.hyperui.dev/photos/shoe-1.jpeg"
                        />
                    </div>
                </section>
            </>
        );
    }
}

export default Popups1;