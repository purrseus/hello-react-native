import { LayoutAnimatedItem } from '@components';
import { generateRandomColor } from '@utilities';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const initialData = new Array(10).fill(0).map(() => generateRandomColor());

const useContainer = () => {
  const [data, setData] = useState<string[]>(initialData);
  const hasRenderEffect = useRef(true);

  useEffect(() => {
    hasRenderEffect.current && (hasRenderEffect.current = false);
  }, []);

  const renderItem = useCallback<ListRenderItem<string>>(
    ({ item, index }) => {
      const enteringEffect = hasRenderEffect.current
        ? SlideInRight.delay(index * 100)
        : SlideInRight;

      const removeItem = () =>
        setData((prevState) =>
          prevState.filter((prevItem) => prevItem !== item),
        );

      return (
        <LayoutAnimatedItem
          content={item}
          onPress={removeItem}
          entering={enteringEffect}
          exiting={SlideOutLeft}
          style={{ backgroundColor: item }}
        />
      );
    },
    [hasRenderEffect.current],
  );

  const addItem = useCallback(() => {
    setData((prevState) => [...prevState, generateRandomColor()]);
  }, []);

  const keyExtractor = (item: string) => item;

  return { renderItem, data, addItem, keyExtractor };
};

export default useContainer;
