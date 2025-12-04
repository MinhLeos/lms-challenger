<template>
  <div class="relative">
    <!-- Search Input -->
    <div class="relative">
      <img 
        src="~/assets/images/icon-search.svg" 
        alt="Search" 
        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60"
      />
      <input 
        v-model="query"
        type="text" 
        :placeholder="placeholder"
        class="w-full lg:min-w-96 bg-neutral-800 border border-neutral-800 rounded-xl py-3 pl-12 pr-4 text-neutral-0 placeholder:text-neutral-300 focus:outline focus:outline-offset-4 focus:outline-neutral-0 focus:outline-offset-transparent transition-colors"
        @input="handleInput"
        @focus="showDropdown = true"
        @blur="handleBlur"
        @keydown.down.prevent="navigateDown"
        @keydown.up.prevent="navigateUp"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.escape="closeDropdown"
      />
    </div>

    <!-- Dropdown Results -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div 
        v-if="showDropdown && (isSearching || locations.length > 0 || hasNoResults || searchError)"
        class="absolute z-50 w-full mt-4 bg-neutral-800 border border-neutral-600 rounded-xl shadow-lg overflow-hidden"
      >
        <!-- Search in Progress -->
        <div v-if="isSearching" class="px-4 py-3 flex items-center gap-3">
          <img 
            src="~/assets/images/icon-loading.svg" 
            alt="Loading" 
            class="w-5 h-5 animate-spin opacity-60"
          />
          <span class="text-neutral-300">Search in progress</span>
        </div>

        <!-- Results List -->
        <ul v-else-if="locations.length > 0" class="py-2">
          <li 
            v-for="(location, index) in locations" 
            :key="location.id"
            :class="[
              'px-4 py-3 cursor-pointer transition-colors flex items-center gap-3',
              highlightedIndex === index ? 'bg-neutral-700' : 'hover:bg-neutral-700'
            ]"
            @mousedown.prevent="selectLocation(location)"
            @mouseenter="highlightedIndex = index"
          >
            <div class="flex-1">
              <p class="text-neutral-0 font-medium">{{ location.name }}</p>
              <p class="text-neutral-300 text-sm">
                {{ location.admin1 ? `${location.admin1}, ` : '' }}{{ location.country }}
              </p>
            </div>
          </li>
        </ul>

        <!-- No Results -->
        <div v-else-if="hasNoResults" class="px-4 py-6 text-center">
          <p class="text-neutral-300">No locations found for "{{ query }}"</p>
          <p class="text-neutral-300 text-sm mt-1">Try a different search term</p>
        </div>

        <!-- Error -->
        <div v-else-if="searchError" class="px-4 py-6 text-center">
          <img 
            src="~/assets/images/icon-error.svg" 
            alt="Error" 
            class="w-8 h-8 mx-auto mb-2 opacity-60"
          />
          <p class="text-neutral-300">{{ searchError }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type { Location } from '~/types/Weather'
import { useGeocoding } from '~/composables/useGeocoding'

const props = withDefaults(defineProps<{
  placeholder?: string
  modelValue?: string
}>(), {
  placeholder: 'Search for a place...',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', location: Location): void
}>()

// Geocoding composable
const { 
  locations, 
  isSearching, 
  searchError, 
  hasNoResults,
  debouncedSearch, 
  clearSearch 
} = useGeocoding()

// Local state
const query = ref(props.modelValue)
const showDropdown = ref(false)
const highlightedIndex = ref(-1)

// Watch for external value changes
watch(() => props.modelValue, (newVal) => {
  query.value = newVal
})

// Handle input
function handleInput() {
  emit('update:modelValue', query.value)
  highlightedIndex.value = -1
  
  if (query.value.length >= 2) {
    debouncedSearch(query.value)
    showDropdown.value = true
  } else {
    clearSearch()
    showDropdown.value = false
  }
}

// Handle blur with delay to allow click on dropdown items
function handleBlur() {
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}

// Close dropdown
function closeDropdown() {
  showDropdown.value = false
  highlightedIndex.value = -1
}

// Navigate down in dropdown
function navigateDown() {
  if (locations.value.length > 0) {
    highlightedIndex.value = (highlightedIndex.value + 1) % locations.value.length
  }
}

// Navigate up in dropdown
function navigateUp() {
  if (locations.value.length > 0) {
    highlightedIndex.value = highlightedIndex.value <= 0 
      ? locations.value.length - 1 
      : highlightedIndex.value - 1
  }
}

// Select highlighted item
function selectHighlighted() {
  if (highlightedIndex.value >= 0 && highlightedIndex.value < locations.value.length) {
    selectLocation(locations.value[highlightedIndex.value])
  }
}

// Select a location
function selectLocation(location: Location) {
  query.value = location.name
  emit('update:modelValue', location.name)
  emit('select', location)
  closeDropdown()
  clearSearch()
}
</script>
