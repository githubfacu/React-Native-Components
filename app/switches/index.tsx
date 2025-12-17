import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setState] = useState({
    enableTransitions: true,
    enableRotation: true,
    enableFilterColor: true,
  })
  return (
    <ThemedView margin className='mt-2 gap-2'>
      <ThemedCard>
        <ThemedSwitch 
          text='Activar tansiciones'
          onValueChange={(value) => setState({...state, enableTransitions : value})}
          value={ state.enableTransitions }
        />
      </ThemedCard>
      <ThemedCard>
        <ThemedSwitch 
          text='Activar rotación'
          onValueChange={(value) => setState({...state, enableRotation : value})}
          value={ state.enableRotation }
        />
      </ThemedCard>
      <ThemedCard>
        <ThemedSwitch 
          text='Activar filtro de color'
          onValueChange={(value) => setState({...state, enableFilterColor : value})}
          value={ state.enableFilterColor }
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
