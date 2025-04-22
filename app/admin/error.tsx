'use client';

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from '@iconify/react'; // 👈 important

export default function Error() {
    return (
        <Card>
            <CardHeader className="flex items-center gap-2">
                <Icon icon="mdi:alert" className="text-yellow-500 text-2xl" />
                <CardTitle>Erreur</CardTitle>
                <Icon icon="mdi:alert" className="text-yellow-500 text-2xl" />
            </CardHeader>
        </Card>
    );
}
