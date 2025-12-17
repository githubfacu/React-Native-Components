import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard>
            <ThemedText 
              type='normal'
              nativeID='label-name'
            >Nombre</ThemedText>
            <ThemedTextInput 
              accessibilityLabelledBy='label-name'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedText type='normal' nativeID='email-name'>Correo electrónico</ThemedText>
            <ThemedTextInput 
              autoCorrect={false}
              accessibilityLabelledBy='email-name'
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedText type='normal' nativeID='phone-name'>Teléfono</ThemedText>
            <ThemedTextInput 
              accessibilityLabelledBy='phone-name'
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText type='normal'>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>

        {/* {isIOS && <View style={{ marginBottom: 100 }} />} */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
