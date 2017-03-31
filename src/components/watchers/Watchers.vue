<template>
  <md-list class="watchers">
    <watcher v-for="watcher in $store.state.watchers" v-if="typeof group !== 'undefined' && watcher.group_id === group.id" :watcher="watcher"></watcher>
    <watcher v-for="watcher in $store.state.watchers" v-if="typeof group === 'undefined'" :watcher="watcher"></watcher>
  </md-list>
</template>

<script>
import Watcher from './Watcher'

export default {
  name: 'watchers',
  props: ['group'],
  components: {
    Watcher
  }
}
</script>
