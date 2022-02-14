import { useCreateStyle } from '@hooks';

const useStyle = () =>
  useCreateStyle(({ sizes, colors }) => ({
    container: {
      marginVertical: sizes.s,
      paddingHorizontal: sizes.m,
      paddingVertical: sizes.l,
      borderRadius: sizes.l,
      backgroundColor: colors.grayDE,
      marginHorizontal: sizes.l,
    },
    content: {
      fontSize: sizes.l,
      fontWeight: 'bold',
    },
  }));

export default useStyle;
