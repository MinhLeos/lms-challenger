# 🌤️ Weather App - Implementation Plan

## 📋 Tổng quan dự án

Xây dựng ứng dụng thời tiết sử dụng **Open-Meteo API** với Nuxt 3 + TailwindCSS.

---

## 🎨 Design Analysis

### Breakpoints
| Thiết bị | Kích thước |
|----------|------------|
| Mobile | 375px |
| Desktop | 1440px |
| Range test | 320px → large screens |

### Color Palette
```css
/* Neutral */
--neutral-900: hsl(243, 96%, 9%);    /* Background chính - tím đen đậm */
--neutral-800: hsl(243, 27%, 20%);   /* Card background */
--neutral-700: hsl(243, 23%, 24%);   /* Card secondary */
--neutral-600: hsl(243, 23%, 30%);   /* Border/divider */
--neutral-300: hsl(240, 6%, 70%);    /* Text muted */
--neutral-200: hsl(250, 6%, 84%);    /* Text light */
--neutral-0: hsl(0, 0%, 100%);       /* Text white */

/* Accent */
--orange-500: hsl(28, 100%, 52%);    /* Highlight/Active */
--blue-500: hsl(233, 67%, 56%);      /* Links/Buttons */
--blue-700: hsl(248, 70%, 36%);      /* Hover states */
```

### Typography
| Font | Weight | Sử dụng |
|------|--------|---------|
| DM Sans | 300, 500, 600, 700 | Body text |
| Bricolage Grotesque | 700 | Headings |
| Base size | 18px | Body copy |

---

## 📁 Assets có sẵn

### Fonts (Local - `/assets/fonts/`)

#### DM Sans (`/assets/fonts/DM_Sans/static/`)
| File | Weight |
|------|--------|
| `DMSans-Light.ttf` | 300 |
| `DMSans-Medium.ttf` | 500 |
| `DMSans-SemiBold.ttf` | 600 |
| `DMSans-SemiBoldItalic.ttf` | 600 Italic |
| `DMSans-Bold.ttf` | 700 |

#### Bricolage Grotesque (`/assets/fonts/Bricolage_Grotesque/static/`)
| File | Weight |
|------|--------|
| `BricolageGrotesque-Bold.ttf` | 700 |

### Images (`/assets/images/`)

#### Background
| File | Mô tả |
|------|-------|
| `bg-today-large.svg` | Background desktop |
| `bg-today-small.svg` | Background mobile |

#### Weather Icons (webp)
| File | Điều kiện |
|------|-----------|
| `icon-sunny.webp` | ☀️ Trời nắng |
| `icon-partly-cloudy.webp` | ⛅ Có mây |
| `icon-overcast.webp` | ☁️ U ám |
| `icon-fog.webp` | 🌫️ Sương mù |
| `icon-drizzle.webp` | 🌦️ Mưa phùn |
| `icon-rain.webp` | 🌧️ Mưa |
| `icon-snow.webp` | 🌨️ Tuyết |
| `icon-storm.webp` | ⛈️ Bão |

#### UI Icons (svg)
| File | Mô tả |
|------|-------|
| `logo.svg` | Logo app |
| `icon-search.svg` | Icon tìm kiếm |
| `icon-dropdown.svg` | Icon dropdown |
| `icon-units.svg` | Icon đơn vị |
| `icon-loading.svg` | Loading spinner |
| `icon-error.svg` | Error icon |
| `icon-retry.svg` | Retry icon |
| `icon-checkmark.svg` | Checkmark |
| `favicon-32x32.png` | Favicon |

---

## 🏗️ Cấu trúc Components

```
components/
└── Weather/
    ├── SearchBar.vue           # Thanh tìm kiếm địa điểm
    ├── CurrentWeather.vue      # Thời tiết hiện tại (icon, temp, location)
    ├── WeatherMetrics.vue      # Feels like, humidity, wind, precipitation
    ├── DailyForecast.vue       # Dự báo 7 ngày
    ├── HourlyForecast.vue      # Dự báo theo giờ
    ├── DaySelector.vue         # Chọn ngày cho hourly forecast
    ├── UnitToggle.vue          # Toggle Imperial/Metric
    ├── WeatherIcon.vue         # Dynamic weather icons
    ├── LoadingState.vue        # Loading skeleton
    ├── ErrorState.vue          # API error display
    └── NoResults.vue           # Không tìm thấy kết quả
```

---

## 📱 Responsive Layout

### Mobile (375px)
```
┌─────────────────────────┐
│      Search Bar         │
├─────────────────────────┤
│    Current Weather      │
│    (Icon + Temp)        │
│    Location Details     │
├─────────────────────────┤
│    Weather Metrics      │
│   (2x2 grid cards)      │
├─────────────────────────┤
│    7-Day Forecast       │
│   (Vertical list)       │
├─────────────────────────┤
│   Day Selector Tabs     │
├─────────────────────────┤
│   Hourly Forecast       │
│  (Horizontal scroll)    │
└─────────────────────────┘
```

### Desktop (1440px)
```
┌──────────────────────────────────────────────────────┐
│  Search Bar                           Unit Toggle    │
├──────────────────────────────────────────────────────┤
│                    │                                 │
│  Current Weather   │        7-Day Forecast           │
│  (Large icon)      │        (List view)              │
│  Temperature       │                                 │
│  Location          │                                 │
│                    │                                 │
├────────────────────┼─────────────────────────────────┤
│  Weather Metrics   │     Hourly Forecast             │
│  (4 cards row)     │     (Day selector + chart)      │
│                    │                                 │
└──────────────────────────────────────────────────────┘
```

---

## 🔌 API Integration

### Open-Meteo Endpoints

#### 1. Geocoding (Tìm địa điểm)
```
GET https://geocoding-api.open-meteo.com/v1/search
?name={city_name}
&count=5
&language=en
&format=json
```

#### 2. Weather Forecast
```
GET https://api.open-meteo.com/v1/forecast
?latitude={lat}
&longitude={lon}
&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m
&hourly=temperature_2m,weather_code
&daily=weather_code,temperature_2m_max,temperature_2m_min
&timezone=auto
&temperature_unit=celsius|fahrenheit
&wind_speed_unit=kmh|mph
&precipitation_unit=mm|inch
```

### Composables
```
composables/
├── useWeather.ts        # Fetch weather data
├── useGeocoding.ts      # Search locations
├── useUnits.ts          # Unit conversion & toggle
└── useWeatherIcon.ts    # Map weather code to icon
```

---

## 📝 Implementation Tasks

### Phase 1: Setup & Base Layout
- [ ] 1.1 Cập nhật `tailwind.config.js` với color palette
- [ ] 1.2 Setup local fonts trong `tailwind.css` (@font-face)
- [ ] 1.3 Tạo layout `challenger-six.vue`
- [ ] 1.4 Cập nhật page `challenger-six.vue`

### Phase 2: Core Components
- [ ] 2.1 `SearchBar.vue` - Input với autocomplete dropdown
- [ ] 2.2 `CurrentWeather.vue` - Hiển thị thời tiết chính
- [ ] 2.3 `WeatherMetrics.vue` - 4 metric cards
- [ ] 2.4 `WeatherIcon.vue` - Map weather codes

### Phase 3: Forecast Components
- [ ] 3.1 `DailyForecast.vue` - 7 ngày
- [ ] 3.2 `DaySelector.vue` - Tab chọn ngày
- [ ] 3.3 `HourlyForecast.vue` - Theo giờ

### Phase 4: API Integration
- [ ] 4.1 `useGeocoding.ts` composable
- [ ] 4.2 `useWeather.ts` composable
- [ ] 4.3 `useUnits.ts` composable
- [ ] 4.4 Weather code mapping

### Phase 5: UI States
- [ ] 5.1 `LoadingState.vue` - Skeleton loading
- [ ] 5.2 `ErrorState.vue` - API error
- [ ] 5.3 `NoResults.vue` - Không tìm thấy
- [ ] 5.4 Hover & Focus states

### Phase 6: Unit Toggle & Polish
- [ ] 6.1 `UnitToggle.vue` - Dropdown Metric/Imperial
- [ ] 6.2 Responsive testing (320px → 1440px+)
- [ ] 6.3 Accessibility (WCAG)
- [ ] 6.4 Performance optimization

---

## 🎯 Weather Codes Mapping

| Code | Điều kiện | Icon File |
|------|-----------|-----------|
| 0 | Clear sky | `icon-sunny.webp` |
| 1, 2, 3 | Partly cloudy | `icon-partly-cloudy.webp` |
| 45, 48 | Fog | `icon-fog.webp` |
| 51, 53, 55 | Drizzle | `icon-drizzle.webp` |
| 61, 63, 65 | Rain | `icon-rain.webp` |
| 71, 73, 75 | Snow | `icon-snow.webp` |
| 80, 81, 82 | Rain showers | `icon-rain.webp` |
| 85, 86 | Snow showers | `icon-snow.webp` |
| 95, 96, 99 | Thunderstorm | `icon-storm.webp` |
| Default | Overcast | `icon-overcast.webp` |

---

## 📁 File Structure

```
├── pages/
│   └── challenger-six.vue        # Weather app page
├── layouts/
│   └── challenger-six.vue        # Weather layout (dark theme)
├── components/
│   └── Weather/
│       ├── SearchBar.vue
│       ├── CurrentWeather.vue
│       ├── WeatherMetrics.vue
│       ├── DailyForecast.vue
│       ├── HourlyForecast.vue
│       ├── DaySelector.vue
│       ├── UnitToggle.vue
│       ├── WeatherIcon.vue
│       ├── LoadingState.vue
│       ├── ErrorState.vue
│       └── NoResults.vue
├── composables/
│   ├── useWeather.ts
│   ├── useGeocoding.ts
│   ├── useUnits.ts
│   └── useWeatherIcon.ts
├── types/
│   └── Weather.ts
└── utils/
    └── weather-constants.ts
```

---

## ⏱️ Timeline ước tính

| Phase | Thời gian |
|-------|-----------|
| Phase 1: Setup | 1-2 giờ |
| Phase 2: Core Components | 3-4 giờ |
| Phase 3: Forecast Components | 2-3 giờ |
| Phase 4: API Integration | 2-3 giờ |
| Phase 5: UI States | 1-2 giờ |
| Phase 6: Polish | 2-3 giờ |
| **Tổng cộng** | **11-17 giờ** |

---

## 🚀 Bắt đầu

```bash
# Chạy dev server
npm run dev

# Truy cập
http://localhost:3000/challenger-six
```

---

## 📚 Tài liệu tham khảo

- [Open-Meteo API Docs](https://open-meteo.com/en/docs)
- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [TailwindCSS](https://tailwindcss.com/docs)

---

## 🔤 Font Face Setup Example

```css
/* assets/css/tailwind.css */

/* DM Sans */
@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DM_Sans/static/DMSans-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DM_Sans/static/DMSans-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DM_Sans/static/DMSans-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DM_Sans/static/DMSans-SemiBoldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DM_Sans/static/DMSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

/* Bricolage Grotesque */
@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('@/assets/fonts/Bricolage_Grotesque/static/BricolageGrotesque-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
```
