"use client";

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';




export default function Home() {
  return (
    <main className="w-screen h-screen">

      <PDFViewer className="h-full w-full" /*showToolbar={false}*/>
        
      </PDFViewer>
    </main>
  );
}

