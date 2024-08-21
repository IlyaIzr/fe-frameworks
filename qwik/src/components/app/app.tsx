import { component$, useSignal, useTask$, $, useVisibleTask$ } from "@builder.io/qwik";
import { MockDetail } from "../mock-detail/mock-detail";

export const App = component$(() => {
  const detailsAmount = useSignal(0);
  const lastUpdateTime = useSignal<string | null>(null);
  const userString = useSignal("");
  const intervalRef = useSignal<number | null>(null);
  const startTimeRef = useSignal<number | null>(null);

  const handleChange = $((e: Event) => {
    const target = e.target as HTMLInputElement;
    detailsAmount.value = parseInt(target.value, 10) || 0;
  });

  const onStringInput = $((e: Event) => {
    const target = e.target as HTMLInputElement;
    userString.value = target.value;
  });

  const startIncrement = $(() => {
    const interval = setInterval(() => {
      detailsAmount.value++;
    }, 1000) as unknown as number;
    intervalRef.value = interval;
  });

  const stopIncrement = $(() => {
    if (intervalRef.value) clearInterval(intervalRef.value);
  });

  useTask$(({ track }) => {
    track(() => detailsAmount.value);
    track(() => userString.value);
    startTimeRef.value = performance.now();
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => detailsAmount.value);
    track(() => userString.value);
    console.log("%c⧭", "color: #733d00", lastUpdateTime.value);
    if (startTimeRef.value && performance.now() - startTimeRef.value >= 0)
      lastUpdateTime.value = `${(performance.now() - startTimeRef.value).toFixed(0)}ms`;
  });

  return (
    <div>
      <div class="input">
        <label for="input">
          Details Amount:
          <input type="number" id="input" value={detailsAmount.value} onInput$={handleChange} />
        </label>
        <span>Last update: {lastUpdateTime.value || "n/a"}</span>
        <br />

        <label for="stringInput">
          Interactive input:
          <input type="text" id="stringInput" value={userString.value} onInput$={onStringInput} />
          <span>Result: {userString.value}</span>
        </label>
        <br />
        <button type="button" onClick$={startIncrement}>
          Start auto increment
        </button>
        <button type="button" onClick$={stopIncrement}>
          Stop auto increment
        </button>
      </div>

      <div class="details">
        {Array.from({ length: detailsAmount.value }).map((_, index) => (
          <MockDetail key={index} index={index} />
        ))}
      </div>
    </div>
  );
});
