import { useCreateStyle } from '@hooks';

const useStyle = () =>
  useCreateStyle(({ sizes, globalStyles }) => ({
    container: {
      ...globalStyles.flex1,
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 64,
      right: 32,
      width: 60,
      aspectRatio: 1,
      borderRadius: 32,
      ...globalStyles.flexCenter,
    },
    stick: {
      width: '50%',
      height: sizes.xxs,
      backgroundColor: 'white',
      borderRadius: sizes.xxxs,
      position: 'absolute',
    },
    verticalStick: {
      transform: [{ rotateZ: '90deg' }],
    },
    horizontalStick: {},
  }));

export default useStyle;
