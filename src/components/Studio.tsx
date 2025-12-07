import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config'; // 👈 Importamos la config corregida

export default function StudioWrapper() {
  return (
    <div style={{ height: '100vh', maxHeight: '100dvh', overflow: 'hidden' }}>
      <Studio config={config} />
    </div>
  );
}