# 📁 Professional Folder Structure Guide

## Recommended Folder Structure for Next.js Portfolio

This structure follows best practices for scalability, maintainability, and developer experience.

```
src/
├── app/                          # Next.js App Router (keep as is)
│   ├── (portfolio)/             # Route group
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   └── page.tsx
│   ├── api/                      # API routes
│   ├── layout.tsx
│   ├── page.tsx                  # Home page
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── template.tsx
│   └── globals.css
│
├── components/                    # All React components
│   ├── shared/                   # Shared components used across multiple pages
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── root-layout.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── analytics.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── navigation/
│   │   │   ├── main-nav.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── nav-items.tsx
│   │   ├── logo/
│   │   │   └── LogoConcept1.tsx
│   │   ├── social-icons.tsx
│   │   └── tech-icons.tsx
│   │
│   ├── ui/                       # Reusable UI components (shadcn/ui)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── sonner.tsx
│   │   └── textarea.tsx
│   │
│   ├── animations/               # Animation components
│   │   ├── fade-in.tsx
│   │   ├── magnetic.tsx
│   │   ├── parallax.tsx
│   │   ├── scroll-progress.tsx
│   │   ├── slide-in.tsx
│   │   └── stagger-children.tsx
│   │
│   ├── homepage/                 # Home page specific components
│   │   ├── hero.tsx
│   │   ├── projects-preview.tsx
│   │   ├── skills-preview.tsx
│   │   ├── experience-preview.tsx
│   │   ├── testimonials-preview.tsx
│   │   └── contact-cta.tsx
│   │
│   ├── about/                    # About page components
│   │   ├── about-hero.tsx
│   │   ├── about-content.tsx
│   │   ├── about-timeline.tsx
│   │   └── about-stats.tsx
│   │
│   ├── projects/                 # Projects page components
│   │   ├── projects-hero.tsx
│   │   ├── projects-grid.tsx
│   │   ├── projects-filters.tsx
│   │   ├── project-card.tsx
│   │   └── project-details.tsx
│   │
│   ├── blog/                     # Blog page components
│   │   ├── blog-hero.tsx
│   │   ├── blog-list.tsx
│   │   ├── blog-card.tsx
│   │   ├── blog-filters.tsx
│   │   └── blog-post.tsx
│   │
│   ├── contact/                  # Contact page components
│   │   ├── contact-hero.tsx
│   │   ├── contact-form.tsx
│   │   ├── contact-info.tsx
│   │   └── contact-map.tsx
│   │
│   ├── blocks/                   # Reusable block components
│   │   ├── experience-timeline.tsx
│   │   ├── newsletter-signup.tsx
│   │   ├── skill-badge.tsx
│   │   └── testimonial-card.tsx
│   │
│   └── forms/                    # Form components
│       ├── contact-form.tsx
│       └── newsletter-form.tsx
│
├── data/                         # Data files and constants
│   ├── constants.ts
│   ├── filter-data.ts
│   ├── index.ts
│   ├── portfolio-data.ts
│   ├── site-data.ts
│   └── utils.ts
│
├── lib/                          # Utility libraries
│   ├── animations.ts
│   ├── cn.ts
│   ├── constants.ts
│   ├── fonts.ts
│   ├── navigation.ts
│   ├── utils.ts
│   ├── validations.ts
│   ├── site-config.ts
│   └── services/
│       ├── analytics.ts
│       ├── email-service.ts
│       └── storage.ts
│
├── hooks/                        # Custom React hooks
│   ├── use-animation-trigger.ts
│   ├── use-form-state.ts
│   ├── use-intersection-observer.ts
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   ├── use-scroll-position.ts
│   └── use-theme.ts
│
├── store/                        # State management
│   ├── form-store.ts
│   ├── index.ts
│   ├── theme-store.ts
│   └── ui-store.ts
│
├── types/                        # TypeScript type definitions
│   ├── api.ts
│   ├── forms.ts
│   ├── global.d.ts
│   ├── navigation.ts
│   └── portfolio.ts
│
├── styles/                       # Global styles
│   ├── animations.css
│   ├── components.css
│   ├── globals.css
│   └── themes/
│       ├── dark-theme.css
│       └── light-theme.css
│
└── middleware/                   # Middleware functions
    └── auth.ts
```

## 📋 Migration Guide

### Step 1: Create New Folder Structure

Create these folders:

```
src/components/
├── shared/
│   ├── layout/
│   └── navigation/
├── homepage/
├── about/
├── projects/
├── blog/
├── contact/
├── blocks/
└── forms/
```

### Step 2: Move Components

#### Move to `components/shared/layout/`:

- `components/layout/header.tsx` → `components/shared/layout/header.tsx`
- `components/layout/footer.tsx` → `components/shared/layout/footer.tsx`
- `components/layout/root-layout.tsx` → `components/shared/layout/root-layout.tsx`
- `components/layout/sidebar.tsx` → `components/shared/layout/sidebar.tsx`
- `components/layout/analytics.tsx` → `components/shared/layout/analytics.tsx`
- `components/layout/theme-provider.tsx` → `components/shared/layout/theme-provider.tsx`
- `components/layout/theme-toggle.tsx` → `components/shared/layout/theme-toggle.tsx`

#### Move to `components/shared/navigation/`:

- `components/layout/navigation/main-nav.tsx` → `components/shared/navigation/main-nav.tsx`
- `components/layout/navigation/mobile-nav.tsx` → `components/shared/navigation/mobile-nav.tsx`
- `components/layout/navigation/nav-items.tsx` → `components/shared/navigation/nav-items.tsx`

#### Move to `components/shared/`:

- `components/logo/LogoConcept1.tsx` → `components/shared/logo/LogoConcept1.tsx`
- `components/social-icons.tsx` → `components/shared/social-icons.tsx`
- `components/tech-icons.tsx` → `components/shared/tech-icons.tsx`

#### Move to `components/homepage/`:

- `components/sections/hero.tsx` → `components/homepage/hero.tsx`
- `components/sections/projects.tsx` → `components/homepage/projects-preview.tsx`
- `components/sections/skills.tsx` → `components/homepage/skills-preview.tsx`
- `components/sections/experience.tsx` → `components/homepage/experience-preview.tsx`
- `components/sections/testimonials.tsx` → `components/homepage/testimonials-preview.tsx`
- `components/sections/contact.tsx` → `components/homepage/contact-cta.tsx`

#### Move to `components/about/`:

- `components/sections/about.tsx` → `components/about/about-hero.tsx` (or split into multiple files)

#### Move to `components/projects/`:

- `components/blocks/project-card.tsx` → `components/projects/project-card.tsx`

#### Move to `components/blog/`:

- `components/sections/blog-section.tsx` → `components/blog/blog-hero.tsx`

#### Move to `components/contact/`:

- `components/blocks/contact-form.tsx` → `components/contact/contact-form.tsx`
- `components/forms/contact-form.tsx` → Check if duplicate, merge if needed

#### Keep in `components/blocks/`:

- `components/blocks/experience-timeline.tsx`
- `components/blocks/newsletter-signup.tsx`
- `components/blocks/skill-badge.tsx`
- `components/blocks/testimonial-card.tsx`
- `components/blocks/Testimonials.tsx`

#### Keep in `components/forms/`:

- `components/forms/newsletter-form.tsx`

#### Keep in `components/ui/`:

- All UI components (shadcn/ui components)

#### Keep in `components/animations/`:

- All animation components

### Step 3: Update Imports

After moving files, update all import paths:

**Before:**

```typescript
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
```

**After:**

```typescript
import { Hero } from "@/components/homepage/hero";
import { Footer } from "@/components/shared/layout/footer";
```

### Step 4: Update Page Files

Update `src/app/page.tsx`:

```typescript
import { Hero } from "@/components/homepage/hero";
import { ProjectsPreview } from "@/components/homepage/projects-preview";
import { SkillsPreview } from "@/components/homepage/skills-preview";
// etc.
```

Update `src/app/(portfolio)/about/page.tsx`:

```typescript
import { AboutHero } from "@/components/about/about-hero";
```

Update `src/app/(portfolio)/projects/page.tsx`:

```typescript
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectCard } from "@/components/projects/project-card";
```

Update `src/app/(portfolio)/contact/page.tsx`:

```typescript
import { ContactForm } from "@/components/contact/contact-form";
```

Update `src/app/layout.tsx`:

```typescript
import { RootLayout } from "@/components/shared/layout/root-layout";
```

## 🎯 Benefits of This Structure

1. **Scalability**: Easy to add new pages and components
2. **Maintainability**: Clear separation of concerns
3. **Developer Experience**: Easy to find components
4. **Team Collaboration**: Clear ownership of components
5. **Performance**: Better code splitting opportunities
6. **Type Safety**: Easier to manage TypeScript types

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `ProjectCard.tsx`)
- **Folders**: kebab-case (e.g., `homepage/`, `project-card/`)
- **Files**: kebab-case for pages, PascalCase for components
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme.ts`)
- **Utils**: camelCase (e.g., `cn.ts`, `utils.ts`)

## 🔄 Alternative: Feature-Based Structure

If you prefer feature-based organization:

```
components/
├── features/
│   ├── homepage/
│   ├── about/
│   ├── projects/
│   └── contact/
├── shared/
└── ui/
```

Choose the structure that best fits your team and project needs!
