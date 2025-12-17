import { TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className="py-4 px-2 text-black dark:text-white border-2 border-black/50 dark:border-white/50 focus:border-black focus:dark:border-white rounded"
      {...rest}
    />
  );
};
export default ThemedTextInput;