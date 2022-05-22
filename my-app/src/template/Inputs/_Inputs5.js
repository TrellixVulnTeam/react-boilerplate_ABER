/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Inputs5 extends Component {
    render() {
        return (
            <>
                <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="name">
                    <input
                        class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
                        id="name"
                        type="text"
                        placeholder="Name"
                    />

                    <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                        Name
                    </span>
                </label>
            </>
        );
    }
}

export default Inputs5;