"use client";

import Header from "@/components/Header";
import Images from "@/components/Images";
import PromptInput from "@/components/PromptInput";
import { RecoilRoot } from "recoil";
import {Toaster} from 'sonner'

export default function Home() {
  return (
    <RecoilRoot>
      <Toaster position="top-center" />
      <main>
        <Header />
        
        <PromptInput />
        <Images />
      </main>
    </RecoilRoot>
  );
}
