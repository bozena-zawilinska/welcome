<template>
    <div class="bento-grid">
                <div v-for="project in projects" :key="project.id" :id="`row-${project.id}`" class="row" >
                    <div class="col col-1">
                        <!-- Card 1: Project -->
                        <article class="bento__card project">
                            <header class="project__header">
                                <!-- <p class="project__title">I built this website for: <br><strong><i>{{ project.title }}</i></strong></p> -->
                                <img class="project__logo" :src="getProjectPath(project.logo)" :alt="`${project.title} logo`" />
                                <p class="project__title text--supporting"></p>
                                <!-- <p class="project__title text--supporting">{{ project.title }}</p> -->
                                <div class="dropdown" @click.stop="toggleDropdown(project.id)">
                                    <button class="dropdown__toggle">⋮</button>
                                    <ul v-if="project.showDropdown" class="dropdown__menu">
                                        <li><a :href="project.link" target="_blank" rel="noopener">View Website</a></li>
                                    </ul>
                                </div>
                            </header>
                            <div class="project__content">
                                <!-- <p class="project__title text--supporting">{{ project.title }}</p> -->
                                <p class="project__description"><strong>{{ project.title }}</strong> - {{ project.description }}</p>
                            </div>
                            <img v-if="project.images[0]" class="project__image" :src="getProjectPath(project.images[0].src)" :alt="project.images[0].alt" />
                            <footer class="project__footer">
                                <!-- <span class="project__footer-text">I built this website for:</span>
                                <span class="project__client">{{ project.title }}</span> -->
                            </footer>
                        </article>
                    </div>
                    <div class="col col-4">

                        <!-- Card 4: Image -->
                        <article class="bento__card image">
                            <p class="project__description">{{ project.role }}</p>
                            <!-- <img v-if="project.images[1]" :src="project.images[1].src" :alt="project.images[1].alt" /> -->
                        </article>

                         <!-- Card 3: Skills -->
                        <article class="bento__card skills">
                            <h4 class="skills__heading">Skills Used</h4>
                            <ul class="skills__tags text--small">
                                <li v-for="skill in project.skills" :key="skill" class="skills__tag">{{ skill }}</li>
                            </ul>
                            <h4 class="tools__heading">Tools Used</h4>
                            <div class="tools__logos">
                                <img v-for="tool in project.tools" :src="tool.src" :alt="tool.alt" :key="tool.alt" class="tools__logo" />
                            </div>
                        </article>

                        <!-- Card 2: Tools -->
                        <article class="bento__card tools">
                        <!-- <h4 class="tools__heading">Tools Used</h4>
                        <div class="tools__logos">
                            <img v-for="tool in project.tools" :src="tool.src" :alt="tool.alt" :key="tool.alt" class="tools__logo" />
                        </div> -->
                        </article>

                        <!-- Card 5: Image -->
                        <article class="bento__card image">
                            <img v-if="project.images[1]" :src="getProjectPath(project.images[1].src)" :alt="project.images[1].alt" />
                            <!-- <img v-if="project.images[2]" :src="project.images[2].src" :alt="project.images[2].alt" /> -->
                        </article>
                    </div>
                </div>
            </div>
</template>