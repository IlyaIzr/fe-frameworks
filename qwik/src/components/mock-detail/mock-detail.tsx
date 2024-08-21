import { component$, useSignal, $ } from '@builder.io/qwik';
import { getRandomColor, getRandomString } from './helper';

interface MockDetailProps {
  index: number;
}

export const MockDetail = component$<MockDetailProps>(({ index }) => {
  const isVisible = useSignal(true);
  const clicked = useSignal(0);
  const randomString = useSignal(getRandomString(5));
  const TagName = Math.random() > 0.5 ? 'div' : 'span';
  const backgroundColor = useSignal(getRandomColor());
  const renderChild = useSignal(Math.random() < 0.2);

  const handleSingleClick = $(() => {
    clicked.value++;
  });

  const handleDoubleClick = $(() => {
    isVisible.value = false;
  });
  
  function getTitle() {
    return `${randomString.value}. Index: ${index}. Clicked ${clicked.value}`
  }

  return isVisible.value ? (
    <TagName
      title={getTitle()}
      style={{ backgroundColor: backgroundColor.value }}
      class="detail"
      onClick$={handleSingleClick}
      onDblClick$={handleDoubleClick}
    >
      {renderChild.value && <div>{getTitle()}</div>}
    </TagName>
  ) : null;
});
