/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Popups7 extends Component {
    render() {
        return (
            <>
                <div class="p-8 bg-white rounded-lg shadow-2xl">
                    <h2 class="text-lg font-bold">Are you sure you want to do that?</h2>

                    <p class="mt-2 text-sm text-gray-500">
                        Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
                    </p>

                    <div class="flex items-center justify-end mt-8 text-xs">
                        <button type="button" class="px-4 py-2 font-medium text-green-600 rounded bg-green-50">Yes, I'm sure</button>
                        <button type="button" class="px-4 py-2 ml-2 font-medium text-gray-600 rounded bg-gray-50">No, go back</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Popups7;