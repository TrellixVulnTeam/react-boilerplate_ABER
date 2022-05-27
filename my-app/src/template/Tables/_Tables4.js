/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Tables4 extends Component {
    render() {
        return (
            <>
                <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                    <table class="min-w-full text-sm divide-y divide-gray-200">
                        <thead>
                        <tr class="bg-gray-50">
                            <th class="sticky left-0 px-4 py-2 text-left bg-gray-50">
                            <label class="sr-only" for="row_all">Select All</label>
                            <input class="w-5 h-5 border-gray-200 rounded" type="checkbox" id="row_all"/>
                            </th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Name</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Date of Birth</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Role</th>
                            <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Salary</th>
                        </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100">
                        <tr>
                            <td class="sticky left-0 px-4 py-2 bg-white">
                            <label class="sr-only" for="row_1">Row 1</label>
                            <input class="w-5 h-5 border-gray-200 rounded" type="checkbox" id="row_1"/>
                            </td>
                            <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">John Doe</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Web Developer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$120,000</td>
                        </tr>

                        <tr>
                            <td class="sticky left-0 px-4 py-2 bg-white">
                            <label class="sr-only" for="row_2">Row 2</label>
                            <input class="w-5 h-5 border-gray-200 rounded" type="checkbox" id="row_2"/>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">Jane Doe</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">04/11/1980</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Web Designer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$100,000</td>
                        </tr>

                        <tr>
                            <td class="sticky left-0 px-4 py-2 bg-white">
                            <label class="sr-only" for="row_3">Row 3</label>
                            <input class="w-5 h-5 border-gray-200 rounded" type="checkbox" id="row_3"/>
                            </td>
                            <td class="px-4 py-2 font-medium whitespace-nowrap">Gary Barlow</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">24/05/1995</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Singer</td>
                            <td class="px-4 py-2 text-gray-700 whitespace-nowrap">$20,000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Tables4;