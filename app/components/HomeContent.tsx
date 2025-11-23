"use client";

import Image from "next/image";
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function HomeContent() {

    return (
        <ConnectButton />
    );
}