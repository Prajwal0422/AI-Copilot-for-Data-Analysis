# Component Library Documentation

## Overview
This document describes all reusable components created for the AI Data Copilot application.

---

## Components

### 1. LoadingSpinner
**Purpose**: Animated typing indicator for AI responses

**Props**: None

**Usage**:
```tsx
import LoadingSpinner from "@/components/LoadingSpinner";

<LoadingSpinner />
```

**Features**:
- Three animated dots
- Pulsing animation with staggered delays
- Blue color theme

---

### 2. DatasetCard
**Purpose**: Display dataset information with selection state

**Props**:
- `name: string` - Dataset filename
- `rows: number` - Number of rows
- `columns: number` - Number of columns
- `isSelected: boolean` - Selection state
- `onClick: () => void` - Click handler

**Usage**:
```tsx
import DatasetCard from "@/components/DatasetCard";

<DatasetCard
  name="sales_data.csv"
  rows={1250}
  columns={8}
  isSelected={true}
  onClick={() => handleSelect()}
/>
```

**Features**:
- Hover and tap animations
- Selected state with blue border and shadow
- Database icon
- Formatted row count

---

### 3. StatCard
**Purpose**: Display metric statistics with color coding

**Props**:
- `label: string` - Metric label
- `value: string` - Metric value
- `color: string` - Text color class
- `bg: string` - Background color class
- `border: string` - Border color class
- `delay?: number` - Animation delay

**Usage**:
```tsx
import StatCard from "@/components/StatCard";

<StatCard
  label="Queries"
  value="24"
  color="text-blue-400"
  bg="bg-blue-500/10"
  border="border-blue-500/30"
  delay={0.5}
/>
```

**Features**:
- Entrance animation with delay
- Hover animation (scale + translate)
- Color-coded backgrounds and borders

---

### 4. WorkflowStep
**Purpose**: Display individual workflow step with state

**Props**:
- `name: string` - Step name
- `icon: LucideIcon` - Lucide icon component
- `color: string` - Active color class
- `isActive: boolean` - Active state
- `isComplete: boolean` - Complete state
- `showConnector?: boolean` - Show connecting line
- `connectorComplete?: boolean` - Connector filled state

**Usage**:
```tsx
import WorkflowStep from "@/components/WorkflowStep";
import { Activity } from "lucide-react";

<WorkflowStep
  name="Query"
  icon={Activity}
  color="text-cyan-400"
  isActive={true}
  isComplete={false}
  showConnector={true}
  connectorComplete={false}
/>
```

**Features**:
- Animated scale and color transitions
- Three states: inactive, active, complete
- Optional animated connector line
- Shadow effects based on state

---

### 5. MessageBubble
**Purpose**: Display chat message with role-based styling

**Props**:
- `content: string` - Message text
- `role: "user" | "assistant"` - Message sender
- `delay?: number` - Animation delay

**Usage**:
```tsx
import MessageBubble from "@/components/MessageBubble";

<MessageBubble
  content="Hello! How can I help?"
  role="assistant"
  delay={0.1}
/>
```

**Features**:
- Fade-in animation
- User messages: blue gradient, right-aligned
- Assistant messages: slate background, left-aligned
- Shadow effects

---

### 6. UploadZone
**Purpose**: File upload drop zone

**Props**:
- `onUpload?: (file: File) => void` - Upload handler

**Usage**:
```tsx
import UploadZone from "@/components/UploadZone";

<UploadZone onUpload={(file) => handleUpload(file)} />
```

**Features**:
- Dashed border
- Hover effects (scale, border color, background)
- Upload icon
- Placeholder text

---

### 7. TechBadge
**Purpose**: Display technology stack badge

**Props**:
- `name: string` - Technology name
- `delay?: number` - Animation delay

**Usage**:
```tsx
import TechBadge from "@/components/TechBadge";

<TechBadge name="Next.js" delay={0.5} />
```

**Features**:
- Slide-in entrance animation
- Hover animation (scale + translate)
- Slate background with border
- Hover state changes

---

## Design System

### Colors
- **Blue**: Primary actions, active states
- **Green**: Success, complete states
- **Purple**: Secondary accents
- **Slate**: Backgrounds, borders

### Animations
- **Duration**: 0.3s - 0.5s
- **Easing**: Default Framer Motion easing
- **Delays**: Staggered (0.1s - 0.5s increments)

### Spacing
- **Padding**: p-3 (12px), p-4 (16px)
- **Gaps**: gap-2 (8px), gap-3 (12px)
- **Rounded**: rounded-lg (8px), rounded-xl (12px)

### Borders
- **Default**: border-slate-700
- **Hover**: border-slate-600
- **Active**: border-blue-500

---

## Usage Guidelines

### 1. Import Components
```tsx
import ComponentName from "@/components/ComponentName";
```

### 2. Use with Props
Pass required props and optional props as needed.

### 3. Customize Colors
Use Tailwind color classes for customization.

### 4. Animation Delays
Use staggered delays for sequential animations.

---

## Future Components

### Planned
- ChartVisualization
- DataTable
- FilterPanel
- ExportButton
- SettingsModal

---

## Best Practices

1. **Reusability**: Keep components generic and configurable
2. **Props**: Use TypeScript interfaces for type safety
3. **Animations**: Use Framer Motion for consistency
4. **Styling**: Use Tailwind classes, avoid inline styles
5. **Accessibility**: Add ARIA labels where needed

---

**Status**: ✅ 7 Components Created
**Quality**: Production Ready
**Documentation**: Complete
