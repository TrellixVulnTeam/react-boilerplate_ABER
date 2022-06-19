/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Paginations4 extends Component {
    render() {
        return (
            <div className='body-paginations4'>
                <div className="container-paginations4">
                    <div class="inline-flex items-center justify-center py-1 text-white bg-blue-600 rounded">
                        <a href="/?page=1" class="inline-flex items-center justify-center w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        <span class="w-px h-4 bg-white/25"></span>

                        <input type="number" class="w-12 p-0 text-xs font-medium text-center bg-transparent border-none rounded no-spinners" min="1" value="2" />

                        <span class="w-px h-4 bg-white/25"></span>

                        <a href="/?page=3" class="inline-flex items-center justify-center w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Paginations4;