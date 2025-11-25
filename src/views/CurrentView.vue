<template>
    <section class="px-6 py-14 mt-24 space-y-14 text-amber-50 max-w-4xl mx-auto">
        <header class="mb-12">
            <h1 class="text-4xl font-bold text-center text-[#ffdb70]">Current Research</h1>
            <p class="text-center text-gray-400 text-sm mt-2">Second Author on Two Published Papers | First Author and Second Author on Two Papers Under Review</p>
        </header>

        <!-- Paper List -->
        <div class="space-y-12">
            <!-- Paper 1 -->
            <div class="space-y-3">
                <h2 class="text-2xl font-semibold text-[#ffdb70]">Enhancing EEG Data Quality: A Comprehensive Review of Outlier Detection and Cleaning Methods</h2>
                <a href="https://kdd2024.kdd.org/wp-content/uploads/2024/08/22-KDD-UC-Utoft.pdf" target="_blank" class="text-blue-400 underline text-sm">[View Paper]</a>
                <p class="text-base text-gray-300 leading-relaxed">
                    As the second author, I contributed to a comprehensive survey on EEG data cleaning. This review systematically compares and evaluates state-of-the-art outlier detection and preprocessing techniques to improve EEG data quality for downstream machine learning tasks. The paper provides guidelines for researchers seeking to optimize EEG signal clarity and reliability.
                </p>
            </div>

            <!-- Paper 2 -->
            <div class="space-y-3">
                <h2 class="text-2xl font-semibold text-[#ffdb70]">Refining Human-Data Interaction: Advanced Techniques for EEGEyeNet Dataset Precision</h2>
                <a href="https://faculty.cs.gwu.edu/xiaodongqu/papers/HCII_2024_4302_Refining_Jade.pdf" target="_blank" class="text-blue-400 underline text-sm">[View Paper]</a>
                <p class="text-base text-gray-300 leading-relaxed">
                    Serving as the second author, I worked on refining feature engineering, data preprocessing, and model optimization techniques for the EEGEyeNet dataset. This paper focuses on enhancing model performance for EEG-based eye movement prediction tasks, emphasizing better human-data interaction through cleaner signal handling and innovative processing pipelines.
                </p>
            </div>

            <!-- Paper 3 -->
            <div class="space-y-3">
                <h2 class="text-2xl font-semibold text-[#ffdb70]">EMIGC: An EEG Motor Imagery Controller for Real-Time Parkour Gameplay (Under Review)</h2>
                <p class="text-base text-gray-300 leading-relaxed">
                    As first author, I designed and evaluated an EEG-Motor Imagery Game Controller (EMIGC) system tailored for real-time parkour games. This work explores how EEG signals can be sampled and processed for accurate directional control, evaluates the effectiveness of machine learning models for real-time control, and assesses the impact of EMIGC on user experience and gameplay accuracy.
                </p>
            </div>

            <!-- Paper 4 -->
            <div class="space-y-3">
                <h2 class="text-2xl font-semibold text-[#ffdb70]">A Systematic Review of EEG-Controlled Directional Games: Techniques, Evaluation for Performance Metrics, and Future Directions (Under Review)</h2>
                <p class="text-base text-gray-300 leading-relaxed">
                    As the second author, I contributed to a systematic review analyzing the current landscape of EEG-controlled directional games. The paper identifies techniques, evaluation methods, and highlights key research gaps. It aims to provide a comprehensive foundation for future development in brain-controlled gaming and human-computer interaction fields.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CurrentResearchView'
    }
</script>

<style scoped>
    h1, h2 {
        font-family: 'Poppins', sans-serif;
    }
</style>  