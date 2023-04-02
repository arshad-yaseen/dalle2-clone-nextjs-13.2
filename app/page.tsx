"use client";

import Header from "@/components/Header";
import Images from "@/components/Images";
import PromptInput from "@/components/PromptInput";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main>
        <Header />
        
        <PromptInput />
        <Images />
      </main>
    </RecoilRoot>
  );
}
