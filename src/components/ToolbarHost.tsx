'use client';

import { TwentyFirstToolbar } from '@21st-extension/toolbar-next';

/**
 * Client-side wrapper for the 21st.dev toolbar
 * Keeps the parent layout as a Server Component while enabling toolbar interactivity
 */
export default function ToolbarHost() {
  return (
    <TwentyFirstToolbar
      config={{
        // Add your custom plugins here
        // Example: plugins: [{ id: 'performance', enabled: true }]
        plugins: [],
      }}
    />
  );
}
