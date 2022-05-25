/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Paginations1 extends Component {
    render() {
        return (
            <>
                <ol class="flex justify-center space-x-1 text-xs font-medium">
                    <li>
                        <a href="/?page=1" class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        </a>
                    </li>

                    <li>
                        <a href="/?page=1" class="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 1 </a>
                    </li>

                    <li class="block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded">2</li>

                    <li>
                        <a href="/?page=3" class="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 3 </a>
                    </li>

                    <li>
                        <a href="/?page=4" class="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"> 4 </a>
                    </li>

                    <li>
                        <a href="/?page=3" class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        </a>
                    </li>
                </ol>
            </>
        );
    }
}

export default Paginations1;