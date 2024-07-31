"use client";

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import CvUn from './Components/CvUn';
//import CvDeux from './Components/CVDeux';
//import CvTrois from './Components/CvTrois';
//import CvQuatre from './Components/CvQuatre';
//import CvCinq from './Components/CvCinq';


export default function Home() {
  return (
    <main className="w-screen h-screen">

      <PDFViewer className="h-full w-full" /*showToolbar={false}*/>
        <CvUn />

        {/*<CvDeux />*/}

        {/*<CvTrois/>*/}

        {/*<CvQuatre />


        {/*<CvCinq />*/}

      </PDFViewer>
    </main>
  );
}

