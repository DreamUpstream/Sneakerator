<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />
    <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
        <Link
            v-if="$page.props.auth.user"
            :href="route('dashboard')"
            class="text-sm text-gray-700 underline"
        >
            Dashboard
        </Link>

        <template v-else>
            <Link
                :href="route('login')"
                class="text-sm text-gray-700 underline"
            >
                Log in
            </Link>

            <Link
                v-if="canRegister"
                :href="route('register')"
                class="ml-4 text-sm text-gray-700 underline"
            >
                Register
            </Link>
        </template>
    </div>
    <div class="px-4 my-5 text-center">
        <img
            class="d-block mx-auto mb-4 col-6 col-md-4 col-lg-2 img-fluid"
            src="img/sneakerator_logo.png"
            alt=""
        />
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
                Quickly search and analyze your favorite sneakers of choice with
                Sneakerator, the one of the world’s most in depth online sneaker
                scraper and analyzer. Our speedy servers will surf the web in
                just a few moments after you enter your sneaker code.
            </p>
        </div>
    </div>

    <div class="container px-4" id="icon-grid">
        <h2 class="pb-2 border-bottom">Features</h2>

        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        >
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3" src="img/dollar.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-0">Find sales</h4>
                    <p>
                        Find sneaker sales volume by using our web scraper that
                        scrapes the most popular sneaker reselling sites
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3" src="img/trend.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-0">Analyze price trends</h4>
                    <p>
                        We provide with the latest sneaker sales graphs & data
                        so you could save your time deciding if you should
                        invest in
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3" src="img/table.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-0">Selling table</h4>
                    <p>
                        Keep all of your incoming, current and shipped out
                        sneakers in all in one dashboard
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3" src="img/auction.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-0">Auto-undercut</h4>
                    <p>
                        [Coming in final release] Our bot will automatically
                        undercut your sneaker prices in multiple selling
                        platforms
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gray-100 {
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
    border-color: #edf2f7;
    border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
    color: #718096;
    color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
    color: #4a5568;
    color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
    color: #1a202c;
    color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
}
</style>
