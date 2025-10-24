'use client';

import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

export const BodyScrollbarInitializer: FCC = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && document?.body) {
      // Nếu đã init rồi thì bỏ qua
      if (!(document.body as any)._osInstance) {
        OverlayScrollbars(document.body, {
          scrollbars: {
            autoHide: 'leave',
          },
        });
      }
    }
  }, []);

  return <>{children}</>;
};
