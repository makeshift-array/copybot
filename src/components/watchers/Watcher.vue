<template>
  <md-list-item class="watcher">
    <md-icon>whatshot</md-icon>
    <span>{{ watcher.name }}</span>

    <md-list-expand>
      <md-list>
        <md-list-item class="md-inset">Source: {{ watcher.source }}</md-list-item>
        <md-list-item class="md-inset">Destination: {{ watcher.destination }}</md-list-item>
      </md-list>
    </md-list-expand>
  </md-list-item>
</template>

<script>
export default {
  name: 'watcher',
  props: ['watcher']
}
</script>
