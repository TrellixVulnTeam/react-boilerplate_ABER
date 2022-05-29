/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class ProductCollections3 extends Component {
    render() {
        return (
            <>
                <section>
                    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                        <div
                        class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start"
                        >
                        <div class="lg:sticky lg:top-4">
                        <details
                            open
                            class="overflow-hidden border border-gray-200 rounded"
                        >
                            <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                            <span class="text-sm font-medium">
                                Toggle Filters
                            </span>

                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            </summary>

                            <form
                            action=""
                            class="border-t border-gray-200 lg:border-t-0"
                            >
                            <fieldset>
                                <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                                Type
                                </legend>

                                <div class="px-5 py-6 space-y-2">
                                <div class="flex items-center">
                                    <input
                                    id="toy"
                                    type="checkbox"
                                    name="type[toy]"
                                    class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                    for="toy"
                                    class="ml-3 text-sm font-medium"
                                    >
                                    Toy
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input
                                    id="game"
                                    type="checkbox"
                                    name="type[game]"
                                    class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                    for="game"
                                    class="ml-3 text-sm font-medium"
                                    >
                                    Game
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input
                                    id="outdoor"
                                    type="checkbox"
                                    name="type[outdoor]"
                                    class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                    for="outdoor"
                                    class="ml-3 text-sm font-medium"
                                    >
                                    Outdoor
                                    </label>
                                </div>

                                <div class="pt-2">
                                    <button
                                    type="button"
                                    class="text-xs text-gray-500 underline"
                                    >
                                    Reset Type
                                    </button>
                                </div>
                                </div>
                            </fieldset>

                            <div>
                                <fieldset>
                                <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                                    Age
                                </legend>

                                <div class="px-5 py-6 space-y-2">
                                    <div class="flex items-center">
                                    <input
                                        id="3+"
                                        type="checkbox"
                                        name="age[3+]"
                                        class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                        for="3+"
                                        class="ml-3 text-sm font-medium"
                                    >
                                        3+
                                    </label>
                                    </div>

                                    <div class="flex items-center">
                                    <input
                                        id="8+"
                                        type="checkbox"
                                        name="age[8+]"
                                        class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                        for="8+"
                                        class="ml-3 text-sm font-medium"
                                    >
                                        8+
                                    </label>
                                    </div>

                                    <div class="flex items-center">
                                    <input
                                        id="12+"
                                        type="checkbox"
                                        name="age[12+]"
                                        class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                        for="12+"
                                        class="ml-3 text-sm font-medium"
                                    >
                                        12+
                                    </label>
                                    </div>

                                    <div class="flex items-center">
                                    <input
                                        id="16+"
                                        type="checkbox"
                                        name="age[16+]"
                                        class="w-5 h-5 border-gray-300 rounded"
                                    />

                                    <label
                                        for="16+"
                                        class="ml-3 text-sm font-medium"
                                    >
                                        16+
                                    </label>
                                    </div>

                                    <div class="pt-2">
                                    <button
                                        type="button"
                                        class="text-xs text-gray-500 underline"
                                    >
                                        Reset Age
                                    </button>
                                    </div>
                                </div>
                                </fieldset>
                            </div>

                            <div class="flex justify-between px-5 py-3 border-t border-gray-200">
                                <button
                                name="reset"
                                type="button"
                                class="text-xs font-medium text-gray-600 underline rounded"
                                >
                                Reset All
                                </button>

                                <button
                                name="commit"
                                type="button"
                                class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                                >
                                Apply Filters
                                </button>
                            </div>
                            </form>
                        </details>
                        </div>

                        <div class="lg:col-span-3">
                            <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                <span class="hidden sm:inline">
                                Showing
                                </span>
                                6 of 24 Products
                            </p>

                            <div class="ml-4">
                                <label
                                for="SortBy"
                                class="sr-only"
                                >
                                Sort
                                </label>

                                <select
                                id="SortBy"
                                name="sort_by"
                                class="text-sm border-gray-100 rounded"
                                >
                                <option readonly>Sort</option>
                                <option value="title-asc">Title, A-Z</option>
                                <option value="title-desc">Title, Z-A</option>
                                <option value="price-asc">Price, Low-High</option>
                                <option value="price-desc">Price, High-Low</option>
                                </select>
                            </div>
                            </div>

                            <div class="grid grid-cols-1 gap-px mt-4 bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>

                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>

                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>

                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>

                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>

                            <a
                                href="/product/build-your-own-drone"
                                class="relative block bg-white"
                            >
                                <button
                                type="button"
                                name="wishlist"
                                class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                                >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                                </button>

                                <img
                                loading="lazy"
                                alt="Build Your Own Drone"
                                class="object-contain w-full h-56 lg:h-72"
                                src="https://www.hyperui.dev/photos/toy-1.jpeg"
                                />

                                <div class="p-6">
                                <span class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
                                    New
                                </span>

                                <h5 class="mt-4 text-lg font-bold">
                                    Build Your Own Drone
                                </h5>

                                <p class="mt-2 text-sm font-medium text-gray-600">
                                    $14.99
                                </p>

                                <button
                                    name="add"
                                    type="button"
                                    class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
                                >
                                    <span class="text-sm font-medium">
                                    Add to Cart
                                    </span>

                                    <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </button>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

{/* <script>
  window.addEventListener('resize', () => {
    const desktopScreen = window.innerWidth < 768

    document.querySelector('details').open = !desktopScreen
  })
</script> */}
            </>
        );
    }
}

export default ProductCollections3;