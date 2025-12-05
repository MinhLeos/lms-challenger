# Plan: Multi-step Form (Challenger Seven)

## 📋 Phân tích Requirement

### Mục tiêu
Xây dựng một multi-step form cho phép người dùng đăng ký dịch vụ với các bước:
1. Nhập thông tin cá nhân
2. Chọn gói dịch vụ (Plan)
3. Chọn tiện ích bổ sung (Add-ons)
4. Xem tóm tắt và xác nhận
5. Hiển thị thông báo thành công

### Yêu cầu chức năng

#### Navigation
- [x] Hoàn thành từng bước của form
- [x] Quay lại bước trước để cập nhật lựa chọn
- [x] Hiển thị sidebar với các bước (1-4)
- [x] Highlight bước hiện tại trong sidebar

#### Step 1: Personal Info
- [x] Input: Name (required)
- [x] Input: Email (required, validate format)
- [x] Input: Phone Number (required)
- [x] Validation messages khi bỏ trống hoặc sai format

#### Step 2: Select Plan
- [x] 3 options: Arcade, Advanced, Pro
- [x] Toggle: Monthly / Yearly
- [x] Hiển thị giá theo billing period
- [x] Yearly có bonus "2 months free"
- [x] Validation: phải chọn 1 plan

#### Step 3: Pick Add-ons
- [x] Checkbox: Online service
- [x] Checkbox: Larger storage
- [x] Checkbox: Customizable profile
- [x] Giá thay đổi theo Monthly/Yearly
- [x] Có thể chọn nhiều hoặc không chọn

#### Step 4: Finishing Up (Summary)
- [x] Hiển thị plan đã chọn + giá
- [x] Hiển thị add-ons đã chọn + giá
- [x] Tính tổng tiền
- [x] Link "Change" để quay lại Step 2
- [x] Button "Confirm" để hoàn thành

#### Step 5: Thank You
- [x] Hiển thị icon success
- [x] Thông báo cảm ơn
- [x] Mô tả ngắn về việc liên hệ support

### Yêu cầu UI/UX
- [x] Responsive: Mobile (375px) và Desktop (1440px)
- [x] Hover states cho buttons, inputs, cards
- [x] Focus states cho inputs
- [x] Error states với màu đỏ
- [x] Smooth transitions giữa các steps

---

## 🎨 Design Analysis

### Layout Structure

#### Desktop
```
┌─────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌─────────────────────────────────────┐  │
│  │ SIDEBAR  │  │           CONTENT AREA              │  │
│  │          │  │                                     │  │
│  │ 1 ● Info │  │  Step Title                         │  │
│  │ 2 ○ Plan │  │  Step Description                   │  │
│  │ 3 ○ Adds │  │                                     │  │
│  │ 4 ○ Sum  │  │  [Form Content]                     │  │
│  │          │  │                                     │  │
│  │          │  │                                     │  │
│  │          │  │          [Go Back]  [Next Step]     │  │
│  └──────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

#### Mobile
```
┌─────────────────────┐
│  1 ● 2 ○ 3 ○ 4 ○    │  ← Sidebar horizontal (top)
│  ─────────────────  │
│  Background Image   │
└─────────────────────┘
┌─────────────────────┐
│  Step Title         │  ← Content card (floating)
│  Step Description   │
│                     │
│  [Form Content]     │
│                     │
└─────────────────────┘
┌─────────────────────┐
│  [Back]  [Next]     │  ← Fixed bottom bar
└─────────────────────┘
```

### Color Palette (Tailwind Config)

```js
colors: {
  // Primary
  'blue-950': 'hsl(213, 96%, 18%)',    // Marine blue - primary text, buttons
  'purple-600': 'hsl(243, 100%, 62%)', // Purplish blue - focus, active
  'blue-300': 'hsl(228, 100%, 84%)',   // Pastel blue - highlights
  'blue-200': 'hsl(206, 94%, 87%)',    // Light blue - backgrounds
  'red-500': 'hsl(354, 84%, 57%)',     // Strawberry red - errors

  // Neutral
  'grey-500': 'hsl(231, 11%, 63%)',    // Cool gray - labels, placeholders
  'purple-200': 'hsl(229, 24%, 87%)',  // Light gray - borders
  'blue-100': 'hsl(218, 100%, 97%)',   // Magnolia - backgrounds
  'blue-50': 'hsl(231, 100%, 99%)',    // Alabaster - page background
}
```

### Typography
- Font: Ubuntu (400, 500, 700)
- Base size: 16px

---

## 🛠️ Implementation Steps

### Phase 1: Setup & Configuration

#### Step 1.1: Cấu hình Font và Colors
- [ ] Download font Ubuntu (hoặc link Google Fonts)
- [ ] Cập nhật `tailwind.config.js` với color palette
- [ ] Cập nhật `assets/css/tailwind.css` với font-face

#### Step 1.2: Tạo Layout
- [ ] Tạo `layouts/challenger-seven.vue`
- [ ] Setup responsive sidebar (vertical desktop, horizontal mobile)
- [ ] Background pattern cho sidebar

#### Step 1.3: Tạo Page chính
- [ ] Tạo `pages/challenger-seven.vue`
- [ ] Import layout

---

### Phase 2: State Management & Types

#### Step 2.1: Định nghĩa Types
- [ ] Tạo `types/MultiStepForm.ts`
  - FormData interface
  - Plan type
  - AddOn type
  - Step type

#### Step 2.2: Tạo Composable
- [ ] Tạo `composables/useMultiStepForm.ts`
  - currentStep state
  - formData state
  - navigation functions (next, back, goTo)
  - validation functions
  - computed values (total price, etc.)

---

### Phase 3: Components

#### Step 3.1: Shared Components
- [ ] `components/MultiStep/Sidebar.vue` - Step indicator
- [ ] `components/MultiStep/StepHeader.vue` - Title + description
- [ ] `components/MultiStep/NavigationButtons.vue` - Back/Next buttons
- [ ] `components/MultiStep/FormInput.vue` - Styled input với validation

#### Step 3.2: Step Components
- [ ] `components/MultiStep/Step1PersonalInfo.vue`
- [ ] `components/MultiStep/Step2SelectPlan.vue`
- [ ] `components/MultiStep/Step3AddOns.vue`
- [ ] `components/MultiStep/Step4Summary.vue`
- [ ] `components/MultiStep/Step5ThankYou.vue`

#### Step 3.3: Sub-components
- [ ] `components/MultiStep/PlanCard.vue` - Card cho mỗi plan
- [ ] `components/MultiStep/BillingToggle.vue` - Monthly/Yearly toggle
- [ ] `components/MultiStep/AddOnCheckbox.vue` - Checkbox cho add-ons

---

### Phase 4: Validation & Logic

#### Step 4.1: Form Validation
- [ ] Validate Step 1: required fields, email format
- [ ] Validate Step 2: plan selection required
- [ ] Show error messages

#### Step 4.2: Price Calculation
- [ ] Calculate plan price (monthly/yearly)
- [ ] Calculate add-ons price
- [ ] Calculate total

---

### Phase 5: Styling & Polish

#### Step 5.1: Responsive Design
- [ ] Mobile layout (375px)
- [ ] Desktop layout (1440px)
- [ ] Tablet breakpoints

#### Step 5.2: Interactive States
- [ ] Hover states
- [ ] Focus states
- [ ] Active/Selected states
- [ ] Error states

#### Step 5.3: Animations
- [ ] Step transition animations
- [ ] Button hover animations
- [ ] Checkbox animations

---

### Phase 6: Testing & Refinement

#### Step 6.1: Testing
- [ ] Test form validation
- [ ] Test navigation flow
- [ ] Test price calculations
- [ ] Test responsive design

#### Step 6.2: Accessibility
- [ ] Keyboard navigation
- [ ] ARIA labels
- [ ] Focus management

---

## 📁 File Structure

```
components/
  MultiStep/
    Sidebar.vue
    StepHeader.vue
    NavigationButtons.vue
    FormInput.vue
    PlanCard.vue
    BillingToggle.vue
    AddOnCheckbox.vue
    Step1PersonalInfo.vue
    Step2SelectPlan.vue
    Step3AddOns.vue
    Step4Summary.vue
    Step5ThankYou.vue

composables/
  useMultiStepForm.ts

types/
  MultiStepForm.ts

layouts/
  challenger-seven.vue

pages/
  challenger-seven.vue

utils/
  multistep-constants.ts

assets/
  images/
    challenger-seven/
      bg-sidebar-desktop.svg
      bg-sidebar-mobile.svg
      icon-arcade.svg
      icon-advanced.svg
      icon-pro.svg
      icon-checkmark.svg
      icon-thank-you.svg
```

---

## 📊 Data Structure

```typescript
// types/MultiStepForm.ts

interface PersonalInfo {
  name: string
  email: string
  phone: string
}

interface Plan {
  id: 'arcade' | 'advanced' | 'pro'
  name: string
  monthlyPrice: number
  yearlyPrice: number
  icon: string
}

interface AddOn {
  id: 'online-service' | 'larger-storage' | 'customizable-profile'
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

interface FormData {
  personalInfo: PersonalInfo
  selectedPlan: Plan['id'] | null
  billingPeriod: 'monthly' | 'yearly'
  addOns: AddOn['id'][]
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  plan?: string
}
```

---

## 💰 Pricing Data

### Plans
| Plan | Monthly | Yearly |
|------|---------|--------|
| Arcade | $9/mo | $90/yr |
| Advanced | $12/mo | $120/yr |
| Pro | $15/mo | $150/yr |

### Add-ons
| Add-on | Monthly | Yearly |
|--------|---------|--------|
| Online service | +$1/mo | +$10/yr |
| Larger storage | +$2/mo | +$20/yr |
| Customizable profile | +$2/mo | +$20/yr |

---

## ⏱️ Estimated Timeline

| Phase | Estimated Time |
|-------|---------------|
| Phase 1: Setup | 1 hour |
| Phase 2: State Management | 1 hour |
| Phase 3: Components | 3-4 hours |
| Phase 4: Validation | 1 hour |
| Phase 5: Styling | 2-3 hours |
| Phase 6: Testing | 1 hour |
| **Total** | **9-11 hours** |

---

## 🚀 Ready to Start?

Bắt đầu với Phase 1: Setup & Configuration!
