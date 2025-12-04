<template>
  <img 
    :src="iconSrc" 
    :alt="weatherLabel"
    :class="sizeClasses"
    class="object-contain"
  />
</template>

<script lang="ts" setup>
import iconSunny from '~/assets/images/icon-sunny.webp'
import iconPartlyCloudy from '~/assets/images/icon-partly-cloudy.webp'
import iconOvercast from '~/assets/images/icon-overcast.webp'
import iconFog from '~/assets/images/icon-fog.webp'
import iconDrizzle from '~/assets/images/icon-drizzle.webp'
import iconRain from '~/assets/images/icon-rain.webp'
import iconSnow from '~/assets/images/icon-snow.webp'
import iconStorm from '~/assets/images/icon-storm.webp'
import { useWeatherIcon } from '~/composables/useWeatherIcon'

const props = withDefaults(defineProps<{
  code: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  size: 'md'
})

const { getWeatherInfo } = useWeatherIcon()

// Icon mapping
const iconMap: Record<string, string> = {
  'icon-sunny.webp': iconSunny,
  'icon-partly-cloudy.webp': iconPartlyCloudy,
  'icon-overcast.webp': iconOvercast,
  'icon-fog.webp': iconFog,
  'icon-drizzle.webp': iconDrizzle,
  'icon-rain.webp': iconRain,
  'icon-snow.webp': iconSnow,
  'icon-storm.webp': iconStorm,
}

// Get weather info
const weatherInfo = computed(() => getWeatherInfo(props.code))
const weatherLabel = computed(() => weatherInfo.value.label)

// Get icon source
const iconSrc = computed(() => {
  const iconName = weatherInfo.value.icon
  return iconMap[iconName] || iconMap['icon-overcast.webp']
})

// Size classes
const sizeClasses = computed(() => {
  const sizes = {
    xs: 'w-5 h-5',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  }
  return sizes[props.size]
})
</script>
