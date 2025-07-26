<template>
  <div
    class="modal-overlay"
    role="dialog"
    :aria-modal="true"
    :aria-labelledby="'modal-title-' + project.id"
    tabindex="-1"
    @keydown.esc="$emit('close')"
    @click.self="$emit('close')"
  >
    <div class="modal-content" ref="modalContent">
      <button
        class="modal-close"
        @click="$emit('close')"
        aria-label="Close project details"
      >
        &times;
      </button>
      <h2 :id="'modal-title-' + project.id" class="modal-title">
        {{ project.title }}
      </h2>
      <div class="modal-body">
        <div v-if="project.images && project.images[0]" class="modal-image">
          <img
            :src="getProjectPath(project.images[0].src)"
            :alt="project.images[0].alt"
            loading="lazy"
          />
        </div>
        <div class="modal-description">
          <p v-for="(line, idx) in project.description.split('\n')" :key="idx">
            {{ line }}
          </p>
        </div>
        <div v-if="project.skills" class="modal-skills">
          <span
            v-for="skill in project.skills"
            :key="skill"
            class="skill-badge"
            >{{ skill }}</span
          >
        </div>
        <div class="modal-actions">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
            :aria-label="`Visit ${project.title} website (opens in new tab)`"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: { type: Object, required: true },
    getProjectPath: { type: Function, required: true },
  },
  mounted() {
    this.$refs.modalContent.focus()
    document.body.style.overflow = 'hidden'
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}
.modal-content {
  background: #fff;
  border-radius: 16px;
  max-width: 95vw;
  width: 420px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  position: relative;
  outline: none;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
}
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  transition: color 0.2s;
}
.modal-close:hover,
.modal-close:focus {
  color: #222;
}
.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 700;
}
.modal-image img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.modal-description {
  color: #444;
  margin-bottom: 1rem;
}
.modal-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.skill-badge {
  background: linear-gradient(135deg, #6a82fb, #fc5c7d);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
}
.modal-actions {
  margin-top: 1rem;
}
.btn-primary {
  background: #6a82fb;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
  display: inline-block;
}
.btn-primary:hover,
.btn-primary:focus {
  background: #fc5c7d;
}
@media (max-width: 600px) {
  .modal-content {
    width: 98vw;
    padding: 1.2rem 0.5rem 1rem 0.5rem;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
