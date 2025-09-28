import { IteniumUi } from '@itenium/ui';
import { Button } from '@itenium/ui';

export default function Index() {
  return (
    <>
      <div className="text-3xl font-bold underline">
        Yupla
        <Button variant="default">Click me</Button>
      </div>
      <IteniumUi />
    </>
  );
}
