"use client";
import React from 'react';
import { Page, Text, View,  PDFViewer,  Document, StyleSheet } from '@react-pdf/renderer';
import CvUn from "./Components/CvUn";


export default function Home() {
  return (
    <main className="w-screen h-screen">
      <PDFViewer className='h-full w-full'>
        <CvUn/>
      </PDFViewer>
    </main>
  );
}

