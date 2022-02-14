import { useCreateStyle } from '@hooks';

const useStyle = () =>
  useCreateStyle(({ globalStyles, sizes }) => ({
    container: {
      ...globalStyles.flex1,
    },
    list: {
      paddingVertical: sizes.s,
    },
  }));

export default useStyle;
