import SolidButton from '@/components/Buttons/SolidButton';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div>Olá, mundo!</div>
      <br />
      <SolidButton>texto do SolidButton</SolidButton>
      <SolidButton color='secondary' size='md'>
        texto do SolidButton
      </SolidButton>
      <SolidButton color='danger' size='lg'>
        texto do SolidButton
      </SolidButton>
    </main>
  );
}
