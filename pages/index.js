import dynamic from 'next/dynamic';
const Stepper = dynamic(
  () => import('components/stepper'),
  { ssr: false }
);
const Step = dynamic(
  () => import('components/stepper').then((mod) => mod.Step),
  { ssr: false }
);

function Index() {
  return (
    <Stepper id="main">
      <Step key="1" id="dneo" no="1" label="desknet's NEO">
        Let's login to desknet's NEO.
      </Step>
      <Step key="2" id="google" no="2" label="Google">
        Let's login to Google. 
      </Step>
    </Stepper>
  );
}

export default Index;
