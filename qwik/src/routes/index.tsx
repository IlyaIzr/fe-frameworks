import { component$ } from "@builder.io/qwik";
import { App } from "~/components/app/app";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <App />;
});

export const head: DocumentHead = {
  title: "Checking Qwik perfomance",
  meta: [
    {
      name: "description",
      content: "Here me, @ilyaizr just checking the performance of Qwik framework",
    },
  ],
};
