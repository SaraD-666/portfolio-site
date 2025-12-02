<script>
export default {
    data() {
        return {
            resumeUrl: 'files/Jingwen_Dou_Resume.pdf'
        }
    }
}
</script>

<template>
    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <article data-page="about">
            <header>
                <div
                    class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
                    <h4>Personal project</h4>
                </div>
            </header>

            <section>
                <div class="md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
                    <iframe
                        :src="resumeUrl"
                        style="width: 100%; height: 1000px;"
                    ></iframe>
                </div>
            </section>
        </article>
    </div>
</template>

<style>
</style>