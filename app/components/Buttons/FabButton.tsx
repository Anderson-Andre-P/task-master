import { Pressable, StyleSheet } from 'react-native';
import { PrimaryTextButton } from '../Texts/PrimaryTextButton';
import { colors } from '../../theme';

export function FabButton({ text, ...otherProps }) {
  return (
    <Pressable style={styles.button} {...otherProps}>
      {<PrimaryTextButton text={text} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    borderRadius: 100,
    backgroundColor: colors.primary,

    zIndex: 1000,
  },
});
