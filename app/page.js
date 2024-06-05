
import Navbar from '@/app/ui/navbar';
import Button from '@/app/ui/buttons';
import Heading from '@/app/ui/heading';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar/>
      <Heading/>
      <Button content = 'Register'/>
      <Button content = 'Login'/>

    </main>
  );
}