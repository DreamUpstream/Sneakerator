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

    <div class="px-4 my-5 text-center">
        <img
            class="d-block mx-auto mb-4 col-6 col-md-4 col-lg-2 img-fluid"
            src="img/sneakerator_logo.png"
            alt=""
        />
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
                Welcome to all-in-one sneaker reseller dashboard & selling
                advisor - quickly search and analyze your favorite sneaker
                models with our world’s most in depth online sneaker sales
                listing scraper and analyzer tool. Register now to gain access
                to our early beta platform!
            </p>
        </div>
        <div v-if="canLogin" class="">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="btn btn-primary"
            >
                Dashboard
            </Link>

            <template v-else>
                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="btn btn-success mx-2"
                >
                    Register
                </Link>
                <Link :href="route('login')" class="btn btn-primary mx-2">
                    Log in
                </Link>
            </template>
        </div>
    </div>

    <div class="container px-4" id="icon-grid">
        <h2 class="pb-2 border-bottom">Features</h2>

        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        >
            <div class="col d-flex align-items-start">
                <img class="col-2 mt-1 mx-3" src="img/dollar.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-1">Find sales volume</h4>
                    <p>
                        Get current sneaker sales volume in the most popular
                        sneaker reselling sites by using our web scraper that
                        provides you with the real-time price lists.
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3 mt-1" src="img/trend.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-1">Analyze price trends</h4>
                    <p>
                        Receive latest sales graphs & data so you could decide
                        if you should invest in the sneaker faster.
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3 mt-1" src="img/table.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-1">Seller table</h4>
                    <p>
                        Never miss or forget anything with having all details of
                        your bought, incoming, selling, shipped out sneakers in
                        all-in-one seller dashboard.
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img class="col-2 mx-3 mt-1" src="img/auction.svg" alt="" />
                <div>
                    <h4 class="fw-bold mb-1">Auto-undercut</h4>
                    <p>
                        [Coming in final release] Our bot will automatically
                        undercut your sneaker prices in multiple selling
                        platforms.
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
