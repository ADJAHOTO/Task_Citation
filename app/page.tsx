import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>URL: /</CardTitle>
      </CardHeader>
      
          <CardContent>
          <Link className={buttonVariants({
                size: 'lg',
                variant: 'outline',
              })} href="/admin"
              >
                /admin
            </Link>
            
            <Button>Click me</Button>

          </CardContent>
    </Card>

  );
}
