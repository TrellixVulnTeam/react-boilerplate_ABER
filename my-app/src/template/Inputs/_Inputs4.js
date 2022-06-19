/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Inputs4 extends Component {
    render() {
        return (
            <div className='body-inputs4'>
                <div className="container-inputs4">
                    <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for="name">
                        <span class="text-xs font-medium text-gray-500" for="name">
                            Name
                        </span>

                        <input class="w-full p-0 text-sm border-none focus:ring-0" id="name" type="text" placeholder="John Doe" />
                    </label>
                </div>
            </div>
        );
    }
}

export default Inputs4;