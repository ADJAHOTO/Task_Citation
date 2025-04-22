import Header from "@/components/ui/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col gap-4 p-4">
            <Header />
            {children}
        </div>
    )
}